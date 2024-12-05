import { useNodeContext } from "../extensions/react-node/render/context";
import useEditorStore from "../store";

function useNodeState<T>() {
	const { uuid } = useNodeContext();
	const nodeState = useEditorStore((state) => state.nodeState);
	return [
		nodeState[uuid] as T,
		(state: Partial<T>) => {
			useEditorStore.setState({
				nodeState: {
					...nodeState,
					[uuid]: state,
				},
			});
		},
	] as const;
}

export default useNodeState;
