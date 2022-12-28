import {Constructor, EntityProperty, Platform, Type, JsonType, PropertyOptions} from '@mikro-orm/core'
import assert from 'assert'

class IntType extends Type<number | undefined> {
    getColumnType() {
        return `int4`
    }

    compareAsType(): string {
        return 'number'
    }

    convertToDatabaseValue(value: number | undefined): number | undefined {
        return value ?? undefined
    }

    convertToJSValue(value: number | undefined): number | undefined {
        if (value == null) {
            return undefined
        } else {
            assert(Number.isInteger(value), 'invalid Int')
            return value as number
        }
    }

    toJSON(value: number | undefined): number | undefined {
        return value ?? undefined
    }
}

export class StringType extends Type<string | undefined> {
    getColumnType() {
        return `text`
    }

    convertToDatabaseValue(value: string | undefined): string | undefined {
        return value ?? undefined
    }

    compareAsType(): string {
        return 'string'
    }

    convertToJSValue(value: string | undefined): string | undefined {
        if (value == null) {
            return undefined
        } else {
            assert(typeof value === 'string', 'invalid String')
            return value
        }
    }

    toJSON(value: string | undefined): string | undefined {
        return value ?? undefined
    }
}

export class BooleanType extends Type<boolean | undefined> {
    getColumnType() {
        return `boolean`
    }

    convertToDatabaseValue(value: boolean | undefined): boolean | undefined {
        return value ?? undefined
    }

    compareAsType(): string {
        return 'boolean'
    }

    convertToJSValue(value: boolean | undefined): boolean | undefined {
        if (value == null) {
            return undefined
        } else {
            assert(typeof value === 'boolean', 'invalid Boolean')
            return value
        }
    }

    toJSON(value: boolean | undefined): boolean | undefined {
        return value ?? undefined
    }
}

export class BigIntType extends Type<bigint | undefined, string | undefined> {
    convertToDatabaseValue(value: bigint | undefined): string | undefined {
        return value?.toString()
    }

    convertToJSValue(value: string | undefined): bigint | undefined {
        if (value == null) {
            return undefined
        } else {
            assert(typeof value === 'string' || typeof value === 'number', 'invalid BigInt')
            return BigInt(value)
        }
    }

    getColumnType() {
        return `numeric`
    }

    compareAsType(): string {
        return 'number'
    }

    toJSON(value: bigint | undefined): string | undefined {
        return value?.toString()
    }
}

export class FloatType extends Type<number | undefined, string | undefined> {
    convertToDatabaseValue(value: number | undefined): string | undefined {
        return value?.toString()
    }

    convertToJSValue(value: string | undefined): number | undefined {
        if (value == null) {
            return undefined
        } else {
            assert(typeof value === 'number', 'invalid Float')
            return value as number
        }
    }

    getColumnType() {
        return `numeric`
    }

    compareAsType(): string {
        return 'number'
    }

    toJSON(value: number | undefined): number | undefined {
        return value ?? undefined
    }
}

export class BigDecimalType extends Type<any, string | undefined> {
    convertToDatabaseValue(value: any): string | undefined {
        return value?.toString()
    }

    convertToJSValue(value: string): any {
        if (value == null) {
            return undefined
        } else {
            assert(typeof value === 'string', 'invalid BigDecimal')
            return decimal.BigDecimal(value)
        }
    }

    getColumnType() {
        return `numeric`
    }

    compareAsType(): string {
        return 'number'
    }

    toJSON(value: any): string | undefined {
        return value?.toString()
    }
}

// credit - https://github.com/Urigo/graphql-scalars/blob/91b4ea8df891be8af7904cf84751930cc0c6613d/src/scalars/iso-date/validator.ts#L122
const RFC_3339_REGEX =
    /^(\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60))(\.\d{1,})?([Z])$/

function isIsoDateTimeString(s: string): boolean {
    return RFC_3339_REGEX.test(s)
}

export class DateTimeType extends Type<Date | undefined, string | undefined> {
    convertToDatabaseValue(value: Date | undefined): string | undefined {
        return value?.toISOString()
    }

    convertToJSValue(value: string | Date | undefined): Date | undefined {
        if (value == null) {
            return undefined
        } else if (typeof value === 'string') {
            assert(isIsoDateTimeString(value), 'invalid DateTime')
            return new Date(value)
        } else {
            assert(value instanceof Date, 'invalid DateTime')
            return value
        }
    }

    getColumnType() {
        return `timestamp with time zone`
    }

    compareAsType(): string {
        return 'date'
    }

    toJSON(value: Date | undefined): string | undefined {
        return value?.toISOString()
    }
}

export class BytesType extends Type<Uint8Array | undefined, Buffer | undefined> {
    convertToDatabaseValue(value: Uint8Array | undefined): Buffer | undefined {
        return value ? Buffer.from(value.buffer, value.byteOffset, value.byteLength) : undefined
    }

    convertToJSValue(value: Buffer | Uint8Array | string | undefined): Uint8Array | undefined {
        if (value == null) {
            return undefined
        } else if (typeof value === 'string') {
            assert(value.length % 2 === 0, 'invalid Bytes')
            assert(/^0x[0-9a-f]+$/i.test(value), 'invalid Bytes')
            return new Uint8Array(Buffer.from(value.slice(2), 'hex'))
        } else {
            return Uint8Array.from(value)
        }
    }

