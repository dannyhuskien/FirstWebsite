const express = require('express');
const app = express();
app.set('view engine', 'pug');

app.listen(3000, function(){
  console.log('server is listening');
});

app.get('/hello', function(req, res){
  res.render('hello');
});


app.get('/hola', function(req, res){
  res.send('hola');
});

app.post('/dog', function(req, res){
  res.send('woof!')
});

app.get('/add/:x/:y', function(req, res){
  // const y = req.params.y *1;
  // const x = req.params.x *1;
  // ret = x+y
  // res.send({payload: x+y});
  const y = req.params.y *1;
  const x = req.params.x *1;
  ret = x+y
  res.render('sum', {x: x, y: y, sum: x + y});
});

app.get('/fact/:x', function(req, res){
  const x = req.params.x *1;
  result = factorial(x);
  res.render('factorial',{x: x, o: result});
});

app.get('/sum_square_evens/:x', function(req, res){
  const x  = req.params.x.split(',')
  const result = x.reduce((a, n) => n%2 ? a+0 : a+(n*n), 0);
  //res.send({payload: result});
  res.render('sum_square_even', {x: x, o: result});
});

function factorial(num)
{
    if (num <= 0) {
        return 1;
    }
    else {
        return (num * factorial(num - 1));
    }
}
