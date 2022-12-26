import {Entity as Entity_, Property as Property_, PrimaryKey as PrimaryKey_} from "@mikro-orm/core"
import {types} from "./support"

@Entity_()
export class Account {
  constructor(props?: Partial<Account>) {
    Object.assign(this, props)
  }

  /**
   * Account address
   */
  @PrimaryKey_()
  id!: string

}
