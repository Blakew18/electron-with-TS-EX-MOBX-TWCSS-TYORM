//NPM Imports
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

//Internal Imports
import { User } from "./entity/user.entity";
import { lifepointDataSource } from "./app-data-source";


const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

lifepointDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })


app.get("/users", async function (req: Request, res: Response) {
    const users = await lifepointDataSource.getRepository(User).find()
    res.json(users)
})
app.post("/users", async function (req: Request, res: Response) {
    try{
    const user = await lifepointDataSource.getRepository(User).create(req.body)
    const results = await lifepointDataSource.getRepository(User).save(user)
    return res.send(results)
    } catch(err){
        console.log("ERROR", err)
    }
})


export const startExpress = () => {
    const port = process.env.expressPort;
    app.listen(port);
    console.log('App is listening on port ' + port);

}

