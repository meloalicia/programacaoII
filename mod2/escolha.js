import { readFile } from "fs";
import { createServer } from "http";
import { parse } from "url";

createServer(
    function(req, res) {
        let q = parse(req.url, true);
        let fileName = "./mod2/" + q.pathname; // C:\Users\olive\Documents\workspace\programacaoII\mod2\inverno.html
        console.log(q);
        console.log(fileName);

        readFile(fileName, (err, data) => {
           console.log(err);
           if (err) {
            res.writeHead(404, {'Content-Type':'text/html'});
            return res.end("404 NOT FOUND");
           }

           res.writeHead(200, {'Content-Type': 'text/html'});
           res.writeHead(data);
           return res.end();
        })
    }
).listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

