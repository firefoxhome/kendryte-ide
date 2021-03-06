import { resolve } from 'path';
import { pipeCommandOut } from '../build-env/childprocess/complex';
import { installDependency } from '../build-env/childprocess/yarn';
import { VSCODE_ROOT } from '../build-env/misc/constants';
import { useThisStream } from '../build-env/misc/globalOutput';
import { whatIsThis } from '../build-env/misc/help';
import { runMain } from '../build-env/misc/myBuildSystem';
import { chdir } from '../build-env/misc/pathUtil';
import { usePretty } from '../build-env/misc/usePretty';

whatIsThis(__filename, 'compile .ts files in my-scripts folder, you should run this after every git pull.');

runMain(async () => {
	const output = usePretty();
	chdir(resolve(VSCODE_ROOT, 'my-scripts'));
	await installDependency(output);
	output.success('Yarn success.').pause();
	output.end();
	useThisStream(process.stderr);
	
	if (process.argv.includes('-w')) {
		await pipeCommandOut(process.stdout, 'tsc', '-p', '.', ...process.argv.slice(2)).catch(e => {
			if (e.__programError) {
				console.error('`tsc` reported this error: %s.\nBut it will ignore.', e.message);
			} else {
				throw e;
			}
		});
	}
});