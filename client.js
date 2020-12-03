const net = require('net');
const {IP, PORT} = require('./constants');
const name = 'RBT'
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  conn.on('connect', (data) => {
    setTimeout(() => {
      conn.write(`Name: RBT`, data),  
        //setInterval(() => {
          //conn.write("Move: up", data)}, 50), 
          1000});
      });
      return conn;
  };
   



module.exports = {connect};