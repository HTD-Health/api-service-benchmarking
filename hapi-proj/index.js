'use strict';

const Hapi = require('hapi');
const pg = require('pg');


const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});
server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        console.log("a");
        return 'Hello, world!';
    }
});

const jsonToReturn = {a: "aa", b: "bb", c: "cc", amount: 100};

server.route({
    method: 'GET',
    path: '/{name}',
    handler: (request, h) => {
        return 'Hello, ' + encodeURIComponent(request.params.name) + jsonToReturn +'!';
    }
});

const connectionString = 'postgres://postgres:root@localhost:5432/database';
const client = new pg.Client(connectionString);
client.connect();

server.route({
    method: 'GET',
    path: '/simpledbcall',
    handler: (request, h) => {
        const query = client.query(
        'SELECT * from users');
        return query;
    }
});

server.route({
    method: 'GET',
    path: '/complexdbcall',
    handler: (request, h) => {
        const query = client.query(
            'SELECT pr.*, projects.* as project, programs.name as program_name, programs.description as program_desc FROM project_program as pr JOIN projects ON pr.project_id = projects.id JOIN programs ON pr.program_id = programs.id'
        );
        return query;
    }
});

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
