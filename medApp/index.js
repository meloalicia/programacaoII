import { pkg } from "body-parser";
import { express } from "express";

const app = express();
const  { json, urlencoded } = pkg;

app.use(json());
app.use(urlencoded({extended: true}));

app.listen(3000, () => {
    console.log("Listening to port 3000");
})

app.use("/", router);