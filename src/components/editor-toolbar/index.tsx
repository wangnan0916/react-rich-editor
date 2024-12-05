import { COMPONENT_TYPE } from "@/editor/components";
import insertReactBlockComponentNode from "@/editor/extensions/react-node/utils/insertReactBlockNode";
import insertReactInlineComponentNode from "@/editor/extensions/react-node/utils/insertReactInlineNode";
import { useCurrentEditor } from "@/editor/hooks/useCurrentEditor";
import { Blocks, SquareDashed } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "../ui/button";
import "./index.css";

function Row({ children }: { children: ReactNode }) {
	return <div className="row">{children}</div>;
}

function Group({ children }: { children: ReactNode }) {
	return <div className="group">{children}</div>;
}

function EditorToolbar() {
	const { editor } = useCurrentEditor();
	return (
		<div className="editor-toolbar">
			<Row>
				<Group>
					<Button
						variant="ghost"
						size="sm"
						onClick={() => {
							insertReactBlockComponentNode(editor, COMPONENT_TYPE.Block);
						}}
					>
						<Blocks className="toolbar-button-icon" />
						Block
					</Button>
					<Button
						variant="ghost"
						size="sm"
						onClick={() => {
							insertReactInlineComponentNode(editor, COMPONENT_TYPE.Inline);
						}}
					>
						<SquareDashed className="toolbar-button-icon" />
						Inline
					</Button>
				</Group>
			</Row>
		</div>
	);
}

EditorToolbar.displayName = "EditorToolbar";

export default EditorToolbar;
