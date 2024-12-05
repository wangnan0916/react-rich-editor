import CustomCopyPlugin from "@/editor/plugins/custom-copy";
import { Node, type NodeConfig, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { v4 } from "uuid";
import NodeRender from "../render";
import copyReactNode from "./copyReactNode";

function createReactNode(config: NodeConfig) {
	const node = Node.create({
		atom: true,
		addAttributes() {
			return {
				uuid: {
					default: v4(),
					renderHTML: (attributes) => {
						return {
							uuid: attributes.uuid,
						};
					},
					parseHTML: (element) => {
						return element.getAttribute("uuid") ?? v4();
					},
				},
				type: {
					default: "",
					isRequired: true,
					renderHTML: (attributes) => {
						return {
							type: attributes.type,
						};
					},
					parseHTML: (element) => {
						return element.getAttribute("type") ?? "";
					},
				},
			};
		},

		parseHTML() {
			return [
				{
					tag: config.name,
				},
			];
		},

		renderHTML({ HTMLAttributes }) {
			return [config.name, mergeAttributes(HTMLAttributes)];
		},

		addNodeView() {
			return ReactNodeViewRenderer(NodeRender);
		},

		addProseMirrorPlugins() {
			return [CustomCopyPlugin(this.name, copyReactNode)];
		},

		...config,
	});
	return node;
}

export default createReactNode;
