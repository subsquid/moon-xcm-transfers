import {Entity as Entity_, Property as Property_, PrimaryKey as PrimaryKey_, ManyToOne as ManyToOne_, Index as Index_, Enum as Enum_} from "@mikro-orm/core"
import {types} from "./support"
import {Transfer} from "./transfer.model"
import {Account} from "./account.model"
import {TransferDirection} from "./_transferDirection"

@Entity_()
export class AccountTransfer {
  constructor(props?: Partial<AccountTransfer>) {
    Object.assign(this, props)
  }

  @PrimaryKey_({type: types.String})
  id!: string

  @Index_()
  @ManyToOne_(() => Transfer, {nullable: true, mapToPk: true})
  transfer!: string | undefined | null

  @Index_()
  @ManyToOne_(() => Account, {nullable: false, mapToPk: true})
  account!: string

  @Enum_({type: types.String, items: () => TransferDirection, nullable: true})
  direction!: TransferDirection | undefined | null
}
