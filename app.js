import path from "path";
import express from "express";
import bodyParser from 'body-parser';

const app = express();

import adminData from './routes/admin.js';

import shopRoutes from './routes/shop.js';

const __dirname = path.resolve();

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminData.routes);
app.use('/admin', shopRoutes);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views','404.html'));
});

app.listen(3000);