import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';

const app = express();

app.use('^/$', (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
        if(err) {
            console.error(err);
            return res.status(500).send('some error happened');
        }
        const content = ReactDOMServer.renderToString(<App />);    
        console.log("HTML Content parsed =====>>>>>", content);
        return res.send(data.replace('<div id="root"></div>', `<div id="root">${content}</div>`));
    });
});

app.use(express.static(path.join(__dirname, '..', 'build')));

app.listen(8080, ()=>{
    console.log(" App is started on 8080");
});
