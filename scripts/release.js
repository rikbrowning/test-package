const version = process.argv[2];

const shell = require('shelljs');

shell.exec('git checkout main');
shell.exec('git fetch');
shell.exec(`npm version ${version} -m "release %s"`);
shell.exec(`git push`);
shell.exec(`git push origin v${version}`);
