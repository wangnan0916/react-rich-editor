import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useNodeContext } from "@/editor/extensions/react-node/render/context";
import useNodeState from "@/editor/hooks/useNodeState";
import jsonCopy from "@/utils/jsonCopy";
import { Minus, Plus } from "lucide-react";
import type { Component } from "..";
import { INITIAL_INLINE_STATE, type InlineState } from "./store";

function Content() {
	const { uuid } = useNodeContext();
	const [{ count }, setState] = useNodeState<InlineState>();
	return (
		<Popover>
			<PopoverTrigger asChild>
				<span>Inline Component {count}</span>
			</PopoverTrigger>
			<PopoverContent>
				<p>{uuid}</p>
				<Button onClick={() => setState({ count: count + 1 })}>
					<Plus />
				</Button>
				<Button onClick={() => setState({ count: count - 1 })}>
					<Minus />
				</Button>
			</PopoverContent>
		</Popover>
	);
}

const Inline: Component = {
	Content,
	initialState: () => jsonCopy(INITIAL_INLINE_STATE),
};

export default Inline;
