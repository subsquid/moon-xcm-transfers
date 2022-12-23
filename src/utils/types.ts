import { Block } from '../chains/moonbeam/types/generated/support';


export interface BlockHeader extends Block {
  height: number
  timestamp: number
}