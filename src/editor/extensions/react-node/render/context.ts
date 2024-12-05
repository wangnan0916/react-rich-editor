import type { ComponentType } from "@/editor/components";
import type { Editor } from "@tiptap/core";
import { createContext, useContext } from "react";

interface NodeContext<T = unknown> {
	type: ComponentType;
	uuid: string;
	editor: Editor;
	isActive: boolean;
}

const NodeContext = createContext<NodeContext | null>(null);

export function useNodeContext() {
	return useContext(NodeContext) as NodeContext;
}

export default NodeContext;
