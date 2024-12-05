/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
	readonly ENV_API: string;
	readonly ENV_APP_NAME: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
