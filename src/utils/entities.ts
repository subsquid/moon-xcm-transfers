import { Account } from '../model';
import { Ctx, Block } from '../processor';
import { BlockHeader } from './types';

export async function getOrCreateAccount(
  ctx: Ctx,
  block: BlockHeader,
  id: string
): Promise<Account> {
  let account = ctx.store.get(Account, id);
  if (!account) {
    account = new Account({
      id,
      lastUpdateBlock: block.height - 1
    });
    await ctx.store.persist(account);
  }

  return account;
}
