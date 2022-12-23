// import * as v1201 from './types/v1201';
// import * as v1401 from './types/v1401';
// import * as v1300 from './types/v1300';
//
// enum DataSectionName {
//   CallXTokenTransfer = 'CallXTokenTransfer',
//   CallXTokenTransferMulticurrencies = 'CallXTokenTransferMulticurrencies'
// }
//
// export interface ActionData {
//   id: string; // Call ID
//   blockNumber: number;
//   blockHash: string;
//   timestamp: Date;
//   indexInBlock: number;
//   name: string;
// }
//
// type TransferCallData =
//   | {
//       currencyId: v1201.CurrencyId;
//       amount: bigint;
//       dest: v1201.VersionedMultiLocation;
//       destWeight: bigint;
//     }
//   | {
//       currencyId: v1401.CurrencyId;
//       amount: bigint;
//       dest: v1401.VersionedMultiLocation;
//       destWeight: bigint;
//     };
//
// type TransferMulticurrenciesCallData =
//   | {
//       currencyId: v1300.CurrencyId;
//       amount: bigint;
//       dest: v1300.VersionedMultiLocation;
//       destWeight: bigint;
//     }
//   | {
//       currencyId: v1401.CurrencyId;
//       amount: bigint;
//       dest: v1401.VersionedMultiLocation;
//       destWeight: bigint;
//     };
//
// type XTokenTransferData = ActionData & TransferCallData;
// type XTokenTransferMulticurrenciesData = ActionData &
//   TransferMulticurrenciesCallData;
//
// export type ParsedDataType =
//   | XTokenTransferData
//   | XTokenTransferMulticurrenciesData;
//
// type EventId = string;
//
// type ParsedDataTypeOptional<T> = T extends DataSectionName.CallXTokenTransfer
//   ? XTokenTransferData
//   : T extends DataSectionName.CallXTokenTransferMulticurrencies
//   ? XTokenTransferMulticurrenciesData
//   : never;
//
// export type ParsedDataMap = Map<DataSectionName, Map<EventId, ParsedDataType>>;
//
// export class ParsedDataScope {
//   private scope: ParsedDataMap;
//
//   constructor() {
//     this.scope = new Map();
//   }
//
//   set(section: DataSectionName, value: ParsedDataType): void {
//     this.scope.set(
//       section,
//       (this.scope.get(section) || new Map()).set(value.id, value)
//     );
//   }
//
//   get<T>(section: DataSectionName): Map<EventId, T> {
//     return (
//       (this.scope.get(section) as Map<EventId, T>) || new Map<EventId, T>()
//     );
//   }
//
//   getSectionByEventName<T extends DataSectionName>(
//     section: T
//   ): Map<EventId, ParsedDataTypeOptional<T>> {
//     return (
//       (this.scope.get(section) as Map<EventId, ParsedDataTypeOptional<T>>) ||
//       new Map<EventId, ParsedDataTypeOptional<T>>()
//     );
//   }
//
//   /**
//    * Just for debug purposes
//    */
//   entries(): IterableIterator<[DataSectionName, Map<EventId, ParsedDataType>]> {
//     return this.scope.entries();
//   }
// }
