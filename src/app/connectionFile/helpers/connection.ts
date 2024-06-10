import sqlConfig from 'mysql';
import connectiondata from '../../config/constant';

    if(process.env.HOSTLURL && process.env.CONNECTIONPORT && process.env.USERNAME && process.env.USERPASSWORD && process.env.USERDATABASE){
        var connectioncommon = sqlConfig.createConnection({
            host: process.env.HOSTLURL,
            port: Number(process.env.CONNECTIONPORT),
            user: process.env.USERNAME,
            password: process.env.USERPASSWORD,
            database: process.env.USERDATABASE
        });
    }else{
        var connectioncommon = sqlConfig.createConnection({
          host: connectiondata.DEVHOSTLURL,
          port: connectiondata.DEVCONNECTIONPORT,
          user: connectiondata.DEVUSERNAME,
          password: connectiondata.DEVUSERPASSWORD,
          database: connectiondata.DEVUSERDATABASE
        });
    }

export default connectioncommon;