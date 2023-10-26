const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//Use o body-parser para processar dados JSON nas solicitações POST e PUT
app.use(bodyParser.json());

