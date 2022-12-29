const Koa =require('koa')
const app =new Koa();

app.use(async ctx => {
    ctx.body = "Hello !! Welcome to Backend Leo Page ";
});

app.listen(3000);

// connect to the MySQL server
connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  let createTodos = `create table if not exists todos(
                          id int primary key auto_increment,
                          title varchar(255)not null,
                          completed tinyint(1) not null default 0
                      )`;

  connection.query(createTodos, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });

  connection.end(function(err) {
    if (err) {
      return console.log(err.message);
    }
  });
});
