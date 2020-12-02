const net = require('net');

const connect = (ip, port) => {
  const conn = net.createConnection({ 
    host: ip = '135.23.222.131',
    port: port = 50542
  });
  
  conn.setEncoding('utf8'); 

  conn.on('data', data => {
    console.log(`you ded cuz you idled`);
  });

  return conn;
};

module.export = { connect };