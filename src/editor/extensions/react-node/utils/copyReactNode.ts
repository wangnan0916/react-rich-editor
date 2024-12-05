import { getEditorStore, setEditorStore } from "@/editor/store";
import jsonCopy from "@/utils/jsonCopy";
import type { Node } from "@tiptap/pm/model";
import { v4 } from "uuid";

export function copyNode(node: Node): Node {
	return node.type.create(
		{
			...node.attrs,
			uuid: v4(),
		},
		node.content,
		node.marks,
	);
}

export function copyState(fromUUID: string, toUUID: string) {
	const { nodeState } = getEditorStore();
	if (!nodeState[fromUUID]) {
		return;
	}
	setEditorStore({
		nodeState: {
			...nodeState,
			[toUUID]: jsonCopy(nodeState[fromUUID]),
		},
	});
}

function copyReactNode(node: Node) {
	const copiedNode = copyNode(node);
	copyState(node.attrs.uuid, copiedNode.attrs.uuid);
	return copiedNode;
}

export default copyReactNode;
