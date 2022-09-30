import path from "path";
import express from "express";
import bodyParser from 'body-parser';

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views')

import adminData from './routes/admin.js';

import shopRoutes from './routes/shop.js';

const __dirname = path.resolve();

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminData.router);
app.use('/admin', shopRoutes);

app.use((req, res, next)=>{
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);