const fs = require('fs');
const path = require('path');

module.exports = {
  dependencies: [
    'react@^16.2.0',
    'react-dom@^16.2.0',
    '@types/react@^16.0.31',
    '@types/react-dom@^16.0.3',
    "@types/electron-devtools-installer@^2.0.2",
    'electron-devtools-installer@^2.2.3',
    'react-hot-loader@^3.1.3',
    '@types/react-hot-loader@^3.0.5',
    '@types/webpack-env@^1.13.3',
    'redux@^3.7.2',
    'react-redux@^5.0.6',
    '@types/react-redux@^5.0.14',
    'react-router-dom@^4.2.2',
    '@types/react-router-dom@^4.2.3',
    'react-router-redux@next',
    '@types/react-router-redux@^5.0.10',
    'history@^4.7.2',
    '@types/history@^4.6.2',
    'tslib@^1.8.1',
    'devtron@^1.4.0'
  ],
  devDependencies: [
    'tslint@^5.8.0',
    'typescript@~2.6.2',
    'tslint-config-standard@^7.0.0'
  ],
  templateDirectory: path.resolve(__dirname, './tmpl'),
  postCopy: (initDir, ora, lintStyle) => {
    const oldIndex = path.resolve(initDir, 'src', 'index.js');
    if (fs.existsSync(oldIndex)) fs.unlinkSync(oldIndex);
    const packageJSON = require(path.resolve(initDir, 'package.json'));
    packageJSON.main = 'src/main.ts';
    packageJSON.scripts.lint = 'tslint --project tsconfig.json --type-check --force';
    fs.writeFileSync(path.resolve(initDir, 'package.json'), JSON.stringify(packageJSON, null, 2));
  },
};
