import express, { json } from "express";
import morgan from "morgan";
//importar la ruta de Person
import personRoutes from "./routes/Person"

//inicializacion de framework express
const app = express(); 

// middlewares
app.use(morgan("dev"));
app.use(json());

//rutas
app.use("/api/person", personRoutes);

export default app;