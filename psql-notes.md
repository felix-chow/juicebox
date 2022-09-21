psql

List databases
`\l`

Create database
`CREATE DATABASE db_name;`
`createdb puppy_pals` (from terminal)

Drop database
`DROP DATABASE db_name;`
`createdb puppy_pals` (from terminal)

Quit psql
`\q`

Connect to a database
`\c db_name`
`psql db_name` (from terminal)

Create table

```sql

CREATE TABLE puppies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  "isCute" BOOLEAN DEFAULT true,
  age INT
);

```

List tables in database
`\d`

Describe table
`\d table_name`

Select all rows from table
`SELECT * FROM puppies;`

Inserting data

```sql

INSERT INTO puppies (name, email, age) VALUES
('Sir Waggington', 'sir-wag@email.com', 5),
('Captain Sniffer', 'capn-sniff4@email.com', 7),
('Hazel', 'hazel@email.com', 1)
ON CONFLICT(email) DO NOTHING
RETURNING *;

```

Drop a table
`DROP TABLE table_name`

WHERE clause
`SELECT * FROM puppies WHERE age > 5;`
`SELECT * FROM puppies WHERE name = 'Sir Waggington';`

Node pg library

Connect to your database

```js
const { Client } = require("pg");
const client = new Client("postgres://localhost:5432/puppy_pals");
```