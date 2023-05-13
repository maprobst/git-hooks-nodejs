# git-hooks-nodejs
Demo for git hooks

Node.js Project with simple files to test commit-hooks

Used packages are from https://www.npmjs.com
* husky - https://www.npmjs.com/package/husky 
   husky will be used to create pre-commit file
* eslint - https://www.npmjs.com/package/eslint
   eslint will be used for linting source code before commiting 
   Installation with repo for checking: npm i -D eslint eslint-plugin-import eslint-config-airbnb-base
   Configurtion must be generated
* jest https://www.npmjs.com/package/jest
   jest will be used for executing test before commiting
* commitlint https://www.npmjs.com/package/@commitlint/cli
   for validation of the commit message

For installation see the referenced pages

In husky the pre-commit file looks like:
```
 #!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint && npm test
#npx lint-staged

npx husky install

npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```