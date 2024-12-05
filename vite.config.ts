import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths(), legacy(), svgr()],
	envPrefix: "ENV_",
	server: {
		port: 3000,
	},
});
