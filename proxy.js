const http = require("http");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({
    target: "http://192.168.0.1",
    changeOrigin: true
})

const server = http.createServer((req,res) => {
    proxy.web(req,res);
});

server.listen(80, () => console.log("Server running"));