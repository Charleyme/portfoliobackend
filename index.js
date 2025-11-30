import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import mailRoutes from './routes/mailRoutes.js';
import adminRoutes from "./routes/adminRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import connectDB from  "./config/db.js";

dotenv.config();

const app = express();

//middlewares//
app.use(cors());
app.use(express.json());

//routes
app.use('/api/mail', mailRoutes);

//admin routes
app.use("/api/admin", adminRoutes);

app.use("/api/blog", blogRoutes);

//database//
connectDB();
const PORT = process.env.PORT || 5000;


app.get("/",(req, res) =>{
  res.send("portfolio blog Api is running");

})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
export default app;