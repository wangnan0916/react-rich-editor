import type { ComponentType } from "@/editor/components";
import { initNodeState } from "@/editor/store";
import type { Editor } from "@tiptap/core";
import { v4 } from "uuid";
import { REACT_INLINE_NODE_NAME } from "..";

function insertReactInlineComponentNode(editor: Editor, type: ComponentType) {
	const uuid = v4();
	const node = {
		type: REACT_INLINE_NODE_NAME,
		attrs: { type, uuid },
	};
	initNodeState(type, uuid);
	return editor.chain().insertContent(node).run();
}

export default insertReactInlineComponentNode;
