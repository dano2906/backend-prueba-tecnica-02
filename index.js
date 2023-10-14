import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import serverless from "serverless-http";
import {router as productRouter} from "./routes/product.routes.js"

const app = express();

app.set('PORT',2345);
app.use(json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api',productRouter)

export const handler = serverless(app);

// eslint-disable-next-line no-undef
app.listen(process.env.PORT || app.get('PORT'),()=>{
    console.log("Running...")
})
