import type { PropsWithChildren } from "react";
import "./index.css";

function NodeToolbar(props: PropsWithChildren) {
	return <div className="node-toolbar">{props.children}</div>;
}

NodeToolbar.displayName = "NodeToolbar";

export default NodeToolbar;
