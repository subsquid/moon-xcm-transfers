import {Entity as Entity_, Property as Property_, PrimaryKey as PrimaryKey_, Index as Index_, ManyToOne as ManyToOne_} from "@mikro-orm/core"
import {types} from "./support"
import {Account} from "./account.model"
import {XcmDestination} from "./_xcmDestination"
import {XcmToken} from "./_xcmToken"

@Entity_()
export class Transfer {
  constructor(props?: Partial<Transfer>) {
    Object.assign(this, props)
  }

  @PrimaryKey_()
  id!: string

  @Index_()
  @Property_({type: types.Int, nullable: false})
  blockNumber!: number

  @Index_()
  @Property_({type: types.DateTime, nullable: false})
  timestamp!: Date

  @Index_()
  @Property_({type: types.String, nullable: true})
  extrinsicHash!: string | undefined | null

  @Index_()
  @ManyToOne_(() => Account, {nullable: false, mapToPk: true})
  from!: string

  @Property_({type: types.JSONobj(XcmDestination.fromJSON), nullable: false})
  to!: XcmDestination

  @Property_({type: types.JSONarray(types.JSONobj(XcmToken.fromJSON)), nullable: false})
  assets!: (XcmToken | undefined | null)[]

  @Property_({type: types.BigInt, nullable: false})
  fee!: bigint
}
