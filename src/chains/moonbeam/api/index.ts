import { ChainApi } from '../../interfaces/chainApi';
import { getXTokenTransferCallData } from './calls';
import { batchHandler } from './batch';

import { getAssetMetadatasXToken } from './storage';
import { getAssetEntity, getLocationXcmEntity } from './entities';

export const api: ChainApi = {
  batch: {
    batchHandler
  },
  entities: {
    getAssetEntity,
    getLocationXcmEntity
  },
  calls: {
    getXTokenTransferCallData
  },
  storage: {
    getAssetMetadatasXToken
  }
};
