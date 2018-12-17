# api-service-benchmarking


## Run benchmarks
 ### Start a server
 `cd nest-proj`

 `npm start`

 or

 `cd hapi-proj`

 `node index.js`

 ### Execute benchmarks
 `cd benchamrks`

 `node benchmarks.js`


 ## Benchmarks configuraion ( in benchmarks/config.js ):

 **connections** - the number of concurrent connections, default: 10

 **pipelining** - the number of pipelined requests for each connection, default: 1

 **duration**- the number of seconds to run the single benchmark, default: 10

 ```
 basic = {
     connections: 1,
     pipelining: 20,
     duration: 5
 }
 multipleConnectionsAndPipelining = {
     connections: 100,
     pipelining: 20,
     duration: 5
 }
 multipleConnections = {
     connections: 100,
     pipelining: 1,
     duration: 5
 }
 ```

 ## Results

### hapi.js

| Kind of endpoint | Basic | Multiple connections with pipelining|Multiple Connections without pipelining |
| --- | --- | --- | --- |
| Simple JSON |21211.2 | 21867.2 |14004|
| Simple database call | 7284.4 | 6550 |6938.8|
| Complex database call | 6402.8 | 5398.6 |5188.4|

### nest.js

| Kind of endpoint | Basic | Multiple connections with pipelining|Multiple connections without pipelining|
| --- | --- | --- | --- |
| Simple JSON | 14661.6 | 15719.2 |11141.6|
| Simple database call | 5086.61 | 4815.61 |4960.2|
| Complex database call | 3533.4 | 3149 |2781.4
|

