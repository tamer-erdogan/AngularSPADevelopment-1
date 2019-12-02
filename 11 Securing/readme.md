# Security

## Configure SSL in Angular

- Execute `bash generate.sh` `create-certs\` in Git Bash to create certs.
- Copy `server.crt`and `server.key` to newly created `ssl` folder of Angular project.`
- Register in `angular.json`

```typescript
"serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "options": {
        "browserTarget": "HelloSSL:build",
        "ssl": true,
        "sslKey": "/ssl/server.key",
        "sslCert": "/ssl/server.crt"
    },
```

Get Chrome to trust self signed localhost:

```
chrome://flags/#allow-insecure-localhost
```

## Auth Bascis

[JSON Web Tokens - Jwt](https://jwt.io/)

[OpenID Connect](https://connect2id.com/learn/openid-connect)

## Free Could Trials:

### Firebase

[Firebase](https://firebase.google.com/)

Install Tools:

```
npm install -g firebase-tools
```

Login:

```
firebase login
```

Init Project & Deploy:

```
firebase init
firebase deploy
```

### Azure

[Azure Trial](https://azure.microsoft.com/en-us/free/)

[Azure Passes](https://www.microsoftazurepass.com/)

## .NET Core Auth

[.NET Core Identity](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-2.2&tabs=visual-studio)

[.NET Core Authentication Snippets](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/social/microsoft-logins?view=aspnetcore-2.2)
