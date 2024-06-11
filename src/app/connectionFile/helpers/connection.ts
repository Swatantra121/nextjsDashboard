import util from 'util';
import mysql, { Pool, PoolConnection, MysqlError, QueryOptions } from 'mysql';
import connectiondata from '../../config/constant';

// Extend the MySQL Pool type to include the promisified query method
interface ExtendedPool extends Pool {
    queryAsync: (options: string | QueryOptions) => Promise<any>;
}

// Mysql connection created for fetch common schema data
let connectioncommon: ExtendedPool;

if (process.env.COMMONHOSTLURL && process.env.COMMONCONNECTIONPORT && process.env.COMMONUSERNAME && process.env.COMMONUSERPASSWORD && process.env.COMMONUSERDATABASE) {
    connectioncommon = mysql.createPool({
        host: process.env.COMMONHOSTLURL,
        port: parseInt(process.env.COMMONCONNECTIONPORT, 10),
        user: process.env.COMMONUSERNAME,
        password: process.env.COMMONUSERPASSWORD,
        database: process.env.COMMONUSERDATABASE,
    }) as ExtendedPool;
} else {
    connectioncommon = mysql.createPool({
        host: connectiondata.DEVHOSTLURL,
        port: connectiondata.DEVCONNECTIONPORT,
        user: connectiondata.DEVUSERNAME,
        password: connectiondata.DEVUSERPASSWORD,
        database: connectiondata.DEVUSERDATABASE,
    }) as ExtendedPool;
}

// Ping database to check for common exception errors.
connectioncommon.getConnection((err: MysqlError, connection: PoolConnection) => {
    console.log("create Common connection");
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.');
        }
    }

    if (connection) {
        console.log("release connection");
        connection.release();
    }

    return;
});

// Promisify the query method
connectioncommon.queryAsync = util.promisify(connectioncommon.query) as (options: string | QueryOptions) => Promise<any>;

export default connectioncommon;