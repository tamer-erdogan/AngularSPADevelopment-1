# Angular Basics

[Angular CLI Reference](https://angular.io/cli)

[Angular Augury](https://augury.rangle.io/)

Install Angular CLI

```
npm i -g @angular/cli
```

Run an Angular project on a custom port

```
ng serve --port 4300
```

## Debugging in VS Code

Install [Debugger for Chrome Ext](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

Edit `launch.json` in folder `.vscode` & make sure you execute `ng serve` bevor pressing F5 for debug

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "ng serve",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:4200/",
      "webRoot": "${workspaceFolder}"
    },
    {
      "name": "ng test",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:9876/debug.html",
      "webRoot": "${workspaceFolder}"
    },
    {
      "name": "ng e2e",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/protractor/bin/protractor",
      "protocol": "inspector",
      "args": ["${workspaceFolder}/protractor.conf.js"]
    }
  ]
}
```

## Update Angular

```typescript
ng update  @angular/core @angular/cli [--allow-dirty] [@angular/material ...]
```

# Node Basics

[Node.js](https://nodejs.org)

[Babel JS](https://babeljs.io/)

[WebPack](https://webpack.js.org/)
