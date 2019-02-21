const config = {
  port: process.env.PORT || 3000,
  db: 'mongodb://localhost/api-rest',
  test_env: 'test',
  test_db: 'mongodb://localhost/api-rest',
  test_port: 3001
}
export default config;