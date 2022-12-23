import {Entity as Entity_, Property as Property_, PrimaryKey as PrimaryKey_, Index as Index_, Enum as Enum_} from "@mikro-orm/core"
import {types} from "./support"
import {TransferLocation, fromJsonTransferLocation} from "./_transferLocation"
import {TransferAsset, fromJsonTransferAsset} from "./_transferAsset"
import {TransferType} from "./_transferType"

@Entity_()
export class Transfer {
  constructor(props?: Partial<Transfer>) {
    Object.assign(this, props)
  }

  @PrimaryKey_({type: types.String})
  id!: string

  @Property_({type: types.DateTime, nullable: false})
  timestamp!: Date

  @Index_()
  @Property_({type: types.Int, nullable: false})
  blockNumber!: number

  @Index_()
  @Property_({type: types.String, nullable: false})
  extrinsicHash!: string

  @Property_({type: types.JSONobj(fromJsonTransferLocation), nullable: true})
  to!: TransferLocation | undefined | null

  @Property_({type: types.JSONobj(fromJsonTransferLocation), nullable: false})
  from!: TransferLocation

  @Property_({type: types.JSONobj(fromJsonTransferAsset), nullable: false})
  asset!: TransferAsset

  @Index_()
  @Property_({type: types.Boolean, nullable: false})
  success!: boolean

  @Enum_({type: types.String, items: () => TransferType, nullable: false})
  type!: TransferType
}
