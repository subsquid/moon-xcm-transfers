import * as dotenv from 'dotenv';
import { ProcessorConfig } from '../interfaces/processorConfig';

dotenv.config({ path: `${__dirname}/../../../.env.local` });

export const config: ProcessorConfig = {
  chainName: 'moonbeam',
  dataSource: {
    archive: 'https://moonbeam.archive.subsquid.io/graphql',
    chain: process.env.MOONBEAM_NODE || 'wss://wss.api.moonbeam.network'
  }
  // blockRange: {
  //   from: 1800000
  // },
};
