
import { connection, Identity } from ".";

const test = async() => {
    const conn = connection({
        type: "mariadb",
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE,
        port: parseInt(process.env.DB_PORT) || 3306,
        logging: true
    });
    
    const repo = (await conn).getRepository(Identity);
    const identities = await repo
        .find({where:{status: 1}});
    console.log("degress", identities);
}

test();