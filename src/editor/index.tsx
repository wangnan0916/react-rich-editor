import EditorToolbar from "@/components/editor-toolbar";
import { EditorContent, EditorContext, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ReactBlockNode, ReactInlineNode } from "./extensions/react-node";
import "./index.css";

const extensions = [StarterKit, ReactBlockNode, ReactInlineNode];

const Editor = () => {
	const editor = useEditor({
		extensions,
	});

	return (
		<EditorContext.Provider value={{ editor }}>
			<div className="editor-container">
				<EditorToolbar />
				<EditorContent className="editor" editor={editor} />
			</div>
		</EditorContext.Provider>
	);
};

export default Editor;
