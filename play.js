const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '<local host>',
    port: 50541
  });

  conn.on('error', err => console.log('you ded cuz you idled'));
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
  
}

console.log('Connecting ...');
connect();



