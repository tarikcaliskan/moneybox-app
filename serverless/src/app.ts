import bodyParser from 'body-parser';
import express from 'express';
import { login } from './functions/login';
import { register } from './functions/register';
import { webhook } from './functions/auth-webhook';

const app = express();

app.use(bodyParser.json());

app.post('/login', login);
app.post('/register', register);
app.get('/webhook', webhook);

app.listen(process.env.PORT || 6000, () => console.log(`App listening on port ${process.env.PORT || 6000}`));
