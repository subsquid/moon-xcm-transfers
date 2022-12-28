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
};

interface ProcessorConfig {
  srcConfig: SourceConfig;
  nativeToken: { name: string; symbol: string; decimals: number };
}

const config: ProcessorConfig = {
  srcConfig: {
    chainName: "moonriver",
    dataSource: {
      archive: "https://moonriver.archive.subsquid.io/graphql",
      chain: "wss://wss.api.moonriver.moonbeam.network",
    },
  },
  nativeToken: {
    name: "MOVR",
    symbol: "MOVR",
    decimals: 18,
  },
};

export default config;
