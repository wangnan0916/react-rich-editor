import { Fragment, type Node, Slice } from "@tiptap/pm/model";
import { Plugin, PluginKey } from "@tiptap/pm/state";

const CustomCopyPlugin = (name: string, copy: (node: Node) => Node) => {
	const createSlice = (list: readonly Node[]) => {
		const res = [];
		for (const node of list) {
			if (node.type.name === name) {
				res.push(copy(node));
				continue;
			}
			if (node.content.content.length) {
				const newSlice = createSlice(node.content.content);
				const newNode = node.copy(Fragment.fromArray(newSlice));
				res.push(newNode);
				continue;
			}
			res.push(node);
		}
		return res;
	};

	return new Plugin({
		key: new PluginKey("CustomCopy"),
		props: {
			transformPasted: (slice) => {
				const newSlice = createSlice(slice.content.content);
				return new Slice(
					Fragment.fromArray(newSlice),
					slice.openStart,
					slice.openEnd,
				);
			},
		},
	});
};

export default CustomCopyPlugin;
