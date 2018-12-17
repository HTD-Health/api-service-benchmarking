'use strict';

const autocannon = require('autocannon');
const {
    url,
    basic,
    multipleConnectionsAndPipelining,
    multipleConnections
} = require('./config');

function runBenchmark(props) {
    return new Promise(function (resolve, reject) {
        const autocannonInstance = autocannon(props, finishedBench);
        autocannonInstance.on('done', resolve)
    });
}

async function runAllBenchmarks() {
    //CLI: autocannon -c 1 -d 5 -p 20 http://localhost:3000/json
    console.log("*** Basic");
    await runBenchmark({
        ...basic, url: url + "/json"
    });

    console.log("**** Multiple connections and pipelining");
    await runBenchmark({
        ...multipleConnectionsAndPipelining, url: url + "/json"
    });

    console.log("***** Multiple connections");
    await runBenchmark({
        ...multipleConnections, url: url + "/json"
    });

    console.log("*** Basic");
    await runBenchmark({
        ...basic, url: url + "/simpledbcall"
    });

    console.log("**** Multiple connections and pipelining");
    await runBenchmark({
        ...multipleConnectionsAndPipelining, url: url + "/simpledbcall"
    });

    console.log("***** Multiple connections and pipelining");
    await runBenchmark({
        ...multipleConnections, url: url + "/simpledbcall"
    });

    console.log("*** Basic");
    await runBenchmark({
        ...basic, url: url + "/complexdbcall"
    });

    console.log("**** Multiple connections and pipelining");
    await runBenchmark({
        ...multipleConnectionsAndPipelining, url: url + "/complexdbcall"
    });

    console.log("***** Multiple connections and pipelining");
    await runBenchmark({
        ...multipleConnections, url: url + "/complexdbcall"
    });
}

function finishedBench(err, res) {
    console.log(`finished bench ${res.url}, connections: ${res.connections}, pipelining: ${res.pipelining}`);
    console.log(`error: ${err}`);
    console.log("results:", res.requests.average);
}

runAllBenchmarks().catch(e => console.log(e));


