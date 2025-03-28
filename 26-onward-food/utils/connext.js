import {createClient} from '@libsql/client'
console.log(process.env.TURSO_DATABASE_URL)
// 初始化数据库客户端
const turso = createClient({
    url:process.env.TURSO_DATABASE_URL,
    authToken:process.env.TURSO_AUTH_TOKEN
});

export default turso