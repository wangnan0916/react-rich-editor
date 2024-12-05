import { create } from "zustand";
import Components, { type ComponentType } from "../components";

interface EditorStore {
	nodeState: Record<string, unknown>;
}

const editorStore = create<EditorStore>(() => ({
	nodeState: {},
}));

export const getEditorStore = editorStore.getState;
export const setEditorStore = editorStore.setState;

export function initNodeState(type: ComponentType, uuid: string) {
	const { nodeState } = getEditorStore();
	const { initialState } = Components[type];
	if (!initialState) return;
	setEditorStore({
		nodeState: {
			...nodeState,
			[uuid]: initialState(),
		},
	});
}

const useEditorStore = editorStore;
export default useEditorStore;
