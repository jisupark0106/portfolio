# portfolio
Jisu's portfolio

### frontend part
html, css, javascript

### server part
node.js


### node.js 서버 구축

`npm init`
`npm install`

`npm install express`
`npm install ejs`

express 기본 설정

```javascript
const express = require("express");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index.ejs");
});
app.listen(3000);
```

img, css asset -> public 폴더 이동

```javascript
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
```
 