    getColumnType() {
        return `bytea`
    }

    compareAsType(): string {
        return 'Buffer'
    }

    toJSON(value: Uint8Array | undefined): Buffer | undefined {
        if (value == null) {
            return undefined
        } else if (Buffer.isBuffer(value)) {
            return ('0x' + value.toString('hex')) as any
        } else {
            return ('0x' + Buffer.from(value.buffer, value.byteOffset, value.byteLength).toString('hex')) as any
        }
    }
}

export class JSONType<T> extends JsonType {
    constructor(private transformer: (json: any) => T = (json: any) => json) {
        super()
    }

    convertToDatabaseValue(value: T | undefined): string | null {
        return this.toJSON(value) ?? null
    }

    convertToJSValue(value: string | undefined): T | undefined {
        return value ? this.transformer(value) : undefined
    }

    getColumnType(): string {
        return 'jsonb'
    }

    compareAsType(): string {
        return 'any'
    }

    toJSON(value: T | undefined): string | undefined {
        return value ? JSON.stringify(value) : undefined
    }
}

export class JSONArrayType<T extends ScalarType> extends JsonType {
    private itemType: ScalarType

    constructor(itemType: T | Constructor<T>) {
        super()
        this.itemType = typeof itemType === 'function' ? new itemType() : itemType
    }

    convertToDatabaseValue(value: any[] | undefined): string | null {
        return this.toJSON(value) ?? null
    }

    convertToJSValue(value: any[] | undefined): any[] | undefined {
        return value?.map((v) => this.itemType.convertToJSValue(v))
    }

    compareAsType(): string {
        return 'any'
    }

    toJSON(value: any[] | undefined): string | undefined {
        return value ? JSON.stringify(value.map((v) => this.itemType.toJSON(v))) : undefined
    }

    getColumnType(prop: EntityProperty) {
        return `jsonb`
    }
}

type ScalarType = {
    convertToDatabaseValue(value: any): any
    getColumnType(prop: EntityProperty): string
    convertToJSValue(value: any): any
    toJSON(value: any): any
}

export class ArrayType<T extends ScalarType> extends Type<any[] | undefined, string | undefined> {
    private itemType: ScalarType

    constructor(itemType: T | Constructor<T>) {
        super()
        this.itemType = typeof itemType === 'function' ? new itemType() : itemType
    }

    convertToDatabaseValue(value: any[] | undefined): string | undefined {
        return value ? `{${value.map((v) => `"${this.itemType.convertToDatabaseValue(v)}"`).join(',')}}` : undefined
    }

    convertToJSValue(value: string | any[] | undefined): any[] | undefined {
        if (Array.isArray(value)) {
            return value.map((v) => this.itemType.convertToJSValue(v))
        } else {
            return value
                ? value
                      .substring(1, value.length - 1)
                      .split(',')
                      .map((v) => this.itemType.convertToJSValue(v))
                : undefined
        }
    }

    compareAsType(): string {
        return 'array'
    }

    toJSON(value: any[] | undefined) {
        return value?.map((v) => this.itemType.toJSON(v))
    }

    getColumnType(prop: EntityProperty) {
        return `${this.itemType.getColumnType(prop)} array`
    }
}

export class EnumType<T extends string> extends Type<T | undefined, string | undefined> {
    constructor(private e: {[key: string]: unknown}) {
        super()
    }

    convertToDatabaseValue(value: string | undefined): string | undefined {
        return value ?? undefined
    }

    getColumnType(prop: EntityProperty) {
        return `varchar${prop.length}`
    }

    compareAsType(): string {
        return 'string'
    }

    convertToJSValue(value: string | undefined): T | undefined {
        if (value == null) {
            return undefined
        } else {
            assert(value in this.e, 'invalid Enum')
            return value as T
        }
    }

    toJSON(value: string | undefined): string | undefined {
        return value ?? undefined
    }
}

export const types = {
    Int: new IntType(),
    String: new StringType(),
    ID: new StringType(),
    Boolean: new BooleanType(),
    BigInt: new BigIntType(),
    Float: new FloatType(),
    BigDecimal: new BigDecimalType(),
    DateTime: new DateTimeType(),
    Bytes: new BytesType(),
    JSON: new JSONType(),
    JSONobj: (transformer?: (json: any) => unknown) => new JSONType(transformer),
    JSONarray: <T extends ScalarType>(itemType: T | Constructor<T>) => new JSONArrayType(itemType),
    Array: <T extends ScalarType>(itemType: T | Constructor<T>) => new ArrayType(itemType),
}

export default types
// export function nonNull<T>(val: T | undefined): T {
//     assert(val != null, 'non-nullable value is null')
//     return val
// }

export function enumFromJson<E extends object>(json: unknown, enumObject: E): E[keyof E] {
    assert(typeof json == 'string', 'invalid enum value')
    let val = (enumObject as any)[json]
    assert(typeof val == 'string', `invalid enum value`)
    return val as any
}

const decimal = {
    get BigDecimal(): any {
        throw new Error('Package `@subsquid/big-decimal` is not installed')
    },
}

try {
    Object.defineProperty(decimal, 'BigDecimal', {
        value: require('@subsquid/big-decimal').BigDecimal,
    })
} catch (e) {}
