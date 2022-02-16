import {MysqlConnectionOptions} from 'typeorm/driver/mysql/MysqlConnectionOptions'
const config:MysqlConnectionOptions = {
  "type": "mysql",
  "host": "mysql",
  "port": 3306,
  "username": "db",
  "password": "123456",
  "database": "api",
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "synchronize": true
}

export default config ;