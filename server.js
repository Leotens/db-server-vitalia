const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

server.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

server.options('*', cors());
server.use(middlewares);
server.use(router);

server.listen(PORT, '0.0.0.0', () => {
  console.log(`JSON Server running on port ${PORT}`);
});
