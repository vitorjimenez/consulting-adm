import dotenv from 'dotenv';
dotenv.config();

import knex from 'knex';

const database = knex({
    client: 'mysql2',
    connection: {
        port: '3307',
        host: process.env.mysql_host,
        user: process.env.mysql_user,
        password: process.env.mysql_password,
        database: process.env.mysql_database
    }
});

export default database;
