import packageJson from 'vs/platform/node/package';

/** @deprecated */
export function IDECurrentPatchVersion() {
	return parseFloat(packageJson['patchVersion']);
}