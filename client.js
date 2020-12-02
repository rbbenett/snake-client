const net = require('net');
const name = 'RBT'
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.0.139',
    port: 50542
  });
  
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    conn.write('Successfully connected to game server');
  });

  conn.on('connect', () => {
    conn.write(`NAME: ${name}`)
  })

};

module.exports = {connect};