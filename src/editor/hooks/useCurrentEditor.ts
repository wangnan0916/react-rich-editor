import {
	type Editor,
	useCurrentEditor as useTiptapCurrentEditor,
} from "@tiptap/react";

export function useCurrentEditor() {
	return useTiptapCurrentEditor() as { editor: Editor };
}
