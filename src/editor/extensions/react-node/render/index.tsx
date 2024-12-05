import Components, { type ComponentType } from "@/editor/components";
import useEditorStore from "@/editor/store";
import { type NodeViewRendererProps, NodeViewWrapper } from "@tiptap/react";
import clsx from "clsx";
import NodeContext from "./context";
import "./style.css";

interface NodeRenderProps extends NodeViewRendererProps {
	selected: boolean;
}

function NodeRender(props: NodeRenderProps) {
	const { node, editor, selected } = props;
	const { attrs } = node;
	const { isBlock, isInline } = node.type;
	const { uuid, type } = attrs;
	const isActive = selected;
	const Component = Components[type as ComponentType];
	const { Content, Toolbar } = Component;
	const context = { type, uuid, editor, isActive };
	useEditorStore((state) => state.nodeState[uuid]);

	return (
		<NodeViewWrapper
			className={clsx("react-component", {
				active: isActive,
				block: isBlock,
				inline: isInline,
			})}
		>
			<NodeContext.Provider value={context}>
				{Toolbar && <Toolbar />}
				<Content />
			</NodeContext.Provider>
		</NodeViewWrapper>
	);
}

export default NodeRender;
