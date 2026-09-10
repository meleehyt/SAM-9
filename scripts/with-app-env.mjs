import { spawn } from 'node:child_process';
import process from 'node:process';
import path from 'node:path';

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('[with-app-env] Please provide a command to run.');
  process.exit(1);
}

const command = args[0];
const commandArgs = args.slice(1);

const binPath = path.join(process.cwd(), 'node_modules', '.bin');
const pathDelimiter = process.platform === 'win32' ? ';' : ':';

const env = {
  ...process.env,
  PATH: `${binPath}${pathDelimiter}${process.env.PATH || ''}`,
};

// استخدام shell على ويندوز فقط لتفادي EINVAL و ENOENT
const isWin = process.platform === 'win32';

const child = spawn(command, commandArgs, {
  stdio: 'inherit',
  env,
  shell: isWin,
});

child.on('error', (err) => {
  console.error(`[with-app-env] failed to run ${command}:`, err.message);
  process.exit(1);
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  } else {
    process.exit(code ?? 0);
  }
});