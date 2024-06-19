const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'your_database_host',
  user: 'your_database_user',
  password: 'your_database_password',
  database: 'your_database_name'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    return console.error('error connecting: ' + err.stack);
  }
  console.log('connected as id ' + connection.threadId);
});

// Insert data into CUSTOMER table
const customerInserts = [
  { CustomerID: 1, FirstName: 'John', LastName: 'Doe', Email: 'john.doe@example.com' },
  { CustomerID: 2, FirstName: 'Jane', LastName: 'Smith', Email: 'jane.smith@example.com' },
  { CustomerID: 3, FirstName: 'Robert', LastName: 'Brown', Email: 'robert.brown@example.com' }
];

customerInserts.forEach((customer) => {
  connection.query('INSERT INTO CUSTOMER SET ?', customer, (err, results) => {
    if (err) {
      return console.error('error inserting customer: ' + err.message);
    }
    console.log('Inserted customer ID: ' + results.insertId);
  });
});

// Insert data into PRODUCT table
const productInserts = [
  { ProductID: 101, ProductName: 'Laptop', Price: 899.99 },
  { ProductID: 102, ProductName: 'Smartphone', Price: 499.99 },
  { ProductID: 103, ProductName: 'Tablet', Price: 299.99 }
];

productInserts.forEach((product) => {
  connection.query('INSERT INTO PRODUCT SET ?', product, (err, results) => {
    if (err) {
      return console.error('error inserting product: ' + err.message);
    }
    console.log('Inserted product ID: ' + results.insertId);
  });
});

// Insert data into ORDERS table
const orderInserts = [
  { OrderID: 1001, CustomerID: 1, ProductID: 101, Quantity: 2, OrderDate: new Date() },
  { OrderID: 1002, CustomerID: 2, ProductID: 102, Quantity: 1, OrderDate: new Date() },
  { OrderID: 1003, CustomerID: 3, ProductID: 103, Quantity: 3, OrderDate: new Date() }
];

orderInserts.forEach((order) => {
  connection.query('INSERT INTO ORDERS SET ?', order, (err, results) => {
    if (err) {
      return console.error('error inserting order: ' + err.message);
    }
    console.log('Inserted order ID: ' + results.insertId);
  });
});

// Close the connection
connection.end((err) => {
  if (err) {
    return console.error('error ending the connection: ' + err.message);
  }
  console.log('connection closed');
});