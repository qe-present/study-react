import {createClient} from '@libsql/client'
console.log(process.env.TURSO_DATABASE_URL)
// 初始化数据库客户端
const turso = createClient({
    url:process.env.TURSO_DATABASE_URL||'libsql://store-qe-present.turso.io',
    authToken:process.env.TURSO_AUTH_TOKEN||"eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDI5ODExNjQsImlkIjoiOWI1Y2QwM2MtYTQ2YS00Y2E5LTkyODQtYzFmMTQ3OWRkOGQwIiwicmlkIjoiNGMyNDc1ZDktNzEwNi00Yjc3LTljOGItMDQxZjgyY2UwNWVlIn0.i_3qm74FOxWMVFmLRLUaE28Rzlot9jbgqAIxeB6vOrC09N7MOubnnLeGbkgJxqFbZwEEuhVwMYXr25CziFcyAw"
});

export default turso