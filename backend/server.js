import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';

const app = express();

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/m-clothing', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res)=> {
    res.send('Server is ready');
});

//middleware/error catcher
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`serve at http://localhost:${port}`);
});
