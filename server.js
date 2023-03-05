const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 5500;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'vitter'
});

connection.connect(function (error) {
    if (error) {
        console.error('Error connecting to database:', error);
        return;
    }
    console.log('Connected to database.');
});

app.use(express.urlencoded({ extended: true }));
app.post('/contacts', function (request, response) {
    const name = request.body.fname;
    const email = request.body.lname;
    const message = request.body.regno;
    const hobbies = hob;
    console.log(name);
    console.log(email);
    console.log(message);
    console.log(hobbies);

    connection.query('INSERT INTO students_in (regno, f_name,l_name,hobbies) VALUES (?, ?, ?, ?)',
        [name, email, message, hobbies],
        function (error, result) {
            if (error) {
                console.error('Error adding contact:', error);
                response.sendStatus(500);
                return;
            }
            response.sendStatus(200);
        });
});

app.use(express.static('public'));

app.listen(port, function () {
    console.log('Server listening on port', port);
});
