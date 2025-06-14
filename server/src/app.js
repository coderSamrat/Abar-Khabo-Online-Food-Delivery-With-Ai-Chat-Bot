import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
      origin: process.env.CORS_ORIGIN || '*', 
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma',
      ],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
      res.send("API is running...");
});

export { app };
