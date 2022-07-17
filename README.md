<div align="center">
  <img align="center" width="225" src="https://i.imgur.com/guuToyf.png">
</div>

<br>

<div align="center">

  [![npm version](https://badgen.net/npm/v/melon-runtime/)](https://www.npmjs.com/package/melon-runtime)
  [![npm downloads](https://badgen.net/npm/dm/melon-runtime)](https://www.npmjs.com/package/melon-runtime)
  
</div>

<hr>

**Melon** is a declarative modern .NET JavaScript runtime.

<hr>

- [Changelog](https://github.com/MelonRuntime/MelonRuntime/blob/main/CHANGELOG.md)

<hr>

### 🚀 **Declarative-first programming**

Create, manage and scale applications and tools easily without having to think about everything.

```ts
const { shift } = std;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let myValue = getRandomInt(1, 3);

shift(myValue)
  .option(1 || 2, () => console.log("Cool"))
  .option(3, (value) => console.log("Too much!"));
```

<hr>

### ⚡ **.NET based environment** 

Portable, fast and powerful applications with all the features offered by the .NET environment via functions or interop.

```ts
const system = xrequire("dotnet:System");
const consoleWriteLine = system.getType("Console").getMethod("WriteLine", 0);

consoleWriteLine.invoke(["Hello world from .NET!", null]);

//Output: Hello world from .NET!
```

<hr>

### 🧤 **Hands on development** 

Create a complete application in few lines with zero dependency.

⚡ **Melon**:

<details>

```ts
const app = http.app();

app.get("/", () => "Hello world");
app.run();

//App running in http://localhost:80
```

</details>

⛔ **Node.js**:

<details>

```js
const http = require("http");

const PORT = 80;

const server = http.createServer(async (req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end("Hello world");
    }
}

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});
```

</details>

⛔ **Deno**:

<details>

```ts
const listener = Deno.listen({ port: 80 });
console.log("http://localhost:80/");

for await (const conn of listener) {
  serve(conn);
}

async function serve(conn: Deno.Conn) {
  for await (const { respondWith } of Deno.serveHttp(conn)) {
    respondWith(new Response("Hello world"));
  }
}
```

</details>

<hr>


## Installation and usage:
> Tip: How to install ASP.NET 6 Runtime ([Windows](https://www.youtube.com/watch?v=AC5UWby16sg) | [Linux](https://www.youtube.com/watch?v=g0vuTh0Dao8))

- Install [Node](https://nodejs.org/en/) (Automatically generated projects require NPM to run)
- Install [ASP.NET 6.0 runtime](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) if you haven't already
- Install the `melon-runtime` package globally using the command: `npm i melon-runtime@1.7.0 -g -f` or select a version from the table below:

| Version | Type |
| ------- | ---- |
| [1.7.0](https://www.npmjs.com/package/melon-runtime/v/1.7.0) | **Last Stable** |

## Generating and executing a project

- Go to a directory using `terminal` or inside your IDE and execute the command: `npx melon new`, a basic node.js-based file structure will be created
- Run `npm install` to install the required packages and start working with **TypeScript**
- Run `npm run go` to initialize the project

> Tip: A bundle file containing all installed NPM packages and your project will be created in `/dist/main.js`

## Core Contributors 

| [Victória Rose](https://github.com/EternalQuasar0206) | [Gabriel Grubba](https://github.com/Grubba27) | [Vinicius Lanzarini](https://github.com/vilanz) |
| -------------- | -------------- | -------------- |
| <div align="center"><img src="https://avatars.githubusercontent.com/u/70824102?v=4" width="60"></div> | <div align="center"><img src="https://avatars.githubusercontent.com/u/70247653?v=4" width="60"></div> | <div align="center"><img src="https://avatars.githubusercontent.com/u/29522926?v=4" width="60"></div> |

## Last Sponsors 

| [Lucas Rufo](https://github.com/LucasRufo) |
| -------------- |
| <div align="center"><img src="https://avatars.githubusercontent.com/u/60830097?v=4" width="60"></div> |