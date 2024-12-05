import NodeToolbar from "@/components/node-toolbar";
import { Button } from "@/components/ui/button";
import useNodeState from "@/editor/hooks/useNodeState";
import jsonCopy from "@/utils/jsonCopy";
import { Minus, Plus } from "lucide-react";
import type { Component } from "..";
import { type BlockState, INITIAL_BLOCK_STATE } from "./store";

function Content() {
	const [{ count }, setState] = useNodeState<BlockState>();
	return (
		<div>
			<div>Block</div>
			<div>count = {count}</div>
			<Button onClick={() => setState({ count: count + 1 })}>+ 1</Button>
		</div>
	);
}

function Toolbar() {
	const [{ count }, setState] = useNodeState<BlockState>();
	return (
		<NodeToolbar>
			块：
			<Button
				size="icon"
				variant="ghost"
				onClick={() => setState({ count: count + 1 })}
			>
				<Plus />
			</Button>
			<Button
				size="icon"
				variant="ghost"
				onClick={() => setState({ count: count - 1 })}
			>
				<Minus />
			</Button>
		</NodeToolbar>
	);
}

const Block: Component<BlockState> = {
	Content,
	Toolbar,
	initialState: () => jsonCopy(INITIAL_BLOCK_STATE),
};

export default Block;
