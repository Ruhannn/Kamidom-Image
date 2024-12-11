import express, { Request, Response } from 'npm:express'
import { imageIDs } from "./image.ts";
import cors from "npm:cors"
const app = express()
app.use(cors())
app.use(express.static('img'))

app.get('/', (_req: Request, res: Response) => {
  res.send("i love ayaka >///<")
})

app.get('/image', (_req: Request, res: Response) => {
  res.redirect(`https://ucarecdn.com/${imageIDs[Math.floor(Math.random() * imageIDs.length)]}/-/format/auto/-/quality/smart/`);
})

app.listen(3000, () => {
  console.log('love ayaka at 3000...')
})