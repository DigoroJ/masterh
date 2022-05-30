//require('dotenv').config();
const  Pool  = require("pg").Pool;
const connection_string = 'postgres://laxchiojyhlqmz:abacdb92efd212cbe2db6ec39544f90776db9e65dc017043dba7061a2b64a6a5@ec2-34-231-221-151.compute-1.amazonaws.com:5432/d3m92erm1migsl';

const pool = new Pool({
    
    connectionString: connection_string,
    ssl : {
        rejectUnauthorized: false
    }
            // user: process.env.DB_USER,
            // host:process.env.DB_HOST,
            // database: process.env.DB_NAME,
            // port: process.env.DB_PORT,
            // password: process.env.DB_PWD
        
}); 

module.exports = pool;

