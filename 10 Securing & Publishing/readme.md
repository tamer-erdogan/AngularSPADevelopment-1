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

# Publishing

## Firebase

Deploy to Firebase

```
npm i -g firebase-tools
firebase login
firebase init
firebase deploy
```

## Docker

### Install Docker on Windows 10

Download & Install from: `https://hub.docker.com/editions/community/docker-ce-desktop-windows`

---

## Docker Basic Commands

---

Download an Image

`docker pull microsoft/mssql-server-linux:latest`

### Base Switches & Things to know

Detached: `-d`

Cleanup: `--rm`

Map Ports `LocalPort:DockerPort` : `--p 8080:5000`

Mount Containers to allow Network Communication: `--link sqllinux:sqllinux`

Prefexing prod keeps Intellisense in file and allows you to have more than one Dockerfile. Example:

`Dockerfile` or `anguarui.dockerfile`

---

## Containerize a 3-Tier Application

---

![App](_images/app.png)

### Run SQL for Linux in Container

---

`docker run -d --name sqllinux -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=TiTp4SQL@dmin' microsoft/mssql-server-linux:latest`

Show running containers: `docker ps -a`

---

### Containerize .NET Core Web Api - Dockerfile

Execute in `..\13 Publishing\VouchersAPI\VouchersAPI\`

---

Specify Dockerfile for Build: -f ... Dockerfile | prod.dockerfile

Adjust Connection String:

`"DockerConnection": "Data Source=sqllinux;Initial Catalog=VoucherDockerDB;;User ID=sa;Password=TiTp4SQL@dmin"`

```
docker build --rm -f Dockerfile -t vouchersapi:latest .
docker run -d --rm -p 8080:8080 --link sqllinux:sqllinux vouchersapi:latest
```

---

### Containerize Angular Frontend

---

[NGINX](https://www.nginx.com/) is a commonly used Web Server to serve static Apps like Angular

Execute in `..\13 Publishing\VouchersUI\`

#### Build & check NGINX - app.nginx.dockerfile

Look at `/config/nginx.conf`

Execute

```
docker build -t nginxtest -f app.nginx.dockerfile .
docker run -d -p 8080:80/tcp nginxtest
```

Check `http://localhost:8080` for result

---

#### Build & run a simple Angular Docker Container - app.simple.angularui.dockerfile

---

`docker build --rm -t voucherssimple -f app.simple.angularui.dockerfile .`

`docker run -it -p 8080:80 voucherssimple`

Inspect running container. Are the files in the right folder?

---

#### Run Angular agains NGINX in watch mode - app.dev.dockerfile

---

On Windows Host the mountend folder needs to be shared on Windows and "Shared Devices" needs to be enabled in Docker Desktop

![abc](_images/windows-share.png)

Build App & keep "dist"-folder when building:

`ng build --watch --delete-output-path false`

Build the dev container:

`docker build --rm -t vouchersdev -f app.dev.dockerfile .`

Run & Map local `dist/vouchersui` folder as `html` to nginx:

Use on Windows:

`docker run -p 8080:80 -v ${PWD}/dist/vouchersui:/usr/share/nginx/html vouchersdev`

Use on Linux / Mac Host

`docker run -p 8080:80 -v $(pwd)/dist/vouchersui:/usr/share/nginx/html vouchersdev`

Be aware that `nginx.conf` contains a route that redirects Server Side `404 errors` to Angular's `index.html` for Angular Routing to detect the route.

```
location / {
    try_files $uri $uri/ /index.html =404;
}
```

---

#### Create a Production Build - app.prod.dockerfile

---

Build vouchersui image:

`docker build --rm -f "app.prod.dockerfile" -t vouchersui .`

Run vouchersui:

`docker run -p 8080:80 vouchersui`

---

## Using Docker Compose

[Docker Compose Cheatsheet](https://devhints.io/docker-compose)

### 3-Tier Farm - docker-compose.yml

```
version: "2.1"

services:
  vouchersui:
    build:
      context: .
      dockerfile: app.prod.dockerfile
    ports:
      - 8085:80
    networks:
      - vouchers-network
    depends_on:
      - vouchersapi
  vouchersapi:
    image:
    ports:
      - 8080:5000
    networks: vouchersapi
      - vouchers-network
    depends_on:
      - sqllinux
  sqllinux:
    image: microsoft/mssql-server-linux
    ports:
      - 1433:1433
    environment:
      ACCEPT_EULA: "Y"
      SA_PASSWORD: "TiTp4SQL@dmin"
    networks:
      - vouchers-network
networks:
  vouchers-network:
    driver: bridge
```

Build your Network:

`docker-compose build`

Run Network

`docker-compose up`
