const { connect } = require("http2");

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = ('data', key => {
  if (key === '\u0003') {
  process.exit();
  } else if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  } else if (key === '1') {
    connection.write("Say: wasssssuuuuuuppppppp!!!!!!")
  } else if (key === '2') {
    connection.write("Say: I\'m a snake!!!!")
  } else if (key === '3') {
    connection.write('Say: Yippee!!!')
  }
});





module.exports = {setupInput};