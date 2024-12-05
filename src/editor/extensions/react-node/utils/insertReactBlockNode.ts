import type { ComponentType } from "@/editor/components";
import { initNodeState } from "@/editor/store";
import { type Editor, isNodeSelection } from "@tiptap/core";
import { v4 } from "uuid";
import { REACT_BLOCK_NODE_NAME } from "..";

function insertReactBlockComponentNode(editor: Editor, type: ComponentType) {
	const uuid = v4();
	const node = {
		type: REACT_BLOCK_NODE_NAME,
		attrs: { type, uuid },
	};

	initNodeState(type, uuid);

	const { selection } = editor.state;
	if (isNodeSelection(selection)) {
		editor.chain().insertContentAt(selection.to, node).run();
		return;
	}
	return editor.chain().insertContent(node).run();
}

export default insertReactBlockComponentNode;
