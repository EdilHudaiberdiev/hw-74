import {Router} from 'express';
import * as fs from "fs";

const messageRouter = Router();
const path = './messages';

messageRouter.post('/', async (req, res) => {
    let date = new Date().toISOString();

    let newMessage = {
        message: req.body.message,
        date,
    };

    fs.writeFileSync(`${path}/${date}.txt`, JSON.stringify(newMessage, null, 2));
    res.send(newMessage);
});

messageRouter.get('/', async (req, res) => {
    let arrayOfMessage: {date: string, message: string}[] = [];
    const files = fs.readdirSync(path);

});
export default messageRouter