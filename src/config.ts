import { SubstrateProcessor } from "@subsquid/substrate-processor";
import { KnownArchives } from "@subsquid/archive-registry";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Parameters<T> = T extends (...args: infer T) => any ? T : never;

enum HandlerParams {
  NAME,
  OPTIONS,
  FUNC,
}

type SourceConfig = {
  chainName: KnownArchives;
  prefix?: number | string;
  dataSource: Parameters<
    SubstrateProcessor<any>["setDataSource"]
  >[HandlerParams.NAME];
  batchSizeSaveThreshold: number;
};

interface ProcessorConfig {
  srcConfig: SourceConfig;
  nativeToken: { name: string; symbol: string; decimals: number };
}

const config: ProcessorConfig = {
  srcConfig: {
    chainName: "moonbeam",
    dataSource: {
      archive: "https://moonbeam.archive.subsquid.io/graphql",
      chain: "wss://wss.api.moonbeam.network",
    },
    batchSizeSaveThreshold: 3000,
  },
  nativeToken: {
    name: "GLMR",
    symbol: "GLMR",
    decimals: 18,
  },
};

export default config;
