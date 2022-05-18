
import { DataSource } from "typeorm"
import { User } from "./entity/user.entity"

export const lifepointDataSource = new DataSource({
  type: "sqlite",
  database: 'db.sqlite3',
  entities: [User],
  logging: true,
  synchronize: true,
})
