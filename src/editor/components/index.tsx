import type React from "react";
import Block from "./Block";
import Inline from "./Inline";

export interface Component<T = unknown> {
	Content: React.FC;
	Toolbar?: React.FC;
	initialState?: () => T;
}

const Components = {
	Block,
	Inline,
} as const;

export type ComponentType = keyof typeof Components;

export const COMPONENT_TYPE = (
	Object.keys(Components) as ComponentType[]
).reduce(
	(obj, key: ComponentType) => {
		obj[key] = key;
		return obj;
	},
	{} as Record<ComponentType, ComponentType>,
);

export default Components;
