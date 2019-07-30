const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

//Initializing PORT
const PORT = process.env.PORT || 4200;

//Handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('index', {
      url: `http://localhost:${PORT}/users`
    });
});

// Body parser from express
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Adding routes from seperate files
//Users API routes
app.get('/', (req, res)=> res.sendFile('./redirect-files/goto.html'))
app.use('/users', require('./routes/api/users'));

//Starting server
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));