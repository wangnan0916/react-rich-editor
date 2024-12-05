import createReactNode from "./utils/createReactNode";

export const REACT_BLOCK_NODE_NAME = "react-block-node";
export const ReactBlockNode = createReactNode({
	name: REACT_BLOCK_NODE_NAME,
	group: "block",
});

export const REACT_INLINE_NODE_NAME = "react-inline-node";
export const ReactInlineNode = createReactNode({
	name: REACT_INLINE_NODE_NAME,
	group: "inline",
	inline: true,
});
