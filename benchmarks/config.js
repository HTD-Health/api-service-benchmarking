const url = 'http://localhost:3000';

const basic = {
    connections: 1,                 //The number of concurrent connections, default: 10
    pipelining: 20,                 //The number of pipelined requests for each connection, default 1
    duration: 5                     //The number of seconds to run the single benchmark, default 10
};
const multipleConnectionsAndPipelining = {
    connections: 100,
    pipelining: 20,
    duration: 5
};
const multipleConnections = {
    connections: 100,
    pipelining: 1,
    duration: 5
};

module.exports = {
    url,
    basic,
    multipleConnectionsAndPipelining,
    multipleConnections
};

