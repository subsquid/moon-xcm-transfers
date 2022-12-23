import { ChainContext, Event } from '../types/generated/support';
import { UnknownVersionError } from '../../../utils/errors';
import { CallItem, Ctx } from '../../../processor';
import { TransferCallData } from '../../types/xToken';
import * as v1201 from '../types/generated/v1201';
import * as v1401 from '../types/generated/v1401';

type TransferCall =
  | {
      currencyId: v1201.CurrencyId;
      amount: bigint;
      dest: v1201.VersionedMultiLocation;
      destWeight: bigint;
    }
  | {
      currencyId: v1401.CurrencyId;
      amount: bigint;
      dest: v1401.VersionedMultiLocation;
      destWeight: bigint;
    };

export function getXTokenTransferCallData(
  ctx: Ctx,
  call: CallItem
): TransferCallData {
  // @ts-ignore
  return ctx._chain.decodeCall({ name: call.name, args: call.call.args });
}
