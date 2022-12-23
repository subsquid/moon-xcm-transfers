import {Entity as Entity_, Property as Property_, PrimaryKey as PrimaryKey_} from "@mikro-orm/core"
import {types} from "./support"

@Entity_()
export class Account {
  constructor(props?: Partial<Account>) {
    Object.assign(this, props)
  }

  @PrimaryKey_({type: types.String})
  id!: string


  @Property_({type: types.Int, nullable: false})
  lastUpdateBlock!: number
}
