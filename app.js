import path from "path";
import express from "express";
import bodyParser from 'body-parser';
import expressHbs from 'express-handlebars';

const app = express();

app.engine('handlebars', expressHbs.engine({layoutsDir: 'view/layouts', defaultLayout:'main-layout'}));
app.set('view engine', 'handlebars');
app.set('views', 'views');

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