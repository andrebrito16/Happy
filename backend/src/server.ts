/* 
Rota = recurso
Recurso = usuário

Métodos HTTP: GET, POST, PUT, DELETE
GET = Buscar uma informação. Ex: lista, uma coisa;
POST = criando uma informação nova;
PUT = modificando uma informação;
DELETE = deletando  uma informação;

Parâmetros:

Query Params: parâmetros opcionais Ex: users?search=andre;
Route Params: identificar um recurso. Ex: users/1;
Body: Enviar dados que não caibam nos outros parâmetros. Geralmente formulários.


O navegador, por padrão, faz apenas requisições do método GET.

ORM: Object Relational Mapping (estudar isso mais a fundo).
*/

import express from 'express';
import 'express-async-errors'
import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler'
import cors from 'cors'
import path from 'path'

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);



app.listen(3333);
