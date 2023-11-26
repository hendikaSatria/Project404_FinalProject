
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model AffiliateDiscount
 * 
 */
export type AffiliateDiscount = $Result.DefaultSelection<Prisma.$AffiliateDiscountPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Promotion
 * 
 */
export type Promotion = $Result.DefaultSelection<Prisma.$PromotionPayload>
/**
 * Model UserPromoUsage
 * 
 */
export type UserPromoUsage = $Result.DefaultSelection<Prisma.$UserPromoUsagePayload>
/**
 * Model ShoppingCartItem
 * 
 */
export type ShoppingCartItem = $Result.DefaultSelection<Prisma.$ShoppingCartItemPayload>
/**
 * Model ShoppingCart
 * 
 */
export type ShoppingCart = $Result.DefaultSelection<Prisma.$ShoppingCartPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model ProofsOfPayment
 * 
 */
export type ProofsOfPayment = $Result.DefaultSelection<Prisma.$ProofsOfPaymentPayload>
/**
 * Model Warehouse
 * 
 */
export type Warehouse = $Result.DefaultSelection<Prisma.$WarehousePayload>
/**
 * Model UserAddress
 * 
 */
export type UserAddress = $Result.DefaultSelection<Prisma.$UserAddressPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.affiliateDiscount`: Exposes CRUD operations for the **AffiliateDiscount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AffiliateDiscounts
    * const affiliateDiscounts = await prisma.affiliateDiscount.findMany()
    * ```
    */
  get affiliateDiscount(): Prisma.AffiliateDiscountDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.promotion`: Exposes CRUD operations for the **Promotion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promotions
    * const promotions = await prisma.promotion.findMany()
    * ```
    */
  get promotion(): Prisma.PromotionDelegate<ExtArgs>;

  /**
   * `prisma.userPromoUsage`: Exposes CRUD operations for the **UserPromoUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPromoUsages
    * const userPromoUsages = await prisma.userPromoUsage.findMany()
    * ```
    */
  get userPromoUsage(): Prisma.UserPromoUsageDelegate<ExtArgs>;

  /**
   * `prisma.shoppingCartItem`: Exposes CRUD operations for the **ShoppingCartItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShoppingCartItems
    * const shoppingCartItems = await prisma.shoppingCartItem.findMany()
    * ```
    */
  get shoppingCartItem(): Prisma.ShoppingCartItemDelegate<ExtArgs>;

  /**
   * `prisma.shoppingCart`: Exposes CRUD operations for the **ShoppingCart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShoppingCarts
    * const shoppingCarts = await prisma.shoppingCart.findMany()
    * ```
    */
  get shoppingCart(): Prisma.ShoppingCartDelegate<ExtArgs>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs>;

  /**
   * `prisma.proofsOfPayment`: Exposes CRUD operations for the **ProofsOfPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProofsOfPayments
    * const proofsOfPayments = await prisma.proofsOfPayment.findMany()
    * ```
    */
  get proofsOfPayment(): Prisma.ProofsOfPaymentDelegate<ExtArgs>;

  /**
   * `prisma.warehouse`: Exposes CRUD operations for the **Warehouse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warehouses
    * const warehouses = await prisma.warehouse.findMany()
    * ```
    */
  get warehouse(): Prisma.WarehouseDelegate<ExtArgs>;

  /**
   * `prisma.userAddress`: Exposes CRUD operations for the **UserAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAddresses
    * const userAddresses = await prisma.userAddress.findMany()
    * ```
    */
  get userAddress(): Prisma.UserAddressDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Product: 'Product',
    AffiliateDiscount: 'AffiliateDiscount',
    Category: 'Category',
    Admin: 'Admin',
    Promotion: 'Promotion',
    UserPromoUsage: 'UserPromoUsage',
    ShoppingCartItem: 'ShoppingCartItem',
    ShoppingCart: 'ShoppingCart',
    Orders: 'Orders',
    OrderItem: 'OrderItem',
    ProofsOfPayment: 'ProofsOfPayment',
    Warehouse: 'Warehouse',
    UserAddress: 'UserAddress'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'product' | 'affiliateDiscount' | 'category' | 'admin' | 'promotion' | 'userPromoUsage' | 'shoppingCartItem' | 'shoppingCart' | 'orders' | 'orderItem' | 'proofsOfPayment' | 'warehouse' | 'userAddress'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      AffiliateDiscount: {
        payload: Prisma.$AffiliateDiscountPayload<ExtArgs>
        fields: Prisma.AffiliateDiscountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AffiliateDiscountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AffiliateDiscountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AffiliateDiscountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AffiliateDiscountPayload>
          }
          findFirst: {
            args: Prisma.AffiliateDiscountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AffiliateDiscountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AffiliateDiscountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AffiliateDiscountPayload>
          }
          findMany: {
            args: Prisma.AffiliateDiscountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AffiliateDiscountPayload>[]
          }
          create: {
            args: Prisma.AffiliateDiscountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AffiliateDiscountPayload>
          }
          createMany: {
            args: Prisma.AffiliateDiscountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AffiliateDiscountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AffiliateDiscountPayload>
          }
          update: {
            args: Prisma.AffiliateDiscountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AffiliateDiscountPayload>
          }
          deleteMany: {
            args: Prisma.AffiliateDiscountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AffiliateDiscountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AffiliateDiscountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AffiliateDiscountPayload>
          }
          aggregate: {
            args: Prisma.AffiliateDiscountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAffiliateDiscount>
          }
          groupBy: {
            args: Prisma.AffiliateDiscountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AffiliateDiscountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AffiliateDiscountCountArgs<ExtArgs>,
            result: $Utils.Optional<AffiliateDiscountCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>,
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Promotion: {
        payload: Prisma.$PromotionPayload<ExtArgs>
        fields: Prisma.PromotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromotionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromotionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findFirst: {
            args: Prisma.PromotionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromotionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findMany: {
            args: Prisma.PromotionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          create: {
            args: Prisma.PromotionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          createMany: {
            args: Prisma.PromotionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PromotionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          update: {
            args: Prisma.PromotionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          deleteMany: {
            args: Prisma.PromotionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PromotionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PromotionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          aggregate: {
            args: Prisma.PromotionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePromotion>
          }
          groupBy: {
            args: Prisma.PromotionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PromotionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromotionCountArgs<ExtArgs>,
            result: $Utils.Optional<PromotionCountAggregateOutputType> | number
          }
        }
      }
      UserPromoUsage: {
        payload: Prisma.$UserPromoUsagePayload<ExtArgs>
        fields: Prisma.UserPromoUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPromoUsageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPromoUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPromoUsageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPromoUsagePayload>
          }
          findFirst: {
            args: Prisma.UserPromoUsageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPromoUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPromoUsageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPromoUsagePayload>
          }
          findMany: {
            args: Prisma.UserPromoUsageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPromoUsagePayload>[]
          }
          create: {
            args: Prisma.UserPromoUsageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPromoUsagePayload>
          }
          createMany: {
            args: Prisma.UserPromoUsageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserPromoUsageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPromoUsagePayload>
          }
          update: {
            args: Prisma.UserPromoUsageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPromoUsagePayload>
          }
          deleteMany: {
            args: Prisma.UserPromoUsageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserPromoUsageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserPromoUsageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPromoUsagePayload>
          }
          aggregate: {
            args: Prisma.UserPromoUsageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserPromoUsage>
          }
          groupBy: {
            args: Prisma.UserPromoUsageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserPromoUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPromoUsageCountArgs<ExtArgs>,
            result: $Utils.Optional<UserPromoUsageCountAggregateOutputType> | number
          }
        }
      }
      ShoppingCartItem: {
        payload: Prisma.$ShoppingCartItemPayload<ExtArgs>
        fields: Prisma.ShoppingCartItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShoppingCartItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingCartItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShoppingCartItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingCartItemPayload>
          }
          findFirst: {
            args: Prisma.ShoppingCartItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingCartItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShoppingCartItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingCartItemPayload>
          }
          findMany: {
            args: Prisma.ShoppingCartItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingCartItemPayload>[]
          }
          create: {
            args: Prisma.ShoppingCartItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingCartItemPayload>
          }
          createMany: {
            args: Prisma.ShoppingCartItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ShoppingCartItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingCartItemPayload>
          }
          update: {
            args: Prisma.ShoppingCartItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingCartItemPayload>
          }
          deleteMany: {
            args: Prisma.ShoppingCartItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ShoppingCartItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ShoppingCartItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingCartItemPayload>
          }
          aggregate: {
            args: Prisma.ShoppingCartItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateShoppingCartItem>
          }
          groupBy: {
            args: Prisma.ShoppingCartItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ShoppingCartItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShoppingCartItemCountArgs<ExtArgs>,
            result: $Utils.Optional<ShoppingCartItemCountAggregateOutputType> | number
          }
        }
      }
      ShoppingCart: {
        payload: Prisma.$ShoppingCartPayload<ExtArgs>
        fields: Prisma.ShoppingCartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShoppingCartFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingCartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShoppingCartFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingCartPayload>
          }
          findFirst: {
            args: Prisma.ShoppingCartFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingCartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShoppingCartFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingCartPayload>
          }
          findMany: {
            args: Prisma.ShoppingCartFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingCartPayload>[]
          }
          create: {
            args: Prisma.ShoppingCartCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingCartPayload>
          }
          createMany: {
            args: Prisma.ShoppingCartCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ShoppingCartDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingCartPayload>
          }
          update: {
            args: Prisma.ShoppingCartUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingCartPayload>
          }
          deleteMany: {
            args: Prisma.ShoppingCartDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ShoppingCartUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ShoppingCartUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingCartPayload>
          }
          aggregate: {
            args: Prisma.ShoppingCartAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateShoppingCart>
          }
          groupBy: {
            args: Prisma.ShoppingCartGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ShoppingCartGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShoppingCartCountArgs<ExtArgs>,
            result: $Utils.Optional<ShoppingCartCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>,
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      ProofsOfPayment: {
        payload: Prisma.$ProofsOfPaymentPayload<ExtArgs>
        fields: Prisma.ProofsOfPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProofsOfPaymentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProofsOfPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProofsOfPaymentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProofsOfPaymentPayload>
          }
          findFirst: {
            args: Prisma.ProofsOfPaymentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProofsOfPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProofsOfPaymentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProofsOfPaymentPayload>
          }
          findMany: {
            args: Prisma.ProofsOfPaymentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProofsOfPaymentPayload>[]
          }
          create: {
            args: Prisma.ProofsOfPaymentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProofsOfPaymentPayload>
          }
          createMany: {
            args: Prisma.ProofsOfPaymentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProofsOfPaymentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProofsOfPaymentPayload>
          }
          update: {
            args: Prisma.ProofsOfPaymentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProofsOfPaymentPayload>
          }
          deleteMany: {
            args: Prisma.ProofsOfPaymentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProofsOfPaymentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProofsOfPaymentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProofsOfPaymentPayload>
          }
          aggregate: {
            args: Prisma.ProofsOfPaymentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProofsOfPayment>
          }
          groupBy: {
            args: Prisma.ProofsOfPaymentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProofsOfPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProofsOfPaymentCountArgs<ExtArgs>,
            result: $Utils.Optional<ProofsOfPaymentCountAggregateOutputType> | number
          }
        }
      }
      Warehouse: {
        payload: Prisma.$WarehousePayload<ExtArgs>
        fields: Prisma.WarehouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarehouseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarehouseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findFirst: {
            args: Prisma.WarehouseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarehouseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findMany: {
            args: Prisma.WarehouseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          create: {
            args: Prisma.WarehouseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          createMany: {
            args: Prisma.WarehouseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WarehouseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          update: {
            args: Prisma.WarehouseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          deleteMany: {
            args: Prisma.WarehouseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WarehouseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WarehouseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          aggregate: {
            args: Prisma.WarehouseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWarehouse>
          }
          groupBy: {
            args: Prisma.WarehouseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WarehouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarehouseCountArgs<ExtArgs>,
            result: $Utils.Optional<WarehouseCountAggregateOutputType> | number
          }
        }
      }
      UserAddress: {
        payload: Prisma.$UserAddressPayload<ExtArgs>
        fields: Prisma.UserAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAddressFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAddressFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          findFirst: {
            args: Prisma.UserAddressFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAddressFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          findMany: {
            args: Prisma.UserAddressFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>[]
          }
          create: {
            args: Prisma.UserAddressCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          createMany: {
            args: Prisma.UserAddressCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserAddressDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          update: {
            args: Prisma.UserAddressUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          deleteMany: {
            args: Prisma.UserAddressDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserAddressUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserAddressUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          aggregate: {
            args: Prisma.UserAddressAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserAddress>
          }
          groupBy: {
            args: Prisma.UserAddressGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAddressCountArgs<ExtArgs>,
            result: $Utils.Optional<UserAddressCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    user_promo_usages: number
    shopping_carts: number
    orders: number
    affiliate_discounts: number
    user_addresses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_promo_usages?: boolean | UserCountOutputTypeCountUser_promo_usagesArgs
    shopping_carts?: boolean | UserCountOutputTypeCountShopping_cartsArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    affiliate_discounts?: boolean | UserCountOutputTypeCountAffiliate_discountsArgs
    user_addresses?: boolean | UserCountOutputTypeCountUser_addressesArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_promo_usagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPromoUsageWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShopping_cartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingCartWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAffiliate_discountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AffiliateDiscountWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAddressWhereInput
  }



  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    promotions: number
    order_items: number
    ShoppingCart: number
    ShoppingCartItem: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotions?: boolean | ProductCountOutputTypeCountPromotionsArgs
    order_items?: boolean | ProductCountOutputTypeCountOrder_itemsArgs
    ShoppingCart?: boolean | ProductCountOutputTypeCountShoppingCartArgs
    ShoppingCartItem?: boolean | ProductCountOutputTypeCountShoppingCartItemArgs
  }

  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPromotionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountShoppingCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingCartWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountShoppingCartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingCartItemWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }



  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    Promotion: number
    Orders: number
    ProofsOfPayment: number
    Warehouse: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Promotion?: boolean | AdminCountOutputTypeCountPromotionArgs
    Orders?: boolean | AdminCountOutputTypeCountOrdersArgs
    ProofsOfPayment?: boolean | AdminCountOutputTypeCountProofsOfPaymentArgs
    Warehouse?: boolean | AdminCountOutputTypeCountWarehouseArgs
  }

  // Custom InputTypes

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountPromotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionWhereInput
  }


  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountProofsOfPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProofsOfPaymentWhereInput
  }


  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountWarehouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseWhereInput
  }



  /**
   * Count Type PromotionCountOutputType
   */

  export type PromotionCountOutputType = {
    UserPromoUsage: number
  }

  export type PromotionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserPromoUsage?: boolean | PromotionCountOutputTypeCountUserPromoUsageArgs
  }

  // Custom InputTypes

  /**
   * PromotionCountOutputType without action
   */
  export type PromotionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionCountOutputType
     */
    select?: PromotionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PromotionCountOutputType without action
   */
  export type PromotionCountOutputTypeCountUserPromoUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPromoUsageWhereInput
  }



  /**
   * Count Type ShoppingCartCountOutputType
   */

  export type ShoppingCartCountOutputType = {
    cart_items: number
  }

  export type ShoppingCartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | ShoppingCartCountOutputTypeCountCart_itemsArgs
  }

  // Custom InputTypes

  /**
   * ShoppingCartCountOutputType without action
   */
  export type ShoppingCartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCartCountOutputType
     */
    select?: ShoppingCartCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ShoppingCartCountOutputType without action
   */
  export type ShoppingCartCountOutputTypeCountCart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingCartItemWhereInput
  }



  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    order_items: number
    UserPromoUsage: number
    ProofsOfPayment: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | OrdersCountOutputTypeCountOrder_itemsArgs
    UserPromoUsage?: boolean | OrdersCountOutputTypeCountUserPromoUsageArgs
    ProofsOfPayment?: boolean | OrdersCountOutputTypeCountProofsOfPaymentArgs
  }

  // Custom InputTypes

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountUserPromoUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPromoUsageWhereInput
  }


  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountProofsOfPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProofsOfPaymentWhereInput
  }



  /**
   * Count Type WarehouseCountOutputType
   */

  export type WarehouseCountOutputType = {
    products: number
  }

  export type WarehouseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | WarehouseCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes

  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseCountOutputType
     */
    select?: WarehouseCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    full_name: string | null
    password: string | null
    email: string | null
    affiliate_code: string | null
    affiliate_usage: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    full_name: string | null
    password: string | null
    email: string | null
    affiliate_code: string | null
    affiliate_usage: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    full_name: number
    password: number
    email: number
    affiliate_code: number
    affiliate_usage: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    full_name?: true
    password?: true
    email?: true
    affiliate_code?: true
    affiliate_usage?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    full_name?: true
    password?: true
    email?: true
    affiliate_code?: true
    affiliate_usage?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    full_name?: true
    password?: true
    email?: true
    affiliate_code?: true
    affiliate_usage?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    full_name: string
    password: string
    email: string
    affiliate_code: string
    affiliate_usage: boolean
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    full_name?: boolean
    password?: boolean
    email?: boolean
    affiliate_code?: boolean
    affiliate_usage?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_promo_usages?: boolean | User$user_promo_usagesArgs<ExtArgs>
    shopping_carts?: boolean | User$shopping_cartsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    affiliate_discounts?: boolean | User$affiliate_discountsArgs<ExtArgs>
    user_addresses?: boolean | User$user_addressesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    full_name?: boolean
    password?: boolean
    email?: boolean
    affiliate_code?: boolean
    affiliate_usage?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_promo_usages?: boolean | User$user_promo_usagesArgs<ExtArgs>
    shopping_carts?: boolean | User$shopping_cartsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    affiliate_discounts?: boolean | User$affiliate_discountsArgs<ExtArgs>
    user_addresses?: boolean | User$user_addressesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      user_promo_usages: Prisma.$UserPromoUsagePayload<ExtArgs>[]
      shopping_carts: Prisma.$ShoppingCartPayload<ExtArgs>[]
      orders: Prisma.$OrdersPayload<ExtArgs>[]
      affiliate_discounts: Prisma.$AffiliateDiscountPayload<ExtArgs>[]
      user_addresses: Prisma.$UserAddressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      full_name: string
      password: string
      email: string
      affiliate_code: string
      affiliate_usage: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user_promo_usages<T extends User$user_promo_usagesArgs<ExtArgs> = {}>(args?: Subset<T, User$user_promo_usagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPromoUsagePayload<ExtArgs>, T, 'findMany'> | Null>;

    shopping_carts<T extends User$shopping_cartsArgs<ExtArgs> = {}>(args?: Subset<T, User$shopping_cartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingCartPayload<ExtArgs>, T, 'findMany'> | Null>;

    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'findMany'> | Null>;

    affiliate_discounts<T extends User$affiliate_discountsArgs<ExtArgs> = {}>(args?: Subset<T, User$affiliate_discountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AffiliateDiscountPayload<ExtArgs>, T, 'findMany'> | Null>;

    user_addresses<T extends User$user_addressesArgs<ExtArgs> = {}>(args?: Subset<T, User$user_addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'Int'>
    readonly full_name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly affiliate_code: FieldRef<"User", 'String'>
    readonly affiliate_usage: FieldRef<"User", 'Boolean'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.user_promo_usages
   */
  export type User$user_promo_usagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPromoUsage
     */
    select?: UserPromoUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPromoUsageInclude<ExtArgs> | null
    where?: UserPromoUsageWhereInput
    orderBy?: UserPromoUsageOrderByWithRelationInput | UserPromoUsageOrderByWithRelationInput[]
    cursor?: UserPromoUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPromoUsageScalarFieldEnum | UserPromoUsageScalarFieldEnum[]
  }


  /**
   * User.shopping_carts
   */
  export type User$shopping_cartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCart
     */
    select?: ShoppingCartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartInclude<ExtArgs> | null
    where?: ShoppingCartWhereInput
    orderBy?: ShoppingCartOrderByWithRelationInput | ShoppingCartOrderByWithRelationInput[]
    cursor?: ShoppingCartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShoppingCartScalarFieldEnum | ShoppingCartScalarFieldEnum[]
  }


  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * User.affiliate_discounts
   */
  export type User$affiliate_discountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateDiscount
     */
    select?: AffiliateDiscountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AffiliateDiscountInclude<ExtArgs> | null
    where?: AffiliateDiscountWhereInput
    orderBy?: AffiliateDiscountOrderByWithRelationInput | AffiliateDiscountOrderByWithRelationInput[]
    cursor?: AffiliateDiscountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AffiliateDiscountScalarFieldEnum | AffiliateDiscountScalarFieldEnum[]
  }


  /**
   * User.user_addresses
   */
  export type User$user_addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAddressInclude<ExtArgs> | null
    where?: UserAddressWhereInput
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    cursor?: UserAddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAddressScalarFieldEnum | UserAddressScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    product_id: number | null
    price: Decimal | null
    stock: number | null
    category_id: number | null
    warehouse_id: number | null
    weight: Decimal | null
  }

  export type ProductSumAggregateOutputType = {
    product_id: number | null
    price: Decimal | null
    stock: number | null
    category_id: number | null
    warehouse_id: number | null
    weight: Decimal | null
  }

  export type ProductMinAggregateOutputType = {
    product_id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    stock: number | null
    is_available: boolean | null
    category_id: number | null
    warehouse_id: number | null
    image: string | null
    weight: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    product_id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    stock: number | null
    is_available: boolean | null
    category_id: number | null
    warehouse_id: number | null
    image: string | null
    weight: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductCountAggregateOutputType = {
    product_id: number
    name: number
    description: number
    price: number
    stock: number
    is_available: number
    category_id: number
    warehouse_id: number
    image: number
    weight: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    product_id?: true
    price?: true
    stock?: true
    category_id?: true
    warehouse_id?: true
    weight?: true
  }

  export type ProductSumAggregateInputType = {
    product_id?: true
    price?: true
    stock?: true
    category_id?: true
    warehouse_id?: true
    weight?: true
  }

  export type ProductMinAggregateInputType = {
    product_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    is_available?: true
    category_id?: true
    warehouse_id?: true
    image?: true
    weight?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductMaxAggregateInputType = {
    product_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    is_available?: true
    category_id?: true
    warehouse_id?: true
    image?: true
    weight?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductCountAggregateInputType = {
    product_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    is_available?: true
    category_id?: true
    warehouse_id?: true
    image?: true
    weight?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    product_id: number
    name: string
    description: string
    price: Decimal
    stock: number
    is_available: boolean
    category_id: number
    warehouse_id: number
    image: string
    weight: Decimal
    created_at: Date
    updated_at: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    is_available?: boolean
    category_id?: boolean
    warehouse_id?: boolean
    image?: boolean
    weight?: boolean
    created_at?: boolean
    updated_at?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    promotions?: boolean | Product$promotionsArgs<ExtArgs>
    order_items?: boolean | Product$order_itemsArgs<ExtArgs>
    ShoppingCart?: boolean | Product$ShoppingCartArgs<ExtArgs>
    ShoppingCartItem?: boolean | Product$ShoppingCartItemArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    product_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    is_available?: boolean
    category_id?: boolean
    warehouse_id?: boolean
    image?: boolean
    weight?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    promotions?: boolean | Product$promotionsArgs<ExtArgs>
    order_items?: boolean | Product$order_itemsArgs<ExtArgs>
    ShoppingCart?: boolean | Product$ShoppingCartArgs<ExtArgs>
    ShoppingCartItem?: boolean | Product$ShoppingCartItemArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      warehouse: Prisma.$WarehousePayload<ExtArgs>
      promotions: Prisma.$PromotionPayload<ExtArgs>[]
      order_items: Prisma.$OrderItemPayload<ExtArgs>[]
      ShoppingCart: Prisma.$ShoppingCartPayload<ExtArgs>[]
      ShoppingCartItem: Prisma.$ShoppingCartItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: number
      name: string
      description: string
      price: Prisma.Decimal
      stock: number
      is_available: boolean
      category_id: number
      warehouse_id: number
      image: string
      weight: Prisma.Decimal
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const productWithProduct_idOnly = await prisma.product.findMany({ select: { product_id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    warehouse<T extends WarehouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarehouseDefaultArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    promotions<T extends Product$promotionsArgs<ExtArgs> = {}>(args?: Subset<T, Product$promotionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'findMany'> | Null>;

    order_items<T extends Product$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    ShoppingCart<T extends Product$ShoppingCartArgs<ExtArgs> = {}>(args?: Subset<T, Product$ShoppingCartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingCartPayload<ExtArgs>, T, 'findMany'> | Null>;

    ShoppingCartItem<T extends Product$ShoppingCartItemArgs<ExtArgs> = {}>(args?: Subset<T, Product$ShoppingCartItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingCartItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly product_id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Decimal'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly is_available: FieldRef<"Product", 'Boolean'>
    readonly category_id: FieldRef<"Product", 'Int'>
    readonly warehouse_id: FieldRef<"Product", 'Int'>
    readonly image: FieldRef<"Product", 'String'>
    readonly weight: FieldRef<"Product", 'Decimal'>
    readonly created_at: FieldRef<"Product", 'DateTime'>
    readonly updated_at: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product.promotions
   */
  export type Product$promotionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromotionInclude<ExtArgs> | null
    where?: PromotionWhereInput
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    cursor?: PromotionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }


  /**
   * Product.order_items
   */
  export type Product$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }


  /**
   * Product.ShoppingCart
   */
  export type Product$ShoppingCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCart
     */
    select?: ShoppingCartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartInclude<ExtArgs> | null
    where?: ShoppingCartWhereInput
    orderBy?: ShoppingCartOrderByWithRelationInput | ShoppingCartOrderByWithRelationInput[]
    cursor?: ShoppingCartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShoppingCartScalarFieldEnum | ShoppingCartScalarFieldEnum[]
  }


  /**
   * Product.ShoppingCartItem
   */
  export type Product$ShoppingCartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCartItem
     */
    select?: ShoppingCartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartItemInclude<ExtArgs> | null
    where?: ShoppingCartItemWhereInput
    orderBy?: ShoppingCartItemOrderByWithRelationInput | ShoppingCartItemOrderByWithRelationInput[]
    cursor?: ShoppingCartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShoppingCartItemScalarFieldEnum | ShoppingCartItemScalarFieldEnum[]
  }


  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
  }



  /**
   * Model AffiliateDiscount
   */

  export type AggregateAffiliateDiscount = {
    _count: AffiliateDiscountCountAggregateOutputType | null
    _avg: AffiliateDiscountAvgAggregateOutputType | null
    _sum: AffiliateDiscountSumAggregateOutputType | null
    _min: AffiliateDiscountMinAggregateOutputType | null
    _max: AffiliateDiscountMaxAggregateOutputType | null
  }

  export type AffiliateDiscountAvgAggregateOutputType = {
    affiliate_discount_id: number | null
    user_id: number | null
    discount_amount: Decimal | null
  }

  export type AffiliateDiscountSumAggregateOutputType = {
    affiliate_discount_id: number | null
    user_id: number | null
    discount_amount: Decimal | null
  }

  export type AffiliateDiscountMinAggregateOutputType = {
    affiliate_discount_id: number | null
    user_id: number | null
    discount_amount: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AffiliateDiscountMaxAggregateOutputType = {
    affiliate_discount_id: number | null
    user_id: number | null
    discount_amount: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AffiliateDiscountCountAggregateOutputType = {
    affiliate_discount_id: number
    user_id: number
    discount_amount: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AffiliateDiscountAvgAggregateInputType = {
    affiliate_discount_id?: true
    user_id?: true
    discount_amount?: true
  }

  export type AffiliateDiscountSumAggregateInputType = {
    affiliate_discount_id?: true
    user_id?: true
    discount_amount?: true
  }

  export type AffiliateDiscountMinAggregateInputType = {
    affiliate_discount_id?: true
    user_id?: true
    discount_amount?: true
    created_at?: true
    updated_at?: true
  }

  export type AffiliateDiscountMaxAggregateInputType = {
    affiliate_discount_id?: true
    user_id?: true
    discount_amount?: true
    created_at?: true
    updated_at?: true
  }

  export type AffiliateDiscountCountAggregateInputType = {
    affiliate_discount_id?: true
    user_id?: true
    discount_amount?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AffiliateDiscountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AffiliateDiscount to aggregate.
     */
    where?: AffiliateDiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AffiliateDiscounts to fetch.
     */
    orderBy?: AffiliateDiscountOrderByWithRelationInput | AffiliateDiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AffiliateDiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AffiliateDiscounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AffiliateDiscounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AffiliateDiscounts
    **/
    _count?: true | AffiliateDiscountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AffiliateDiscountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AffiliateDiscountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AffiliateDiscountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AffiliateDiscountMaxAggregateInputType
  }

  export type GetAffiliateDiscountAggregateType<T extends AffiliateDiscountAggregateArgs> = {
        [P in keyof T & keyof AggregateAffiliateDiscount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAffiliateDiscount[P]>
      : GetScalarType<T[P], AggregateAffiliateDiscount[P]>
  }




  export type AffiliateDiscountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AffiliateDiscountWhereInput
    orderBy?: AffiliateDiscountOrderByWithAggregationInput | AffiliateDiscountOrderByWithAggregationInput[]
    by: AffiliateDiscountScalarFieldEnum[] | AffiliateDiscountScalarFieldEnum
    having?: AffiliateDiscountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AffiliateDiscountCountAggregateInputType | true
    _avg?: AffiliateDiscountAvgAggregateInputType
    _sum?: AffiliateDiscountSumAggregateInputType
    _min?: AffiliateDiscountMinAggregateInputType
    _max?: AffiliateDiscountMaxAggregateInputType
  }

  export type AffiliateDiscountGroupByOutputType = {
    affiliate_discount_id: number
    user_id: number
    discount_amount: Decimal
    created_at: Date
    updated_at: Date
    _count: AffiliateDiscountCountAggregateOutputType | null
    _avg: AffiliateDiscountAvgAggregateOutputType | null
    _sum: AffiliateDiscountSumAggregateOutputType | null
    _min: AffiliateDiscountMinAggregateOutputType | null
    _max: AffiliateDiscountMaxAggregateOutputType | null
  }

  type GetAffiliateDiscountGroupByPayload<T extends AffiliateDiscountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AffiliateDiscountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AffiliateDiscountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AffiliateDiscountGroupByOutputType[P]>
            : GetScalarType<T[P], AffiliateDiscountGroupByOutputType[P]>
        }
      >
    >


  export type AffiliateDiscountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    affiliate_discount_id?: boolean
    user_id?: boolean
    discount_amount?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["affiliateDiscount"]>

  export type AffiliateDiscountSelectScalar = {
    affiliate_discount_id?: boolean
    user_id?: boolean
    discount_amount?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AffiliateDiscountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AffiliateDiscountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AffiliateDiscount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      affiliate_discount_id: number
      user_id: number
      discount_amount: Prisma.Decimal
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["affiliateDiscount"]>
    composites: {}
  }


  type AffiliateDiscountGetPayload<S extends boolean | null | undefined | AffiliateDiscountDefaultArgs> = $Result.GetResult<Prisma.$AffiliateDiscountPayload, S>

  type AffiliateDiscountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AffiliateDiscountFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AffiliateDiscountCountAggregateInputType | true
    }

  export interface AffiliateDiscountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AffiliateDiscount'], meta: { name: 'AffiliateDiscount' } }
    /**
     * Find zero or one AffiliateDiscount that matches the filter.
     * @param {AffiliateDiscountFindUniqueArgs} args - Arguments to find a AffiliateDiscount
     * @example
     * // Get one AffiliateDiscount
     * const affiliateDiscount = await prisma.affiliateDiscount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AffiliateDiscountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AffiliateDiscountFindUniqueArgs<ExtArgs>>
    ): Prisma__AffiliateDiscountClient<$Result.GetResult<Prisma.$AffiliateDiscountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AffiliateDiscount that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AffiliateDiscountFindUniqueOrThrowArgs} args - Arguments to find a AffiliateDiscount
     * @example
     * // Get one AffiliateDiscount
     * const affiliateDiscount = await prisma.affiliateDiscount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AffiliateDiscountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AffiliateDiscountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AffiliateDiscountClient<$Result.GetResult<Prisma.$AffiliateDiscountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AffiliateDiscount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateDiscountFindFirstArgs} args - Arguments to find a AffiliateDiscount
     * @example
     * // Get one AffiliateDiscount
     * const affiliateDiscount = await prisma.affiliateDiscount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AffiliateDiscountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AffiliateDiscountFindFirstArgs<ExtArgs>>
    ): Prisma__AffiliateDiscountClient<$Result.GetResult<Prisma.$AffiliateDiscountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AffiliateDiscount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateDiscountFindFirstOrThrowArgs} args - Arguments to find a AffiliateDiscount
     * @example
     * // Get one AffiliateDiscount
     * const affiliateDiscount = await prisma.affiliateDiscount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AffiliateDiscountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AffiliateDiscountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AffiliateDiscountClient<$Result.GetResult<Prisma.$AffiliateDiscountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AffiliateDiscounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateDiscountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AffiliateDiscounts
     * const affiliateDiscounts = await prisma.affiliateDiscount.findMany()
     * 
     * // Get first 10 AffiliateDiscounts
     * const affiliateDiscounts = await prisma.affiliateDiscount.findMany({ take: 10 })
     * 
     * // Only select the `affiliate_discount_id`
     * const affiliateDiscountWithAffiliate_discount_idOnly = await prisma.affiliateDiscount.findMany({ select: { affiliate_discount_id: true } })
     * 
    **/
    findMany<T extends AffiliateDiscountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AffiliateDiscountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AffiliateDiscountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AffiliateDiscount.
     * @param {AffiliateDiscountCreateArgs} args - Arguments to create a AffiliateDiscount.
     * @example
     * // Create one AffiliateDiscount
     * const AffiliateDiscount = await prisma.affiliateDiscount.create({
     *   data: {
     *     // ... data to create a AffiliateDiscount
     *   }
     * })
     * 
    **/
    create<T extends AffiliateDiscountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AffiliateDiscountCreateArgs<ExtArgs>>
    ): Prisma__AffiliateDiscountClient<$Result.GetResult<Prisma.$AffiliateDiscountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AffiliateDiscounts.
     *     @param {AffiliateDiscountCreateManyArgs} args - Arguments to create many AffiliateDiscounts.
     *     @example
     *     // Create many AffiliateDiscounts
     *     const affiliateDiscount = await prisma.affiliateDiscount.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AffiliateDiscountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AffiliateDiscountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AffiliateDiscount.
     * @param {AffiliateDiscountDeleteArgs} args - Arguments to delete one AffiliateDiscount.
     * @example
     * // Delete one AffiliateDiscount
     * const AffiliateDiscount = await prisma.affiliateDiscount.delete({
     *   where: {
     *     // ... filter to delete one AffiliateDiscount
     *   }
     * })
     * 
    **/
    delete<T extends AffiliateDiscountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AffiliateDiscountDeleteArgs<ExtArgs>>
    ): Prisma__AffiliateDiscountClient<$Result.GetResult<Prisma.$AffiliateDiscountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AffiliateDiscount.
     * @param {AffiliateDiscountUpdateArgs} args - Arguments to update one AffiliateDiscount.
     * @example
     * // Update one AffiliateDiscount
     * const affiliateDiscount = await prisma.affiliateDiscount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AffiliateDiscountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AffiliateDiscountUpdateArgs<ExtArgs>>
    ): Prisma__AffiliateDiscountClient<$Result.GetResult<Prisma.$AffiliateDiscountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AffiliateDiscounts.
     * @param {AffiliateDiscountDeleteManyArgs} args - Arguments to filter AffiliateDiscounts to delete.
     * @example
     * // Delete a few AffiliateDiscounts
     * const { count } = await prisma.affiliateDiscount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AffiliateDiscountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AffiliateDiscountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AffiliateDiscounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateDiscountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AffiliateDiscounts
     * const affiliateDiscount = await prisma.affiliateDiscount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AffiliateDiscountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AffiliateDiscountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AffiliateDiscount.
     * @param {AffiliateDiscountUpsertArgs} args - Arguments to update or create a AffiliateDiscount.
     * @example
     * // Update or create a AffiliateDiscount
     * const affiliateDiscount = await prisma.affiliateDiscount.upsert({
     *   create: {
     *     // ... data to create a AffiliateDiscount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AffiliateDiscount we want to update
     *   }
     * })
    **/
    upsert<T extends AffiliateDiscountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AffiliateDiscountUpsertArgs<ExtArgs>>
    ): Prisma__AffiliateDiscountClient<$Result.GetResult<Prisma.$AffiliateDiscountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AffiliateDiscounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateDiscountCountArgs} args - Arguments to filter AffiliateDiscounts to count.
     * @example
     * // Count the number of AffiliateDiscounts
     * const count = await prisma.affiliateDiscount.count({
     *   where: {
     *     // ... the filter for the AffiliateDiscounts we want to count
     *   }
     * })
    **/
    count<T extends AffiliateDiscountCountArgs>(
      args?: Subset<T, AffiliateDiscountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AffiliateDiscountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AffiliateDiscount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateDiscountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AffiliateDiscountAggregateArgs>(args: Subset<T, AffiliateDiscountAggregateArgs>): Prisma.PrismaPromise<GetAffiliateDiscountAggregateType<T>>

    /**
     * Group by AffiliateDiscount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateDiscountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AffiliateDiscountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AffiliateDiscountGroupByArgs['orderBy'] }
        : { orderBy?: AffiliateDiscountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AffiliateDiscountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAffiliateDiscountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AffiliateDiscount model
   */
  readonly fields: AffiliateDiscountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AffiliateDiscount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AffiliateDiscountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AffiliateDiscount model
   */ 
  interface AffiliateDiscountFieldRefs {
    readonly affiliate_discount_id: FieldRef<"AffiliateDiscount", 'Int'>
    readonly user_id: FieldRef<"AffiliateDiscount", 'Int'>
    readonly discount_amount: FieldRef<"AffiliateDiscount", 'Decimal'>
    readonly created_at: FieldRef<"AffiliateDiscount", 'DateTime'>
    readonly updated_at: FieldRef<"AffiliateDiscount", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * AffiliateDiscount findUnique
   */
  export type AffiliateDiscountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateDiscount
     */
    select?: AffiliateDiscountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AffiliateDiscountInclude<ExtArgs> | null
    /**
     * Filter, which AffiliateDiscount to fetch.
     */
    where: AffiliateDiscountWhereUniqueInput
  }


  /**
   * AffiliateDiscount findUniqueOrThrow
   */
  export type AffiliateDiscountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateDiscount
     */
    select?: AffiliateDiscountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AffiliateDiscountInclude<ExtArgs> | null
    /**
     * Filter, which AffiliateDiscount to fetch.
     */
    where: AffiliateDiscountWhereUniqueInput
  }


  /**
   * AffiliateDiscount findFirst
   */
  export type AffiliateDiscountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateDiscount
     */
    select?: AffiliateDiscountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AffiliateDiscountInclude<ExtArgs> | null
    /**
     * Filter, which AffiliateDiscount to fetch.
     */
    where?: AffiliateDiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AffiliateDiscounts to fetch.
     */
    orderBy?: AffiliateDiscountOrderByWithRelationInput | AffiliateDiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AffiliateDiscounts.
     */
    cursor?: AffiliateDiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AffiliateDiscounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AffiliateDiscounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AffiliateDiscounts.
     */
    distinct?: AffiliateDiscountScalarFieldEnum | AffiliateDiscountScalarFieldEnum[]
  }


  /**
   * AffiliateDiscount findFirstOrThrow
   */
  export type AffiliateDiscountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateDiscount
     */
    select?: AffiliateDiscountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AffiliateDiscountInclude<ExtArgs> | null
    /**
     * Filter, which AffiliateDiscount to fetch.
     */
    where?: AffiliateDiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AffiliateDiscounts to fetch.
     */
    orderBy?: AffiliateDiscountOrderByWithRelationInput | AffiliateDiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AffiliateDiscounts.
     */
    cursor?: AffiliateDiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AffiliateDiscounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AffiliateDiscounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AffiliateDiscounts.
     */
    distinct?: AffiliateDiscountScalarFieldEnum | AffiliateDiscountScalarFieldEnum[]
  }


  /**
   * AffiliateDiscount findMany
   */
  export type AffiliateDiscountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateDiscount
     */
    select?: AffiliateDiscountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AffiliateDiscountInclude<ExtArgs> | null
    /**
     * Filter, which AffiliateDiscounts to fetch.
     */
    where?: AffiliateDiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AffiliateDiscounts to fetch.
     */
    orderBy?: AffiliateDiscountOrderByWithRelationInput | AffiliateDiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AffiliateDiscounts.
     */
    cursor?: AffiliateDiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AffiliateDiscounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AffiliateDiscounts.
     */
    skip?: number
    distinct?: AffiliateDiscountScalarFieldEnum | AffiliateDiscountScalarFieldEnum[]
  }


  /**
   * AffiliateDiscount create
   */
  export type AffiliateDiscountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateDiscount
     */
    select?: AffiliateDiscountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AffiliateDiscountInclude<ExtArgs> | null
    /**
     * The data needed to create a AffiliateDiscount.
     */
    data: XOR<AffiliateDiscountCreateInput, AffiliateDiscountUncheckedCreateInput>
  }


  /**
   * AffiliateDiscount createMany
   */
  export type AffiliateDiscountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AffiliateDiscounts.
     */
    data: AffiliateDiscountCreateManyInput | AffiliateDiscountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AffiliateDiscount update
   */
  export type AffiliateDiscountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateDiscount
     */
    select?: AffiliateDiscountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AffiliateDiscountInclude<ExtArgs> | null
    /**
     * The data needed to update a AffiliateDiscount.
     */
    data: XOR<AffiliateDiscountUpdateInput, AffiliateDiscountUncheckedUpdateInput>
    /**
     * Choose, which AffiliateDiscount to update.
     */
    where: AffiliateDiscountWhereUniqueInput
  }


  /**
   * AffiliateDiscount updateMany
   */
  export type AffiliateDiscountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AffiliateDiscounts.
     */
    data: XOR<AffiliateDiscountUpdateManyMutationInput, AffiliateDiscountUncheckedUpdateManyInput>
    /**
     * Filter which AffiliateDiscounts to update
     */
    where?: AffiliateDiscountWhereInput
  }


  /**
   * AffiliateDiscount upsert
   */
  export type AffiliateDiscountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateDiscount
     */
    select?: AffiliateDiscountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AffiliateDiscountInclude<ExtArgs> | null
    /**
     * The filter to search for the AffiliateDiscount to update in case it exists.
     */
    where: AffiliateDiscountWhereUniqueInput
    /**
     * In case the AffiliateDiscount found by the `where` argument doesn't exist, create a new AffiliateDiscount with this data.
     */
    create: XOR<AffiliateDiscountCreateInput, AffiliateDiscountUncheckedCreateInput>
    /**
     * In case the AffiliateDiscount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AffiliateDiscountUpdateInput, AffiliateDiscountUncheckedUpdateInput>
  }


  /**
   * AffiliateDiscount delete
   */
  export type AffiliateDiscountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateDiscount
     */
    select?: AffiliateDiscountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AffiliateDiscountInclude<ExtArgs> | null
    /**
     * Filter which AffiliateDiscount to delete.
     */
    where: AffiliateDiscountWhereUniqueInput
  }


  /**
   * AffiliateDiscount deleteMany
   */
  export type AffiliateDiscountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AffiliateDiscounts to delete
     */
    where?: AffiliateDiscountWhereInput
  }


  /**
   * AffiliateDiscount without action
   */
  export type AffiliateDiscountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateDiscount
     */
    select?: AffiliateDiscountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AffiliateDiscountInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    category_id: number | null
  }

  export type CategorySumAggregateOutputType = {
    category_id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    category_id: number | null
    category_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    category_id: number | null
    category_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    category_id: number
    category_name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    category_id?: true
  }

  export type CategorySumAggregateInputType = {
    category_id?: true
  }

  export type CategoryMinAggregateInputType = {
    category_id?: true
    category_name?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryMaxAggregateInputType = {
    category_id?: true
    category_name?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryCountAggregateInputType = {
    category_id?: true
    category_name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    category_id: number
    category_name: string
    created_at: Date
    updated_at: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    category_id?: boolean
    category_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: number
      category_name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const categoryWithCategory_idOnly = await prisma.category.findMany({ select: { category_id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly category_id: FieldRef<"Category", 'Int'>
    readonly category_name: FieldRef<"Category", 'String'>
    readonly created_at: FieldRef<"Category", 'DateTime'>
    readonly updated_at: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    admin_id: number | null
  }

  export type AdminSumAggregateOutputType = {
    admin_id: number | null
  }

  export type AdminMinAggregateOutputType = {
    admin_id: number | null
    username: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    admin_id: number | null
    username: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AdminCountAggregateOutputType = {
    admin_id: number
    username: number
    password: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    admin_id?: true
  }

  export type AdminSumAggregateInputType = {
    admin_id?: true
  }

  export type AdminMinAggregateInputType = {
    admin_id?: true
    username?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type AdminMaxAggregateInputType = {
    admin_id?: true
    username?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type AdminCountAggregateInputType = {
    admin_id?: true
    username?: true
    password?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    admin_id: number
    username: string
    password: string
    created_at: Date
    updated_at: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admin_id?: boolean
    username?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    Promotion?: boolean | Admin$PromotionArgs<ExtArgs>
    Orders?: boolean | Admin$OrdersArgs<ExtArgs>
    ProofsOfPayment?: boolean | Admin$ProofsOfPaymentArgs<ExtArgs>
    Warehouse?: boolean | Admin$WarehouseArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    admin_id?: boolean
    username?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Promotion?: boolean | Admin$PromotionArgs<ExtArgs>
    Orders?: boolean | Admin$OrdersArgs<ExtArgs>
    ProofsOfPayment?: boolean | Admin$ProofsOfPaymentArgs<ExtArgs>
    Warehouse?: boolean | Admin$WarehouseArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      Promotion: Prisma.$PromotionPayload<ExtArgs>[]
      Orders: Prisma.$OrdersPayload<ExtArgs>[]
      ProofsOfPayment: Prisma.$ProofsOfPaymentPayload<ExtArgs>[]
      Warehouse: Prisma.$WarehousePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      admin_id: number
      username: string
      password: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }


  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `admin_id`
     * const adminWithAdmin_idOnly = await prisma.admin.findMany({ select: { admin_id: true } })
     * 
    **/
    findMany<T extends AdminFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends AdminCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminCreateArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Admins.
     *     @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdminCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends AdminDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends AdminUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Promotion<T extends Admin$PromotionArgs<ExtArgs> = {}>(args?: Subset<T, Admin$PromotionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'findMany'> | Null>;

    Orders<T extends Admin$OrdersArgs<ExtArgs> = {}>(args?: Subset<T, Admin$OrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'findMany'> | Null>;

    ProofsOfPayment<T extends Admin$ProofsOfPaymentArgs<ExtArgs> = {}>(args?: Subset<T, Admin$ProofsOfPaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProofsOfPaymentPayload<ExtArgs>, T, 'findMany'> | Null>;

    Warehouse<T extends Admin$WarehouseArgs<ExtArgs> = {}>(args?: Subset<T, Admin$WarehouseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly admin_id: FieldRef<"Admin", 'Int'>
    readonly username: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly created_at: FieldRef<"Admin", 'DateTime'>
    readonly updated_at: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }


  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }


  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }


  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }


  /**
   * Admin.Promotion
   */
  export type Admin$PromotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromotionInclude<ExtArgs> | null
    where?: PromotionWhereInput
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    cursor?: PromotionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }


  /**
   * Admin.Orders
   */
  export type Admin$OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * Admin.ProofsOfPayment
   */
  export type Admin$ProofsOfPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofsOfPayment
     */
    select?: ProofsOfPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProofsOfPaymentInclude<ExtArgs> | null
    where?: ProofsOfPaymentWhereInput
    orderBy?: ProofsOfPaymentOrderByWithRelationInput | ProofsOfPaymentOrderByWithRelationInput[]
    cursor?: ProofsOfPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProofsOfPaymentScalarFieldEnum | ProofsOfPaymentScalarFieldEnum[]
  }


  /**
   * Admin.Warehouse
   */
  export type Admin$WarehouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarehouseInclude<ExtArgs> | null
    where?: WarehouseWhereInput
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    cursor?: WarehouseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }


  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
  }



  /**
   * Model Promotion
   */

  export type AggregatePromotion = {
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  export type PromotionAvgAggregateOutputType = {
    promo_id: number | null
    maximum_usage: number | null
    amount: Decimal | null
    remaining_usage: number | null
    admin_id: number | null
    product_id: number | null
  }

  export type PromotionSumAggregateOutputType = {
    promo_id: number | null
    maximum_usage: number | null
    amount: Decimal | null
    remaining_usage: number | null
    admin_id: number | null
    product_id: number | null
  }

  export type PromotionMinAggregateOutputType = {
    promo_id: number | null
    type: string | null
    maximum_usage: number | null
    amount: Decimal | null
    remaining_usage: number | null
    admin_id: number | null
    product_id: number | null
    promo_code: string | null
  }

  export type PromotionMaxAggregateOutputType = {
    promo_id: number | null
    type: string | null
    maximum_usage: number | null
    amount: Decimal | null
    remaining_usage: number | null
    admin_id: number | null
    product_id: number | null
    promo_code: string | null
  }

  export type PromotionCountAggregateOutputType = {
    promo_id: number
    type: number
    maximum_usage: number
    amount: number
    remaining_usage: number
    admin_id: number
    product_id: number
    promo_code: number
    _all: number
  }


  export type PromotionAvgAggregateInputType = {
    promo_id?: true
    maximum_usage?: true
    amount?: true
    remaining_usage?: true
    admin_id?: true
    product_id?: true
  }

  export type PromotionSumAggregateInputType = {
    promo_id?: true
    maximum_usage?: true
    amount?: true
    remaining_usage?: true
    admin_id?: true
    product_id?: true
  }

  export type PromotionMinAggregateInputType = {
    promo_id?: true
    type?: true
    maximum_usage?: true
    amount?: true
    remaining_usage?: true
    admin_id?: true
    product_id?: true
    promo_code?: true
  }

  export type PromotionMaxAggregateInputType = {
    promo_id?: true
    type?: true
    maximum_usage?: true
    amount?: true
    remaining_usage?: true
    admin_id?: true
    product_id?: true
    promo_code?: true
  }

  export type PromotionCountAggregateInputType = {
    promo_id?: true
    type?: true
    maximum_usage?: true
    amount?: true
    remaining_usage?: true
    admin_id?: true
    product_id?: true
    promo_code?: true
    _all?: true
  }

  export type PromotionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotion to aggregate.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promotions
    **/
    _count?: true | PromotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromotionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromotionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotionMaxAggregateInputType
  }

  export type GetPromotionAggregateType<T extends PromotionAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotion[P]>
      : GetScalarType<T[P], AggregatePromotion[P]>
  }




  export type PromotionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionWhereInput
    orderBy?: PromotionOrderByWithAggregationInput | PromotionOrderByWithAggregationInput[]
    by: PromotionScalarFieldEnum[] | PromotionScalarFieldEnum
    having?: PromotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotionCountAggregateInputType | true
    _avg?: PromotionAvgAggregateInputType
    _sum?: PromotionSumAggregateInputType
    _min?: PromotionMinAggregateInputType
    _max?: PromotionMaxAggregateInputType
  }

  export type PromotionGroupByOutputType = {
    promo_id: number
    type: string
    maximum_usage: number
    amount: Decimal
    remaining_usage: number
    admin_id: number
    product_id: number | null
    promo_code: string | null
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  type GetPromotionGroupByPayload<T extends PromotionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotionGroupByOutputType[P]>
            : GetScalarType<T[P], PromotionGroupByOutputType[P]>
        }
      >
    >


  export type PromotionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    promo_id?: boolean
    type?: boolean
    maximum_usage?: boolean
    amount?: boolean
    remaining_usage?: boolean
    admin_id?: boolean
    product_id?: boolean
    promo_code?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    product?: boolean | Promotion$productArgs<ExtArgs>
    UserPromoUsage?: boolean | Promotion$UserPromoUsageArgs<ExtArgs>
    _count?: boolean | PromotionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectScalar = {
    promo_id?: boolean
    type?: boolean
    maximum_usage?: boolean
    amount?: boolean
    remaining_usage?: boolean
    admin_id?: boolean
    product_id?: boolean
    promo_code?: boolean
  }

  export type PromotionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    product?: boolean | Promotion$productArgs<ExtArgs>
    UserPromoUsage?: boolean | Promotion$UserPromoUsageArgs<ExtArgs>
    _count?: boolean | PromotionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PromotionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promotion"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs> | null
      UserPromoUsage: Prisma.$UserPromoUsagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      promo_id: number
      type: string
      maximum_usage: number
      amount: Prisma.Decimal
      remaining_usage: number
      admin_id: number
      product_id: number | null
      promo_code: string | null
    }, ExtArgs["result"]["promotion"]>
    composites: {}
  }


  type PromotionGetPayload<S extends boolean | null | undefined | PromotionDefaultArgs> = $Result.GetResult<Prisma.$PromotionPayload, S>

  type PromotionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PromotionFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PromotionCountAggregateInputType | true
    }

  export interface PromotionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promotion'], meta: { name: 'Promotion' } }
    /**
     * Find zero or one Promotion that matches the filter.
     * @param {PromotionFindUniqueArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PromotionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionFindUniqueArgs<ExtArgs>>
    ): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Promotion that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PromotionFindUniqueOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PromotionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Promotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PromotionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionFindFirstArgs<ExtArgs>>
    ): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Promotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PromotionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Promotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promotions
     * const promotions = await prisma.promotion.findMany()
     * 
     * // Get first 10 Promotions
     * const promotions = await prisma.promotion.findMany({ take: 10 })
     * 
     * // Only select the `promo_id`
     * const promotionWithPromo_idOnly = await prisma.promotion.findMany({ select: { promo_id: true } })
     * 
    **/
    findMany<T extends PromotionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Promotion.
     * @param {PromotionCreateArgs} args - Arguments to create a Promotion.
     * @example
     * // Create one Promotion
     * const Promotion = await prisma.promotion.create({
     *   data: {
     *     // ... data to create a Promotion
     *   }
     * })
     * 
    **/
    create<T extends PromotionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionCreateArgs<ExtArgs>>
    ): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Promotions.
     *     @param {PromotionCreateManyArgs} args - Arguments to create many Promotions.
     *     @example
     *     // Create many Promotions
     *     const promotion = await prisma.promotion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PromotionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Promotion.
     * @param {PromotionDeleteArgs} args - Arguments to delete one Promotion.
     * @example
     * // Delete one Promotion
     * const Promotion = await prisma.promotion.delete({
     *   where: {
     *     // ... filter to delete one Promotion
     *   }
     * })
     * 
    **/
    delete<T extends PromotionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionDeleteArgs<ExtArgs>>
    ): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Promotion.
     * @param {PromotionUpdateArgs} args - Arguments to update one Promotion.
     * @example
     * // Update one Promotion
     * const promotion = await prisma.promotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PromotionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionUpdateArgs<ExtArgs>>
    ): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Promotions.
     * @param {PromotionDeleteManyArgs} args - Arguments to filter Promotions to delete.
     * @example
     * // Delete a few Promotions
     * const { count } = await prisma.promotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PromotionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promotions
     * const promotion = await prisma.promotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PromotionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Promotion.
     * @param {PromotionUpsertArgs} args - Arguments to update or create a Promotion.
     * @example
     * // Update or create a Promotion
     * const promotion = await prisma.promotion.upsert({
     *   create: {
     *     // ... data to create a Promotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promotion we want to update
     *   }
     * })
    **/
    upsert<T extends PromotionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionUpsertArgs<ExtArgs>>
    ): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionCountArgs} args - Arguments to filter Promotions to count.
     * @example
     * // Count the number of Promotions
     * const count = await prisma.promotion.count({
     *   where: {
     *     // ... the filter for the Promotions we want to count
     *   }
     * })
    **/
    count<T extends PromotionCountArgs>(
      args?: Subset<T, PromotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromotionAggregateArgs>(args: Subset<T, PromotionAggregateArgs>): Prisma.PrismaPromise<GetPromotionAggregateType<T>>

    /**
     * Group by Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotionGroupByArgs['orderBy'] }
        : { orderBy?: PromotionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promotion model
   */
  readonly fields: PromotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromotionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    product<T extends Promotion$productArgs<ExtArgs> = {}>(args?: Subset<T, Promotion$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    UserPromoUsage<T extends Promotion$UserPromoUsageArgs<ExtArgs> = {}>(args?: Subset<T, Promotion$UserPromoUsageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPromoUsagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Promotion model
   */ 
  interface PromotionFieldRefs {
    readonly promo_id: FieldRef<"Promotion", 'Int'>
    readonly type: FieldRef<"Promotion", 'String'>
    readonly maximum_usage: FieldRef<"Promotion", 'Int'>
    readonly amount: FieldRef<"Promotion", 'Decimal'>
    readonly remaining_usage: FieldRef<"Promotion", 'Int'>
    readonly admin_id: FieldRef<"Promotion", 'Int'>
    readonly product_id: FieldRef<"Promotion", 'Int'>
    readonly promo_code: FieldRef<"Promotion", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Promotion findUnique
   */
  export type PromotionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }


  /**
   * Promotion findUniqueOrThrow
   */
  export type PromotionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }


  /**
   * Promotion findFirst
   */
  export type PromotionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }


  /**
   * Promotion findFirstOrThrow
   */
  export type PromotionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }


  /**
   * Promotion findMany
   */
  export type PromotionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotions to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }


  /**
   * Promotion create
   */
  export type PromotionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The data needed to create a Promotion.
     */
    data: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
  }


  /**
   * Promotion createMany
   */
  export type PromotionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promotions.
     */
    data: PromotionCreateManyInput | PromotionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Promotion update
   */
  export type PromotionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The data needed to update a Promotion.
     */
    data: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
    /**
     * Choose, which Promotion to update.
     */
    where: PromotionWhereUniqueInput
  }


  /**
   * Promotion updateMany
   */
  export type PromotionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promotions.
     */
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyInput>
    /**
     * Filter which Promotions to update
     */
    where?: PromotionWhereInput
  }


  /**
   * Promotion upsert
   */
  export type PromotionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The filter to search for the Promotion to update in case it exists.
     */
    where: PromotionWhereUniqueInput
    /**
     * In case the Promotion found by the `where` argument doesn't exist, create a new Promotion with this data.
     */
    create: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
    /**
     * In case the Promotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
  }


  /**
   * Promotion delete
   */
  export type PromotionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter which Promotion to delete.
     */
    where: PromotionWhereUniqueInput
  }


  /**
   * Promotion deleteMany
   */
  export type PromotionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotions to delete
     */
    where?: PromotionWhereInput
  }


  /**
   * Promotion.product
   */
  export type Promotion$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }


  /**
   * Promotion.UserPromoUsage
   */
  export type Promotion$UserPromoUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPromoUsage
     */
    select?: UserPromoUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPromoUsageInclude<ExtArgs> | null
    where?: UserPromoUsageWhereInput
    orderBy?: UserPromoUsageOrderByWithRelationInput | UserPromoUsageOrderByWithRelationInput[]
    cursor?: UserPromoUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPromoUsageScalarFieldEnum | UserPromoUsageScalarFieldEnum[]
  }


  /**
   * Promotion without action
   */
  export type PromotionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromotionInclude<ExtArgs> | null
  }



  /**
   * Model UserPromoUsage
   */

  export type AggregateUserPromoUsage = {
    _count: UserPromoUsageCountAggregateOutputType | null
    _avg: UserPromoUsageAvgAggregateOutputType | null
    _sum: UserPromoUsageSumAggregateOutputType | null
    _min: UserPromoUsageMinAggregateOutputType | null
    _max: UserPromoUsageMaxAggregateOutputType | null
  }

  export type UserPromoUsageAvgAggregateOutputType = {
    user_promo_usage_id: number | null
    user_id: number | null
    promo_id: number | null
    usage_count: number | null
    order_id: number | null
  }

  export type UserPromoUsageSumAggregateOutputType = {
    user_promo_usage_id: number | null
    user_id: number | null
    promo_id: number | null
    usage_count: number | null
    order_id: number | null
  }

  export type UserPromoUsageMinAggregateOutputType = {
    user_promo_usage_id: number | null
    user_id: number | null
    promo_id: number | null
    usage_count: number | null
    order_id: number | null
  }

  export type UserPromoUsageMaxAggregateOutputType = {
    user_promo_usage_id: number | null
    user_id: number | null
    promo_id: number | null
    usage_count: number | null
    order_id: number | null
  }

  export type UserPromoUsageCountAggregateOutputType = {
    user_promo_usage_id: number
    user_id: number
    promo_id: number
    usage_count: number
    order_id: number
    _all: number
  }


  export type UserPromoUsageAvgAggregateInputType = {
    user_promo_usage_id?: true
    user_id?: true
    promo_id?: true
    usage_count?: true
    order_id?: true
  }

  export type UserPromoUsageSumAggregateInputType = {
    user_promo_usage_id?: true
    user_id?: true
    promo_id?: true
    usage_count?: true
    order_id?: true
  }

  export type UserPromoUsageMinAggregateInputType = {
    user_promo_usage_id?: true
    user_id?: true
    promo_id?: true
    usage_count?: true
    order_id?: true
  }

  export type UserPromoUsageMaxAggregateInputType = {
    user_promo_usage_id?: true
    user_id?: true
    promo_id?: true
    usage_count?: true
    order_id?: true
  }

  export type UserPromoUsageCountAggregateInputType = {
    user_promo_usage_id?: true
    user_id?: true
    promo_id?: true
    usage_count?: true
    order_id?: true
    _all?: true
  }

  export type UserPromoUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPromoUsage to aggregate.
     */
    where?: UserPromoUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPromoUsages to fetch.
     */
    orderBy?: UserPromoUsageOrderByWithRelationInput | UserPromoUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPromoUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPromoUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPromoUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPromoUsages
    **/
    _count?: true | UserPromoUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPromoUsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPromoUsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPromoUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPromoUsageMaxAggregateInputType
  }

  export type GetUserPromoUsageAggregateType<T extends UserPromoUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPromoUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPromoUsage[P]>
      : GetScalarType<T[P], AggregateUserPromoUsage[P]>
  }




  export type UserPromoUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPromoUsageWhereInput
    orderBy?: UserPromoUsageOrderByWithAggregationInput | UserPromoUsageOrderByWithAggregationInput[]
    by: UserPromoUsageScalarFieldEnum[] | UserPromoUsageScalarFieldEnum
    having?: UserPromoUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPromoUsageCountAggregateInputType | true
    _avg?: UserPromoUsageAvgAggregateInputType
    _sum?: UserPromoUsageSumAggregateInputType
    _min?: UserPromoUsageMinAggregateInputType
    _max?: UserPromoUsageMaxAggregateInputType
  }

  export type UserPromoUsageGroupByOutputType = {
    user_promo_usage_id: number
    user_id: number
    promo_id: number
    usage_count: number
    order_id: number | null
    _count: UserPromoUsageCountAggregateOutputType | null
    _avg: UserPromoUsageAvgAggregateOutputType | null
    _sum: UserPromoUsageSumAggregateOutputType | null
    _min: UserPromoUsageMinAggregateOutputType | null
    _max: UserPromoUsageMaxAggregateOutputType | null
  }

  type GetUserPromoUsageGroupByPayload<T extends UserPromoUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPromoUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPromoUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPromoUsageGroupByOutputType[P]>
            : GetScalarType<T[P], UserPromoUsageGroupByOutputType[P]>
        }
      >
    >


  export type UserPromoUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_promo_usage_id?: boolean
    user_id?: boolean
    promo_id?: boolean
    usage_count?: boolean
    order_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    promo?: boolean | PromotionDefaultArgs<ExtArgs>
    order?: boolean | UserPromoUsage$orderArgs<ExtArgs>
  }, ExtArgs["result"]["userPromoUsage"]>

  export type UserPromoUsageSelectScalar = {
    user_promo_usage_id?: boolean
    user_id?: boolean
    promo_id?: boolean
    usage_count?: boolean
    order_id?: boolean
  }

  export type UserPromoUsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    promo?: boolean | PromotionDefaultArgs<ExtArgs>
    order?: boolean | UserPromoUsage$orderArgs<ExtArgs>
  }


  export type $UserPromoUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPromoUsage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      promo: Prisma.$PromotionPayload<ExtArgs>
      order: Prisma.$OrdersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      user_promo_usage_id: number
      user_id: number
      promo_id: number
      usage_count: number
      order_id: number | null
    }, ExtArgs["result"]["userPromoUsage"]>
    composites: {}
  }


  type UserPromoUsageGetPayload<S extends boolean | null | undefined | UserPromoUsageDefaultArgs> = $Result.GetResult<Prisma.$UserPromoUsagePayload, S>

  type UserPromoUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserPromoUsageFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserPromoUsageCountAggregateInputType | true
    }

  export interface UserPromoUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPromoUsage'], meta: { name: 'UserPromoUsage' } }
    /**
     * Find zero or one UserPromoUsage that matches the filter.
     * @param {UserPromoUsageFindUniqueArgs} args - Arguments to find a UserPromoUsage
     * @example
     * // Get one UserPromoUsage
     * const userPromoUsage = await prisma.userPromoUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserPromoUsageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserPromoUsageFindUniqueArgs<ExtArgs>>
    ): Prisma__UserPromoUsageClient<$Result.GetResult<Prisma.$UserPromoUsagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserPromoUsage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserPromoUsageFindUniqueOrThrowArgs} args - Arguments to find a UserPromoUsage
     * @example
     * // Get one UserPromoUsage
     * const userPromoUsage = await prisma.userPromoUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserPromoUsageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPromoUsageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserPromoUsageClient<$Result.GetResult<Prisma.$UserPromoUsagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserPromoUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPromoUsageFindFirstArgs} args - Arguments to find a UserPromoUsage
     * @example
     * // Get one UserPromoUsage
     * const userPromoUsage = await prisma.userPromoUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserPromoUsageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPromoUsageFindFirstArgs<ExtArgs>>
    ): Prisma__UserPromoUsageClient<$Result.GetResult<Prisma.$UserPromoUsagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserPromoUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPromoUsageFindFirstOrThrowArgs} args - Arguments to find a UserPromoUsage
     * @example
     * // Get one UserPromoUsage
     * const userPromoUsage = await prisma.userPromoUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserPromoUsageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPromoUsageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserPromoUsageClient<$Result.GetResult<Prisma.$UserPromoUsagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserPromoUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPromoUsageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPromoUsages
     * const userPromoUsages = await prisma.userPromoUsage.findMany()
     * 
     * // Get first 10 UserPromoUsages
     * const userPromoUsages = await prisma.userPromoUsage.findMany({ take: 10 })
     * 
     * // Only select the `user_promo_usage_id`
     * const userPromoUsageWithUser_promo_usage_idOnly = await prisma.userPromoUsage.findMany({ select: { user_promo_usage_id: true } })
     * 
    **/
    findMany<T extends UserPromoUsageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPromoUsageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPromoUsagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserPromoUsage.
     * @param {UserPromoUsageCreateArgs} args - Arguments to create a UserPromoUsage.
     * @example
     * // Create one UserPromoUsage
     * const UserPromoUsage = await prisma.userPromoUsage.create({
     *   data: {
     *     // ... data to create a UserPromoUsage
     *   }
     * })
     * 
    **/
    create<T extends UserPromoUsageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserPromoUsageCreateArgs<ExtArgs>>
    ): Prisma__UserPromoUsageClient<$Result.GetResult<Prisma.$UserPromoUsagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserPromoUsages.
     *     @param {UserPromoUsageCreateManyArgs} args - Arguments to create many UserPromoUsages.
     *     @example
     *     // Create many UserPromoUsages
     *     const userPromoUsage = await prisma.userPromoUsage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserPromoUsageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPromoUsageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserPromoUsage.
     * @param {UserPromoUsageDeleteArgs} args - Arguments to delete one UserPromoUsage.
     * @example
     * // Delete one UserPromoUsage
     * const UserPromoUsage = await prisma.userPromoUsage.delete({
     *   where: {
     *     // ... filter to delete one UserPromoUsage
     *   }
     * })
     * 
    **/
    delete<T extends UserPromoUsageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserPromoUsageDeleteArgs<ExtArgs>>
    ): Prisma__UserPromoUsageClient<$Result.GetResult<Prisma.$UserPromoUsagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserPromoUsage.
     * @param {UserPromoUsageUpdateArgs} args - Arguments to update one UserPromoUsage.
     * @example
     * // Update one UserPromoUsage
     * const userPromoUsage = await prisma.userPromoUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserPromoUsageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserPromoUsageUpdateArgs<ExtArgs>>
    ): Prisma__UserPromoUsageClient<$Result.GetResult<Prisma.$UserPromoUsagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserPromoUsages.
     * @param {UserPromoUsageDeleteManyArgs} args - Arguments to filter UserPromoUsages to delete.
     * @example
     * // Delete a few UserPromoUsages
     * const { count } = await prisma.userPromoUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserPromoUsageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPromoUsageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPromoUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPromoUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPromoUsages
     * const userPromoUsage = await prisma.userPromoUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserPromoUsageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserPromoUsageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPromoUsage.
     * @param {UserPromoUsageUpsertArgs} args - Arguments to update or create a UserPromoUsage.
     * @example
     * // Update or create a UserPromoUsage
     * const userPromoUsage = await prisma.userPromoUsage.upsert({
     *   create: {
     *     // ... data to create a UserPromoUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPromoUsage we want to update
     *   }
     * })
    **/
    upsert<T extends UserPromoUsageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserPromoUsageUpsertArgs<ExtArgs>>
    ): Prisma__UserPromoUsageClient<$Result.GetResult<Prisma.$UserPromoUsagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserPromoUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPromoUsageCountArgs} args - Arguments to filter UserPromoUsages to count.
     * @example
     * // Count the number of UserPromoUsages
     * const count = await prisma.userPromoUsage.count({
     *   where: {
     *     // ... the filter for the UserPromoUsages we want to count
     *   }
     * })
    **/
    count<T extends UserPromoUsageCountArgs>(
      args?: Subset<T, UserPromoUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPromoUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPromoUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPromoUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPromoUsageAggregateArgs>(args: Subset<T, UserPromoUsageAggregateArgs>): Prisma.PrismaPromise<GetUserPromoUsageAggregateType<T>>

    /**
     * Group by UserPromoUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPromoUsageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPromoUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPromoUsageGroupByArgs['orderBy'] }
        : { orderBy?: UserPromoUsageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPromoUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPromoUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPromoUsage model
   */
  readonly fields: UserPromoUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPromoUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPromoUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    promo<T extends PromotionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromotionDefaultArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    order<T extends UserPromoUsage$orderArgs<ExtArgs> = {}>(args?: Subset<T, UserPromoUsage$orderArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserPromoUsage model
   */ 
  interface UserPromoUsageFieldRefs {
    readonly user_promo_usage_id: FieldRef<"UserPromoUsage", 'Int'>
    readonly user_id: FieldRef<"UserPromoUsage", 'Int'>
    readonly promo_id: FieldRef<"UserPromoUsage", 'Int'>
    readonly usage_count: FieldRef<"UserPromoUsage", 'Int'>
    readonly order_id: FieldRef<"UserPromoUsage", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * UserPromoUsage findUnique
   */
  export type UserPromoUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPromoUsage
     */
    select?: UserPromoUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPromoUsageInclude<ExtArgs> | null
    /**
     * Filter, which UserPromoUsage to fetch.
     */
    where: UserPromoUsageWhereUniqueInput
  }


  /**
   * UserPromoUsage findUniqueOrThrow
   */
  export type UserPromoUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPromoUsage
     */
    select?: UserPromoUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPromoUsageInclude<ExtArgs> | null
    /**
     * Filter, which UserPromoUsage to fetch.
     */
    where: UserPromoUsageWhereUniqueInput
  }


  /**
   * UserPromoUsage findFirst
   */
  export type UserPromoUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPromoUsage
     */
    select?: UserPromoUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPromoUsageInclude<ExtArgs> | null
    /**
     * Filter, which UserPromoUsage to fetch.
     */
    where?: UserPromoUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPromoUsages to fetch.
     */
    orderBy?: UserPromoUsageOrderByWithRelationInput | UserPromoUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPromoUsages.
     */
    cursor?: UserPromoUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPromoUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPromoUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPromoUsages.
     */
    distinct?: UserPromoUsageScalarFieldEnum | UserPromoUsageScalarFieldEnum[]
  }


  /**
   * UserPromoUsage findFirstOrThrow
   */
  export type UserPromoUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPromoUsage
     */
    select?: UserPromoUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPromoUsageInclude<ExtArgs> | null
    /**
     * Filter, which UserPromoUsage to fetch.
     */
    where?: UserPromoUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPromoUsages to fetch.
     */
    orderBy?: UserPromoUsageOrderByWithRelationInput | UserPromoUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPromoUsages.
     */
    cursor?: UserPromoUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPromoUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPromoUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPromoUsages.
     */
    distinct?: UserPromoUsageScalarFieldEnum | UserPromoUsageScalarFieldEnum[]
  }


  /**
   * UserPromoUsage findMany
   */
  export type UserPromoUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPromoUsage
     */
    select?: UserPromoUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPromoUsageInclude<ExtArgs> | null
    /**
     * Filter, which UserPromoUsages to fetch.
     */
    where?: UserPromoUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPromoUsages to fetch.
     */
    orderBy?: UserPromoUsageOrderByWithRelationInput | UserPromoUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPromoUsages.
     */
    cursor?: UserPromoUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPromoUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPromoUsages.
     */
    skip?: number
    distinct?: UserPromoUsageScalarFieldEnum | UserPromoUsageScalarFieldEnum[]
  }


  /**
   * UserPromoUsage create
   */
  export type UserPromoUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPromoUsage
     */
    select?: UserPromoUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPromoUsageInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPromoUsage.
     */
    data: XOR<UserPromoUsageCreateInput, UserPromoUsageUncheckedCreateInput>
  }


  /**
   * UserPromoUsage createMany
   */
  export type UserPromoUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPromoUsages.
     */
    data: UserPromoUsageCreateManyInput | UserPromoUsageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserPromoUsage update
   */
  export type UserPromoUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPromoUsage
     */
    select?: UserPromoUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPromoUsageInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPromoUsage.
     */
    data: XOR<UserPromoUsageUpdateInput, UserPromoUsageUncheckedUpdateInput>
    /**
     * Choose, which UserPromoUsage to update.
     */
    where: UserPromoUsageWhereUniqueInput
  }


  /**
   * UserPromoUsage updateMany
   */
  export type UserPromoUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPromoUsages.
     */
    data: XOR<UserPromoUsageUpdateManyMutationInput, UserPromoUsageUncheckedUpdateManyInput>
    /**
     * Filter which UserPromoUsages to update
     */
    where?: UserPromoUsageWhereInput
  }


  /**
   * UserPromoUsage upsert
   */
  export type UserPromoUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPromoUsage
     */
    select?: UserPromoUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPromoUsageInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPromoUsage to update in case it exists.
     */
    where: UserPromoUsageWhereUniqueInput
    /**
     * In case the UserPromoUsage found by the `where` argument doesn't exist, create a new UserPromoUsage with this data.
     */
    create: XOR<UserPromoUsageCreateInput, UserPromoUsageUncheckedCreateInput>
    /**
     * In case the UserPromoUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPromoUsageUpdateInput, UserPromoUsageUncheckedUpdateInput>
  }


  /**
   * UserPromoUsage delete
   */
  export type UserPromoUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPromoUsage
     */
    select?: UserPromoUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPromoUsageInclude<ExtArgs> | null
    /**
     * Filter which UserPromoUsage to delete.
     */
    where: UserPromoUsageWhereUniqueInput
  }


  /**
   * UserPromoUsage deleteMany
   */
  export type UserPromoUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPromoUsages to delete
     */
    where?: UserPromoUsageWhereInput
  }


  /**
   * UserPromoUsage.order
   */
  export type UserPromoUsage$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
  }


  /**
   * UserPromoUsage without action
   */
  export type UserPromoUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPromoUsage
     */
    select?: UserPromoUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPromoUsageInclude<ExtArgs> | null
  }



  /**
   * Model ShoppingCartItem
   */

  export type AggregateShoppingCartItem = {
    _count: ShoppingCartItemCountAggregateOutputType | null
    _avg: ShoppingCartItemAvgAggregateOutputType | null
    _sum: ShoppingCartItemSumAggregateOutputType | null
    _min: ShoppingCartItemMinAggregateOutputType | null
    _max: ShoppingCartItemMaxAggregateOutputType | null
  }

  export type ShoppingCartItemAvgAggregateOutputType = {
    cart_item_id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type ShoppingCartItemSumAggregateOutputType = {
    cart_item_id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type ShoppingCartItemMinAggregateOutputType = {
    cart_item_id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ShoppingCartItemMaxAggregateOutputType = {
    cart_item_id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ShoppingCartItemCountAggregateOutputType = {
    cart_item_id: number
    cart_id: number
    product_id: number
    quantity: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ShoppingCartItemAvgAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
  }

  export type ShoppingCartItemSumAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
  }

  export type ShoppingCartItemMinAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    created_at?: true
    updated_at?: true
  }

  export type ShoppingCartItemMaxAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    created_at?: true
    updated_at?: true
  }

  export type ShoppingCartItemCountAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ShoppingCartItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingCartItem to aggregate.
     */
    where?: ShoppingCartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingCartItems to fetch.
     */
    orderBy?: ShoppingCartItemOrderByWithRelationInput | ShoppingCartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShoppingCartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingCartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingCartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShoppingCartItems
    **/
    _count?: true | ShoppingCartItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShoppingCartItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShoppingCartItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShoppingCartItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShoppingCartItemMaxAggregateInputType
  }

  export type GetShoppingCartItemAggregateType<T extends ShoppingCartItemAggregateArgs> = {
        [P in keyof T & keyof AggregateShoppingCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShoppingCartItem[P]>
      : GetScalarType<T[P], AggregateShoppingCartItem[P]>
  }




  export type ShoppingCartItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingCartItemWhereInput
    orderBy?: ShoppingCartItemOrderByWithAggregationInput | ShoppingCartItemOrderByWithAggregationInput[]
    by: ShoppingCartItemScalarFieldEnum[] | ShoppingCartItemScalarFieldEnum
    having?: ShoppingCartItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShoppingCartItemCountAggregateInputType | true
    _avg?: ShoppingCartItemAvgAggregateInputType
    _sum?: ShoppingCartItemSumAggregateInputType
    _min?: ShoppingCartItemMinAggregateInputType
    _max?: ShoppingCartItemMaxAggregateInputType
  }

  export type ShoppingCartItemGroupByOutputType = {
    cart_item_id: number
    cart_id: number
    product_id: number
    quantity: number
    created_at: Date
    updated_at: Date
    _count: ShoppingCartItemCountAggregateOutputType | null
    _avg: ShoppingCartItemAvgAggregateOutputType | null
    _sum: ShoppingCartItemSumAggregateOutputType | null
    _min: ShoppingCartItemMinAggregateOutputType | null
    _max: ShoppingCartItemMaxAggregateOutputType | null
  }

  type GetShoppingCartItemGroupByPayload<T extends ShoppingCartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShoppingCartItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShoppingCartItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShoppingCartItemGroupByOutputType[P]>
            : GetScalarType<T[P], ShoppingCartItemGroupByOutputType[P]>
        }
      >
    >


  export type ShoppingCartItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_item_id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
    created_at?: boolean
    updated_at?: boolean
    cart?: boolean | ShoppingCartDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingCartItem"]>

  export type ShoppingCartItemSelectScalar = {
    cart_item_id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ShoppingCartItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | ShoppingCartDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }


  export type $ShoppingCartItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShoppingCartItem"
    objects: {
      cart: Prisma.$ShoppingCartPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cart_item_id: number
      cart_id: number
      product_id: number
      quantity: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["shoppingCartItem"]>
    composites: {}
  }


  type ShoppingCartItemGetPayload<S extends boolean | null | undefined | ShoppingCartItemDefaultArgs> = $Result.GetResult<Prisma.$ShoppingCartItemPayload, S>

  type ShoppingCartItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShoppingCartItemFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ShoppingCartItemCountAggregateInputType | true
    }

  export interface ShoppingCartItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShoppingCartItem'], meta: { name: 'ShoppingCartItem' } }
    /**
     * Find zero or one ShoppingCartItem that matches the filter.
     * @param {ShoppingCartItemFindUniqueArgs} args - Arguments to find a ShoppingCartItem
     * @example
     * // Get one ShoppingCartItem
     * const shoppingCartItem = await prisma.shoppingCartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShoppingCartItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ShoppingCartItemFindUniqueArgs<ExtArgs>>
    ): Prisma__ShoppingCartItemClient<$Result.GetResult<Prisma.$ShoppingCartItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ShoppingCartItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ShoppingCartItemFindUniqueOrThrowArgs} args - Arguments to find a ShoppingCartItem
     * @example
     * // Get one ShoppingCartItem
     * const shoppingCartItem = await prisma.shoppingCartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShoppingCartItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShoppingCartItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ShoppingCartItemClient<$Result.GetResult<Prisma.$ShoppingCartItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ShoppingCartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingCartItemFindFirstArgs} args - Arguments to find a ShoppingCartItem
     * @example
     * // Get one ShoppingCartItem
     * const shoppingCartItem = await prisma.shoppingCartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShoppingCartItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ShoppingCartItemFindFirstArgs<ExtArgs>>
    ): Prisma__ShoppingCartItemClient<$Result.GetResult<Prisma.$ShoppingCartItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ShoppingCartItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingCartItemFindFirstOrThrowArgs} args - Arguments to find a ShoppingCartItem
     * @example
     * // Get one ShoppingCartItem
     * const shoppingCartItem = await prisma.shoppingCartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShoppingCartItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShoppingCartItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ShoppingCartItemClient<$Result.GetResult<Prisma.$ShoppingCartItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ShoppingCartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingCartItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShoppingCartItems
     * const shoppingCartItems = await prisma.shoppingCartItem.findMany()
     * 
     * // Get first 10 ShoppingCartItems
     * const shoppingCartItems = await prisma.shoppingCartItem.findMany({ take: 10 })
     * 
     * // Only select the `cart_item_id`
     * const shoppingCartItemWithCart_item_idOnly = await prisma.shoppingCartItem.findMany({ select: { cart_item_id: true } })
     * 
    **/
    findMany<T extends ShoppingCartItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShoppingCartItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingCartItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ShoppingCartItem.
     * @param {ShoppingCartItemCreateArgs} args - Arguments to create a ShoppingCartItem.
     * @example
     * // Create one ShoppingCartItem
     * const ShoppingCartItem = await prisma.shoppingCartItem.create({
     *   data: {
     *     // ... data to create a ShoppingCartItem
     *   }
     * })
     * 
    **/
    create<T extends ShoppingCartItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ShoppingCartItemCreateArgs<ExtArgs>>
    ): Prisma__ShoppingCartItemClient<$Result.GetResult<Prisma.$ShoppingCartItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ShoppingCartItems.
     *     @param {ShoppingCartItemCreateManyArgs} args - Arguments to create many ShoppingCartItems.
     *     @example
     *     // Create many ShoppingCartItems
     *     const shoppingCartItem = await prisma.shoppingCartItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShoppingCartItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShoppingCartItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShoppingCartItem.
     * @param {ShoppingCartItemDeleteArgs} args - Arguments to delete one ShoppingCartItem.
     * @example
     * // Delete one ShoppingCartItem
     * const ShoppingCartItem = await prisma.shoppingCartItem.delete({
     *   where: {
     *     // ... filter to delete one ShoppingCartItem
     *   }
     * })
     * 
    **/
    delete<T extends ShoppingCartItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ShoppingCartItemDeleteArgs<ExtArgs>>
    ): Prisma__ShoppingCartItemClient<$Result.GetResult<Prisma.$ShoppingCartItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ShoppingCartItem.
     * @param {ShoppingCartItemUpdateArgs} args - Arguments to update one ShoppingCartItem.
     * @example
     * // Update one ShoppingCartItem
     * const shoppingCartItem = await prisma.shoppingCartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShoppingCartItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ShoppingCartItemUpdateArgs<ExtArgs>>
    ): Prisma__ShoppingCartItemClient<$Result.GetResult<Prisma.$ShoppingCartItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ShoppingCartItems.
     * @param {ShoppingCartItemDeleteManyArgs} args - Arguments to filter ShoppingCartItems to delete.
     * @example
     * // Delete a few ShoppingCartItems
     * const { count } = await prisma.shoppingCartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShoppingCartItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShoppingCartItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingCartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingCartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShoppingCartItems
     * const shoppingCartItem = await prisma.shoppingCartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShoppingCartItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ShoppingCartItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShoppingCartItem.
     * @param {ShoppingCartItemUpsertArgs} args - Arguments to update or create a ShoppingCartItem.
     * @example
     * // Update or create a ShoppingCartItem
     * const shoppingCartItem = await prisma.shoppingCartItem.upsert({
     *   create: {
     *     // ... data to create a ShoppingCartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShoppingCartItem we want to update
     *   }
     * })
    **/
    upsert<T extends ShoppingCartItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ShoppingCartItemUpsertArgs<ExtArgs>>
    ): Prisma__ShoppingCartItemClient<$Result.GetResult<Prisma.$ShoppingCartItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ShoppingCartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingCartItemCountArgs} args - Arguments to filter ShoppingCartItems to count.
     * @example
     * // Count the number of ShoppingCartItems
     * const count = await prisma.shoppingCartItem.count({
     *   where: {
     *     // ... the filter for the ShoppingCartItems we want to count
     *   }
     * })
    **/
    count<T extends ShoppingCartItemCountArgs>(
      args?: Subset<T, ShoppingCartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShoppingCartItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShoppingCartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingCartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShoppingCartItemAggregateArgs>(args: Subset<T, ShoppingCartItemAggregateArgs>): Prisma.PrismaPromise<GetShoppingCartItemAggregateType<T>>

    /**
     * Group by ShoppingCartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingCartItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShoppingCartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShoppingCartItemGroupByArgs['orderBy'] }
        : { orderBy?: ShoppingCartItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShoppingCartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShoppingCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShoppingCartItem model
   */
  readonly fields: ShoppingCartItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShoppingCartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShoppingCartItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cart<T extends ShoppingCartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingCartDefaultArgs<ExtArgs>>): Prisma__ShoppingCartClient<$Result.GetResult<Prisma.$ShoppingCartPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ShoppingCartItem model
   */ 
  interface ShoppingCartItemFieldRefs {
    readonly cart_item_id: FieldRef<"ShoppingCartItem", 'Int'>
    readonly cart_id: FieldRef<"ShoppingCartItem", 'Int'>
    readonly product_id: FieldRef<"ShoppingCartItem", 'Int'>
    readonly quantity: FieldRef<"ShoppingCartItem", 'Int'>
    readonly created_at: FieldRef<"ShoppingCartItem", 'DateTime'>
    readonly updated_at: FieldRef<"ShoppingCartItem", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ShoppingCartItem findUnique
   */
  export type ShoppingCartItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCartItem
     */
    select?: ShoppingCartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingCartItem to fetch.
     */
    where: ShoppingCartItemWhereUniqueInput
  }


  /**
   * ShoppingCartItem findUniqueOrThrow
   */
  export type ShoppingCartItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCartItem
     */
    select?: ShoppingCartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingCartItem to fetch.
     */
    where: ShoppingCartItemWhereUniqueInput
  }


  /**
   * ShoppingCartItem findFirst
   */
  export type ShoppingCartItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCartItem
     */
    select?: ShoppingCartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingCartItem to fetch.
     */
    where?: ShoppingCartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingCartItems to fetch.
     */
    orderBy?: ShoppingCartItemOrderByWithRelationInput | ShoppingCartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingCartItems.
     */
    cursor?: ShoppingCartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingCartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingCartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingCartItems.
     */
    distinct?: ShoppingCartItemScalarFieldEnum | ShoppingCartItemScalarFieldEnum[]
  }


  /**
   * ShoppingCartItem findFirstOrThrow
   */
  export type ShoppingCartItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCartItem
     */
    select?: ShoppingCartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingCartItem to fetch.
     */
    where?: ShoppingCartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingCartItems to fetch.
     */
    orderBy?: ShoppingCartItemOrderByWithRelationInput | ShoppingCartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingCartItems.
     */
    cursor?: ShoppingCartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingCartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingCartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingCartItems.
     */
    distinct?: ShoppingCartItemScalarFieldEnum | ShoppingCartItemScalarFieldEnum[]
  }


  /**
   * ShoppingCartItem findMany
   */
  export type ShoppingCartItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCartItem
     */
    select?: ShoppingCartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingCartItems to fetch.
     */
    where?: ShoppingCartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingCartItems to fetch.
     */
    orderBy?: ShoppingCartItemOrderByWithRelationInput | ShoppingCartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShoppingCartItems.
     */
    cursor?: ShoppingCartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingCartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingCartItems.
     */
    skip?: number
    distinct?: ShoppingCartItemScalarFieldEnum | ShoppingCartItemScalarFieldEnum[]
  }


  /**
   * ShoppingCartItem create
   */
  export type ShoppingCartItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCartItem
     */
    select?: ShoppingCartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ShoppingCartItem.
     */
    data: XOR<ShoppingCartItemCreateInput, ShoppingCartItemUncheckedCreateInput>
  }


  /**
   * ShoppingCartItem createMany
   */
  export type ShoppingCartItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShoppingCartItems.
     */
    data: ShoppingCartItemCreateManyInput | ShoppingCartItemCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ShoppingCartItem update
   */
  export type ShoppingCartItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCartItem
     */
    select?: ShoppingCartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ShoppingCartItem.
     */
    data: XOR<ShoppingCartItemUpdateInput, ShoppingCartItemUncheckedUpdateInput>
    /**
     * Choose, which ShoppingCartItem to update.
     */
    where: ShoppingCartItemWhereUniqueInput
  }


  /**
   * ShoppingCartItem updateMany
   */
  export type ShoppingCartItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShoppingCartItems.
     */
    data: XOR<ShoppingCartItemUpdateManyMutationInput, ShoppingCartItemUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingCartItems to update
     */
    where?: ShoppingCartItemWhereInput
  }


  /**
   * ShoppingCartItem upsert
   */
  export type ShoppingCartItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCartItem
     */
    select?: ShoppingCartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ShoppingCartItem to update in case it exists.
     */
    where: ShoppingCartItemWhereUniqueInput
    /**
     * In case the ShoppingCartItem found by the `where` argument doesn't exist, create a new ShoppingCartItem with this data.
     */
    create: XOR<ShoppingCartItemCreateInput, ShoppingCartItemUncheckedCreateInput>
    /**
     * In case the ShoppingCartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShoppingCartItemUpdateInput, ShoppingCartItemUncheckedUpdateInput>
  }


  /**
   * ShoppingCartItem delete
   */
  export type ShoppingCartItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCartItem
     */
    select?: ShoppingCartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartItemInclude<ExtArgs> | null
    /**
     * Filter which ShoppingCartItem to delete.
     */
    where: ShoppingCartItemWhereUniqueInput
  }


  /**
   * ShoppingCartItem deleteMany
   */
  export type ShoppingCartItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingCartItems to delete
     */
    where?: ShoppingCartItemWhereInput
  }


  /**
   * ShoppingCartItem without action
   */
  export type ShoppingCartItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCartItem
     */
    select?: ShoppingCartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartItemInclude<ExtArgs> | null
  }



  /**
   * Model ShoppingCart
   */

  export type AggregateShoppingCart = {
    _count: ShoppingCartCountAggregateOutputType | null
    _avg: ShoppingCartAvgAggregateOutputType | null
    _sum: ShoppingCartSumAggregateOutputType | null
    _min: ShoppingCartMinAggregateOutputType | null
    _max: ShoppingCartMaxAggregateOutputType | null
  }

  export type ShoppingCartAvgAggregateOutputType = {
    cart_id: number | null
    user_id: number | null
    productProduct_id: number | null
  }

  export type ShoppingCartSumAggregateOutputType = {
    cart_id: number | null
    user_id: number | null
    productProduct_id: number | null
  }

  export type ShoppingCartMinAggregateOutputType = {
    cart_id: number | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
    productProduct_id: number | null
  }

  export type ShoppingCartMaxAggregateOutputType = {
    cart_id: number | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
    productProduct_id: number | null
  }

  export type ShoppingCartCountAggregateOutputType = {
    cart_id: number
    user_id: number
    created_at: number
    updated_at: number
    productProduct_id: number
    _all: number
  }


  export type ShoppingCartAvgAggregateInputType = {
    cart_id?: true
    user_id?: true
    productProduct_id?: true
  }

  export type ShoppingCartSumAggregateInputType = {
    cart_id?: true
    user_id?: true
    productProduct_id?: true
  }

  export type ShoppingCartMinAggregateInputType = {
    cart_id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    productProduct_id?: true
  }

  export type ShoppingCartMaxAggregateInputType = {
    cart_id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    productProduct_id?: true
  }

  export type ShoppingCartCountAggregateInputType = {
    cart_id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    productProduct_id?: true
    _all?: true
  }

  export type ShoppingCartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingCart to aggregate.
     */
    where?: ShoppingCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingCarts to fetch.
     */
    orderBy?: ShoppingCartOrderByWithRelationInput | ShoppingCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShoppingCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingCarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShoppingCarts
    **/
    _count?: true | ShoppingCartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShoppingCartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShoppingCartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShoppingCartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShoppingCartMaxAggregateInputType
  }

  export type GetShoppingCartAggregateType<T extends ShoppingCartAggregateArgs> = {
        [P in keyof T & keyof AggregateShoppingCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShoppingCart[P]>
      : GetScalarType<T[P], AggregateShoppingCart[P]>
  }




  export type ShoppingCartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingCartWhereInput
    orderBy?: ShoppingCartOrderByWithAggregationInput | ShoppingCartOrderByWithAggregationInput[]
    by: ShoppingCartScalarFieldEnum[] | ShoppingCartScalarFieldEnum
    having?: ShoppingCartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShoppingCartCountAggregateInputType | true
    _avg?: ShoppingCartAvgAggregateInputType
    _sum?: ShoppingCartSumAggregateInputType
    _min?: ShoppingCartMinAggregateInputType
    _max?: ShoppingCartMaxAggregateInputType
  }

  export type ShoppingCartGroupByOutputType = {
    cart_id: number
    user_id: number
    created_at: Date
    updated_at: Date
    productProduct_id: number | null
    _count: ShoppingCartCountAggregateOutputType | null
    _avg: ShoppingCartAvgAggregateOutputType | null
    _sum: ShoppingCartSumAggregateOutputType | null
    _min: ShoppingCartMinAggregateOutputType | null
    _max: ShoppingCartMaxAggregateOutputType | null
  }

  type GetShoppingCartGroupByPayload<T extends ShoppingCartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShoppingCartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShoppingCartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShoppingCartGroupByOutputType[P]>
            : GetScalarType<T[P], ShoppingCartGroupByOutputType[P]>
        }
      >
    >


  export type ShoppingCartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    productProduct_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cart_items?: boolean | ShoppingCart$cart_itemsArgs<ExtArgs>
    Product?: boolean | ShoppingCart$ProductArgs<ExtArgs>
    _count?: boolean | ShoppingCartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingCart"]>

  export type ShoppingCartSelectScalar = {
    cart_id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    productProduct_id?: boolean
  }

  export type ShoppingCartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cart_items?: boolean | ShoppingCart$cart_itemsArgs<ExtArgs>
    Product?: boolean | ShoppingCart$ProductArgs<ExtArgs>
    _count?: boolean | ShoppingCartCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ShoppingCartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShoppingCart"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      cart_items: Prisma.$ShoppingCartItemPayload<ExtArgs>[]
      Product: Prisma.$ProductPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      cart_id: number
      user_id: number
      created_at: Date
      updated_at: Date
      productProduct_id: number | null
    }, ExtArgs["result"]["shoppingCart"]>
    composites: {}
  }


  type ShoppingCartGetPayload<S extends boolean | null | undefined | ShoppingCartDefaultArgs> = $Result.GetResult<Prisma.$ShoppingCartPayload, S>

  type ShoppingCartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShoppingCartFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ShoppingCartCountAggregateInputType | true
    }

  export interface ShoppingCartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShoppingCart'], meta: { name: 'ShoppingCart' } }
    /**
     * Find zero or one ShoppingCart that matches the filter.
     * @param {ShoppingCartFindUniqueArgs} args - Arguments to find a ShoppingCart
     * @example
     * // Get one ShoppingCart
     * const shoppingCart = await prisma.shoppingCart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShoppingCartFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ShoppingCartFindUniqueArgs<ExtArgs>>
    ): Prisma__ShoppingCartClient<$Result.GetResult<Prisma.$ShoppingCartPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ShoppingCart that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ShoppingCartFindUniqueOrThrowArgs} args - Arguments to find a ShoppingCart
     * @example
     * // Get one ShoppingCart
     * const shoppingCart = await prisma.shoppingCart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShoppingCartFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShoppingCartFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ShoppingCartClient<$Result.GetResult<Prisma.$ShoppingCartPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ShoppingCart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingCartFindFirstArgs} args - Arguments to find a ShoppingCart
     * @example
     * // Get one ShoppingCart
     * const shoppingCart = await prisma.shoppingCart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShoppingCartFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ShoppingCartFindFirstArgs<ExtArgs>>
    ): Prisma__ShoppingCartClient<$Result.GetResult<Prisma.$ShoppingCartPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ShoppingCart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingCartFindFirstOrThrowArgs} args - Arguments to find a ShoppingCart
     * @example
     * // Get one ShoppingCart
     * const shoppingCart = await prisma.shoppingCart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShoppingCartFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShoppingCartFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ShoppingCartClient<$Result.GetResult<Prisma.$ShoppingCartPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ShoppingCarts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingCartFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShoppingCarts
     * const shoppingCarts = await prisma.shoppingCart.findMany()
     * 
     * // Get first 10 ShoppingCarts
     * const shoppingCarts = await prisma.shoppingCart.findMany({ take: 10 })
     * 
     * // Only select the `cart_id`
     * const shoppingCartWithCart_idOnly = await prisma.shoppingCart.findMany({ select: { cart_id: true } })
     * 
    **/
    findMany<T extends ShoppingCartFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShoppingCartFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingCartPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ShoppingCart.
     * @param {ShoppingCartCreateArgs} args - Arguments to create a ShoppingCart.
     * @example
     * // Create one ShoppingCart
     * const ShoppingCart = await prisma.shoppingCart.create({
     *   data: {
     *     // ... data to create a ShoppingCart
     *   }
     * })
     * 
    **/
    create<T extends ShoppingCartCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ShoppingCartCreateArgs<ExtArgs>>
    ): Prisma__ShoppingCartClient<$Result.GetResult<Prisma.$ShoppingCartPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ShoppingCarts.
     *     @param {ShoppingCartCreateManyArgs} args - Arguments to create many ShoppingCarts.
     *     @example
     *     // Create many ShoppingCarts
     *     const shoppingCart = await prisma.shoppingCart.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShoppingCartCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShoppingCartCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShoppingCart.
     * @param {ShoppingCartDeleteArgs} args - Arguments to delete one ShoppingCart.
     * @example
     * // Delete one ShoppingCart
     * const ShoppingCart = await prisma.shoppingCart.delete({
     *   where: {
     *     // ... filter to delete one ShoppingCart
     *   }
     * })
     * 
    **/
    delete<T extends ShoppingCartDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ShoppingCartDeleteArgs<ExtArgs>>
    ): Prisma__ShoppingCartClient<$Result.GetResult<Prisma.$ShoppingCartPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ShoppingCart.
     * @param {ShoppingCartUpdateArgs} args - Arguments to update one ShoppingCart.
     * @example
     * // Update one ShoppingCart
     * const shoppingCart = await prisma.shoppingCart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShoppingCartUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ShoppingCartUpdateArgs<ExtArgs>>
    ): Prisma__ShoppingCartClient<$Result.GetResult<Prisma.$ShoppingCartPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ShoppingCarts.
     * @param {ShoppingCartDeleteManyArgs} args - Arguments to filter ShoppingCarts to delete.
     * @example
     * // Delete a few ShoppingCarts
     * const { count } = await prisma.shoppingCart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShoppingCartDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShoppingCartDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingCarts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingCartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShoppingCarts
     * const shoppingCart = await prisma.shoppingCart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShoppingCartUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ShoppingCartUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShoppingCart.
     * @param {ShoppingCartUpsertArgs} args - Arguments to update or create a ShoppingCart.
     * @example
     * // Update or create a ShoppingCart
     * const shoppingCart = await prisma.shoppingCart.upsert({
     *   create: {
     *     // ... data to create a ShoppingCart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShoppingCart we want to update
     *   }
     * })
    **/
    upsert<T extends ShoppingCartUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ShoppingCartUpsertArgs<ExtArgs>>
    ): Prisma__ShoppingCartClient<$Result.GetResult<Prisma.$ShoppingCartPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ShoppingCarts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingCartCountArgs} args - Arguments to filter ShoppingCarts to count.
     * @example
     * // Count the number of ShoppingCarts
     * const count = await prisma.shoppingCart.count({
     *   where: {
     *     // ... the filter for the ShoppingCarts we want to count
     *   }
     * })
    **/
    count<T extends ShoppingCartCountArgs>(
      args?: Subset<T, ShoppingCartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShoppingCartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShoppingCart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingCartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShoppingCartAggregateArgs>(args: Subset<T, ShoppingCartAggregateArgs>): Prisma.PrismaPromise<GetShoppingCartAggregateType<T>>

    /**
     * Group by ShoppingCart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingCartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShoppingCartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShoppingCartGroupByArgs['orderBy'] }
        : { orderBy?: ShoppingCartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShoppingCartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShoppingCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShoppingCart model
   */
  readonly fields: ShoppingCartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShoppingCart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShoppingCartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    cart_items<T extends ShoppingCart$cart_itemsArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingCart$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingCartItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    Product<T extends ShoppingCart$ProductArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingCart$ProductArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ShoppingCart model
   */ 
  interface ShoppingCartFieldRefs {
    readonly cart_id: FieldRef<"ShoppingCart", 'Int'>
    readonly user_id: FieldRef<"ShoppingCart", 'Int'>
    readonly created_at: FieldRef<"ShoppingCart", 'DateTime'>
    readonly updated_at: FieldRef<"ShoppingCart", 'DateTime'>
    readonly productProduct_id: FieldRef<"ShoppingCart", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ShoppingCart findUnique
   */
  export type ShoppingCartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCart
     */
    select?: ShoppingCartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingCart to fetch.
     */
    where: ShoppingCartWhereUniqueInput
  }


  /**
   * ShoppingCart findUniqueOrThrow
   */
  export type ShoppingCartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCart
     */
    select?: ShoppingCartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingCart to fetch.
     */
    where: ShoppingCartWhereUniqueInput
  }


  /**
   * ShoppingCart findFirst
   */
  export type ShoppingCartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCart
     */
    select?: ShoppingCartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingCart to fetch.
     */
    where?: ShoppingCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingCarts to fetch.
     */
    orderBy?: ShoppingCartOrderByWithRelationInput | ShoppingCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingCarts.
     */
    cursor?: ShoppingCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingCarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingCarts.
     */
    distinct?: ShoppingCartScalarFieldEnum | ShoppingCartScalarFieldEnum[]
  }


  /**
   * ShoppingCart findFirstOrThrow
   */
  export type ShoppingCartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCart
     */
    select?: ShoppingCartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingCart to fetch.
     */
    where?: ShoppingCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingCarts to fetch.
     */
    orderBy?: ShoppingCartOrderByWithRelationInput | ShoppingCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingCarts.
     */
    cursor?: ShoppingCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingCarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingCarts.
     */
    distinct?: ShoppingCartScalarFieldEnum | ShoppingCartScalarFieldEnum[]
  }


  /**
   * ShoppingCart findMany
   */
  export type ShoppingCartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCart
     */
    select?: ShoppingCartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingCarts to fetch.
     */
    where?: ShoppingCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingCarts to fetch.
     */
    orderBy?: ShoppingCartOrderByWithRelationInput | ShoppingCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShoppingCarts.
     */
    cursor?: ShoppingCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingCarts.
     */
    skip?: number
    distinct?: ShoppingCartScalarFieldEnum | ShoppingCartScalarFieldEnum[]
  }


  /**
   * ShoppingCart create
   */
  export type ShoppingCartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCart
     */
    select?: ShoppingCartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartInclude<ExtArgs> | null
    /**
     * The data needed to create a ShoppingCart.
     */
    data: XOR<ShoppingCartCreateInput, ShoppingCartUncheckedCreateInput>
  }


  /**
   * ShoppingCart createMany
   */
  export type ShoppingCartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShoppingCarts.
     */
    data: ShoppingCartCreateManyInput | ShoppingCartCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ShoppingCart update
   */
  export type ShoppingCartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCart
     */
    select?: ShoppingCartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartInclude<ExtArgs> | null
    /**
     * The data needed to update a ShoppingCart.
     */
    data: XOR<ShoppingCartUpdateInput, ShoppingCartUncheckedUpdateInput>
    /**
     * Choose, which ShoppingCart to update.
     */
    where: ShoppingCartWhereUniqueInput
  }


  /**
   * ShoppingCart updateMany
   */
  export type ShoppingCartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShoppingCarts.
     */
    data: XOR<ShoppingCartUpdateManyMutationInput, ShoppingCartUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingCarts to update
     */
    where?: ShoppingCartWhereInput
  }


  /**
   * ShoppingCart upsert
   */
  export type ShoppingCartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCart
     */
    select?: ShoppingCartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartInclude<ExtArgs> | null
    /**
     * The filter to search for the ShoppingCart to update in case it exists.
     */
    where: ShoppingCartWhereUniqueInput
    /**
     * In case the ShoppingCart found by the `where` argument doesn't exist, create a new ShoppingCart with this data.
     */
    create: XOR<ShoppingCartCreateInput, ShoppingCartUncheckedCreateInput>
    /**
     * In case the ShoppingCart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShoppingCartUpdateInput, ShoppingCartUncheckedUpdateInput>
  }


  /**
   * ShoppingCart delete
   */
  export type ShoppingCartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCart
     */
    select?: ShoppingCartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartInclude<ExtArgs> | null
    /**
     * Filter which ShoppingCart to delete.
     */
    where: ShoppingCartWhereUniqueInput
  }


  /**
   * ShoppingCart deleteMany
   */
  export type ShoppingCartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingCarts to delete
     */
    where?: ShoppingCartWhereInput
  }


  /**
   * ShoppingCart.cart_items
   */
  export type ShoppingCart$cart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCartItem
     */
    select?: ShoppingCartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartItemInclude<ExtArgs> | null
    where?: ShoppingCartItemWhereInput
    orderBy?: ShoppingCartItemOrderByWithRelationInput | ShoppingCartItemOrderByWithRelationInput[]
    cursor?: ShoppingCartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShoppingCartItemScalarFieldEnum | ShoppingCartItemScalarFieldEnum[]
  }


  /**
   * ShoppingCart.Product
   */
  export type ShoppingCart$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }


  /**
   * ShoppingCart without action
   */
  export type ShoppingCartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingCart
     */
    select?: ShoppingCartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingCartInclude<ExtArgs> | null
  }



  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    order_item_id: number | null
    deliver_fee: Decimal | null
    total_price: Decimal | null
    admin_id: number | null
    promo_discount_amount: Decimal | null
    affiliate_discount_amount: number | null
  }

  export type OrdersSumAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    order_item_id: number | null
    deliver_fee: Decimal | null
    total_price: Decimal | null
    admin_id: number | null
    promo_discount_amount: Decimal | null
    affiliate_discount_amount: number | null
  }

  export type OrdersMinAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    order_item_id: number | null
    order_date: Date | null
    delivery_time: Date | null
    deliver_fee: Decimal | null
    total_price: Decimal | null
    payment_status: string | null
    order_status: string | null
    admin_id: number | null
    promo_code: string | null
    promo_discount_amount: Decimal | null
    affiliate_discount_amount: number | null

    created_at: Date | null
    updated_at: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    order_item_id: number | null
    order_date: Date | null
    delivery_time: Date | null
    deliver_fee: Decimal | null
    total_price: Decimal | null
    payment_status: string | null
    order_status: string | null
    admin_id: number | null
    promo_code: string | null
    promo_discount_amount: Decimal | null
    affiliate_discount_amount: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    order_id: number
    user_id: number
    order_item_id: number
    order_date: number
    delivery_time: number
    deliver_fee: number
    total_price: number
    payment_status: number
    order_status: number
    admin_id: number
    promo_code: number
    promo_discount_amount: number
    affiliate_discount_amount: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    order_id?: true
    user_id?: true
    order_item_id?: true
    deliver_fee?: true
    total_price?: true
    admin_id?: true
    promo_discount_amount?: true
    affiliate_discount_amount?: true
  }

  export type OrdersSumAggregateInputType = {
    order_id?: true
    user_id?: true
    order_item_id?: true
    deliver_fee?: true
    total_price?: true
    admin_id?: true
    promo_discount_amount?: true
    affiliate_discount_amount?: true
  }

  export type OrdersMinAggregateInputType = {
    order_id?: true
    user_id?: true
    order_item_id?: true
    order_date?: true
    delivery_time?: true
    deliver_fee?: true
    total_price?: true
    payment_status?: true
    order_status?: true
    admin_id?: true
    promo_code?: true
    promo_discount_amount?: true
    affiliate_discount_amount?: true
    created_at?: true
    updated_at?: true
  }

  export type OrdersMaxAggregateInputType = {
    order_id?: true
    user_id?: true
    order_item_id?: true
    order_date?: true
    delivery_time?: true
    deliver_fee?: true
    total_price?: true
    payment_status?: true
    order_status?: true
    admin_id?: true
    promo_code?: true
    promo_discount_amount?: true
    affiliate_discount_amount?: true
    created_at?: true
    updated_at?: true
  }

  export type OrdersCountAggregateInputType = {
    order_id?: true
    user_id?: true
    order_item_id?: true
    order_date?: true
    delivery_time?: true
    deliver_fee?: true
    total_price?: true
    payment_status?: true
    order_status?: true
    admin_id?: true
    promo_code?: true
    promo_discount_amount?: true
    affiliate_discount_amount?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    order_id: number
    user_id: number
    order_item_id: number
    order_date: Date
    delivery_time: Date
    deliver_fee: Decimal
    total_price: Decimal
    payment_status: string
    order_status: string
    admin_id: number
    promo_code: string | null
    promo_discount_amount: Decimal | null
    affiliate_discount_amount: number
    created_at: Date
    updated_at: Date
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    user_id?: boolean
    order_item_id?: boolean
    order_date?: boolean
    delivery_time?: boolean
    deliver_fee?: boolean
    total_price?: boolean
    payment_status?: boolean
    order_status?: boolean
    admin_id?: boolean
    promo_code?: boolean
    promo_discount_amount?: boolean
    affiliate_discount_amount?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    order_items?: boolean | Orders$order_itemsArgs<ExtArgs>
    UserPromoUsage?: boolean | Orders$UserPromoUsageArgs<ExtArgs>
    ProofsOfPayment?: boolean | Orders$ProofsOfPaymentArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    order_id?: boolean
    user_id?: boolean
    order_item_id?: boolean
    order_date?: boolean
    delivery_time?: boolean
    deliver_fee?: boolean
    total_price?: boolean
    payment_status?: boolean
    order_status?: boolean
    admin_id?: boolean
    promo_code?: boolean
    promo_discount_amount?: boolean
    affiliate_discount_amount?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    order_items?: boolean | Orders$order_itemsArgs<ExtArgs>
    UserPromoUsage?: boolean | Orders$UserPromoUsageArgs<ExtArgs>
    ProofsOfPayment?: boolean | Orders$ProofsOfPaymentArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      admin: Prisma.$AdminPayload<ExtArgs>
      order_items: Prisma.$OrderItemPayload<ExtArgs>[]
      UserPromoUsage: Prisma.$UserPromoUsagePayload<ExtArgs>[]
      ProofsOfPayment: Prisma.$ProofsOfPaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: number
      user_id: number
      order_item_id: number
      order_date: Date
      delivery_time: Date
      deliver_fee: Prisma.Decimal
      total_price: Prisma.Decimal
      payment_status: string
      order_status: string
      admin_id: number
      promo_code: string | null
      promo_discount_amount: Prisma.Decimal | null
      affiliate_discount_amount: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }


  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrdersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>
    ): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Orders that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrdersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>
    ): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const ordersWithOrder_idOnly = await prisma.orders.findMany({ select: { order_id: true } })
     * 
    **/
    findMany<T extends OrdersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
    **/
    create<T extends OrdersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>
    ): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Orders.
     *     @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const orders = await prisma.orders.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrdersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
    **/
    delete<T extends OrdersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>
    ): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrdersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>
    ): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrdersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrdersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
    **/
    upsert<T extends OrdersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>
    ): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    order_items<T extends Orders$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    UserPromoUsage<T extends Orders$UserPromoUsageArgs<ExtArgs> = {}>(args?: Subset<T, Orders$UserPromoUsageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPromoUsagePayload<ExtArgs>, T, 'findMany'> | Null>;

    ProofsOfPayment<T extends Orders$ProofsOfPaymentArgs<ExtArgs> = {}>(args?: Subset<T, Orders$ProofsOfPaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProofsOfPaymentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Orders model
   */ 
  interface OrdersFieldRefs {
    readonly order_id: FieldRef<"Orders", 'Int'>
    readonly user_id: FieldRef<"Orders", 'Int'>
    readonly order_item_id: FieldRef<"Orders", 'Int'>
    readonly order_date: FieldRef<"Orders", 'DateTime'>
    readonly delivery_time: FieldRef<"Orders", 'DateTime'>
    readonly deliver_fee: FieldRef<"Orders", 'Decimal'>
    readonly total_price: FieldRef<"Orders", 'Decimal'>
    readonly payment_status: FieldRef<"Orders", 'String'>
    readonly order_status: FieldRef<"Orders", 'String'>
    readonly admin_id: FieldRef<"Orders", 'Int'>
    readonly promo_code: FieldRef<"Orders", 'String'>
    readonly promo_discount_amount: FieldRef<"Orders", 'Decimal'>
    readonly affiliate_discount_amount: FieldRef<"Orders", 'Float'>
    readonly created_at: FieldRef<"Orders", 'DateTime'>
    readonly updated_at: FieldRef<"Orders", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }


  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }


  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }


  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }


  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
  }


  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }


  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }


  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
  }


  /**
   * Orders.order_items
   */
  export type Orders$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }


  /**
   * Orders.UserPromoUsage
   */
  export type Orders$UserPromoUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPromoUsage
     */
    select?: UserPromoUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPromoUsageInclude<ExtArgs> | null
    where?: UserPromoUsageWhereInput
    orderBy?: UserPromoUsageOrderByWithRelationInput | UserPromoUsageOrderByWithRelationInput[]
    cursor?: UserPromoUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPromoUsageScalarFieldEnum | UserPromoUsageScalarFieldEnum[]
  }


  /**
   * Orders.ProofsOfPayment
   */
  export type Orders$ProofsOfPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofsOfPayment
     */
    select?: ProofsOfPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProofsOfPaymentInclude<ExtArgs> | null
    where?: ProofsOfPaymentWhereInput
    orderBy?: ProofsOfPaymentOrderByWithRelationInput | ProofsOfPaymentOrderByWithRelationInput[]
    cursor?: ProofsOfPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProofsOfPaymentScalarFieldEnum | ProofsOfPaymentScalarFieldEnum[]
  }


  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
  }



  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    order_item_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
    ordersOrder_id: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    order_item_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
    ordersOrder_id: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    order_item_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    ordersOrder_id: number | null
  }

  export type OrderItemMaxAggregateOutputType = {
    order_item_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    ordersOrder_id: number | null
  }

  export type OrderItemCountAggregateOutputType = {
    order_item_id: number
    product_id: number
    quantity: number
    price: number
    created_at: number
    updated_at: number
    ordersOrder_id: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    order_item_id?: true
    product_id?: true
    quantity?: true
    price?: true
    ordersOrder_id?: true
  }

  export type OrderItemSumAggregateInputType = {
    order_item_id?: true
    product_id?: true
    quantity?: true
    price?: true
    ordersOrder_id?: true
  }

  export type OrderItemMinAggregateInputType = {
    order_item_id?: true
    product_id?: true
    quantity?: true
    price?: true
    created_at?: true
    updated_at?: true
    ordersOrder_id?: true
  }

  export type OrderItemMaxAggregateInputType = {
    order_item_id?: true
    product_id?: true
    quantity?: true
    price?: true
    created_at?: true
    updated_at?: true
    ordersOrder_id?: true
  }

  export type OrderItemCountAggregateInputType = {
    order_item_id?: true
    product_id?: true
    quantity?: true
    price?: true
    created_at?: true
    updated_at?: true
    ordersOrder_id?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    order_item_id: number
    product_id: number
    quantity: number
    price: Decimal
    created_at: Date
    updated_at: Date
    ordersOrder_id: number | null
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_item_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    created_at?: boolean
    updated_at?: boolean
    ordersOrder_id?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    orders?: boolean | OrderItem$ordersArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    order_item_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    created_at?: boolean
    updated_at?: boolean
    ordersOrder_id?: boolean
  }

  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    orders?: boolean | OrderItem$ordersArgs<ExtArgs>
  }


  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      orders: Prisma.$OrdersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      order_item_id: number
      product_id: number
      quantity: number
      price: Prisma.Decimal
      created_at: Date
      updated_at: Date
      ordersOrder_id: number | null
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }


  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OrderItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `order_item_id`
     * const orderItemWithOrder_item_idOnly = await prisma.orderItem.findMany({ select: { order_item_id: true } })
     * 
    **/
    findMany<T extends OrderItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
    **/
    create<T extends OrderItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many OrderItems.
     *     @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     *     @example
     *     // Create many OrderItems
     *     const orderItem = await prisma.orderItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
    **/
    delete<T extends OrderItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
    **/
    upsert<T extends OrderItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    orders<T extends OrderItem$ordersArgs<ExtArgs> = {}>(args?: Subset<T, OrderItem$ordersArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the OrderItem model
   */ 
  interface OrderItemFieldRefs {
    readonly order_item_id: FieldRef<"OrderItem", 'Int'>
    readonly product_id: FieldRef<"OrderItem", 'Int'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly price: FieldRef<"OrderItem", 'Decimal'>
    readonly created_at: FieldRef<"OrderItem", 'DateTime'>
    readonly updated_at: FieldRef<"OrderItem", 'DateTime'>
    readonly ordersOrder_id: FieldRef<"OrderItem", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }


  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }


  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }


  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }


  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
  }


  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }


  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
  }


  /**
   * OrderItem.orders
   */
  export type OrderItem$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
  }


  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
  }



  /**
   * Model ProofsOfPayment
   */

  export type AggregateProofsOfPayment = {
    _count: ProofsOfPaymentCountAggregateOutputType | null
    _avg: ProofsOfPaymentAvgAggregateOutputType | null
    _sum: ProofsOfPaymentSumAggregateOutputType | null
    _min: ProofsOfPaymentMinAggregateOutputType | null
    _max: ProofsOfPaymentMaxAggregateOutputType | null
  }

  export type ProofsOfPaymentAvgAggregateOutputType = {
    proof_of_payment_id: number | null
    order_id: number | null
    admin_id: number | null
  }

  export type ProofsOfPaymentSumAggregateOutputType = {
    proof_of_payment_id: number | null
    order_id: number | null
    admin_id: number | null
  }

  export type ProofsOfPaymentMinAggregateOutputType = {
    proof_of_payment_id: number | null
    order_id: number | null
    image: string | null
    payment_status: boolean | null
    promo_usage_updated: boolean | null
    admin_id: number | null
  }

  export type ProofsOfPaymentMaxAggregateOutputType = {
    proof_of_payment_id: number | null
    order_id: number | null
    image: string | null
    payment_status: boolean | null
    promo_usage_updated: boolean | null
    admin_id: number | null
  }

  export type ProofsOfPaymentCountAggregateOutputType = {
    proof_of_payment_id: number
    order_id: number
    image: number
    payment_status: number
    promo_usage_updated: number
    admin_id: number
    _all: number
  }


  export type ProofsOfPaymentAvgAggregateInputType = {
    proof_of_payment_id?: true
    order_id?: true
    admin_id?: true
  }

  export type ProofsOfPaymentSumAggregateInputType = {
    proof_of_payment_id?: true
    order_id?: true
    admin_id?: true
  }

  export type ProofsOfPaymentMinAggregateInputType = {
    proof_of_payment_id?: true
    order_id?: true
    image?: true
    payment_status?: true
    promo_usage_updated?: true
    admin_id?: true
  }

  export type ProofsOfPaymentMaxAggregateInputType = {
    proof_of_payment_id?: true
    order_id?: true
    image?: true
    payment_status?: true
    promo_usage_updated?: true
    admin_id?: true
  }

  export type ProofsOfPaymentCountAggregateInputType = {
    proof_of_payment_id?: true
    order_id?: true
    image?: true
    payment_status?: true
    promo_usage_updated?: true
    admin_id?: true
    _all?: true
  }

  export type ProofsOfPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProofsOfPayment to aggregate.
     */
    where?: ProofsOfPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProofsOfPayments to fetch.
     */
    orderBy?: ProofsOfPaymentOrderByWithRelationInput | ProofsOfPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProofsOfPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProofsOfPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProofsOfPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProofsOfPayments
    **/
    _count?: true | ProofsOfPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProofsOfPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProofsOfPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProofsOfPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProofsOfPaymentMaxAggregateInputType
  }

  export type GetProofsOfPaymentAggregateType<T extends ProofsOfPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateProofsOfPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProofsOfPayment[P]>
      : GetScalarType<T[P], AggregateProofsOfPayment[P]>
  }




  export type ProofsOfPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProofsOfPaymentWhereInput
    orderBy?: ProofsOfPaymentOrderByWithAggregationInput | ProofsOfPaymentOrderByWithAggregationInput[]
    by: ProofsOfPaymentScalarFieldEnum[] | ProofsOfPaymentScalarFieldEnum
    having?: ProofsOfPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProofsOfPaymentCountAggregateInputType | true
    _avg?: ProofsOfPaymentAvgAggregateInputType
    _sum?: ProofsOfPaymentSumAggregateInputType
    _min?: ProofsOfPaymentMinAggregateInputType
    _max?: ProofsOfPaymentMaxAggregateInputType
  }

  export type ProofsOfPaymentGroupByOutputType = {
    proof_of_payment_id: number
    order_id: number
    image: string
    payment_status: boolean
    promo_usage_updated: boolean
    admin_id: number | null
    _count: ProofsOfPaymentCountAggregateOutputType | null
    _avg: ProofsOfPaymentAvgAggregateOutputType | null
    _sum: ProofsOfPaymentSumAggregateOutputType | null
    _min: ProofsOfPaymentMinAggregateOutputType | null
    _max: ProofsOfPaymentMaxAggregateOutputType | null
  }

  type GetProofsOfPaymentGroupByPayload<T extends ProofsOfPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProofsOfPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProofsOfPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProofsOfPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], ProofsOfPaymentGroupByOutputType[P]>
        }
      >
    >


  export type ProofsOfPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    proof_of_payment_id?: boolean
    order_id?: boolean
    image?: boolean
    payment_status?: boolean
    promo_usage_updated?: boolean
    admin_id?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    admin?: boolean | ProofsOfPayment$adminArgs<ExtArgs>
  }, ExtArgs["result"]["proofsOfPayment"]>

  export type ProofsOfPaymentSelectScalar = {
    proof_of_payment_id?: boolean
    order_id?: boolean
    image?: boolean
    payment_status?: boolean
    promo_usage_updated?: boolean
    admin_id?: boolean
  }

  export type ProofsOfPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    admin?: boolean | ProofsOfPayment$adminArgs<ExtArgs>
  }


  export type $ProofsOfPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProofsOfPayment"
    objects: {
      order: Prisma.$OrdersPayload<ExtArgs>
      admin: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      proof_of_payment_id: number
      order_id: number
      image: string
      payment_status: boolean
      promo_usage_updated: boolean
      admin_id: number | null
    }, ExtArgs["result"]["proofsOfPayment"]>
    composites: {}
  }


  type ProofsOfPaymentGetPayload<S extends boolean | null | undefined | ProofsOfPaymentDefaultArgs> = $Result.GetResult<Prisma.$ProofsOfPaymentPayload, S>

  type ProofsOfPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProofsOfPaymentFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProofsOfPaymentCountAggregateInputType | true
    }

  export interface ProofsOfPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProofsOfPayment'], meta: { name: 'ProofsOfPayment' } }
    /**
     * Find zero or one ProofsOfPayment that matches the filter.
     * @param {ProofsOfPaymentFindUniqueArgs} args - Arguments to find a ProofsOfPayment
     * @example
     * // Get one ProofsOfPayment
     * const proofsOfPayment = await prisma.proofsOfPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProofsOfPaymentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProofsOfPaymentFindUniqueArgs<ExtArgs>>
    ): Prisma__ProofsOfPaymentClient<$Result.GetResult<Prisma.$ProofsOfPaymentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProofsOfPayment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProofsOfPaymentFindUniqueOrThrowArgs} args - Arguments to find a ProofsOfPayment
     * @example
     * // Get one ProofsOfPayment
     * const proofsOfPayment = await prisma.proofsOfPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProofsOfPaymentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProofsOfPaymentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProofsOfPaymentClient<$Result.GetResult<Prisma.$ProofsOfPaymentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProofsOfPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofsOfPaymentFindFirstArgs} args - Arguments to find a ProofsOfPayment
     * @example
     * // Get one ProofsOfPayment
     * const proofsOfPayment = await prisma.proofsOfPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProofsOfPaymentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProofsOfPaymentFindFirstArgs<ExtArgs>>
    ): Prisma__ProofsOfPaymentClient<$Result.GetResult<Prisma.$ProofsOfPaymentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProofsOfPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofsOfPaymentFindFirstOrThrowArgs} args - Arguments to find a ProofsOfPayment
     * @example
     * // Get one ProofsOfPayment
     * const proofsOfPayment = await prisma.proofsOfPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProofsOfPaymentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProofsOfPaymentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProofsOfPaymentClient<$Result.GetResult<Prisma.$ProofsOfPaymentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProofsOfPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofsOfPaymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProofsOfPayments
     * const proofsOfPayments = await prisma.proofsOfPayment.findMany()
     * 
     * // Get first 10 ProofsOfPayments
     * const proofsOfPayments = await prisma.proofsOfPayment.findMany({ take: 10 })
     * 
     * // Only select the `proof_of_payment_id`
     * const proofsOfPaymentWithProof_of_payment_idOnly = await prisma.proofsOfPayment.findMany({ select: { proof_of_payment_id: true } })
     * 
    **/
    findMany<T extends ProofsOfPaymentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProofsOfPaymentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProofsOfPaymentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProofsOfPayment.
     * @param {ProofsOfPaymentCreateArgs} args - Arguments to create a ProofsOfPayment.
     * @example
     * // Create one ProofsOfPayment
     * const ProofsOfPayment = await prisma.proofsOfPayment.create({
     *   data: {
     *     // ... data to create a ProofsOfPayment
     *   }
     * })
     * 
    **/
    create<T extends ProofsOfPaymentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProofsOfPaymentCreateArgs<ExtArgs>>
    ): Prisma__ProofsOfPaymentClient<$Result.GetResult<Prisma.$ProofsOfPaymentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProofsOfPayments.
     *     @param {ProofsOfPaymentCreateManyArgs} args - Arguments to create many ProofsOfPayments.
     *     @example
     *     // Create many ProofsOfPayments
     *     const proofsOfPayment = await prisma.proofsOfPayment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProofsOfPaymentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProofsOfPaymentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProofsOfPayment.
     * @param {ProofsOfPaymentDeleteArgs} args - Arguments to delete one ProofsOfPayment.
     * @example
     * // Delete one ProofsOfPayment
     * const ProofsOfPayment = await prisma.proofsOfPayment.delete({
     *   where: {
     *     // ... filter to delete one ProofsOfPayment
     *   }
     * })
     * 
    **/
    delete<T extends ProofsOfPaymentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProofsOfPaymentDeleteArgs<ExtArgs>>
    ): Prisma__ProofsOfPaymentClient<$Result.GetResult<Prisma.$ProofsOfPaymentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProofsOfPayment.
     * @param {ProofsOfPaymentUpdateArgs} args - Arguments to update one ProofsOfPayment.
     * @example
     * // Update one ProofsOfPayment
     * const proofsOfPayment = await prisma.proofsOfPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProofsOfPaymentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProofsOfPaymentUpdateArgs<ExtArgs>>
    ): Prisma__ProofsOfPaymentClient<$Result.GetResult<Prisma.$ProofsOfPaymentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProofsOfPayments.
     * @param {ProofsOfPaymentDeleteManyArgs} args - Arguments to filter ProofsOfPayments to delete.
     * @example
     * // Delete a few ProofsOfPayments
     * const { count } = await prisma.proofsOfPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProofsOfPaymentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProofsOfPaymentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProofsOfPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofsOfPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProofsOfPayments
     * const proofsOfPayment = await prisma.proofsOfPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProofsOfPaymentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProofsOfPaymentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProofsOfPayment.
     * @param {ProofsOfPaymentUpsertArgs} args - Arguments to update or create a ProofsOfPayment.
     * @example
     * // Update or create a ProofsOfPayment
     * const proofsOfPayment = await prisma.proofsOfPayment.upsert({
     *   create: {
     *     // ... data to create a ProofsOfPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProofsOfPayment we want to update
     *   }
     * })
    **/
    upsert<T extends ProofsOfPaymentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProofsOfPaymentUpsertArgs<ExtArgs>>
    ): Prisma__ProofsOfPaymentClient<$Result.GetResult<Prisma.$ProofsOfPaymentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProofsOfPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofsOfPaymentCountArgs} args - Arguments to filter ProofsOfPayments to count.
     * @example
     * // Count the number of ProofsOfPayments
     * const count = await prisma.proofsOfPayment.count({
     *   where: {
     *     // ... the filter for the ProofsOfPayments we want to count
     *   }
     * })
    **/
    count<T extends ProofsOfPaymentCountArgs>(
      args?: Subset<T, ProofsOfPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProofsOfPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProofsOfPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofsOfPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProofsOfPaymentAggregateArgs>(args: Subset<T, ProofsOfPaymentAggregateArgs>): Prisma.PrismaPromise<GetProofsOfPaymentAggregateType<T>>

    /**
     * Group by ProofsOfPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofsOfPaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProofsOfPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProofsOfPaymentGroupByArgs['orderBy'] }
        : { orderBy?: ProofsOfPaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProofsOfPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProofsOfPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProofsOfPayment model
   */
  readonly fields: ProofsOfPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProofsOfPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProofsOfPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    admin<T extends ProofsOfPayment$adminArgs<ExtArgs> = {}>(args?: Subset<T, ProofsOfPayment$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProofsOfPayment model
   */ 
  interface ProofsOfPaymentFieldRefs {
    readonly proof_of_payment_id: FieldRef<"ProofsOfPayment", 'Int'>
    readonly order_id: FieldRef<"ProofsOfPayment", 'Int'>
    readonly image: FieldRef<"ProofsOfPayment", 'String'>
    readonly payment_status: FieldRef<"ProofsOfPayment", 'Boolean'>
    readonly promo_usage_updated: FieldRef<"ProofsOfPayment", 'Boolean'>
    readonly admin_id: FieldRef<"ProofsOfPayment", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ProofsOfPayment findUnique
   */
  export type ProofsOfPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofsOfPayment
     */
    select?: ProofsOfPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProofsOfPaymentInclude<ExtArgs> | null
    /**
     * Filter, which ProofsOfPayment to fetch.
     */
    where: ProofsOfPaymentWhereUniqueInput
  }


  /**
   * ProofsOfPayment findUniqueOrThrow
   */
  export type ProofsOfPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofsOfPayment
     */
    select?: ProofsOfPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProofsOfPaymentInclude<ExtArgs> | null
    /**
     * Filter, which ProofsOfPayment to fetch.
     */
    where: ProofsOfPaymentWhereUniqueInput
  }


  /**
   * ProofsOfPayment findFirst
   */
  export type ProofsOfPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofsOfPayment
     */
    select?: ProofsOfPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProofsOfPaymentInclude<ExtArgs> | null
    /**
     * Filter, which ProofsOfPayment to fetch.
     */
    where?: ProofsOfPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProofsOfPayments to fetch.
     */
    orderBy?: ProofsOfPaymentOrderByWithRelationInput | ProofsOfPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProofsOfPayments.
     */
    cursor?: ProofsOfPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProofsOfPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProofsOfPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProofsOfPayments.
     */
    distinct?: ProofsOfPaymentScalarFieldEnum | ProofsOfPaymentScalarFieldEnum[]
  }


  /**
   * ProofsOfPayment findFirstOrThrow
   */
  export type ProofsOfPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofsOfPayment
     */
    select?: ProofsOfPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProofsOfPaymentInclude<ExtArgs> | null
    /**
     * Filter, which ProofsOfPayment to fetch.
     */
    where?: ProofsOfPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProofsOfPayments to fetch.
     */
    orderBy?: ProofsOfPaymentOrderByWithRelationInput | ProofsOfPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProofsOfPayments.
     */
    cursor?: ProofsOfPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProofsOfPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProofsOfPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProofsOfPayments.
     */
    distinct?: ProofsOfPaymentScalarFieldEnum | ProofsOfPaymentScalarFieldEnum[]
  }


  /**
   * ProofsOfPayment findMany
   */
  export type ProofsOfPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofsOfPayment
     */
    select?: ProofsOfPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProofsOfPaymentInclude<ExtArgs> | null
    /**
     * Filter, which ProofsOfPayments to fetch.
     */
    where?: ProofsOfPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProofsOfPayments to fetch.
     */
    orderBy?: ProofsOfPaymentOrderByWithRelationInput | ProofsOfPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProofsOfPayments.
     */
    cursor?: ProofsOfPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProofsOfPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProofsOfPayments.
     */
    skip?: number
    distinct?: ProofsOfPaymentScalarFieldEnum | ProofsOfPaymentScalarFieldEnum[]
  }


  /**
   * ProofsOfPayment create
   */
  export type ProofsOfPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofsOfPayment
     */
    select?: ProofsOfPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProofsOfPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a ProofsOfPayment.
     */
    data: XOR<ProofsOfPaymentCreateInput, ProofsOfPaymentUncheckedCreateInput>
  }


  /**
   * ProofsOfPayment createMany
   */
  export type ProofsOfPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProofsOfPayments.
     */
    data: ProofsOfPaymentCreateManyInput | ProofsOfPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProofsOfPayment update
   */
  export type ProofsOfPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofsOfPayment
     */
    select?: ProofsOfPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProofsOfPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a ProofsOfPayment.
     */
    data: XOR<ProofsOfPaymentUpdateInput, ProofsOfPaymentUncheckedUpdateInput>
    /**
     * Choose, which ProofsOfPayment to update.
     */
    where: ProofsOfPaymentWhereUniqueInput
  }


  /**
   * ProofsOfPayment updateMany
   */
  export type ProofsOfPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProofsOfPayments.
     */
    data: XOR<ProofsOfPaymentUpdateManyMutationInput, ProofsOfPaymentUncheckedUpdateManyInput>
    /**
     * Filter which ProofsOfPayments to update
     */
    where?: ProofsOfPaymentWhereInput
  }


  /**
   * ProofsOfPayment upsert
   */
  export type ProofsOfPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofsOfPayment
     */
    select?: ProofsOfPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProofsOfPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the ProofsOfPayment to update in case it exists.
     */
    where: ProofsOfPaymentWhereUniqueInput
    /**
     * In case the ProofsOfPayment found by the `where` argument doesn't exist, create a new ProofsOfPayment with this data.
     */
    create: XOR<ProofsOfPaymentCreateInput, ProofsOfPaymentUncheckedCreateInput>
    /**
     * In case the ProofsOfPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProofsOfPaymentUpdateInput, ProofsOfPaymentUncheckedUpdateInput>
  }


  /**
   * ProofsOfPayment delete
   */
  export type ProofsOfPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofsOfPayment
     */
    select?: ProofsOfPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProofsOfPaymentInclude<ExtArgs> | null
    /**
     * Filter which ProofsOfPayment to delete.
     */
    where: ProofsOfPaymentWhereUniqueInput
  }


  /**
   * ProofsOfPayment deleteMany
   */
  export type ProofsOfPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProofsOfPayments to delete
     */
    where?: ProofsOfPaymentWhereInput
  }


  /**
   * ProofsOfPayment.admin
   */
  export type ProofsOfPayment$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }


  /**
   * ProofsOfPayment without action
   */
  export type ProofsOfPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofsOfPayment
     */
    select?: ProofsOfPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProofsOfPaymentInclude<ExtArgs> | null
  }



  /**
   * Model Warehouse
   */

  export type AggregateWarehouse = {
    _count: WarehouseCountAggregateOutputType | null
    _avg: WarehouseAvgAggregateOutputType | null
    _sum: WarehouseSumAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  export type WarehouseAvgAggregateOutputType = {
    warehouse_id: number | null
    province_id: number | null
    city_id: number | null
    postal_code: number | null
    admin_id: number | null
  }

  export type WarehouseSumAggregateOutputType = {
    warehouse_id: number | null
    province_id: number | null
    city_id: number | null
    postal_code: number | null
    admin_id: number | null
  }

  export type WarehouseMinAggregateOutputType = {
    warehouse_id: number | null
    province_id: number | null
    province_name: string | null
    city_id: number | null
    city_name: string | null
    postal_code: number | null
    admin_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WarehouseMaxAggregateOutputType = {
    warehouse_id: number | null
    province_id: number | null
    province_name: string | null
    city_id: number | null
    city_name: string | null
    postal_code: number | null
    admin_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WarehouseCountAggregateOutputType = {
    warehouse_id: number
    province_id: number
    province_name: number
    city_id: number
    city_name: number
    postal_code: number
    admin_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type WarehouseAvgAggregateInputType = {
    warehouse_id?: true
    province_id?: true
    city_id?: true
    postal_code?: true
    admin_id?: true
  }

  export type WarehouseSumAggregateInputType = {
    warehouse_id?: true
    province_id?: true
    city_id?: true
    postal_code?: true
    admin_id?: true
  }

  export type WarehouseMinAggregateInputType = {
    warehouse_id?: true
    province_id?: true
    province_name?: true
    city_id?: true
    city_name?: true
    postal_code?: true
    admin_id?: true
    created_at?: true
    updated_at?: true
  }

  export type WarehouseMaxAggregateInputType = {
    warehouse_id?: true
    province_id?: true
    province_name?: true
    city_id?: true
    city_name?: true
    postal_code?: true
    admin_id?: true
    created_at?: true
    updated_at?: true
  }

  export type WarehouseCountAggregateInputType = {
    warehouse_id?: true
    province_id?: true
    province_name?: true
    city_id?: true
    city_name?: true
    postal_code?: true
    admin_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type WarehouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouse to aggregate.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Warehouses
    **/
    _count?: true | WarehouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WarehouseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WarehouseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarehouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarehouseMaxAggregateInputType
  }

  export type GetWarehouseAggregateType<T extends WarehouseAggregateArgs> = {
        [P in keyof T & keyof AggregateWarehouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarehouse[P]>
      : GetScalarType<T[P], AggregateWarehouse[P]>
  }




  export type WarehouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseWhereInput
    orderBy?: WarehouseOrderByWithAggregationInput | WarehouseOrderByWithAggregationInput[]
    by: WarehouseScalarFieldEnum[] | WarehouseScalarFieldEnum
    having?: WarehouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarehouseCountAggregateInputType | true
    _avg?: WarehouseAvgAggregateInputType
    _sum?: WarehouseSumAggregateInputType
    _min?: WarehouseMinAggregateInputType
    _max?: WarehouseMaxAggregateInputType
  }

  export type WarehouseGroupByOutputType = {
    warehouse_id: number
    province_id: number
    province_name: string
    city_id: number
    city_name: string
    postal_code: number
    admin_id: number
    created_at: Date
    updated_at: Date
    _count: WarehouseCountAggregateOutputType | null
    _avg: WarehouseAvgAggregateOutputType | null
    _sum: WarehouseSumAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  type GetWarehouseGroupByPayload<T extends WarehouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarehouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarehouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
            : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
        }
      >
    >


  export type WarehouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    warehouse_id?: boolean
    province_id?: boolean
    province_name?: boolean
    city_id?: boolean
    city_name?: boolean
    postal_code?: boolean
    admin_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    products?: boolean | Warehouse$productsArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouse"]>

  export type WarehouseSelectScalar = {
    warehouse_id?: boolean
    province_id?: boolean
    province_name?: boolean
    city_id?: boolean
    city_name?: boolean
    postal_code?: boolean
    admin_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type WarehouseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    products?: boolean | Warehouse$productsArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $WarehousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Warehouse"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      warehouse_id: number
      province_id: number
      province_name: string
      city_id: number
      city_name: string
      postal_code: number
      admin_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["warehouse"]>
    composites: {}
  }


  type WarehouseGetPayload<S extends boolean | null | undefined | WarehouseDefaultArgs> = $Result.GetResult<Prisma.$WarehousePayload, S>

  type WarehouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WarehouseFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: WarehouseCountAggregateInputType | true
    }

  export interface WarehouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warehouse'], meta: { name: 'Warehouse' } }
    /**
     * Find zero or one Warehouse that matches the filter.
     * @param {WarehouseFindUniqueArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WarehouseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WarehouseFindUniqueArgs<ExtArgs>>
    ): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Warehouse that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WarehouseFindUniqueOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WarehouseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WarehouseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Warehouse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WarehouseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WarehouseFindFirstArgs<ExtArgs>>
    ): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Warehouse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WarehouseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WarehouseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Warehouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warehouses
     * const warehouses = await prisma.warehouse.findMany()
     * 
     * // Get first 10 Warehouses
     * const warehouses = await prisma.warehouse.findMany({ take: 10 })
     * 
     * // Only select the `warehouse_id`
     * const warehouseWithWarehouse_idOnly = await prisma.warehouse.findMany({ select: { warehouse_id: true } })
     * 
    **/
    findMany<T extends WarehouseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WarehouseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Warehouse.
     * @param {WarehouseCreateArgs} args - Arguments to create a Warehouse.
     * @example
     * // Create one Warehouse
     * const Warehouse = await prisma.warehouse.create({
     *   data: {
     *     // ... data to create a Warehouse
     *   }
     * })
     * 
    **/
    create<T extends WarehouseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WarehouseCreateArgs<ExtArgs>>
    ): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Warehouses.
     *     @param {WarehouseCreateManyArgs} args - Arguments to create many Warehouses.
     *     @example
     *     // Create many Warehouses
     *     const warehouse = await prisma.warehouse.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WarehouseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WarehouseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Warehouse.
     * @param {WarehouseDeleteArgs} args - Arguments to delete one Warehouse.
     * @example
     * // Delete one Warehouse
     * const Warehouse = await prisma.warehouse.delete({
     *   where: {
     *     // ... filter to delete one Warehouse
     *   }
     * })
     * 
    **/
    delete<T extends WarehouseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WarehouseDeleteArgs<ExtArgs>>
    ): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Warehouse.
     * @param {WarehouseUpdateArgs} args - Arguments to update one Warehouse.
     * @example
     * // Update one Warehouse
     * const warehouse = await prisma.warehouse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WarehouseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WarehouseUpdateArgs<ExtArgs>>
    ): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Warehouses.
     * @param {WarehouseDeleteManyArgs} args - Arguments to filter Warehouses to delete.
     * @example
     * // Delete a few Warehouses
     * const { count } = await prisma.warehouse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WarehouseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WarehouseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warehouses
     * const warehouse = await prisma.warehouse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WarehouseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WarehouseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Warehouse.
     * @param {WarehouseUpsertArgs} args - Arguments to update or create a Warehouse.
     * @example
     * // Update or create a Warehouse
     * const warehouse = await prisma.warehouse.upsert({
     *   create: {
     *     // ... data to create a Warehouse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warehouse we want to update
     *   }
     * })
    **/
    upsert<T extends WarehouseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WarehouseUpsertArgs<ExtArgs>>
    ): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseCountArgs} args - Arguments to filter Warehouses to count.
     * @example
     * // Count the number of Warehouses
     * const count = await prisma.warehouse.count({
     *   where: {
     *     // ... the filter for the Warehouses we want to count
     *   }
     * })
    **/
    count<T extends WarehouseCountArgs>(
      args?: Subset<T, WarehouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarehouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WarehouseAggregateArgs>(args: Subset<T, WarehouseAggregateArgs>): Prisma.PrismaPromise<GetWarehouseAggregateType<T>>

    /**
     * Group by Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WarehouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarehouseGroupByArgs['orderBy'] }
        : { orderBy?: WarehouseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WarehouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Warehouse model
   */
  readonly fields: WarehouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Warehouse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarehouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    products<T extends Warehouse$productsArgs<ExtArgs> = {}>(args?: Subset<T, Warehouse$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Warehouse model
   */ 
  interface WarehouseFieldRefs {
    readonly warehouse_id: FieldRef<"Warehouse", 'Int'>
    readonly province_id: FieldRef<"Warehouse", 'Int'>
    readonly province_name: FieldRef<"Warehouse", 'String'>
    readonly city_id: FieldRef<"Warehouse", 'Int'>
    readonly city_name: FieldRef<"Warehouse", 'String'>
    readonly postal_code: FieldRef<"Warehouse", 'Int'>
    readonly admin_id: FieldRef<"Warehouse", 'Int'>
    readonly created_at: FieldRef<"Warehouse", 'DateTime'>
    readonly updated_at: FieldRef<"Warehouse", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Warehouse findUnique
   */
  export type WarehouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }


  /**
   * Warehouse findUniqueOrThrow
   */
  export type WarehouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }


  /**
   * Warehouse findFirst
   */
  export type WarehouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }


  /**
   * Warehouse findFirstOrThrow
   */
  export type WarehouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }


  /**
   * Warehouse findMany
   */
  export type WarehouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }


  /**
   * Warehouse create
   */
  export type WarehouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to create a Warehouse.
     */
    data: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
  }


  /**
   * Warehouse createMany
   */
  export type WarehouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Warehouses.
     */
    data: WarehouseCreateManyInput | WarehouseCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Warehouse update
   */
  export type WarehouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to update a Warehouse.
     */
    data: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
    /**
     * Choose, which Warehouse to update.
     */
    where: WarehouseWhereUniqueInput
  }


  /**
   * Warehouse updateMany
   */
  export type WarehouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehouseWhereInput
  }


  /**
   * Warehouse upsert
   */
  export type WarehouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The filter to search for the Warehouse to update in case it exists.
     */
    where: WarehouseWhereUniqueInput
    /**
     * In case the Warehouse found by the `where` argument doesn't exist, create a new Warehouse with this data.
     */
    create: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
    /**
     * In case the Warehouse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
  }


  /**
   * Warehouse delete
   */
  export type WarehouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter which Warehouse to delete.
     */
    where: WarehouseWhereUniqueInput
  }


  /**
   * Warehouse deleteMany
   */
  export type WarehouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouses to delete
     */
    where?: WarehouseWhereInput
  }


  /**
   * Warehouse.products
   */
  export type Warehouse$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Warehouse without action
   */
  export type WarehouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarehouseInclude<ExtArgs> | null
  }



  /**
   * Model UserAddress
   */

  export type AggregateUserAddress = {
    _count: UserAddressCountAggregateOutputType | null
    _avg: UserAddressAvgAggregateOutputType | null
    _sum: UserAddressSumAggregateOutputType | null
    _min: UserAddressMinAggregateOutputType | null
    _max: UserAddressMaxAggregateOutputType | null
  }

  export type UserAddressAvgAggregateOutputType = {
    user_address_id: number | null
    user_id: number | null
    province_id: number | null
    city_id: number | null
    postal_code: number | null
  }

  export type UserAddressSumAggregateOutputType = {
    user_address_id: number | null
    user_id: number | null
    province_id: number | null
    city_id: number | null
    postal_code: number | null
  }

  export type UserAddressMinAggregateOutputType = {
    user_address_id: number | null
    user_id: number | null
    province_id: number | null
    province_name: string | null
    city_id: number | null
    city_name: string | null
    postal_code: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserAddressMaxAggregateOutputType = {
    user_address_id: number | null
    user_id: number | null
    province_id: number | null
    province_name: string | null
    city_id: number | null
    city_name: string | null
    postal_code: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserAddressCountAggregateOutputType = {
    user_address_id: number
    user_id: number
    province_id: number
    province_name: number
    city_id: number
    city_name: number
    postal_code: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAddressAvgAggregateInputType = {
    user_address_id?: true
    user_id?: true
    province_id?: true
    city_id?: true
    postal_code?: true
  }

  export type UserAddressSumAggregateInputType = {
    user_address_id?: true
    user_id?: true
    province_id?: true
    city_id?: true
    postal_code?: true
  }

  export type UserAddressMinAggregateInputType = {
    user_address_id?: true
    user_id?: true
    province_id?: true
    province_name?: true
    city_id?: true
    city_name?: true
    postal_code?: true
    created_at?: true
    updated_at?: true
  }

  export type UserAddressMaxAggregateInputType = {
    user_address_id?: true
    user_id?: true
    province_id?: true
    province_name?: true
    city_id?: true
    city_name?: true
    postal_code?: true
    created_at?: true
    updated_at?: true
  }

  export type UserAddressCountAggregateInputType = {
    user_address_id?: true
    user_id?: true
    province_id?: true
    province_name?: true
    city_id?: true
    city_name?: true
    postal_code?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAddress to aggregate.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAddresses
    **/
    _count?: true | UserAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAddressMaxAggregateInputType
  }

  export type GetUserAddressAggregateType<T extends UserAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAddress[P]>
      : GetScalarType<T[P], AggregateUserAddress[P]>
  }




  export type UserAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAddressWhereInput
    orderBy?: UserAddressOrderByWithAggregationInput | UserAddressOrderByWithAggregationInput[]
    by: UserAddressScalarFieldEnum[] | UserAddressScalarFieldEnum
    having?: UserAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAddressCountAggregateInputType | true
    _avg?: UserAddressAvgAggregateInputType
    _sum?: UserAddressSumAggregateInputType
    _min?: UserAddressMinAggregateInputType
    _max?: UserAddressMaxAggregateInputType
  }

  export type UserAddressGroupByOutputType = {
    user_address_id: number
    user_id: number
    province_id: number
    province_name: string
    city_id: number
    city_name: string
    postal_code: number
    created_at: Date
    updated_at: Date
    _count: UserAddressCountAggregateOutputType | null
    _avg: UserAddressAvgAggregateOutputType | null
    _sum: UserAddressSumAggregateOutputType | null
    _min: UserAddressMinAggregateOutputType | null
    _max: UserAddressMaxAggregateOutputType | null
  }

  type GetUserAddressGroupByPayload<T extends UserAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAddressGroupByOutputType[P]>
            : GetScalarType<T[P], UserAddressGroupByOutputType[P]>
        }
      >
    >


  export type UserAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_address_id?: boolean
    user_id?: boolean
    province_id?: boolean
    province_name?: boolean
    city_id?: boolean
    city_name?: boolean
    postal_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAddress"]>

  export type UserAddressSelectScalar = {
    user_address_id?: boolean
    user_id?: boolean
    province_id?: boolean
    province_name?: boolean
    city_id?: boolean
    city_name?: boolean
    postal_code?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $UserAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAddress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_address_id: number
      user_id: number
      province_id: number
      province_name: string
      city_id: number
      city_name: string
      postal_code: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["userAddress"]>
    composites: {}
  }


  type UserAddressGetPayload<S extends boolean | null | undefined | UserAddressDefaultArgs> = $Result.GetResult<Prisma.$UserAddressPayload, S>

  type UserAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserAddressFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserAddressCountAggregateInputType | true
    }

  export interface UserAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAddress'], meta: { name: 'UserAddress' } }
    /**
     * Find zero or one UserAddress that matches the filter.
     * @param {UserAddressFindUniqueArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserAddressFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserAddressFindUniqueArgs<ExtArgs>>
    ): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserAddress that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserAddressFindUniqueOrThrowArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserAddressFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAddressFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressFindFirstArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserAddressFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAddressFindFirstArgs<ExtArgs>>
    ): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressFindFirstOrThrowArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserAddressFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAddressFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAddresses
     * const userAddresses = await prisma.userAddress.findMany()
     * 
     * // Get first 10 UserAddresses
     * const userAddresses = await prisma.userAddress.findMany({ take: 10 })
     * 
     * // Only select the `user_address_id`
     * const userAddressWithUser_address_idOnly = await prisma.userAddress.findMany({ select: { user_address_id: true } })
     * 
    **/
    findMany<T extends UserAddressFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAddressFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserAddress.
     * @param {UserAddressCreateArgs} args - Arguments to create a UserAddress.
     * @example
     * // Create one UserAddress
     * const UserAddress = await prisma.userAddress.create({
     *   data: {
     *     // ... data to create a UserAddress
     *   }
     * })
     * 
    **/
    create<T extends UserAddressCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserAddressCreateArgs<ExtArgs>>
    ): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserAddresses.
     *     @param {UserAddressCreateManyArgs} args - Arguments to create many UserAddresses.
     *     @example
     *     // Create many UserAddresses
     *     const userAddress = await prisma.userAddress.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserAddressCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAddressCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserAddress.
     * @param {UserAddressDeleteArgs} args - Arguments to delete one UserAddress.
     * @example
     * // Delete one UserAddress
     * const UserAddress = await prisma.userAddress.delete({
     *   where: {
     *     // ... filter to delete one UserAddress
     *   }
     * })
     * 
    **/
    delete<T extends UserAddressDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserAddressDeleteArgs<ExtArgs>>
    ): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserAddress.
     * @param {UserAddressUpdateArgs} args - Arguments to update one UserAddress.
     * @example
     * // Update one UserAddress
     * const userAddress = await prisma.userAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserAddressUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserAddressUpdateArgs<ExtArgs>>
    ): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserAddresses.
     * @param {UserAddressDeleteManyArgs} args - Arguments to filter UserAddresses to delete.
     * @example
     * // Delete a few UserAddresses
     * const { count } = await prisma.userAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserAddressDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAddressDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAddresses
     * const userAddress = await prisma.userAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserAddressUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserAddressUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAddress.
     * @param {UserAddressUpsertArgs} args - Arguments to update or create a UserAddress.
     * @example
     * // Update or create a UserAddress
     * const userAddress = await prisma.userAddress.upsert({
     *   create: {
     *     // ... data to create a UserAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAddress we want to update
     *   }
     * })
    **/
    upsert<T extends UserAddressUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserAddressUpsertArgs<ExtArgs>>
    ): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressCountArgs} args - Arguments to filter UserAddresses to count.
     * @example
     * // Count the number of UserAddresses
     * const count = await prisma.userAddress.count({
     *   where: {
     *     // ... the filter for the UserAddresses we want to count
     *   }
     * })
    **/
    count<T extends UserAddressCountArgs>(
      args?: Subset<T, UserAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAddressAggregateArgs>(args: Subset<T, UserAddressAggregateArgs>): Prisma.PrismaPromise<GetUserAddressAggregateType<T>>

    /**
     * Group by UserAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAddressGroupByArgs['orderBy'] }
        : { orderBy?: UserAddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAddress model
   */
  readonly fields: UserAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserAddress model
   */ 
  interface UserAddressFieldRefs {
    readonly user_address_id: FieldRef<"UserAddress", 'Int'>
    readonly user_id: FieldRef<"UserAddress", 'Int'>
    readonly province_id: FieldRef<"UserAddress", 'Int'>
    readonly province_name: FieldRef<"UserAddress", 'String'>
    readonly city_id: FieldRef<"UserAddress", 'Int'>
    readonly city_name: FieldRef<"UserAddress", 'String'>
    readonly postal_code: FieldRef<"UserAddress", 'Int'>
    readonly created_at: FieldRef<"UserAddress", 'DateTime'>
    readonly updated_at: FieldRef<"UserAddress", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * UserAddress findUnique
   */
  export type UserAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where: UserAddressWhereUniqueInput
  }


  /**
   * UserAddress findUniqueOrThrow
   */
  export type UserAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where: UserAddressWhereUniqueInput
  }


  /**
   * UserAddress findFirst
   */
  export type UserAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAddresses.
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAddresses.
     */
    distinct?: UserAddressScalarFieldEnum | UserAddressScalarFieldEnum[]
  }


  /**
   * UserAddress findFirstOrThrow
   */
  export type UserAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAddresses.
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAddresses.
     */
    distinct?: UserAddressScalarFieldEnum | UserAddressScalarFieldEnum[]
  }


  /**
   * UserAddress findMany
   */
  export type UserAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddresses to fetch.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAddresses.
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    distinct?: UserAddressScalarFieldEnum | UserAddressScalarFieldEnum[]
  }


  /**
   * UserAddress create
   */
  export type UserAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAddress.
     */
    data: XOR<UserAddressCreateInput, UserAddressUncheckedCreateInput>
  }


  /**
   * UserAddress createMany
   */
  export type UserAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAddresses.
     */
    data: UserAddressCreateManyInput | UserAddressCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserAddress update
   */
  export type UserAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAddress.
     */
    data: XOR<UserAddressUpdateInput, UserAddressUncheckedUpdateInput>
    /**
     * Choose, which UserAddress to update.
     */
    where: UserAddressWhereUniqueInput
  }


  /**
   * UserAddress updateMany
   */
  export type UserAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAddresses.
     */
    data: XOR<UserAddressUpdateManyMutationInput, UserAddressUncheckedUpdateManyInput>
    /**
     * Filter which UserAddresses to update
     */
    where?: UserAddressWhereInput
  }


  /**
   * UserAddress upsert
   */
  export type UserAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAddress to update in case it exists.
     */
    where: UserAddressWhereUniqueInput
    /**
     * In case the UserAddress found by the `where` argument doesn't exist, create a new UserAddress with this data.
     */
    create: XOR<UserAddressCreateInput, UserAddressUncheckedCreateInput>
    /**
     * In case the UserAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAddressUpdateInput, UserAddressUncheckedUpdateInput>
  }


  /**
   * UserAddress delete
   */
  export type UserAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter which UserAddress to delete.
     */
    where: UserAddressWhereUniqueInput
  }


  /**
   * UserAddress deleteMany
   */
  export type UserAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAddresses to delete
     */
    where?: UserAddressWhereInput
  }


  /**
   * UserAddress without action
   */
  export type UserAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAddressInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    full_name: 'full_name',
    password: 'password',
    email: 'email',
    affiliate_code: 'affiliate_code',
    affiliate_usage: 'affiliate_usage',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    product_id: 'product_id',
    name: 'name',
    description: 'description',
    price: 'price',
    stock: 'stock',
    is_available: 'is_available',
    category_id: 'category_id',
    warehouse_id: 'warehouse_id',
    image: 'image',
    weight: 'weight',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const AffiliateDiscountScalarFieldEnum: {
    affiliate_discount_id: 'affiliate_discount_id',
    user_id: 'user_id',
    discount_amount: 'discount_amount',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AffiliateDiscountScalarFieldEnum = (typeof AffiliateDiscountScalarFieldEnum)[keyof typeof AffiliateDiscountScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    category_id: 'category_id',
    category_name: 'category_name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    admin_id: 'admin_id',
    username: 'username',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const PromotionScalarFieldEnum: {
    promo_id: 'promo_id',
    type: 'type',
    maximum_usage: 'maximum_usage',
    amount: 'amount',
    remaining_usage: 'remaining_usage',
    admin_id: 'admin_id',
    product_id: 'product_id',
    promo_code: 'promo_code'
  };

  export type PromotionScalarFieldEnum = (typeof PromotionScalarFieldEnum)[keyof typeof PromotionScalarFieldEnum]


  export const UserPromoUsageScalarFieldEnum: {
    user_promo_usage_id: 'user_promo_usage_id',
    user_id: 'user_id',
    promo_id: 'promo_id',
    usage_count: 'usage_count',
    order_id: 'order_id'
  };

  export type UserPromoUsageScalarFieldEnum = (typeof UserPromoUsageScalarFieldEnum)[keyof typeof UserPromoUsageScalarFieldEnum]


  export const ShoppingCartItemScalarFieldEnum: {
    cart_item_id: 'cart_item_id',
    cart_id: 'cart_id',
    product_id: 'product_id',
    quantity: 'quantity',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ShoppingCartItemScalarFieldEnum = (typeof ShoppingCartItemScalarFieldEnum)[keyof typeof ShoppingCartItemScalarFieldEnum]


  export const ShoppingCartScalarFieldEnum: {
    cart_id: 'cart_id',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    productProduct_id: 'productProduct_id'
  };

  export type ShoppingCartScalarFieldEnum = (typeof ShoppingCartScalarFieldEnum)[keyof typeof ShoppingCartScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    order_id: 'order_id',
    user_id: 'user_id',
    order_item_id: 'order_item_id',
    order_date: 'order_date',
    delivery_time: 'delivery_time',
    deliver_fee: 'deliver_fee',
    total_price: 'total_price',
    payment_status: 'payment_status',
    order_status: 'order_status',
    admin_id: 'admin_id',
    promo_code: 'promo_code',
    promo_discount_amount: 'promo_discount_amount',
    affiliate_discount_amount: 'affiliate_discount_amount'
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    order_item_id: 'order_item_id',
    product_id: 'product_id',
    quantity: 'quantity',
    price: 'price',
    created_at: 'created_at',
    updated_at: 'updated_at',
    ordersOrder_id: 'ordersOrder_id'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const ProofsOfPaymentScalarFieldEnum: {
    proof_of_payment_id: 'proof_of_payment_id',
    order_id: 'order_id',
    image: 'image',
    payment_status: 'payment_status',
    promo_usage_updated: 'promo_usage_updated',
    admin_id: 'admin_id'
  };

  export type ProofsOfPaymentScalarFieldEnum = (typeof ProofsOfPaymentScalarFieldEnum)[keyof typeof ProofsOfPaymentScalarFieldEnum]


  export const WarehouseScalarFieldEnum: {
    warehouse_id: 'warehouse_id',
    province_id: 'province_id',
    province_name: 'province_name',
    city_id: 'city_id',
    city_name: 'city_name',
    postal_code: 'postal_code',
    admin_id: 'admin_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type WarehouseScalarFieldEnum = (typeof WarehouseScalarFieldEnum)[keyof typeof WarehouseScalarFieldEnum]


  export const UserAddressScalarFieldEnum: {
    user_address_id: 'user_address_id',
    user_id: 'user_id',
    province_id: 'province_id',
    province_name: 'province_name',
    city_id: 'city_id',
    city_name: 'city_name',
    postal_code: 'postal_code',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserAddressScalarFieldEnum = (typeof UserAddressScalarFieldEnum)[keyof typeof UserAddressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: IntFilter<"User"> | number
    full_name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    affiliate_code?: StringFilter<"User"> | string
    affiliate_usage?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    user_promo_usages?: UserPromoUsageListRelationFilter
    shopping_carts?: ShoppingCartListRelationFilter
    orders?: OrdersListRelationFilter
    affiliate_discounts?: AffiliateDiscountListRelationFilter
    user_addresses?: UserAddressListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    full_name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    affiliate_code?: SortOrder
    affiliate_usage?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_promo_usages?: UserPromoUsageOrderByRelationAggregateInput
    shopping_carts?: ShoppingCartOrderByRelationAggregateInput
    orders?: OrdersOrderByRelationAggregateInput
    affiliate_discounts?: AffiliateDiscountOrderByRelationAggregateInput
    user_addresses?: UserAddressOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    full_name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    affiliate_code?: StringFilter<"User"> | string
    affiliate_usage?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    user_promo_usages?: UserPromoUsageListRelationFilter
    shopping_carts?: ShoppingCartListRelationFilter
    orders?: OrdersListRelationFilter
    affiliate_discounts?: AffiliateDiscountListRelationFilter
    user_addresses?: UserAddressListRelationFilter
  }, "user_id">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    full_name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    affiliate_code?: SortOrder
    affiliate_usage?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"User"> | number
    full_name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    affiliate_code?: StringWithAggregatesFilter<"User"> | string
    affiliate_usage?: BoolWithAggregatesFilter<"User"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    product_id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Product"> | number
    is_available?: BoolFilter<"Product"> | boolean
    category_id?: IntFilter<"Product"> | number
    warehouse_id?: IntFilter<"Product"> | number
    image?: StringFilter<"Product"> | string
    weight?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    warehouse?: XOR<WarehouseRelationFilter, WarehouseWhereInput>
    promotions?: PromotionListRelationFilter
    order_items?: OrderItemListRelationFilter
    ShoppingCart?: ShoppingCartListRelationFilter
    ShoppingCartItem?: ShoppingCartItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    product_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    is_available?: SortOrder
    category_id?: SortOrder
    warehouse_id?: SortOrder
    image?: SortOrder
    weight?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category?: CategoryOrderByWithRelationInput
    warehouse?: WarehouseOrderByWithRelationInput
    promotions?: PromotionOrderByRelationAggregateInput
    order_items?: OrderItemOrderByRelationAggregateInput
    ShoppingCart?: ShoppingCartOrderByRelationAggregateInput
    ShoppingCartItem?: ShoppingCartItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    product_id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Product"> | number
    is_available?: BoolFilter<"Product"> | boolean
    category_id?: IntFilter<"Product"> | number
    warehouse_id?: IntFilter<"Product"> | number
    image?: StringFilter<"Product"> | string
    weight?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    warehouse?: XOR<WarehouseRelationFilter, WarehouseWhereInput>
    promotions?: PromotionListRelationFilter
    order_items?: OrderItemListRelationFilter
    ShoppingCart?: ShoppingCartListRelationFilter
    ShoppingCartItem?: ShoppingCartItemListRelationFilter
  }, "product_id">

  export type ProductOrderByWithAggregationInput = {
    product_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    is_available?: SortOrder
    category_id?: SortOrder
    warehouse_id?: SortOrder
    image?: SortOrder
    weight?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    product_id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    price?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    stock?: IntWithAggregatesFilter<"Product"> | number
    is_available?: BoolWithAggregatesFilter<"Product"> | boolean
    category_id?: IntWithAggregatesFilter<"Product"> | number
    warehouse_id?: IntWithAggregatesFilter<"Product"> | number
    image?: StringWithAggregatesFilter<"Product"> | string
    weight?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type AffiliateDiscountWhereInput = {
    AND?: AffiliateDiscountWhereInput | AffiliateDiscountWhereInput[]
    OR?: AffiliateDiscountWhereInput[]
    NOT?: AffiliateDiscountWhereInput | AffiliateDiscountWhereInput[]
    affiliate_discount_id?: IntFilter<"AffiliateDiscount"> | number
    user_id?: IntFilter<"AffiliateDiscount"> | number
    discount_amount?: DecimalFilter<"AffiliateDiscount"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"AffiliateDiscount"> | Date | string
    updated_at?: DateTimeFilter<"AffiliateDiscount"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AffiliateDiscountOrderByWithRelationInput = {
    affiliate_discount_id?: SortOrder
    user_id?: SortOrder
    discount_amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AffiliateDiscountWhereUniqueInput = Prisma.AtLeast<{
    affiliate_discount_id?: number
    AND?: AffiliateDiscountWhereInput | AffiliateDiscountWhereInput[]
    OR?: AffiliateDiscountWhereInput[]
    NOT?: AffiliateDiscountWhereInput | AffiliateDiscountWhereInput[]
    user_id?: IntFilter<"AffiliateDiscount"> | number
    discount_amount?: DecimalFilter<"AffiliateDiscount"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"AffiliateDiscount"> | Date | string
    updated_at?: DateTimeFilter<"AffiliateDiscount"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "affiliate_discount_id">

  export type AffiliateDiscountOrderByWithAggregationInput = {
    affiliate_discount_id?: SortOrder
    user_id?: SortOrder
    discount_amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AffiliateDiscountCountOrderByAggregateInput
    _avg?: AffiliateDiscountAvgOrderByAggregateInput
    _max?: AffiliateDiscountMaxOrderByAggregateInput
    _min?: AffiliateDiscountMinOrderByAggregateInput
    _sum?: AffiliateDiscountSumOrderByAggregateInput
  }

  export type AffiliateDiscountScalarWhereWithAggregatesInput = {
    AND?: AffiliateDiscountScalarWhereWithAggregatesInput | AffiliateDiscountScalarWhereWithAggregatesInput[]
    OR?: AffiliateDiscountScalarWhereWithAggregatesInput[]
    NOT?: AffiliateDiscountScalarWhereWithAggregatesInput | AffiliateDiscountScalarWhereWithAggregatesInput[]
    affiliate_discount_id?: IntWithAggregatesFilter<"AffiliateDiscount"> | number
    user_id?: IntWithAggregatesFilter<"AffiliateDiscount"> | number
    discount_amount?: DecimalWithAggregatesFilter<"AffiliateDiscount"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"AffiliateDiscount"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"AffiliateDiscount"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    category_id?: IntFilter<"Category"> | number
    category_name?: StringFilter<"Category"> | string
    created_at?: DateTimeFilter<"Category"> | Date | string
    updated_at?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    category_id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    category_name?: StringFilter<"Category"> | string
    created_at?: DateTimeFilter<"Category"> | Date | string
    updated_at?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
  }, "category_id">

  export type CategoryOrderByWithAggregationInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    category_id?: IntWithAggregatesFilter<"Category"> | number
    category_name?: StringWithAggregatesFilter<"Category"> | string
    created_at?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    admin_id?: IntFilter<"Admin"> | number
    username?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    created_at?: DateTimeFilter<"Admin"> | Date | string
    updated_at?: DateTimeFilter<"Admin"> | Date | string
    Promotion?: PromotionListRelationFilter
    Orders?: OrdersListRelationFilter
    ProofsOfPayment?: ProofsOfPaymentListRelationFilter
    Warehouse?: WarehouseListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    admin_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Promotion?: PromotionOrderByRelationAggregateInput
    Orders?: OrdersOrderByRelationAggregateInput
    ProofsOfPayment?: ProofsOfPaymentOrderByRelationAggregateInput
    Warehouse?: WarehouseOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    admin_id?: number
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    username?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    created_at?: DateTimeFilter<"Admin"> | Date | string
    updated_at?: DateTimeFilter<"Admin"> | Date | string
    Promotion?: PromotionListRelationFilter
    Orders?: OrdersListRelationFilter
    ProofsOfPayment?: ProofsOfPaymentListRelationFilter
    Warehouse?: WarehouseListRelationFilter
  }, "admin_id">

  export type AdminOrderByWithAggregationInput = {
    admin_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    admin_id?: IntWithAggregatesFilter<"Admin"> | number
    username?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    created_at?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type PromotionWhereInput = {
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    promo_id?: IntFilter<"Promotion"> | number
    type?: StringFilter<"Promotion"> | string
    maximum_usage?: IntFilter<"Promotion"> | number
    amount?: DecimalFilter<"Promotion"> | Decimal | DecimalJsLike | number | string
    remaining_usage?: IntFilter<"Promotion"> | number
    admin_id?: IntFilter<"Promotion"> | number
    product_id?: IntNullableFilter<"Promotion"> | number | null
    promo_code?: StringNullableFilter<"Promotion"> | string | null
    admin?: XOR<AdminRelationFilter, AdminWhereInput>
    product?: XOR<ProductNullableRelationFilter, ProductWhereInput> | null
    UserPromoUsage?: UserPromoUsageListRelationFilter
  }

  export type PromotionOrderByWithRelationInput = {
    promo_id?: SortOrder
    type?: SortOrder
    maximum_usage?: SortOrder
    amount?: SortOrder
    remaining_usage?: SortOrder
    admin_id?: SortOrder
    product_id?: SortOrderInput | SortOrder
    promo_code?: SortOrderInput | SortOrder
    admin?: AdminOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    UserPromoUsage?: UserPromoUsageOrderByRelationAggregateInput
  }

  export type PromotionWhereUniqueInput = Prisma.AtLeast<{
    promo_id?: number
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    type?: StringFilter<"Promotion"> | string
    maximum_usage?: IntFilter<"Promotion"> | number
    amount?: DecimalFilter<"Promotion"> | Decimal | DecimalJsLike | number | string
    remaining_usage?: IntFilter<"Promotion"> | number
    admin_id?: IntFilter<"Promotion"> | number
    product_id?: IntNullableFilter<"Promotion"> | number | null
    promo_code?: StringNullableFilter<"Promotion"> | string | null
    admin?: XOR<AdminRelationFilter, AdminWhereInput>
    product?: XOR<ProductNullableRelationFilter, ProductWhereInput> | null
    UserPromoUsage?: UserPromoUsageListRelationFilter
  }, "promo_id">

  export type PromotionOrderByWithAggregationInput = {
    promo_id?: SortOrder
    type?: SortOrder
    maximum_usage?: SortOrder
    amount?: SortOrder
    remaining_usage?: SortOrder
    admin_id?: SortOrder
    product_id?: SortOrderInput | SortOrder
    promo_code?: SortOrderInput | SortOrder
    _count?: PromotionCountOrderByAggregateInput
    _avg?: PromotionAvgOrderByAggregateInput
    _max?: PromotionMaxOrderByAggregateInput
    _min?: PromotionMinOrderByAggregateInput
    _sum?: PromotionSumOrderByAggregateInput
  }

  export type PromotionScalarWhereWithAggregatesInput = {
    AND?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    OR?: PromotionScalarWhereWithAggregatesInput[]
    NOT?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    promo_id?: IntWithAggregatesFilter<"Promotion"> | number
    type?: StringWithAggregatesFilter<"Promotion"> | string
    maximum_usage?: IntWithAggregatesFilter<"Promotion"> | number
    amount?: DecimalWithAggregatesFilter<"Promotion"> | Decimal | DecimalJsLike | number | string
    remaining_usage?: IntWithAggregatesFilter<"Promotion"> | number
    admin_id?: IntWithAggregatesFilter<"Promotion"> | number
    product_id?: IntNullableWithAggregatesFilter<"Promotion"> | number | null
    promo_code?: StringNullableWithAggregatesFilter<"Promotion"> | string | null
  }

  export type UserPromoUsageWhereInput = {
    AND?: UserPromoUsageWhereInput | UserPromoUsageWhereInput[]
    OR?: UserPromoUsageWhereInput[]
    NOT?: UserPromoUsageWhereInput | UserPromoUsageWhereInput[]
    user_promo_usage_id?: IntFilter<"UserPromoUsage"> | number
    user_id?: IntFilter<"UserPromoUsage"> | number
    promo_id?: IntFilter<"UserPromoUsage"> | number
    usage_count?: IntFilter<"UserPromoUsage"> | number
    order_id?: IntNullableFilter<"UserPromoUsage"> | number | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    promo?: XOR<PromotionRelationFilter, PromotionWhereInput>
    order?: XOR<OrdersNullableRelationFilter, OrdersWhereInput> | null
  }

  export type UserPromoUsageOrderByWithRelationInput = {
    user_promo_usage_id?: SortOrder
    user_id?: SortOrder
    promo_id?: SortOrder
    usage_count?: SortOrder
    order_id?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    promo?: PromotionOrderByWithRelationInput
    order?: OrdersOrderByWithRelationInput
  }

  export type UserPromoUsageWhereUniqueInput = Prisma.AtLeast<{
    user_promo_usage_id?: number
    AND?: UserPromoUsageWhereInput | UserPromoUsageWhereInput[]
    OR?: UserPromoUsageWhereInput[]
    NOT?: UserPromoUsageWhereInput | UserPromoUsageWhereInput[]
    user_id?: IntFilter<"UserPromoUsage"> | number
    promo_id?: IntFilter<"UserPromoUsage"> | number
    usage_count?: IntFilter<"UserPromoUsage"> | number
    order_id?: IntNullableFilter<"UserPromoUsage"> | number | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    promo?: XOR<PromotionRelationFilter, PromotionWhereInput>
    order?: XOR<OrdersNullableRelationFilter, OrdersWhereInput> | null
  }, "user_promo_usage_id">

  export type UserPromoUsageOrderByWithAggregationInput = {
    user_promo_usage_id?: SortOrder
    user_id?: SortOrder
    promo_id?: SortOrder
    usage_count?: SortOrder
    order_id?: SortOrderInput | SortOrder
    _count?: UserPromoUsageCountOrderByAggregateInput
    _avg?: UserPromoUsageAvgOrderByAggregateInput
    _max?: UserPromoUsageMaxOrderByAggregateInput
    _min?: UserPromoUsageMinOrderByAggregateInput
    _sum?: UserPromoUsageSumOrderByAggregateInput
  }

  export type UserPromoUsageScalarWhereWithAggregatesInput = {
    AND?: UserPromoUsageScalarWhereWithAggregatesInput | UserPromoUsageScalarWhereWithAggregatesInput[]
    OR?: UserPromoUsageScalarWhereWithAggregatesInput[]
    NOT?: UserPromoUsageScalarWhereWithAggregatesInput | UserPromoUsageScalarWhereWithAggregatesInput[]
    user_promo_usage_id?: IntWithAggregatesFilter<"UserPromoUsage"> | number
    user_id?: IntWithAggregatesFilter<"UserPromoUsage"> | number
    promo_id?: IntWithAggregatesFilter<"UserPromoUsage"> | number
    usage_count?: IntWithAggregatesFilter<"UserPromoUsage"> | number
    order_id?: IntNullableWithAggregatesFilter<"UserPromoUsage"> | number | null
  }

  export type ShoppingCartItemWhereInput = {
    AND?: ShoppingCartItemWhereInput | ShoppingCartItemWhereInput[]
    OR?: ShoppingCartItemWhereInput[]
    NOT?: ShoppingCartItemWhereInput | ShoppingCartItemWhereInput[]
    cart_item_id?: IntFilter<"ShoppingCartItem"> | number
    cart_id?: IntFilter<"ShoppingCartItem"> | number
    product_id?: IntFilter<"ShoppingCartItem"> | number
    quantity?: IntFilter<"ShoppingCartItem"> | number
    created_at?: DateTimeFilter<"ShoppingCartItem"> | Date | string
    updated_at?: DateTimeFilter<"ShoppingCartItem"> | Date | string
    cart?: XOR<ShoppingCartRelationFilter, ShoppingCartWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ShoppingCartItemOrderByWithRelationInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cart?: ShoppingCartOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type ShoppingCartItemWhereUniqueInput = Prisma.AtLeast<{
    cart_item_id?: number
    AND?: ShoppingCartItemWhereInput | ShoppingCartItemWhereInput[]
    OR?: ShoppingCartItemWhereInput[]
    NOT?: ShoppingCartItemWhereInput | ShoppingCartItemWhereInput[]
    cart_id?: IntFilter<"ShoppingCartItem"> | number
    product_id?: IntFilter<"ShoppingCartItem"> | number
    quantity?: IntFilter<"ShoppingCartItem"> | number
    created_at?: DateTimeFilter<"ShoppingCartItem"> | Date | string
    updated_at?: DateTimeFilter<"ShoppingCartItem"> | Date | string
    cart?: XOR<ShoppingCartRelationFilter, ShoppingCartWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "cart_item_id">

  export type ShoppingCartItemOrderByWithAggregationInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ShoppingCartItemCountOrderByAggregateInput
    _avg?: ShoppingCartItemAvgOrderByAggregateInput
    _max?: ShoppingCartItemMaxOrderByAggregateInput
    _min?: ShoppingCartItemMinOrderByAggregateInput
    _sum?: ShoppingCartItemSumOrderByAggregateInput
  }

  export type ShoppingCartItemScalarWhereWithAggregatesInput = {
    AND?: ShoppingCartItemScalarWhereWithAggregatesInput | ShoppingCartItemScalarWhereWithAggregatesInput[]
    OR?: ShoppingCartItemScalarWhereWithAggregatesInput[]
    NOT?: ShoppingCartItemScalarWhereWithAggregatesInput | ShoppingCartItemScalarWhereWithAggregatesInput[]
    cart_item_id?: IntWithAggregatesFilter<"ShoppingCartItem"> | number
    cart_id?: IntWithAggregatesFilter<"ShoppingCartItem"> | number
    product_id?: IntWithAggregatesFilter<"ShoppingCartItem"> | number
    quantity?: IntWithAggregatesFilter<"ShoppingCartItem"> | number
    created_at?: DateTimeWithAggregatesFilter<"ShoppingCartItem"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ShoppingCartItem"> | Date | string
  }

  export type ShoppingCartWhereInput = {
    AND?: ShoppingCartWhereInput | ShoppingCartWhereInput[]
    OR?: ShoppingCartWhereInput[]
    NOT?: ShoppingCartWhereInput | ShoppingCartWhereInput[]
    cart_id?: IntFilter<"ShoppingCart"> | number
    user_id?: IntFilter<"ShoppingCart"> | number
    created_at?: DateTimeFilter<"ShoppingCart"> | Date | string
    updated_at?: DateTimeFilter<"ShoppingCart"> | Date | string
    productProduct_id?: IntNullableFilter<"ShoppingCart"> | number | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    cart_items?: ShoppingCartItemListRelationFilter
    Product?: XOR<ProductNullableRelationFilter, ProductWhereInput> | null
  }

  export type ShoppingCartOrderByWithRelationInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    productProduct_id?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    cart_items?: ShoppingCartItemOrderByRelationAggregateInput
    Product?: ProductOrderByWithRelationInput
  }

  export type ShoppingCartWhereUniqueInput = Prisma.AtLeast<{
    cart_id?: number
    AND?: ShoppingCartWhereInput | ShoppingCartWhereInput[]
    OR?: ShoppingCartWhereInput[]
    NOT?: ShoppingCartWhereInput | ShoppingCartWhereInput[]
    user_id?: IntFilter<"ShoppingCart"> | number
    created_at?: DateTimeFilter<"ShoppingCart"> | Date | string
    updated_at?: DateTimeFilter<"ShoppingCart"> | Date | string
    productProduct_id?: IntNullableFilter<"ShoppingCart"> | number | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    cart_items?: ShoppingCartItemListRelationFilter
    Product?: XOR<ProductNullableRelationFilter, ProductWhereInput> | null
  }, "cart_id">

  export type ShoppingCartOrderByWithAggregationInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    productProduct_id?: SortOrderInput | SortOrder
    _count?: ShoppingCartCountOrderByAggregateInput
    _avg?: ShoppingCartAvgOrderByAggregateInput
    _max?: ShoppingCartMaxOrderByAggregateInput
    _min?: ShoppingCartMinOrderByAggregateInput
    _sum?: ShoppingCartSumOrderByAggregateInput
  }

  export type ShoppingCartScalarWhereWithAggregatesInput = {
    AND?: ShoppingCartScalarWhereWithAggregatesInput | ShoppingCartScalarWhereWithAggregatesInput[]
    OR?: ShoppingCartScalarWhereWithAggregatesInput[]
    NOT?: ShoppingCartScalarWhereWithAggregatesInput | ShoppingCartScalarWhereWithAggregatesInput[]
    cart_id?: IntWithAggregatesFilter<"ShoppingCart"> | number
    user_id?: IntWithAggregatesFilter<"ShoppingCart"> | number
    created_at?: DateTimeWithAggregatesFilter<"ShoppingCart"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ShoppingCart"> | Date | string
    productProduct_id?: IntNullableWithAggregatesFilter<"ShoppingCart"> | number | null
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    order_id?: IntFilter<"Orders"> | number
    user_id?: IntFilter<"Orders"> | number
    order_item_id?: IntFilter<"Orders"> | number
    order_date?: DateTimeFilter<"Orders"> | Date | string
    delivery_time?: DateTimeFilter<"Orders"> | Date | string
    deliver_fee?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    payment_status?: StringFilter<"Orders"> | string
    order_status?: StringFilter<"Orders"> | string
    admin_id?: IntFilter<"Orders"> | number
    promo_code?: StringNullableFilter<"Orders"> | string | null
    promo_discount_amount?: DecimalNullableFilter<"Orders"> | Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: FloatFilter<"Orders"> | number
    created_at?: DateTimeFilter<"Orders"> | Date | string
    updated_at?: DateTimeFilter<"Orders"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    admin?: XOR<AdminRelationFilter, AdminWhereInput>
    order_items?: OrderItemListRelationFilter
    UserPromoUsage?: UserPromoUsageListRelationFilter
    ProofsOfPayment?: ProofsOfPaymentListRelationFilter
  }

  export type OrdersOrderByWithRelationInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    order_item_id?: SortOrder
    order_date?: SortOrder
    delivery_time?: SortOrder
    deliver_fee?: SortOrder
    total_price?: SortOrder
    payment_status?: SortOrder
    order_status?: SortOrder
    admin_id?: SortOrder
    promo_code?: SortOrderInput | SortOrder
    promo_discount_amount?: SortOrderInput | SortOrder
    affiliate_discount_amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
    order_items?: OrderItemOrderByRelationAggregateInput
    UserPromoUsage?: UserPromoUsageOrderByRelationAggregateInput
    ProofsOfPayment?: ProofsOfPaymentOrderByRelationAggregateInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    order_id?: number
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    user_id?: IntFilter<"Orders"> | number
    order_item_id?: IntFilter<"Orders"> | number
    order_date?: DateTimeFilter<"Orders"> | Date | string
    delivery_time?: DateTimeFilter<"Orders"> | Date | string
    deliver_fee?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    payment_status?: StringFilter<"Orders"> | string
    order_status?: StringFilter<"Orders"> | string
    admin_id?: IntFilter<"Orders"> | number
    promo_code?: StringNullableFilter<"Orders"> | string | null
    promo_discount_amount?: DecimalNullableFilter<"Orders"> | Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: FloatFilter<"Orders"> | number
    created_at?: DateTimeFilter<"Orders"> | Date | string
    updated_at?: DateTimeFilter<"Orders"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    admin?: XOR<AdminRelationFilter, AdminWhereInput>
    order_items?: OrderItemListRelationFilter
    UserPromoUsage?: UserPromoUsageListRelationFilter
    ProofsOfPayment?: ProofsOfPaymentListRelationFilter
  }, "order_id">

  export type OrdersOrderByWithAggregationInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    order_item_id?: SortOrder
    order_date?: SortOrder
    delivery_time?: SortOrder
    deliver_fee?: SortOrder
    total_price?: SortOrder
    payment_status?: SortOrder
    order_status?: SortOrder
    admin_id?: SortOrder
    promo_code?: SortOrderInput | SortOrder
    promo_discount_amount?: SortOrderInput | SortOrder
    affiliate_discount_amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    order_id?: IntWithAggregatesFilter<"Orders"> | number
    user_id?: IntWithAggregatesFilter<"Orders"> | number
    order_item_id?: IntWithAggregatesFilter<"Orders"> | number
    order_date?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    delivery_time?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    deliver_fee?: DecimalWithAggregatesFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalWithAggregatesFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    payment_status?: StringWithAggregatesFilter<"Orders"> | string
    order_status?: StringWithAggregatesFilter<"Orders"> | string
    admin_id?: IntWithAggregatesFilter<"Orders"> | number
    promo_code?: StringNullableWithAggregatesFilter<"Orders"> | string | null
    promo_discount_amount?: DecimalNullableWithAggregatesFilter<"Orders"> | Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: FloatWithAggregatesFilter<"Orders"> | number
    created_at?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    order_item_id?: IntFilter<"OrderItem"> | number
    product_id?: IntFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    price?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"OrderItem"> | Date | string
    updated_at?: DateTimeFilter<"OrderItem"> | Date | string
    ordersOrder_id?: IntNullableFilter<"OrderItem"> | number | null
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    orders?: XOR<OrdersNullableRelationFilter, OrdersWhereInput> | null
  }

  export type OrderItemOrderByWithRelationInput = {
    order_item_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ordersOrder_id?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    orders?: OrdersOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    order_item_id?: number
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    product_id?: IntFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    price?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"OrderItem"> | Date | string
    updated_at?: DateTimeFilter<"OrderItem"> | Date | string
    ordersOrder_id?: IntNullableFilter<"OrderItem"> | number | null
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    orders?: XOR<OrdersNullableRelationFilter, OrdersWhereInput> | null
  }, "order_item_id">

  export type OrderItemOrderByWithAggregationInput = {
    order_item_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ordersOrder_id?: SortOrderInput | SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    order_item_id?: IntWithAggregatesFilter<"OrderItem"> | number
    product_id?: IntWithAggregatesFilter<"OrderItem"> | number
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    price?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
    ordersOrder_id?: IntNullableWithAggregatesFilter<"OrderItem"> | number | null
  }

  export type ProofsOfPaymentWhereInput = {
    AND?: ProofsOfPaymentWhereInput | ProofsOfPaymentWhereInput[]
    OR?: ProofsOfPaymentWhereInput[]
    NOT?: ProofsOfPaymentWhereInput | ProofsOfPaymentWhereInput[]
    proof_of_payment_id?: IntFilter<"ProofsOfPayment"> | number
    order_id?: IntFilter<"ProofsOfPayment"> | number
    image?: StringFilter<"ProofsOfPayment"> | string
    payment_status?: BoolFilter<"ProofsOfPayment"> | boolean
    promo_usage_updated?: BoolFilter<"ProofsOfPayment"> | boolean
    admin_id?: IntNullableFilter<"ProofsOfPayment"> | number | null
    order?: XOR<OrdersRelationFilter, OrdersWhereInput>
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
  }

  export type ProofsOfPaymentOrderByWithRelationInput = {
    proof_of_payment_id?: SortOrder
    order_id?: SortOrder
    image?: SortOrder
    payment_status?: SortOrder
    promo_usage_updated?: SortOrder
    admin_id?: SortOrderInput | SortOrder
    order?: OrdersOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
  }

  export type ProofsOfPaymentWhereUniqueInput = Prisma.AtLeast<{
    proof_of_payment_id?: number
    AND?: ProofsOfPaymentWhereInput | ProofsOfPaymentWhereInput[]
    OR?: ProofsOfPaymentWhereInput[]
    NOT?: ProofsOfPaymentWhereInput | ProofsOfPaymentWhereInput[]
    order_id?: IntFilter<"ProofsOfPayment"> | number
    image?: StringFilter<"ProofsOfPayment"> | string
    payment_status?: BoolFilter<"ProofsOfPayment"> | boolean
    promo_usage_updated?: BoolFilter<"ProofsOfPayment"> | boolean
    admin_id?: IntNullableFilter<"ProofsOfPayment"> | number | null
    order?: XOR<OrdersRelationFilter, OrdersWhereInput>
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
  }, "proof_of_payment_id">

  export type ProofsOfPaymentOrderByWithAggregationInput = {
    proof_of_payment_id?: SortOrder
    order_id?: SortOrder
    image?: SortOrder
    payment_status?: SortOrder
    promo_usage_updated?: SortOrder
    admin_id?: SortOrderInput | SortOrder
    _count?: ProofsOfPaymentCountOrderByAggregateInput
    _avg?: ProofsOfPaymentAvgOrderByAggregateInput
    _max?: ProofsOfPaymentMaxOrderByAggregateInput
    _min?: ProofsOfPaymentMinOrderByAggregateInput
    _sum?: ProofsOfPaymentSumOrderByAggregateInput
  }

  export type ProofsOfPaymentScalarWhereWithAggregatesInput = {
    AND?: ProofsOfPaymentScalarWhereWithAggregatesInput | ProofsOfPaymentScalarWhereWithAggregatesInput[]
    OR?: ProofsOfPaymentScalarWhereWithAggregatesInput[]
    NOT?: ProofsOfPaymentScalarWhereWithAggregatesInput | ProofsOfPaymentScalarWhereWithAggregatesInput[]
    proof_of_payment_id?: IntWithAggregatesFilter<"ProofsOfPayment"> | number
    order_id?: IntWithAggregatesFilter<"ProofsOfPayment"> | number
    image?: StringWithAggregatesFilter<"ProofsOfPayment"> | string
    payment_status?: BoolWithAggregatesFilter<"ProofsOfPayment"> | boolean
    promo_usage_updated?: BoolWithAggregatesFilter<"ProofsOfPayment"> | boolean
    admin_id?: IntNullableWithAggregatesFilter<"ProofsOfPayment"> | number | null
  }

  export type WarehouseWhereInput = {
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    warehouse_id?: IntFilter<"Warehouse"> | number
    province_id?: IntFilter<"Warehouse"> | number
    province_name?: StringFilter<"Warehouse"> | string
    city_id?: IntFilter<"Warehouse"> | number
    city_name?: StringFilter<"Warehouse"> | string
    postal_code?: IntFilter<"Warehouse"> | number
    admin_id?: IntFilter<"Warehouse"> | number
    created_at?: DateTimeFilter<"Warehouse"> | Date | string
    updated_at?: DateTimeFilter<"Warehouse"> | Date | string
    admin?: XOR<AdminRelationFilter, AdminWhereInput>
    products?: ProductListRelationFilter
  }

  export type WarehouseOrderByWithRelationInput = {
    warehouse_id?: SortOrder
    province_id?: SortOrder
    province_name?: SortOrder
    city_id?: SortOrder
    city_name?: SortOrder
    postal_code?: SortOrder
    admin_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    admin?: AdminOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type WarehouseWhereUniqueInput = Prisma.AtLeast<{
    warehouse_id?: number
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    province_id?: IntFilter<"Warehouse"> | number
    province_name?: StringFilter<"Warehouse"> | string
    city_id?: IntFilter<"Warehouse"> | number
    city_name?: StringFilter<"Warehouse"> | string
    postal_code?: IntFilter<"Warehouse"> | number
    admin_id?: IntFilter<"Warehouse"> | number
    created_at?: DateTimeFilter<"Warehouse"> | Date | string
    updated_at?: DateTimeFilter<"Warehouse"> | Date | string
    admin?: XOR<AdminRelationFilter, AdminWhereInput>
    products?: ProductListRelationFilter
  }, "warehouse_id">

  export type WarehouseOrderByWithAggregationInput = {
    warehouse_id?: SortOrder
    province_id?: SortOrder
    province_name?: SortOrder
    city_id?: SortOrder
    city_name?: SortOrder
    postal_code?: SortOrder
    admin_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: WarehouseCountOrderByAggregateInput
    _avg?: WarehouseAvgOrderByAggregateInput
    _max?: WarehouseMaxOrderByAggregateInput
    _min?: WarehouseMinOrderByAggregateInput
    _sum?: WarehouseSumOrderByAggregateInput
  }

  export type WarehouseScalarWhereWithAggregatesInput = {
    AND?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    OR?: WarehouseScalarWhereWithAggregatesInput[]
    NOT?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    warehouse_id?: IntWithAggregatesFilter<"Warehouse"> | number
    province_id?: IntWithAggregatesFilter<"Warehouse"> | number
    province_name?: StringWithAggregatesFilter<"Warehouse"> | string
    city_id?: IntWithAggregatesFilter<"Warehouse"> | number
    city_name?: StringWithAggregatesFilter<"Warehouse"> | string
    postal_code?: IntWithAggregatesFilter<"Warehouse"> | number
    admin_id?: IntWithAggregatesFilter<"Warehouse"> | number
    created_at?: DateTimeWithAggregatesFilter<"Warehouse"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Warehouse"> | Date | string
  }

  export type UserAddressWhereInput = {
    AND?: UserAddressWhereInput | UserAddressWhereInput[]
    OR?: UserAddressWhereInput[]
    NOT?: UserAddressWhereInput | UserAddressWhereInput[]
    user_address_id?: IntFilter<"UserAddress"> | number
    user_id?: IntFilter<"UserAddress"> | number
    province_id?: IntFilter<"UserAddress"> | number
    province_name?: StringFilter<"UserAddress"> | string
    city_id?: IntFilter<"UserAddress"> | number
    city_name?: StringFilter<"UserAddress"> | string
    postal_code?: IntFilter<"UserAddress"> | number
    created_at?: DateTimeFilter<"UserAddress"> | Date | string
    updated_at?: DateTimeFilter<"UserAddress"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserAddressOrderByWithRelationInput = {
    user_address_id?: SortOrder
    user_id?: SortOrder
    province_id?: SortOrder
    province_name?: SortOrder
    city_id?: SortOrder
    city_name?: SortOrder
    postal_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserAddressWhereUniqueInput = Prisma.AtLeast<{
    user_address_id?: number
    AND?: UserAddressWhereInput | UserAddressWhereInput[]
    OR?: UserAddressWhereInput[]
    NOT?: UserAddressWhereInput | UserAddressWhereInput[]
    user_id?: IntFilter<"UserAddress"> | number
    province_id?: IntFilter<"UserAddress"> | number
    province_name?: StringFilter<"UserAddress"> | string
    city_id?: IntFilter<"UserAddress"> | number
    city_name?: StringFilter<"UserAddress"> | string
    postal_code?: IntFilter<"UserAddress"> | number
    created_at?: DateTimeFilter<"UserAddress"> | Date | string
    updated_at?: DateTimeFilter<"UserAddress"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "user_address_id">

  export type UserAddressOrderByWithAggregationInput = {
    user_address_id?: SortOrder
    user_id?: SortOrder
    province_id?: SortOrder
    province_name?: SortOrder
    city_id?: SortOrder
    city_name?: SortOrder
    postal_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserAddressCountOrderByAggregateInput
    _avg?: UserAddressAvgOrderByAggregateInput
    _max?: UserAddressMaxOrderByAggregateInput
    _min?: UserAddressMinOrderByAggregateInput
    _sum?: UserAddressSumOrderByAggregateInput
  }

  export type UserAddressScalarWhereWithAggregatesInput = {
    AND?: UserAddressScalarWhereWithAggregatesInput | UserAddressScalarWhereWithAggregatesInput[]
    OR?: UserAddressScalarWhereWithAggregatesInput[]
    NOT?: UserAddressScalarWhereWithAggregatesInput | UserAddressScalarWhereWithAggregatesInput[]
    user_address_id?: IntWithAggregatesFilter<"UserAddress"> | number
    user_id?: IntWithAggregatesFilter<"UserAddress"> | number
    province_id?: IntWithAggregatesFilter<"UserAddress"> | number
    province_name?: StringWithAggregatesFilter<"UserAddress"> | string
    city_id?: IntWithAggregatesFilter<"UserAddress"> | number
    city_name?: StringWithAggregatesFilter<"UserAddress"> | string
    postal_code?: IntWithAggregatesFilter<"UserAddress"> | number
    created_at?: DateTimeWithAggregatesFilter<"UserAddress"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UserAddress"> | Date | string
  }

  export type UserCreateInput = {
    full_name: string
    password: string
    email: string
    affiliate_code: string
    affiliate_usage: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_promo_usages?: UserPromoUsageCreateNestedManyWithoutUserInput
    shopping_carts?: ShoppingCartCreateNestedManyWithoutUserInput
    orders?: OrdersCreateNestedManyWithoutUserInput
    affiliate_discounts?: AffiliateDiscountCreateNestedManyWithoutUserInput
    user_addresses?: UserAddressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: number
    full_name: string
    password: string
    email: string
    affiliate_code: string
    affiliate_usage: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_promo_usages?: UserPromoUsageUncheckedCreateNestedManyWithoutUserInput
    shopping_carts?: ShoppingCartUncheckedCreateNestedManyWithoutUserInput
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    affiliate_discounts?: AffiliateDiscountUncheckedCreateNestedManyWithoutUserInput
    user_addresses?: UserAddressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    affiliate_code?: StringFieldUpdateOperationsInput | string
    affiliate_usage?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_promo_usages?: UserPromoUsageUpdateManyWithoutUserNestedInput
    shopping_carts?: ShoppingCartUpdateManyWithoutUserNestedInput
    orders?: OrdersUpdateManyWithoutUserNestedInput
    affiliate_discounts?: AffiliateDiscountUpdateManyWithoutUserNestedInput
    user_addresses?: UserAddressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    affiliate_code?: StringFieldUpdateOperationsInput | string
    affiliate_usage?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_promo_usages?: UserPromoUsageUncheckedUpdateManyWithoutUserNestedInput
    shopping_carts?: ShoppingCartUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    affiliate_discounts?: AffiliateDiscountUncheckedUpdateManyWithoutUserNestedInput
    user_addresses?: UserAddressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: number
    full_name: string
    password: string
    email: string
    affiliate_code: string
    affiliate_usage: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    affiliate_code?: StringFieldUpdateOperationsInput | string
    affiliate_usage?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    affiliate_code?: StringFieldUpdateOperationsInput | string
    affiliate_usage?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    is_available: boolean
    image: string
    weight: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    warehouse: WarehouseCreateNestedOneWithoutProductsInput
    promotions?: PromotionCreateNestedManyWithoutProductInput
    order_items?: OrderItemCreateNestedManyWithoutProductInput
    ShoppingCart?: ShoppingCartCreateNestedManyWithoutProductInput
    ShoppingCartItem?: ShoppingCartItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    product_id?: number
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    is_available: boolean
    category_id: number
    warehouse_id: number
    image: string
    weight: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    promotions?: PromotionUncheckedCreateNestedManyWithoutProductInput
    order_items?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    ShoppingCart?: ShoppingCartUncheckedCreateNestedManyWithoutProductInput
    ShoppingCartItem?: ShoppingCartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutProductsNestedInput
    promotions?: PromotionUpdateManyWithoutProductNestedInput
    order_items?: OrderItemUpdateManyWithoutProductNestedInput
    ShoppingCart?: ShoppingCartUpdateManyWithoutProductNestedInput
    ShoppingCartItem?: ShoppingCartItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    category_id?: IntFieldUpdateOperationsInput | number
    warehouse_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    promotions?: PromotionUncheckedUpdateManyWithoutProductNestedInput
    order_items?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    ShoppingCart?: ShoppingCartUncheckedUpdateManyWithoutProductNestedInput
    ShoppingCartItem?: ShoppingCartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    product_id?: number
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    is_available: boolean
    category_id: number
    warehouse_id: number
    image: string
    weight: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    category_id?: IntFieldUpdateOperationsInput | number
    warehouse_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateDiscountCreateInput = {
    discount_amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutAffiliate_discountsInput
  }

  export type AffiliateDiscountUncheckedCreateInput = {
    affiliate_discount_id?: number
    user_id: number
    discount_amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AffiliateDiscountUpdateInput = {
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAffiliate_discountsNestedInput
  }

  export type AffiliateDiscountUncheckedUpdateInput = {
    affiliate_discount_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateDiscountCreateManyInput = {
    affiliate_discount_id?: number
    user_id: number
    discount_amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AffiliateDiscountUpdateManyMutationInput = {
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateDiscountUncheckedUpdateManyInput = {
    affiliate_discount_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    category_name: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    category_id?: number
    category_name: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    category_id?: number
    category_name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    username: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    Promotion?: PromotionCreateNestedManyWithoutAdminInput
    Orders?: OrdersCreateNestedManyWithoutAdminInput
    ProofsOfPayment?: ProofsOfPaymentCreateNestedManyWithoutAdminInput
    Warehouse?: WarehouseCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    admin_id?: number
    username: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    Promotion?: PromotionUncheckedCreateNestedManyWithoutAdminInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutAdminInput
    ProofsOfPayment?: ProofsOfPaymentUncheckedCreateNestedManyWithoutAdminInput
    Warehouse?: WarehouseUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Promotion?: PromotionUpdateManyWithoutAdminNestedInput
    Orders?: OrdersUpdateManyWithoutAdminNestedInput
    ProofsOfPayment?: ProofsOfPaymentUpdateManyWithoutAdminNestedInput
    Warehouse?: WarehouseUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    admin_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Promotion?: PromotionUncheckedUpdateManyWithoutAdminNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutAdminNestedInput
    ProofsOfPayment?: ProofsOfPaymentUncheckedUpdateManyWithoutAdminNestedInput
    Warehouse?: WarehouseUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    admin_id?: number
    username: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    admin_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionCreateInput = {
    type: string
    maximum_usage: number
    amount: Decimal | DecimalJsLike | number | string
    remaining_usage: number
    promo_code?: string | null
    admin: AdminCreateNestedOneWithoutPromotionInput
    product?: ProductCreateNestedOneWithoutPromotionsInput
    UserPromoUsage?: UserPromoUsageCreateNestedManyWithoutPromoInput
  }

  export type PromotionUncheckedCreateInput = {
    promo_id?: number
    type: string
    maximum_usage: number
    amount: Decimal | DecimalJsLike | number | string
    remaining_usage: number
    admin_id: number
    product_id?: number | null
    promo_code?: string | null
    UserPromoUsage?: UserPromoUsageUncheckedCreateNestedManyWithoutPromoInput
  }

  export type PromotionUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    maximum_usage?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remaining_usage?: IntFieldUpdateOperationsInput | number
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUpdateOneRequiredWithoutPromotionNestedInput
    product?: ProductUpdateOneWithoutPromotionsNestedInput
    UserPromoUsage?: UserPromoUsageUpdateManyWithoutPromoNestedInput
  }

  export type PromotionUncheckedUpdateInput = {
    promo_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    maximum_usage?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remaining_usage?: IntFieldUpdateOperationsInput | number
    admin_id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    UserPromoUsage?: UserPromoUsageUncheckedUpdateManyWithoutPromoNestedInput
  }

  export type PromotionCreateManyInput = {
    promo_id?: number
    type: string
    maximum_usage: number
    amount: Decimal | DecimalJsLike | number | string
    remaining_usage: number
    admin_id: number
    product_id?: number | null
    promo_code?: string | null
  }

  export type PromotionUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    maximum_usage?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remaining_usage?: IntFieldUpdateOperationsInput | number
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PromotionUncheckedUpdateManyInput = {
    promo_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    maximum_usage?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remaining_usage?: IntFieldUpdateOperationsInput | number
    admin_id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPromoUsageCreateInput = {
    usage_count: number
    user: UserCreateNestedOneWithoutUser_promo_usagesInput
    promo: PromotionCreateNestedOneWithoutUserPromoUsageInput
    order?: OrdersCreateNestedOneWithoutUserPromoUsageInput
  }

  export type UserPromoUsageUncheckedCreateInput = {
    user_promo_usage_id?: number
    user_id: number
    promo_id: number
    usage_count: number
    order_id?: number | null
  }

  export type UserPromoUsageUpdateInput = {
    usage_count?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutUser_promo_usagesNestedInput
    promo?: PromotionUpdateOneRequiredWithoutUserPromoUsageNestedInput
    order?: OrdersUpdateOneWithoutUserPromoUsageNestedInput
  }

  export type UserPromoUsageUncheckedUpdateInput = {
    user_promo_usage_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    promo_id?: IntFieldUpdateOperationsInput | number
    usage_count?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserPromoUsageCreateManyInput = {
    user_promo_usage_id?: number
    user_id: number
    promo_id: number
    usage_count: number
    order_id?: number | null
  }

  export type UserPromoUsageUpdateManyMutationInput = {
    usage_count?: IntFieldUpdateOperationsInput | number
  }

  export type UserPromoUsageUncheckedUpdateManyInput = {
    user_promo_usage_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    promo_id?: IntFieldUpdateOperationsInput | number
    usage_count?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ShoppingCartItemCreateInput = {
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
    cart: ShoppingCartCreateNestedOneWithoutCart_itemsInput
    product: ProductCreateNestedOneWithoutShoppingCartItemInput
  }

  export type ShoppingCartItemUncheckedCreateInput = {
    cart_item_id?: number
    cart_id: number
    product_id: number
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ShoppingCartItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: ShoppingCartUpdateOneRequiredWithoutCart_itemsNestedInput
    product?: ProductUpdateOneRequiredWithoutShoppingCartItemNestedInput
  }

  export type ShoppingCartItemUncheckedUpdateInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingCartItemCreateManyInput = {
    cart_item_id?: number
    cart_id: number
    product_id: number
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ShoppingCartItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingCartItemUncheckedUpdateManyInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingCartCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutShopping_cartsInput
    cart_items?: ShoppingCartItemCreateNestedManyWithoutCartInput
    Product?: ProductCreateNestedOneWithoutShoppingCartInput
  }

  export type ShoppingCartUncheckedCreateInput = {
    cart_id?: number
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
    productProduct_id?: number | null
    cart_items?: ShoppingCartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type ShoppingCartUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutShopping_cartsNestedInput
    cart_items?: ShoppingCartItemUpdateManyWithoutCartNestedInput
    Product?: ProductUpdateOneWithoutShoppingCartNestedInput
  }

  export type ShoppingCartUncheckedUpdateInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    productProduct_id?: NullableIntFieldUpdateOperationsInput | number | null
    cart_items?: ShoppingCartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type ShoppingCartCreateManyInput = {
    cart_id?: number
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
    productProduct_id?: number | null
  }

  export type ShoppingCartUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingCartUncheckedUpdateManyInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    productProduct_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrdersCreateInput = {
    order_item_id?: number
    order_date: Date | string
    delivery_time: Date | string
    deliver_fee: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    payment_status: string
    order_status: string
    promo_code?: string | null
    promo_discount_amount?: Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: number
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    admin: AdminCreateNestedOneWithoutOrdersInput
    order_items?: OrderItemCreateNestedManyWithoutOrdersInput
    UserPromoUsage?: UserPromoUsageCreateNestedManyWithoutOrderInput
    ProofsOfPayment?: ProofsOfPaymentCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateInput = {
    order_id?: number
    user_id: number
    order_item_id?: number
    order_date: Date | string
    delivery_time: Date | string
    deliver_fee: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    payment_status: string
    order_status: string
    admin_id: number
    promo_code?: string | null
    promo_discount_amount?: Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: number
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: OrderItemUncheckedCreateNestedManyWithoutOrdersInput
    UserPromoUsage?: UserPromoUsageUncheckedCreateNestedManyWithoutOrderInput
    ProofsOfPayment?: ProofsOfPaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersUpdateInput = {
    order_item_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery_time?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: StringFieldUpdateOperationsInput | string
    order_status?: StringFieldUpdateOperationsInput | string
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    promo_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    admin?: AdminUpdateOneRequiredWithoutOrdersNestedInput
    order_items?: OrderItemUpdateManyWithoutOrdersNestedInput
    UserPromoUsage?: UserPromoUsageUpdateManyWithoutOrderNestedInput
    ProofsOfPayment?: ProofsOfPaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    order_item_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery_time?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: StringFieldUpdateOperationsInput | string
    order_status?: StringFieldUpdateOperationsInput | string
    admin_id?: IntFieldUpdateOperationsInput | number
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    promo_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: OrderItemUncheckedUpdateManyWithoutOrdersNestedInput
    UserPromoUsage?: UserPromoUsageUncheckedUpdateManyWithoutOrderNestedInput
    ProofsOfPayment?: ProofsOfPaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersCreateManyInput = {
    order_id?: number
    user_id: number
    order_item_id?: number
    order_date: Date | string
    delivery_time: Date | string
    deliver_fee: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    payment_status: string
    order_status: string
    admin_id: number
    promo_code?: string | null
    promo_discount_amount?: Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrdersUpdateManyMutationInput = {
    order_item_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery_time?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: StringFieldUpdateOperationsInput | string
    order_status?: StringFieldUpdateOperationsInput | string
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    promo_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    order_item_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery_time?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: StringFieldUpdateOperationsInput | string
    order_status?: StringFieldUpdateOperationsInput | string
    admin_id?: IntFieldUpdateOperationsInput | number
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    promo_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    product: ProductCreateNestedOneWithoutOrder_itemsInput
    orders?: OrdersCreateNestedOneWithoutOrder_itemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    order_item_id?: number
    product_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    ordersOrder_id?: number | null
  }

  export type OrderItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutOrder_itemsNestedInput
    orders?: OrdersUpdateOneWithoutOrder_itemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    order_item_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ordersOrder_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderItemCreateManyInput = {
    order_item_id?: number
    product_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    ordersOrder_id?: number | null
  }

  export type OrderItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    order_item_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ordersOrder_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProofsOfPaymentCreateInput = {
    image: string
    payment_status: boolean
    promo_usage_updated: boolean
    order: OrdersCreateNestedOneWithoutProofsOfPaymentInput
    admin?: AdminCreateNestedOneWithoutProofsOfPaymentInput
  }

  export type ProofsOfPaymentUncheckedCreateInput = {
    proof_of_payment_id?: number
    order_id: number
    image: string
    payment_status: boolean
    promo_usage_updated: boolean
    admin_id?: number | null
  }

  export type ProofsOfPaymentUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    promo_usage_updated?: BoolFieldUpdateOperationsInput | boolean
    order?: OrdersUpdateOneRequiredWithoutProofsOfPaymentNestedInput
    admin?: AdminUpdateOneWithoutProofsOfPaymentNestedInput
  }

  export type ProofsOfPaymentUncheckedUpdateInput = {
    proof_of_payment_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    promo_usage_updated?: BoolFieldUpdateOperationsInput | boolean
    admin_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProofsOfPaymentCreateManyInput = {
    proof_of_payment_id?: number
    order_id: number
    image: string
    payment_status: boolean
    promo_usage_updated: boolean
    admin_id?: number | null
  }

  export type ProofsOfPaymentUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    promo_usage_updated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProofsOfPaymentUncheckedUpdateManyInput = {
    proof_of_payment_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    promo_usage_updated?: BoolFieldUpdateOperationsInput | boolean
    admin_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WarehouseCreateInput = {
    province_id: number
    province_name: string
    city_id: number
    city_name: string
    postal_code: number
    created_at?: Date | string
    updated_at?: Date | string
    admin: AdminCreateNestedOneWithoutWarehouseInput
    products?: ProductCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateInput = {
    warehouse_id?: number
    province_id: number
    province_name: string
    city_id: number
    city_name: string
    postal_code: number
    admin_id: number
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUpdateInput = {
    province_id?: IntFieldUpdateOperationsInput | number
    province_name?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    city_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutWarehouseNestedInput
    products?: ProductUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateInput = {
    warehouse_id?: IntFieldUpdateOperationsInput | number
    province_id?: IntFieldUpdateOperationsInput | number
    province_name?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    city_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    admin_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseCreateManyInput = {
    warehouse_id?: number
    province_id: number
    province_name: string
    city_id: number
    city_name: string
    postal_code: number
    admin_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WarehouseUpdateManyMutationInput = {
    province_id?: IntFieldUpdateOperationsInput | number
    province_name?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    city_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehouseUncheckedUpdateManyInput = {
    warehouse_id?: IntFieldUpdateOperationsInput | number
    province_id?: IntFieldUpdateOperationsInput | number
    province_name?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    city_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    admin_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAddressCreateInput = {
    province_id: number
    province_name: string
    city_id: number
    city_name: string
    postal_code: number
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUser_addressesInput
  }

  export type UserAddressUncheckedCreateInput = {
    user_address_id?: number
    user_id: number
    province_id: number
    province_name: string
    city_id: number
    city_name: string
    postal_code: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserAddressUpdateInput = {
    province_id?: IntFieldUpdateOperationsInput | number
    province_name?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    city_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_addressesNestedInput
  }

  export type UserAddressUncheckedUpdateInput = {
    user_address_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    province_id?: IntFieldUpdateOperationsInput | number
    province_name?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    city_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAddressCreateManyInput = {
    user_address_id?: number
    user_id: number
    province_id: number
    province_name: string
    city_id: number
    city_name: string
    postal_code: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserAddressUpdateManyMutationInput = {
    province_id?: IntFieldUpdateOperationsInput | number
    province_name?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    city_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAddressUncheckedUpdateManyInput = {
    user_address_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    province_id?: IntFieldUpdateOperationsInput | number
    province_name?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    city_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserPromoUsageListRelationFilter = {
    every?: UserPromoUsageWhereInput
    some?: UserPromoUsageWhereInput
    none?: UserPromoUsageWhereInput
  }

  export type ShoppingCartListRelationFilter = {
    every?: ShoppingCartWhereInput
    some?: ShoppingCartWhereInput
    none?: ShoppingCartWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type AffiliateDiscountListRelationFilter = {
    every?: AffiliateDiscountWhereInput
    some?: AffiliateDiscountWhereInput
    none?: AffiliateDiscountWhereInput
  }

  export type UserAddressListRelationFilter = {
    every?: UserAddressWhereInput
    some?: UserAddressWhereInput
    none?: UserAddressWhereInput
  }

  export type UserPromoUsageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShoppingCartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AffiliateDiscountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    full_name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    affiliate_code?: SortOrder
    affiliate_usage?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    full_name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    affiliate_code?: SortOrder
    affiliate_usage?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    full_name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    affiliate_code?: SortOrder
    affiliate_usage?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type WarehouseRelationFilter = {
    is?: WarehouseWhereInput
    isNot?: WarehouseWhereInput
  }

  export type PromotionListRelationFilter = {
    every?: PromotionWhereInput
    some?: PromotionWhereInput
    none?: PromotionWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type ShoppingCartItemListRelationFilter = {
    every?: ShoppingCartItemWhereInput
    some?: ShoppingCartItemWhereInput
    none?: ShoppingCartItemWhereInput
  }

  export type PromotionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShoppingCartItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    product_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    is_available?: SortOrder
    category_id?: SortOrder
    warehouse_id?: SortOrder
    image?: SortOrder
    weight?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    product_id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    category_id?: SortOrder
    warehouse_id?: SortOrder
    weight?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    product_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    is_available?: SortOrder
    category_id?: SortOrder
    warehouse_id?: SortOrder
    image?: SortOrder
    weight?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    product_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    is_available?: SortOrder
    category_id?: SortOrder
    warehouse_id?: SortOrder
    image?: SortOrder
    weight?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    product_id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    category_id?: SortOrder
    warehouse_id?: SortOrder
    weight?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AffiliateDiscountCountOrderByAggregateInput = {
    affiliate_discount_id?: SortOrder
    user_id?: SortOrder
    discount_amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AffiliateDiscountAvgOrderByAggregateInput = {
    affiliate_discount_id?: SortOrder
    user_id?: SortOrder
    discount_amount?: SortOrder
  }

  export type AffiliateDiscountMaxOrderByAggregateInput = {
    affiliate_discount_id?: SortOrder
    user_id?: SortOrder
    discount_amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AffiliateDiscountMinOrderByAggregateInput = {
    affiliate_discount_id?: SortOrder
    user_id?: SortOrder
    discount_amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AffiliateDiscountSumOrderByAggregateInput = {
    affiliate_discount_id?: SortOrder
    user_id?: SortOrder
    discount_amount?: SortOrder
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type ProofsOfPaymentListRelationFilter = {
    every?: ProofsOfPaymentWhereInput
    some?: ProofsOfPaymentWhereInput
    none?: ProofsOfPaymentWhereInput
  }

  export type WarehouseListRelationFilter = {
    every?: WarehouseWhereInput
    some?: WarehouseWhereInput
    none?: WarehouseWhereInput
  }

  export type ProofsOfPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WarehouseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    admin_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    admin_id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    admin_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    admin_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    admin_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AdminRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type ProductNullableRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PromotionCountOrderByAggregateInput = {
    promo_id?: SortOrder
    type?: SortOrder
    maximum_usage?: SortOrder
    amount?: SortOrder
    remaining_usage?: SortOrder
    admin_id?: SortOrder
    product_id?: SortOrder
    promo_code?: SortOrder
  }

  export type PromotionAvgOrderByAggregateInput = {
    promo_id?: SortOrder
    maximum_usage?: SortOrder
    amount?: SortOrder
    remaining_usage?: SortOrder
    admin_id?: SortOrder
    product_id?: SortOrder
  }

  export type PromotionMaxOrderByAggregateInput = {
    promo_id?: SortOrder
    type?: SortOrder
    maximum_usage?: SortOrder
    amount?: SortOrder
    remaining_usage?: SortOrder
    admin_id?: SortOrder
    product_id?: SortOrder
    promo_code?: SortOrder
  }

  export type PromotionMinOrderByAggregateInput = {
    promo_id?: SortOrder
    type?: SortOrder
    maximum_usage?: SortOrder
    amount?: SortOrder
    remaining_usage?: SortOrder
    admin_id?: SortOrder
    product_id?: SortOrder
    promo_code?: SortOrder
  }

  export type PromotionSumOrderByAggregateInput = {
    promo_id?: SortOrder
    maximum_usage?: SortOrder
    amount?: SortOrder
    remaining_usage?: SortOrder
    admin_id?: SortOrder
    product_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PromotionRelationFilter = {
    is?: PromotionWhereInput
    isNot?: PromotionWhereInput
  }

  export type OrdersNullableRelationFilter = {
    is?: OrdersWhereInput | null
    isNot?: OrdersWhereInput | null
  }

  export type UserPromoUsageCountOrderByAggregateInput = {
    user_promo_usage_id?: SortOrder
    user_id?: SortOrder
    promo_id?: SortOrder
    usage_count?: SortOrder
    order_id?: SortOrder
  }

  export type UserPromoUsageAvgOrderByAggregateInput = {
    user_promo_usage_id?: SortOrder
    user_id?: SortOrder
    promo_id?: SortOrder
    usage_count?: SortOrder
    order_id?: SortOrder
  }

  export type UserPromoUsageMaxOrderByAggregateInput = {
    user_promo_usage_id?: SortOrder
    user_id?: SortOrder
    promo_id?: SortOrder
    usage_count?: SortOrder
    order_id?: SortOrder
  }

  export type UserPromoUsageMinOrderByAggregateInput = {
    user_promo_usage_id?: SortOrder
    user_id?: SortOrder
    promo_id?: SortOrder
    usage_count?: SortOrder
    order_id?: SortOrder
  }

  export type UserPromoUsageSumOrderByAggregateInput = {
    user_promo_usage_id?: SortOrder
    user_id?: SortOrder
    promo_id?: SortOrder
    usage_count?: SortOrder
    order_id?: SortOrder
  }

  export type ShoppingCartRelationFilter = {
    is?: ShoppingCartWhereInput
    isNot?: ShoppingCartWhereInput
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ShoppingCartItemCountOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ShoppingCartItemAvgOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type ShoppingCartItemMaxOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ShoppingCartItemMinOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ShoppingCartItemSumOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type ShoppingCartCountOrderByAggregateInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    productProduct_id?: SortOrder
  }

  export type ShoppingCartAvgOrderByAggregateInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
    productProduct_id?: SortOrder
  }

  export type ShoppingCartMaxOrderByAggregateInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    productProduct_id?: SortOrder
  }

  export type ShoppingCartMinOrderByAggregateInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    productProduct_id?: SortOrder
  }

  export type ShoppingCartSumOrderByAggregateInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
    productProduct_id?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type OrdersCountOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    order_item_id?: SortOrder
    order_date?: SortOrder
    delivery_time?: SortOrder
    deliver_fee?: SortOrder
    total_price?: SortOrder
    payment_status?: SortOrder
    order_status?: SortOrder
    admin_id?: SortOrder
    promo_code?: SortOrder
    promo_discount_amount?: SortOrder
    affiliate_discount_amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    order_item_id?: SortOrder
    deliver_fee?: SortOrder
    total_price?: SortOrder
    admin_id?: SortOrder
    promo_discount_amount?: SortOrder
    affiliate_discount_amount?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    order_item_id?: SortOrder
    order_date?: SortOrder
    delivery_time?: SortOrder
    deliver_fee?: SortOrder
    total_price?: SortOrder
    payment_status?: SortOrder
    order_status?: SortOrder
    admin_id?: SortOrder
    promo_code?: SortOrder
    promo_discount_amount?: SortOrder
    affiliate_discount_amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    order_item_id?: SortOrder
    order_date?: SortOrder
    delivery_time?: SortOrder
    deliver_fee?: SortOrder
    total_price?: SortOrder
    payment_status?: SortOrder
    order_status?: SortOrder
    admin_id?: SortOrder
    promo_code?: SortOrder
    promo_discount_amount?: SortOrder
    affiliate_discount_amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    order_item_id?: SortOrder
    deliver_fee?: SortOrder
    total_price?: SortOrder
    admin_id?: SortOrder
    promo_discount_amount?: SortOrder
    affiliate_discount_amount?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type OrderItemCountOrderByAggregateInput = {
    order_item_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ordersOrder_id?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    order_item_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    ordersOrder_id?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    order_item_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ordersOrder_id?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    order_item_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ordersOrder_id?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    order_item_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    ordersOrder_id?: SortOrder
  }

  export type OrdersRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type AdminNullableRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type ProofsOfPaymentCountOrderByAggregateInput = {
    proof_of_payment_id?: SortOrder
    order_id?: SortOrder
    image?: SortOrder
    payment_status?: SortOrder
    promo_usage_updated?: SortOrder
    admin_id?: SortOrder
  }

  export type ProofsOfPaymentAvgOrderByAggregateInput = {
    proof_of_payment_id?: SortOrder
    order_id?: SortOrder
    admin_id?: SortOrder
  }

  export type ProofsOfPaymentMaxOrderByAggregateInput = {
    proof_of_payment_id?: SortOrder
    order_id?: SortOrder
    image?: SortOrder
    payment_status?: SortOrder
    promo_usage_updated?: SortOrder
    admin_id?: SortOrder
  }

  export type ProofsOfPaymentMinOrderByAggregateInput = {
    proof_of_payment_id?: SortOrder
    order_id?: SortOrder
    image?: SortOrder
    payment_status?: SortOrder
    promo_usage_updated?: SortOrder
    admin_id?: SortOrder
  }

  export type ProofsOfPaymentSumOrderByAggregateInput = {
    proof_of_payment_id?: SortOrder
    order_id?: SortOrder
    admin_id?: SortOrder
  }

  export type WarehouseCountOrderByAggregateInput = {
    warehouse_id?: SortOrder
    province_id?: SortOrder
    province_name?: SortOrder
    city_id?: SortOrder
    city_name?: SortOrder
    postal_code?: SortOrder
    admin_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WarehouseAvgOrderByAggregateInput = {
    warehouse_id?: SortOrder
    province_id?: SortOrder
    city_id?: SortOrder
    postal_code?: SortOrder
    admin_id?: SortOrder
  }

  export type WarehouseMaxOrderByAggregateInput = {
    warehouse_id?: SortOrder
    province_id?: SortOrder
    province_name?: SortOrder
    city_id?: SortOrder
    city_name?: SortOrder
    postal_code?: SortOrder
    admin_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WarehouseMinOrderByAggregateInput = {
    warehouse_id?: SortOrder
    province_id?: SortOrder
    province_name?: SortOrder
    city_id?: SortOrder
    city_name?: SortOrder
    postal_code?: SortOrder
    admin_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WarehouseSumOrderByAggregateInput = {
    warehouse_id?: SortOrder
    province_id?: SortOrder
    city_id?: SortOrder
    postal_code?: SortOrder
    admin_id?: SortOrder
  }

  export type UserAddressCountOrderByAggregateInput = {
    user_address_id?: SortOrder
    user_id?: SortOrder
    province_id?: SortOrder
    province_name?: SortOrder
    city_id?: SortOrder
    city_name?: SortOrder
    postal_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAddressAvgOrderByAggregateInput = {
    user_address_id?: SortOrder
    user_id?: SortOrder
    province_id?: SortOrder
    city_id?: SortOrder
    postal_code?: SortOrder
  }

  export type UserAddressMaxOrderByAggregateInput = {
    user_address_id?: SortOrder
    user_id?: SortOrder
    province_id?: SortOrder
    province_name?: SortOrder
    city_id?: SortOrder
    city_name?: SortOrder
    postal_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAddressMinOrderByAggregateInput = {
    user_address_id?: SortOrder
    user_id?: SortOrder
    province_id?: SortOrder
    province_name?: SortOrder
    city_id?: SortOrder
    city_name?: SortOrder
    postal_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAddressSumOrderByAggregateInput = {
    user_address_id?: SortOrder
    user_id?: SortOrder
    province_id?: SortOrder
    city_id?: SortOrder
    postal_code?: SortOrder
  }

  export type UserPromoUsageCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPromoUsageCreateWithoutUserInput, UserPromoUsageUncheckedCreateWithoutUserInput> | UserPromoUsageCreateWithoutUserInput[] | UserPromoUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPromoUsageCreateOrConnectWithoutUserInput | UserPromoUsageCreateOrConnectWithoutUserInput[]
    createMany?: UserPromoUsageCreateManyUserInputEnvelope
    connect?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
  }

  export type ShoppingCartCreateNestedManyWithoutUserInput = {
    create?: XOR<ShoppingCartCreateWithoutUserInput, ShoppingCartUncheckedCreateWithoutUserInput> | ShoppingCartCreateWithoutUserInput[] | ShoppingCartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingCartCreateOrConnectWithoutUserInput | ShoppingCartCreateOrConnectWithoutUserInput[]
    createMany?: ShoppingCartCreateManyUserInputEnvelope
    connect?: ShoppingCartWhereUniqueInput | ShoppingCartWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type AffiliateDiscountCreateNestedManyWithoutUserInput = {
    create?: XOR<AffiliateDiscountCreateWithoutUserInput, AffiliateDiscountUncheckedCreateWithoutUserInput> | AffiliateDiscountCreateWithoutUserInput[] | AffiliateDiscountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AffiliateDiscountCreateOrConnectWithoutUserInput | AffiliateDiscountCreateOrConnectWithoutUserInput[]
    createMany?: AffiliateDiscountCreateManyUserInputEnvelope
    connect?: AffiliateDiscountWhereUniqueInput | AffiliateDiscountWhereUniqueInput[]
  }

  export type UserAddressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput> | UserAddressCreateWithoutUserInput[] | UserAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAddressCreateOrConnectWithoutUserInput | UserAddressCreateOrConnectWithoutUserInput[]
    createMany?: UserAddressCreateManyUserInputEnvelope
    connect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
  }

  export type UserPromoUsageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPromoUsageCreateWithoutUserInput, UserPromoUsageUncheckedCreateWithoutUserInput> | UserPromoUsageCreateWithoutUserInput[] | UserPromoUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPromoUsageCreateOrConnectWithoutUserInput | UserPromoUsageCreateOrConnectWithoutUserInput[]
    createMany?: UserPromoUsageCreateManyUserInputEnvelope
    connect?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
  }

  export type ShoppingCartUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShoppingCartCreateWithoutUserInput, ShoppingCartUncheckedCreateWithoutUserInput> | ShoppingCartCreateWithoutUserInput[] | ShoppingCartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingCartCreateOrConnectWithoutUserInput | ShoppingCartCreateOrConnectWithoutUserInput[]
    createMany?: ShoppingCartCreateManyUserInputEnvelope
    connect?: ShoppingCartWhereUniqueInput | ShoppingCartWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type AffiliateDiscountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AffiliateDiscountCreateWithoutUserInput, AffiliateDiscountUncheckedCreateWithoutUserInput> | AffiliateDiscountCreateWithoutUserInput[] | AffiliateDiscountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AffiliateDiscountCreateOrConnectWithoutUserInput | AffiliateDiscountCreateOrConnectWithoutUserInput[]
    createMany?: AffiliateDiscountCreateManyUserInputEnvelope
    connect?: AffiliateDiscountWhereUniqueInput | AffiliateDiscountWhereUniqueInput[]
  }

  export type UserAddressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput> | UserAddressCreateWithoutUserInput[] | UserAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAddressCreateOrConnectWithoutUserInput | UserAddressCreateOrConnectWithoutUserInput[]
    createMany?: UserAddressCreateManyUserInputEnvelope
    connect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserPromoUsageUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPromoUsageCreateWithoutUserInput, UserPromoUsageUncheckedCreateWithoutUserInput> | UserPromoUsageCreateWithoutUserInput[] | UserPromoUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPromoUsageCreateOrConnectWithoutUserInput | UserPromoUsageCreateOrConnectWithoutUserInput[]
    upsert?: UserPromoUsageUpsertWithWhereUniqueWithoutUserInput | UserPromoUsageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPromoUsageCreateManyUserInputEnvelope
    set?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    disconnect?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    delete?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    connect?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    update?: UserPromoUsageUpdateWithWhereUniqueWithoutUserInput | UserPromoUsageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPromoUsageUpdateManyWithWhereWithoutUserInput | UserPromoUsageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPromoUsageScalarWhereInput | UserPromoUsageScalarWhereInput[]
  }

  export type ShoppingCartUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShoppingCartCreateWithoutUserInput, ShoppingCartUncheckedCreateWithoutUserInput> | ShoppingCartCreateWithoutUserInput[] | ShoppingCartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingCartCreateOrConnectWithoutUserInput | ShoppingCartCreateOrConnectWithoutUserInput[]
    upsert?: ShoppingCartUpsertWithWhereUniqueWithoutUserInput | ShoppingCartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShoppingCartCreateManyUserInputEnvelope
    set?: ShoppingCartWhereUniqueInput | ShoppingCartWhereUniqueInput[]
    disconnect?: ShoppingCartWhereUniqueInput | ShoppingCartWhereUniqueInput[]
    delete?: ShoppingCartWhereUniqueInput | ShoppingCartWhereUniqueInput[]
    connect?: ShoppingCartWhereUniqueInput | ShoppingCartWhereUniqueInput[]
    update?: ShoppingCartUpdateWithWhereUniqueWithoutUserInput | ShoppingCartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShoppingCartUpdateManyWithWhereWithoutUserInput | ShoppingCartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShoppingCartScalarWhereInput | ShoppingCartScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type AffiliateDiscountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AffiliateDiscountCreateWithoutUserInput, AffiliateDiscountUncheckedCreateWithoutUserInput> | AffiliateDiscountCreateWithoutUserInput[] | AffiliateDiscountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AffiliateDiscountCreateOrConnectWithoutUserInput | AffiliateDiscountCreateOrConnectWithoutUserInput[]
    upsert?: AffiliateDiscountUpsertWithWhereUniqueWithoutUserInput | AffiliateDiscountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AffiliateDiscountCreateManyUserInputEnvelope
    set?: AffiliateDiscountWhereUniqueInput | AffiliateDiscountWhereUniqueInput[]
    disconnect?: AffiliateDiscountWhereUniqueInput | AffiliateDiscountWhereUniqueInput[]
    delete?: AffiliateDiscountWhereUniqueInput | AffiliateDiscountWhereUniqueInput[]
    connect?: AffiliateDiscountWhereUniqueInput | AffiliateDiscountWhereUniqueInput[]
    update?: AffiliateDiscountUpdateWithWhereUniqueWithoutUserInput | AffiliateDiscountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AffiliateDiscountUpdateManyWithWhereWithoutUserInput | AffiliateDiscountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AffiliateDiscountScalarWhereInput | AffiliateDiscountScalarWhereInput[]
  }

  export type UserAddressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput> | UserAddressCreateWithoutUserInput[] | UserAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAddressCreateOrConnectWithoutUserInput | UserAddressCreateOrConnectWithoutUserInput[]
    upsert?: UserAddressUpsertWithWhereUniqueWithoutUserInput | UserAddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAddressCreateManyUserInputEnvelope
    set?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    disconnect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    delete?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    connect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    update?: UserAddressUpdateWithWhereUniqueWithoutUserInput | UserAddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAddressUpdateManyWithWhereWithoutUserInput | UserAddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAddressScalarWhereInput | UserAddressScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserPromoUsageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPromoUsageCreateWithoutUserInput, UserPromoUsageUncheckedCreateWithoutUserInput> | UserPromoUsageCreateWithoutUserInput[] | UserPromoUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPromoUsageCreateOrConnectWithoutUserInput | UserPromoUsageCreateOrConnectWithoutUserInput[]
    upsert?: UserPromoUsageUpsertWithWhereUniqueWithoutUserInput | UserPromoUsageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPromoUsageCreateManyUserInputEnvelope
    set?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    disconnect?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    delete?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    connect?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    update?: UserPromoUsageUpdateWithWhereUniqueWithoutUserInput | UserPromoUsageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPromoUsageUpdateManyWithWhereWithoutUserInput | UserPromoUsageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPromoUsageScalarWhereInput | UserPromoUsageScalarWhereInput[]
  }

  export type ShoppingCartUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShoppingCartCreateWithoutUserInput, ShoppingCartUncheckedCreateWithoutUserInput> | ShoppingCartCreateWithoutUserInput[] | ShoppingCartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingCartCreateOrConnectWithoutUserInput | ShoppingCartCreateOrConnectWithoutUserInput[]
    upsert?: ShoppingCartUpsertWithWhereUniqueWithoutUserInput | ShoppingCartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShoppingCartCreateManyUserInputEnvelope
    set?: ShoppingCartWhereUniqueInput | ShoppingCartWhereUniqueInput[]
    disconnect?: ShoppingCartWhereUniqueInput | ShoppingCartWhereUniqueInput[]
    delete?: ShoppingCartWhereUniqueInput | ShoppingCartWhereUniqueInput[]
    connect?: ShoppingCartWhereUniqueInput | ShoppingCartWhereUniqueInput[]
    update?: ShoppingCartUpdateWithWhereUniqueWithoutUserInput | ShoppingCartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShoppingCartUpdateManyWithWhereWithoutUserInput | ShoppingCartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShoppingCartScalarWhereInput | ShoppingCartScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type AffiliateDiscountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AffiliateDiscountCreateWithoutUserInput, AffiliateDiscountUncheckedCreateWithoutUserInput> | AffiliateDiscountCreateWithoutUserInput[] | AffiliateDiscountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AffiliateDiscountCreateOrConnectWithoutUserInput | AffiliateDiscountCreateOrConnectWithoutUserInput[]
    upsert?: AffiliateDiscountUpsertWithWhereUniqueWithoutUserInput | AffiliateDiscountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AffiliateDiscountCreateManyUserInputEnvelope
    set?: AffiliateDiscountWhereUniqueInput | AffiliateDiscountWhereUniqueInput[]
    disconnect?: AffiliateDiscountWhereUniqueInput | AffiliateDiscountWhereUniqueInput[]
    delete?: AffiliateDiscountWhereUniqueInput | AffiliateDiscountWhereUniqueInput[]
    connect?: AffiliateDiscountWhereUniqueInput | AffiliateDiscountWhereUniqueInput[]
    update?: AffiliateDiscountUpdateWithWhereUniqueWithoutUserInput | AffiliateDiscountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AffiliateDiscountUpdateManyWithWhereWithoutUserInput | AffiliateDiscountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AffiliateDiscountScalarWhereInput | AffiliateDiscountScalarWhereInput[]
  }

  export type UserAddressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput> | UserAddressCreateWithoutUserInput[] | UserAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAddressCreateOrConnectWithoutUserInput | UserAddressCreateOrConnectWithoutUserInput[]
    upsert?: UserAddressUpsertWithWhereUniqueWithoutUserInput | UserAddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAddressCreateManyUserInputEnvelope
    set?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    disconnect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    delete?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    connect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    update?: UserAddressUpdateWithWhereUniqueWithoutUserInput | UserAddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAddressUpdateManyWithWhereWithoutUserInput | UserAddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAddressScalarWhereInput | UserAddressScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type WarehouseCreateNestedOneWithoutProductsInput = {
    create?: XOR<WarehouseCreateWithoutProductsInput, WarehouseUncheckedCreateWithoutProductsInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutProductsInput
    connect?: WarehouseWhereUniqueInput
  }

  export type PromotionCreateNestedManyWithoutProductInput = {
    create?: XOR<PromotionCreateWithoutProductInput, PromotionUncheckedCreateWithoutProductInput> | PromotionCreateWithoutProductInput[] | PromotionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutProductInput | PromotionCreateOrConnectWithoutProductInput[]
    createMany?: PromotionCreateManyProductInputEnvelope
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type ShoppingCartCreateNestedManyWithoutProductInput = {
    create?: XOR<ShoppingCartCreateWithoutProductInput, ShoppingCartUncheckedCreateWithoutProductInput> | ShoppingCartCreateWithoutProductInput[] | ShoppingCartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ShoppingCartCreateOrConnectWithoutProductInput | ShoppingCartCreateOrConnectWithoutProductInput[]
    createMany?: ShoppingCartCreateManyProductInputEnvelope
    connect?: ShoppingCartWhereUniqueInput | ShoppingCartWhereUniqueInput[]
  }

  export type ShoppingCartItemCreateNestedManyWithoutProductInput = {
    create?: XOR<ShoppingCartItemCreateWithoutProductInput, ShoppingCartItemUncheckedCreateWithoutProductInput> | ShoppingCartItemCreateWithoutProductInput[] | ShoppingCartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ShoppingCartItemCreateOrConnectWithoutProductInput | ShoppingCartItemCreateOrConnectWithoutProductInput[]
    createMany?: ShoppingCartItemCreateManyProductInputEnvelope
    connect?: ShoppingCartItemWhereUniqueInput | ShoppingCartItemWhereUniqueInput[]
  }

  export type PromotionUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<PromotionCreateWithoutProductInput, PromotionUncheckedCreateWithoutProductInput> | PromotionCreateWithoutProductInput[] | PromotionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutProductInput | PromotionCreateOrConnectWithoutProductInput[]
    createMany?: PromotionCreateManyProductInputEnvelope
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type ShoppingCartUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ShoppingCartCreateWithoutProductInput, ShoppingCartUncheckedCreateWithoutProductInput> | ShoppingCartCreateWithoutProductInput[] | ShoppingCartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ShoppingCartCreateOrConnectWithoutProductInput | ShoppingCartCreateOrConnectWithoutProductInput[]
    createMany?: ShoppingCartCreateManyProductInputEnvelope
    connect?: ShoppingCartWhereUniqueInput | ShoppingCartWhereUniqueInput[]
  }

  export type ShoppingCartItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ShoppingCartItemCreateWithoutProductInput, ShoppingCartItemUncheckedCreateWithoutProductInput> | ShoppingCartItemCreateWithoutProductInput[] | ShoppingCartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ShoppingCartItemCreateOrConnectWithoutProductInput | ShoppingCartItemCreateOrConnectWithoutProductInput[]
    createMany?: ShoppingCartItemCreateManyProductInputEnvelope
    connect?: ShoppingCartItemWhereUniqueInput | ShoppingCartItemWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type WarehouseUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<WarehouseCreateWithoutProductsInput, WarehouseUncheckedCreateWithoutProductsInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutProductsInput
    upsert?: WarehouseUpsertWithoutProductsInput
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutProductsInput, WarehouseUpdateWithoutProductsInput>, WarehouseUncheckedUpdateWithoutProductsInput>
  }

  export type PromotionUpdateManyWithoutProductNestedInput = {
    create?: XOR<PromotionCreateWithoutProductInput, PromotionUncheckedCreateWithoutProductInput> | PromotionCreateWithoutProductInput[] | PromotionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutProductInput | PromotionCreateOrConnectWithoutProductInput[]
    upsert?: PromotionUpsertWithWhereUniqueWithoutProductInput | PromotionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PromotionCreateManyProductInputEnvelope
    set?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    disconnect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    delete?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    update?: PromotionUpdateWithWhereUniqueWithoutProductInput | PromotionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PromotionUpdateManyWithWhereWithoutProductInput | PromotionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ShoppingCartUpdateManyWithoutProductNestedInput = {
    create?: XOR<ShoppingCartCreateWithoutProductInput, ShoppingCartUncheckedCreateWithoutProductInput> | ShoppingCartCreateWithoutProductInput[] | ShoppingCartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ShoppingCartCreateOrConnectWithoutProductInput | ShoppingCartCreateOrConnectWithoutProductInput[]
    upsert?: ShoppingCartUpsertWithWhereUniqueWithoutProductInput | ShoppingCartUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ShoppingCartCreateManyProductInputEnvelope
    set?: ShoppingCartWhereUniqueInput | ShoppingCartWhereUniqueInput[]
    disconnect?: ShoppingCartWhereUniqueInput | ShoppingCartWhereUniqueInput[]
    delete?: ShoppingCartWhereUniqueInput | ShoppingCartWhereUniqueInput[]
    connect?: ShoppingCartWhereUniqueInput | ShoppingCartWhereUniqueInput[]
    update?: ShoppingCartUpdateWithWhereUniqueWithoutProductInput | ShoppingCartUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ShoppingCartUpdateManyWithWhereWithoutProductInput | ShoppingCartUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ShoppingCartScalarWhereInput | ShoppingCartScalarWhereInput[]
  }

  export type ShoppingCartItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<ShoppingCartItemCreateWithoutProductInput, ShoppingCartItemUncheckedCreateWithoutProductInput> | ShoppingCartItemCreateWithoutProductInput[] | ShoppingCartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ShoppingCartItemCreateOrConnectWithoutProductInput | ShoppingCartItemCreateOrConnectWithoutProductInput[]
    upsert?: ShoppingCartItemUpsertWithWhereUniqueWithoutProductInput | ShoppingCartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ShoppingCartItemCreateManyProductInputEnvelope
    set?: ShoppingCartItemWhereUniqueInput | ShoppingCartItemWhereUniqueInput[]
    disconnect?: ShoppingCartItemWhereUniqueInput | ShoppingCartItemWhereUniqueInput[]
    delete?: ShoppingCartItemWhereUniqueInput | ShoppingCartItemWhereUniqueInput[]
    connect?: ShoppingCartItemWhereUniqueInput | ShoppingCartItemWhereUniqueInput[]
    update?: ShoppingCartItemUpdateWithWhereUniqueWithoutProductInput | ShoppingCartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ShoppingCartItemUpdateManyWithWhereWithoutProductInput | ShoppingCartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ShoppingCartItemScalarWhereInput | ShoppingCartItemScalarWhereInput[]
  }

  export type PromotionUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<PromotionCreateWithoutProductInput, PromotionUncheckedCreateWithoutProductInput> | PromotionCreateWithoutProductInput[] | PromotionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutProductInput | PromotionCreateOrConnectWithoutProductInput[]
    upsert?: PromotionUpsertWithWhereUniqueWithoutProductInput | PromotionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PromotionCreateManyProductInputEnvelope
    set?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    disconnect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    delete?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    update?: PromotionUpdateWithWhereUniqueWithoutProductInput | PromotionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PromotionUpdateManyWithWhereWithoutProductInput | PromotionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ShoppingCartUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ShoppingCartCreateWithoutProductInput, ShoppingCartUncheckedCreateWithoutProductInput> | ShoppingCartCreateWithoutProductInput[] | ShoppingCartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ShoppingCartCreateOrConnectWithoutProductInput | ShoppingCartCreateOrConnectWithoutProductInput[]
    upsert?: ShoppingCartUpsertWithWhereUniqueWithoutProductInput | ShoppingCartUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ShoppingCartCreateManyProductInputEnvelope
    set?: ShoppingCartWhereUniqueInput | ShoppingCartWhereUniqueInput[]
    disconnect?: ShoppingCartWhereUniqueInput | ShoppingCartWhereUniqueInput[]
    delete?: ShoppingCartWhereUniqueInput | ShoppingCartWhereUniqueInput[]
    connect?: ShoppingCartWhereUniqueInput | ShoppingCartWhereUniqueInput[]
    update?: ShoppingCartUpdateWithWhereUniqueWithoutProductInput | ShoppingCartUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ShoppingCartUpdateManyWithWhereWithoutProductInput | ShoppingCartUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ShoppingCartScalarWhereInput | ShoppingCartScalarWhereInput[]
  }

  export type ShoppingCartItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ShoppingCartItemCreateWithoutProductInput, ShoppingCartItemUncheckedCreateWithoutProductInput> | ShoppingCartItemCreateWithoutProductInput[] | ShoppingCartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ShoppingCartItemCreateOrConnectWithoutProductInput | ShoppingCartItemCreateOrConnectWithoutProductInput[]
    upsert?: ShoppingCartItemUpsertWithWhereUniqueWithoutProductInput | ShoppingCartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ShoppingCartItemCreateManyProductInputEnvelope
    set?: ShoppingCartItemWhereUniqueInput | ShoppingCartItemWhereUniqueInput[]
    disconnect?: ShoppingCartItemWhereUniqueInput | ShoppingCartItemWhereUniqueInput[]
    delete?: ShoppingCartItemWhereUniqueInput | ShoppingCartItemWhereUniqueInput[]
    connect?: ShoppingCartItemWhereUniqueInput | ShoppingCartItemWhereUniqueInput[]
    update?: ShoppingCartItemUpdateWithWhereUniqueWithoutProductInput | ShoppingCartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ShoppingCartItemUpdateManyWithWhereWithoutProductInput | ShoppingCartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ShoppingCartItemScalarWhereInput | ShoppingCartItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAffiliate_discountsInput = {
    create?: XOR<UserCreateWithoutAffiliate_discountsInput, UserUncheckedCreateWithoutAffiliate_discountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAffiliate_discountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAffiliate_discountsNestedInput = {
    create?: XOR<UserCreateWithoutAffiliate_discountsInput, UserUncheckedCreateWithoutAffiliate_discountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAffiliate_discountsInput
    upsert?: UserUpsertWithoutAffiliate_discountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAffiliate_discountsInput, UserUpdateWithoutAffiliate_discountsInput>, UserUncheckedUpdateWithoutAffiliate_discountsInput>
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type PromotionCreateNestedManyWithoutAdminInput = {
    create?: XOR<PromotionCreateWithoutAdminInput, PromotionUncheckedCreateWithoutAdminInput> | PromotionCreateWithoutAdminInput[] | PromotionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutAdminInput | PromotionCreateOrConnectWithoutAdminInput[]
    createMany?: PromotionCreateManyAdminInputEnvelope
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutAdminInput = {
    create?: XOR<OrdersCreateWithoutAdminInput, OrdersUncheckedCreateWithoutAdminInput> | OrdersCreateWithoutAdminInput[] | OrdersUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutAdminInput | OrdersCreateOrConnectWithoutAdminInput[]
    createMany?: OrdersCreateManyAdminInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type ProofsOfPaymentCreateNestedManyWithoutAdminInput = {
    create?: XOR<ProofsOfPaymentCreateWithoutAdminInput, ProofsOfPaymentUncheckedCreateWithoutAdminInput> | ProofsOfPaymentCreateWithoutAdminInput[] | ProofsOfPaymentUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ProofsOfPaymentCreateOrConnectWithoutAdminInput | ProofsOfPaymentCreateOrConnectWithoutAdminInput[]
    createMany?: ProofsOfPaymentCreateManyAdminInputEnvelope
    connect?: ProofsOfPaymentWhereUniqueInput | ProofsOfPaymentWhereUniqueInput[]
  }

  export type WarehouseCreateNestedManyWithoutAdminInput = {
    create?: XOR<WarehouseCreateWithoutAdminInput, WarehouseUncheckedCreateWithoutAdminInput> | WarehouseCreateWithoutAdminInput[] | WarehouseUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutAdminInput | WarehouseCreateOrConnectWithoutAdminInput[]
    createMany?: WarehouseCreateManyAdminInputEnvelope
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
  }

  export type PromotionUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<PromotionCreateWithoutAdminInput, PromotionUncheckedCreateWithoutAdminInput> | PromotionCreateWithoutAdminInput[] | PromotionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutAdminInput | PromotionCreateOrConnectWithoutAdminInput[]
    createMany?: PromotionCreateManyAdminInputEnvelope
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<OrdersCreateWithoutAdminInput, OrdersUncheckedCreateWithoutAdminInput> | OrdersCreateWithoutAdminInput[] | OrdersUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutAdminInput | OrdersCreateOrConnectWithoutAdminInput[]
    createMany?: OrdersCreateManyAdminInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type ProofsOfPaymentUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<ProofsOfPaymentCreateWithoutAdminInput, ProofsOfPaymentUncheckedCreateWithoutAdminInput> | ProofsOfPaymentCreateWithoutAdminInput[] | ProofsOfPaymentUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ProofsOfPaymentCreateOrConnectWithoutAdminInput | ProofsOfPaymentCreateOrConnectWithoutAdminInput[]
    createMany?: ProofsOfPaymentCreateManyAdminInputEnvelope
    connect?: ProofsOfPaymentWhereUniqueInput | ProofsOfPaymentWhereUniqueInput[]
  }

  export type WarehouseUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<WarehouseCreateWithoutAdminInput, WarehouseUncheckedCreateWithoutAdminInput> | WarehouseCreateWithoutAdminInput[] | WarehouseUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutAdminInput | WarehouseCreateOrConnectWithoutAdminInput[]
    createMany?: WarehouseCreateManyAdminInputEnvelope
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
  }

  export type PromotionUpdateManyWithoutAdminNestedInput = {
    create?: XOR<PromotionCreateWithoutAdminInput, PromotionUncheckedCreateWithoutAdminInput> | PromotionCreateWithoutAdminInput[] | PromotionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutAdminInput | PromotionCreateOrConnectWithoutAdminInput[]
    upsert?: PromotionUpsertWithWhereUniqueWithoutAdminInput | PromotionUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: PromotionCreateManyAdminInputEnvelope
    set?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    disconnect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    delete?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    update?: PromotionUpdateWithWhereUniqueWithoutAdminInput | PromotionUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: PromotionUpdateManyWithWhereWithoutAdminInput | PromotionUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutAdminNestedInput = {
    create?: XOR<OrdersCreateWithoutAdminInput, OrdersUncheckedCreateWithoutAdminInput> | OrdersCreateWithoutAdminInput[] | OrdersUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutAdminInput | OrdersCreateOrConnectWithoutAdminInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutAdminInput | OrdersUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: OrdersCreateManyAdminInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutAdminInput | OrdersUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutAdminInput | OrdersUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type ProofsOfPaymentUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ProofsOfPaymentCreateWithoutAdminInput, ProofsOfPaymentUncheckedCreateWithoutAdminInput> | ProofsOfPaymentCreateWithoutAdminInput[] | ProofsOfPaymentUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ProofsOfPaymentCreateOrConnectWithoutAdminInput | ProofsOfPaymentCreateOrConnectWithoutAdminInput[]
    upsert?: ProofsOfPaymentUpsertWithWhereUniqueWithoutAdminInput | ProofsOfPaymentUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ProofsOfPaymentCreateManyAdminInputEnvelope
    set?: ProofsOfPaymentWhereUniqueInput | ProofsOfPaymentWhereUniqueInput[]
    disconnect?: ProofsOfPaymentWhereUniqueInput | ProofsOfPaymentWhereUniqueInput[]
    delete?: ProofsOfPaymentWhereUniqueInput | ProofsOfPaymentWhereUniqueInput[]
    connect?: ProofsOfPaymentWhereUniqueInput | ProofsOfPaymentWhereUniqueInput[]
    update?: ProofsOfPaymentUpdateWithWhereUniqueWithoutAdminInput | ProofsOfPaymentUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ProofsOfPaymentUpdateManyWithWhereWithoutAdminInput | ProofsOfPaymentUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ProofsOfPaymentScalarWhereInput | ProofsOfPaymentScalarWhereInput[]
  }

  export type WarehouseUpdateManyWithoutAdminNestedInput = {
    create?: XOR<WarehouseCreateWithoutAdminInput, WarehouseUncheckedCreateWithoutAdminInput> | WarehouseCreateWithoutAdminInput[] | WarehouseUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutAdminInput | WarehouseCreateOrConnectWithoutAdminInput[]
    upsert?: WarehouseUpsertWithWhereUniqueWithoutAdminInput | WarehouseUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: WarehouseCreateManyAdminInputEnvelope
    set?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    disconnect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    delete?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    update?: WarehouseUpdateWithWhereUniqueWithoutAdminInput | WarehouseUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: WarehouseUpdateManyWithWhereWithoutAdminInput | WarehouseUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: WarehouseScalarWhereInput | WarehouseScalarWhereInput[]
  }

  export type PromotionUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<PromotionCreateWithoutAdminInput, PromotionUncheckedCreateWithoutAdminInput> | PromotionCreateWithoutAdminInput[] | PromotionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutAdminInput | PromotionCreateOrConnectWithoutAdminInput[]
    upsert?: PromotionUpsertWithWhereUniqueWithoutAdminInput | PromotionUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: PromotionCreateManyAdminInputEnvelope
    set?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    disconnect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    delete?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    update?: PromotionUpdateWithWhereUniqueWithoutAdminInput | PromotionUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: PromotionUpdateManyWithWhereWithoutAdminInput | PromotionUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<OrdersCreateWithoutAdminInput, OrdersUncheckedCreateWithoutAdminInput> | OrdersCreateWithoutAdminInput[] | OrdersUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutAdminInput | OrdersCreateOrConnectWithoutAdminInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutAdminInput | OrdersUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: OrdersCreateManyAdminInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutAdminInput | OrdersUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutAdminInput | OrdersUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type ProofsOfPaymentUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ProofsOfPaymentCreateWithoutAdminInput, ProofsOfPaymentUncheckedCreateWithoutAdminInput> | ProofsOfPaymentCreateWithoutAdminInput[] | ProofsOfPaymentUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ProofsOfPaymentCreateOrConnectWithoutAdminInput | ProofsOfPaymentCreateOrConnectWithoutAdminInput[]
    upsert?: ProofsOfPaymentUpsertWithWhereUniqueWithoutAdminInput | ProofsOfPaymentUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ProofsOfPaymentCreateManyAdminInputEnvelope
    set?: ProofsOfPaymentWhereUniqueInput | ProofsOfPaymentWhereUniqueInput[]
    disconnect?: ProofsOfPaymentWhereUniqueInput | ProofsOfPaymentWhereUniqueInput[]
    delete?: ProofsOfPaymentWhereUniqueInput | ProofsOfPaymentWhereUniqueInput[]
    connect?: ProofsOfPaymentWhereUniqueInput | ProofsOfPaymentWhereUniqueInput[]
    update?: ProofsOfPaymentUpdateWithWhereUniqueWithoutAdminInput | ProofsOfPaymentUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ProofsOfPaymentUpdateManyWithWhereWithoutAdminInput | ProofsOfPaymentUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ProofsOfPaymentScalarWhereInput | ProofsOfPaymentScalarWhereInput[]
  }

  export type WarehouseUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<WarehouseCreateWithoutAdminInput, WarehouseUncheckedCreateWithoutAdminInput> | WarehouseCreateWithoutAdminInput[] | WarehouseUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutAdminInput | WarehouseCreateOrConnectWithoutAdminInput[]
    upsert?: WarehouseUpsertWithWhereUniqueWithoutAdminInput | WarehouseUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: WarehouseCreateManyAdminInputEnvelope
    set?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    disconnect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    delete?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    update?: WarehouseUpdateWithWhereUniqueWithoutAdminInput | WarehouseUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: WarehouseUpdateManyWithWhereWithoutAdminInput | WarehouseUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: WarehouseScalarWhereInput | WarehouseScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutPromotionInput = {
    create?: XOR<AdminCreateWithoutPromotionInput, AdminUncheckedCreateWithoutPromotionInput>
    connectOrCreate?: AdminCreateOrConnectWithoutPromotionInput
    connect?: AdminWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutPromotionsInput = {
    create?: XOR<ProductCreateWithoutPromotionsInput, ProductUncheckedCreateWithoutPromotionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPromotionsInput
    connect?: ProductWhereUniqueInput
  }

  export type UserPromoUsageCreateNestedManyWithoutPromoInput = {
    create?: XOR<UserPromoUsageCreateWithoutPromoInput, UserPromoUsageUncheckedCreateWithoutPromoInput> | UserPromoUsageCreateWithoutPromoInput[] | UserPromoUsageUncheckedCreateWithoutPromoInput[]
    connectOrCreate?: UserPromoUsageCreateOrConnectWithoutPromoInput | UserPromoUsageCreateOrConnectWithoutPromoInput[]
    createMany?: UserPromoUsageCreateManyPromoInputEnvelope
    connect?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
  }

  export type UserPromoUsageUncheckedCreateNestedManyWithoutPromoInput = {
    create?: XOR<UserPromoUsageCreateWithoutPromoInput, UserPromoUsageUncheckedCreateWithoutPromoInput> | UserPromoUsageCreateWithoutPromoInput[] | UserPromoUsageUncheckedCreateWithoutPromoInput[]
    connectOrCreate?: UserPromoUsageCreateOrConnectWithoutPromoInput | UserPromoUsageCreateOrConnectWithoutPromoInput[]
    createMany?: UserPromoUsageCreateManyPromoInputEnvelope
    connect?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AdminUpdateOneRequiredWithoutPromotionNestedInput = {
    create?: XOR<AdminCreateWithoutPromotionInput, AdminUncheckedCreateWithoutPromotionInput>
    connectOrCreate?: AdminCreateOrConnectWithoutPromotionInput
    upsert?: AdminUpsertWithoutPromotionInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutPromotionInput, AdminUpdateWithoutPromotionInput>, AdminUncheckedUpdateWithoutPromotionInput>
  }

  export type ProductUpdateOneWithoutPromotionsNestedInput = {
    create?: XOR<ProductCreateWithoutPromotionsInput, ProductUncheckedCreateWithoutPromotionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPromotionsInput
    upsert?: ProductUpsertWithoutPromotionsInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPromotionsInput, ProductUpdateWithoutPromotionsInput>, ProductUncheckedUpdateWithoutPromotionsInput>
  }

  export type UserPromoUsageUpdateManyWithoutPromoNestedInput = {
    create?: XOR<UserPromoUsageCreateWithoutPromoInput, UserPromoUsageUncheckedCreateWithoutPromoInput> | UserPromoUsageCreateWithoutPromoInput[] | UserPromoUsageUncheckedCreateWithoutPromoInput[]
    connectOrCreate?: UserPromoUsageCreateOrConnectWithoutPromoInput | UserPromoUsageCreateOrConnectWithoutPromoInput[]
    upsert?: UserPromoUsageUpsertWithWhereUniqueWithoutPromoInput | UserPromoUsageUpsertWithWhereUniqueWithoutPromoInput[]
    createMany?: UserPromoUsageCreateManyPromoInputEnvelope
    set?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    disconnect?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    delete?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    connect?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    update?: UserPromoUsageUpdateWithWhereUniqueWithoutPromoInput | UserPromoUsageUpdateWithWhereUniqueWithoutPromoInput[]
    updateMany?: UserPromoUsageUpdateManyWithWhereWithoutPromoInput | UserPromoUsageUpdateManyWithWhereWithoutPromoInput[]
    deleteMany?: UserPromoUsageScalarWhereInput | UserPromoUsageScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserPromoUsageUncheckedUpdateManyWithoutPromoNestedInput = {
    create?: XOR<UserPromoUsageCreateWithoutPromoInput, UserPromoUsageUncheckedCreateWithoutPromoInput> | UserPromoUsageCreateWithoutPromoInput[] | UserPromoUsageUncheckedCreateWithoutPromoInput[]
    connectOrCreate?: UserPromoUsageCreateOrConnectWithoutPromoInput | UserPromoUsageCreateOrConnectWithoutPromoInput[]
    upsert?: UserPromoUsageUpsertWithWhereUniqueWithoutPromoInput | UserPromoUsageUpsertWithWhereUniqueWithoutPromoInput[]
    createMany?: UserPromoUsageCreateManyPromoInputEnvelope
    set?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    disconnect?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    delete?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    connect?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    update?: UserPromoUsageUpdateWithWhereUniqueWithoutPromoInput | UserPromoUsageUpdateWithWhereUniqueWithoutPromoInput[]
    updateMany?: UserPromoUsageUpdateManyWithWhereWithoutPromoInput | UserPromoUsageUpdateManyWithWhereWithoutPromoInput[]
    deleteMany?: UserPromoUsageScalarWhereInput | UserPromoUsageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUser_promo_usagesInput = {
    create?: XOR<UserCreateWithoutUser_promo_usagesInput, UserUncheckedCreateWithoutUser_promo_usagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_promo_usagesInput
    connect?: UserWhereUniqueInput
  }

  export type PromotionCreateNestedOneWithoutUserPromoUsageInput = {
    create?: XOR<PromotionCreateWithoutUserPromoUsageInput, PromotionUncheckedCreateWithoutUserPromoUsageInput>
    connectOrCreate?: PromotionCreateOrConnectWithoutUserPromoUsageInput
    connect?: PromotionWhereUniqueInput
  }

  export type OrdersCreateNestedOneWithoutUserPromoUsageInput = {
    create?: XOR<OrdersCreateWithoutUserPromoUsageInput, OrdersUncheckedCreateWithoutUserPromoUsageInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutUserPromoUsageInput
    connect?: OrdersWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUser_promo_usagesNestedInput = {
    create?: XOR<UserCreateWithoutUser_promo_usagesInput, UserUncheckedCreateWithoutUser_promo_usagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_promo_usagesInput
    upsert?: UserUpsertWithoutUser_promo_usagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_promo_usagesInput, UserUpdateWithoutUser_promo_usagesInput>, UserUncheckedUpdateWithoutUser_promo_usagesInput>
  }

  export type PromotionUpdateOneRequiredWithoutUserPromoUsageNestedInput = {
    create?: XOR<PromotionCreateWithoutUserPromoUsageInput, PromotionUncheckedCreateWithoutUserPromoUsageInput>
    connectOrCreate?: PromotionCreateOrConnectWithoutUserPromoUsageInput
    upsert?: PromotionUpsertWithoutUserPromoUsageInput
    connect?: PromotionWhereUniqueInput
    update?: XOR<XOR<PromotionUpdateToOneWithWhereWithoutUserPromoUsageInput, PromotionUpdateWithoutUserPromoUsageInput>, PromotionUncheckedUpdateWithoutUserPromoUsageInput>
  }

  export type OrdersUpdateOneWithoutUserPromoUsageNestedInput = {
    create?: XOR<OrdersCreateWithoutUserPromoUsageInput, OrdersUncheckedCreateWithoutUserPromoUsageInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutUserPromoUsageInput
    upsert?: OrdersUpsertWithoutUserPromoUsageInput
    disconnect?: OrdersWhereInput | boolean
    delete?: OrdersWhereInput | boolean
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutUserPromoUsageInput, OrdersUpdateWithoutUserPromoUsageInput>, OrdersUncheckedUpdateWithoutUserPromoUsageInput>
  }

  export type ShoppingCartCreateNestedOneWithoutCart_itemsInput = {
    create?: XOR<ShoppingCartCreateWithoutCart_itemsInput, ShoppingCartUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: ShoppingCartCreateOrConnectWithoutCart_itemsInput
    connect?: ShoppingCartWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutShoppingCartItemInput = {
    create?: XOR<ProductCreateWithoutShoppingCartItemInput, ProductUncheckedCreateWithoutShoppingCartItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutShoppingCartItemInput
    connect?: ProductWhereUniqueInput
  }

  export type ShoppingCartUpdateOneRequiredWithoutCart_itemsNestedInput = {
    create?: XOR<ShoppingCartCreateWithoutCart_itemsInput, ShoppingCartUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: ShoppingCartCreateOrConnectWithoutCart_itemsInput
    upsert?: ShoppingCartUpsertWithoutCart_itemsInput
    connect?: ShoppingCartWhereUniqueInput
    update?: XOR<XOR<ShoppingCartUpdateToOneWithWhereWithoutCart_itemsInput, ShoppingCartUpdateWithoutCart_itemsInput>, ShoppingCartUncheckedUpdateWithoutCart_itemsInput>
  }

  export type ProductUpdateOneRequiredWithoutShoppingCartItemNestedInput = {
    create?: XOR<ProductCreateWithoutShoppingCartItemInput, ProductUncheckedCreateWithoutShoppingCartItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutShoppingCartItemInput
    upsert?: ProductUpsertWithoutShoppingCartItemInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutShoppingCartItemInput, ProductUpdateWithoutShoppingCartItemInput>, ProductUncheckedUpdateWithoutShoppingCartItemInput>
  }

  export type UserCreateNestedOneWithoutShopping_cartsInput = {
    create?: XOR<UserCreateWithoutShopping_cartsInput, UserUncheckedCreateWithoutShopping_cartsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShopping_cartsInput
    connect?: UserWhereUniqueInput
  }

  export type ShoppingCartItemCreateNestedManyWithoutCartInput = {
    create?: XOR<ShoppingCartItemCreateWithoutCartInput, ShoppingCartItemUncheckedCreateWithoutCartInput> | ShoppingCartItemCreateWithoutCartInput[] | ShoppingCartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: ShoppingCartItemCreateOrConnectWithoutCartInput | ShoppingCartItemCreateOrConnectWithoutCartInput[]
    createMany?: ShoppingCartItemCreateManyCartInputEnvelope
    connect?: ShoppingCartItemWhereUniqueInput | ShoppingCartItemWhereUniqueInput[]
  }

  export type ProductCreateNestedOneWithoutShoppingCartInput = {
    create?: XOR<ProductCreateWithoutShoppingCartInput, ProductUncheckedCreateWithoutShoppingCartInput>
    connectOrCreate?: ProductCreateOrConnectWithoutShoppingCartInput
    connect?: ProductWhereUniqueInput
  }

  export type ShoppingCartItemUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<ShoppingCartItemCreateWithoutCartInput, ShoppingCartItemUncheckedCreateWithoutCartInput> | ShoppingCartItemCreateWithoutCartInput[] | ShoppingCartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: ShoppingCartItemCreateOrConnectWithoutCartInput | ShoppingCartItemCreateOrConnectWithoutCartInput[]
    createMany?: ShoppingCartItemCreateManyCartInputEnvelope
    connect?: ShoppingCartItemWhereUniqueInput | ShoppingCartItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutShopping_cartsNestedInput = {
    create?: XOR<UserCreateWithoutShopping_cartsInput, UserUncheckedCreateWithoutShopping_cartsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShopping_cartsInput
    upsert?: UserUpsertWithoutShopping_cartsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShopping_cartsInput, UserUpdateWithoutShopping_cartsInput>, UserUncheckedUpdateWithoutShopping_cartsInput>
  }

  export type ShoppingCartItemUpdateManyWithoutCartNestedInput = {
    create?: XOR<ShoppingCartItemCreateWithoutCartInput, ShoppingCartItemUncheckedCreateWithoutCartInput> | ShoppingCartItemCreateWithoutCartInput[] | ShoppingCartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: ShoppingCartItemCreateOrConnectWithoutCartInput | ShoppingCartItemCreateOrConnectWithoutCartInput[]
    upsert?: ShoppingCartItemUpsertWithWhereUniqueWithoutCartInput | ShoppingCartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: ShoppingCartItemCreateManyCartInputEnvelope
    set?: ShoppingCartItemWhereUniqueInput | ShoppingCartItemWhereUniqueInput[]
    disconnect?: ShoppingCartItemWhereUniqueInput | ShoppingCartItemWhereUniqueInput[]
    delete?: ShoppingCartItemWhereUniqueInput | ShoppingCartItemWhereUniqueInput[]
    connect?: ShoppingCartItemWhereUniqueInput | ShoppingCartItemWhereUniqueInput[]
    update?: ShoppingCartItemUpdateWithWhereUniqueWithoutCartInput | ShoppingCartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: ShoppingCartItemUpdateManyWithWhereWithoutCartInput | ShoppingCartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: ShoppingCartItemScalarWhereInput | ShoppingCartItemScalarWhereInput[]
  }

  export type ProductUpdateOneWithoutShoppingCartNestedInput = {
    create?: XOR<ProductCreateWithoutShoppingCartInput, ProductUncheckedCreateWithoutShoppingCartInput>
    connectOrCreate?: ProductCreateOrConnectWithoutShoppingCartInput
    upsert?: ProductUpsertWithoutShoppingCartInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutShoppingCartInput, ProductUpdateWithoutShoppingCartInput>, ProductUncheckedUpdateWithoutShoppingCartInput>
  }

  export type ShoppingCartItemUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<ShoppingCartItemCreateWithoutCartInput, ShoppingCartItemUncheckedCreateWithoutCartInput> | ShoppingCartItemCreateWithoutCartInput[] | ShoppingCartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: ShoppingCartItemCreateOrConnectWithoutCartInput | ShoppingCartItemCreateOrConnectWithoutCartInput[]
    upsert?: ShoppingCartItemUpsertWithWhereUniqueWithoutCartInput | ShoppingCartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: ShoppingCartItemCreateManyCartInputEnvelope
    set?: ShoppingCartItemWhereUniqueInput | ShoppingCartItemWhereUniqueInput[]
    disconnect?: ShoppingCartItemWhereUniqueInput | ShoppingCartItemWhereUniqueInput[]
    delete?: ShoppingCartItemWhereUniqueInput | ShoppingCartItemWhereUniqueInput[]
    connect?: ShoppingCartItemWhereUniqueInput | ShoppingCartItemWhereUniqueInput[]
    update?: ShoppingCartItemUpdateWithWhereUniqueWithoutCartInput | ShoppingCartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: ShoppingCartItemUpdateManyWithWhereWithoutCartInput | ShoppingCartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: ShoppingCartItemScalarWhereInput | ShoppingCartItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutOrdersInput = {
    create?: XOR<AdminCreateWithoutOrdersInput, AdminUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: AdminCreateOrConnectWithoutOrdersInput
    connect?: AdminWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrdersInput = {
    create?: XOR<OrderItemCreateWithoutOrdersInput, OrderItemUncheckedCreateWithoutOrdersInput> | OrderItemCreateWithoutOrdersInput[] | OrderItemUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrdersInput | OrderItemCreateOrConnectWithoutOrdersInput[]
    createMany?: OrderItemCreateManyOrdersInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type UserPromoUsageCreateNestedManyWithoutOrderInput = {
    create?: XOR<UserPromoUsageCreateWithoutOrderInput, UserPromoUsageUncheckedCreateWithoutOrderInput> | UserPromoUsageCreateWithoutOrderInput[] | UserPromoUsageUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: UserPromoUsageCreateOrConnectWithoutOrderInput | UserPromoUsageCreateOrConnectWithoutOrderInput[]
    createMany?: UserPromoUsageCreateManyOrderInputEnvelope
    connect?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
  }

  export type ProofsOfPaymentCreateNestedManyWithoutOrderInput = {
    create?: XOR<ProofsOfPaymentCreateWithoutOrderInput, ProofsOfPaymentUncheckedCreateWithoutOrderInput> | ProofsOfPaymentCreateWithoutOrderInput[] | ProofsOfPaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProofsOfPaymentCreateOrConnectWithoutOrderInput | ProofsOfPaymentCreateOrConnectWithoutOrderInput[]
    createMany?: ProofsOfPaymentCreateManyOrderInputEnvelope
    connect?: ProofsOfPaymentWhereUniqueInput | ProofsOfPaymentWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<OrderItemCreateWithoutOrdersInput, OrderItemUncheckedCreateWithoutOrdersInput> | OrderItemCreateWithoutOrdersInput[] | OrderItemUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrdersInput | OrderItemCreateOrConnectWithoutOrdersInput[]
    createMany?: OrderItemCreateManyOrdersInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type UserPromoUsageUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<UserPromoUsageCreateWithoutOrderInput, UserPromoUsageUncheckedCreateWithoutOrderInput> | UserPromoUsageCreateWithoutOrderInput[] | UserPromoUsageUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: UserPromoUsageCreateOrConnectWithoutOrderInput | UserPromoUsageCreateOrConnectWithoutOrderInput[]
    createMany?: UserPromoUsageCreateManyOrderInputEnvelope
    connect?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
  }

  export type ProofsOfPaymentUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<ProofsOfPaymentCreateWithoutOrderInput, ProofsOfPaymentUncheckedCreateWithoutOrderInput> | ProofsOfPaymentCreateWithoutOrderInput[] | ProofsOfPaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProofsOfPaymentCreateOrConnectWithoutOrderInput | ProofsOfPaymentCreateOrConnectWithoutOrderInput[]
    createMany?: ProofsOfPaymentCreateManyOrderInputEnvelope
    connect?: ProofsOfPaymentWhereUniqueInput | ProofsOfPaymentWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type AdminUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<AdminCreateWithoutOrdersInput, AdminUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: AdminCreateOrConnectWithoutOrdersInput
    upsert?: AdminUpsertWithoutOrdersInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutOrdersInput, AdminUpdateWithoutOrdersInput>, AdminUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrdersInput, OrderItemUncheckedCreateWithoutOrdersInput> | OrderItemCreateWithoutOrdersInput[] | OrderItemUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrdersInput | OrderItemCreateOrConnectWithoutOrdersInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrdersInput | OrderItemUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: OrderItemCreateManyOrdersInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrdersInput | OrderItemUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrdersInput | OrderItemUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type UserPromoUsageUpdateManyWithoutOrderNestedInput = {
    create?: XOR<UserPromoUsageCreateWithoutOrderInput, UserPromoUsageUncheckedCreateWithoutOrderInput> | UserPromoUsageCreateWithoutOrderInput[] | UserPromoUsageUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: UserPromoUsageCreateOrConnectWithoutOrderInput | UserPromoUsageCreateOrConnectWithoutOrderInput[]
    upsert?: UserPromoUsageUpsertWithWhereUniqueWithoutOrderInput | UserPromoUsageUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: UserPromoUsageCreateManyOrderInputEnvelope
    set?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    disconnect?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    delete?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    connect?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    update?: UserPromoUsageUpdateWithWhereUniqueWithoutOrderInput | UserPromoUsageUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: UserPromoUsageUpdateManyWithWhereWithoutOrderInput | UserPromoUsageUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: UserPromoUsageScalarWhereInput | UserPromoUsageScalarWhereInput[]
  }

  export type ProofsOfPaymentUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ProofsOfPaymentCreateWithoutOrderInput, ProofsOfPaymentUncheckedCreateWithoutOrderInput> | ProofsOfPaymentCreateWithoutOrderInput[] | ProofsOfPaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProofsOfPaymentCreateOrConnectWithoutOrderInput | ProofsOfPaymentCreateOrConnectWithoutOrderInput[]
    upsert?: ProofsOfPaymentUpsertWithWhereUniqueWithoutOrderInput | ProofsOfPaymentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ProofsOfPaymentCreateManyOrderInputEnvelope
    set?: ProofsOfPaymentWhereUniqueInput | ProofsOfPaymentWhereUniqueInput[]
    disconnect?: ProofsOfPaymentWhereUniqueInput | ProofsOfPaymentWhereUniqueInput[]
    delete?: ProofsOfPaymentWhereUniqueInput | ProofsOfPaymentWhereUniqueInput[]
    connect?: ProofsOfPaymentWhereUniqueInput | ProofsOfPaymentWhereUniqueInput[]
    update?: ProofsOfPaymentUpdateWithWhereUniqueWithoutOrderInput | ProofsOfPaymentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ProofsOfPaymentUpdateManyWithWhereWithoutOrderInput | ProofsOfPaymentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ProofsOfPaymentScalarWhereInput | ProofsOfPaymentScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrdersInput, OrderItemUncheckedCreateWithoutOrdersInput> | OrderItemCreateWithoutOrdersInput[] | OrderItemUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrdersInput | OrderItemCreateOrConnectWithoutOrdersInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrdersInput | OrderItemUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: OrderItemCreateManyOrdersInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrdersInput | OrderItemUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrdersInput | OrderItemUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type UserPromoUsageUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<UserPromoUsageCreateWithoutOrderInput, UserPromoUsageUncheckedCreateWithoutOrderInput> | UserPromoUsageCreateWithoutOrderInput[] | UserPromoUsageUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: UserPromoUsageCreateOrConnectWithoutOrderInput | UserPromoUsageCreateOrConnectWithoutOrderInput[]
    upsert?: UserPromoUsageUpsertWithWhereUniqueWithoutOrderInput | UserPromoUsageUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: UserPromoUsageCreateManyOrderInputEnvelope
    set?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    disconnect?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    delete?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    connect?: UserPromoUsageWhereUniqueInput | UserPromoUsageWhereUniqueInput[]
    update?: UserPromoUsageUpdateWithWhereUniqueWithoutOrderInput | UserPromoUsageUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: UserPromoUsageUpdateManyWithWhereWithoutOrderInput | UserPromoUsageUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: UserPromoUsageScalarWhereInput | UserPromoUsageScalarWhereInput[]
  }

  export type ProofsOfPaymentUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ProofsOfPaymentCreateWithoutOrderInput, ProofsOfPaymentUncheckedCreateWithoutOrderInput> | ProofsOfPaymentCreateWithoutOrderInput[] | ProofsOfPaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProofsOfPaymentCreateOrConnectWithoutOrderInput | ProofsOfPaymentCreateOrConnectWithoutOrderInput[]
    upsert?: ProofsOfPaymentUpsertWithWhereUniqueWithoutOrderInput | ProofsOfPaymentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ProofsOfPaymentCreateManyOrderInputEnvelope
    set?: ProofsOfPaymentWhereUniqueInput | ProofsOfPaymentWhereUniqueInput[]
    disconnect?: ProofsOfPaymentWhereUniqueInput | ProofsOfPaymentWhereUniqueInput[]
    delete?: ProofsOfPaymentWhereUniqueInput | ProofsOfPaymentWhereUniqueInput[]
    connect?: ProofsOfPaymentWhereUniqueInput | ProofsOfPaymentWhereUniqueInput[]
    update?: ProofsOfPaymentUpdateWithWhereUniqueWithoutOrderInput | ProofsOfPaymentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ProofsOfPaymentUpdateManyWithWhereWithoutOrderInput | ProofsOfPaymentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ProofsOfPaymentScalarWhereInput | ProofsOfPaymentScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<ProductCreateWithoutOrder_itemsInput, ProductUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrder_itemsInput
    connect?: ProductWhereUniqueInput
  }

  export type OrdersCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<OrdersCreateWithoutOrder_itemsInput, OrdersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrder_itemsInput
    connect?: OrdersWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<ProductCreateWithoutOrder_itemsInput, ProductUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrder_itemsInput
    upsert?: ProductUpsertWithoutOrder_itemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrder_itemsInput, ProductUpdateWithoutOrder_itemsInput>, ProductUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type OrdersUpdateOneWithoutOrder_itemsNestedInput = {
    create?: XOR<OrdersCreateWithoutOrder_itemsInput, OrdersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrder_itemsInput
    upsert?: OrdersUpsertWithoutOrder_itemsInput
    disconnect?: OrdersWhereInput | boolean
    delete?: OrdersWhereInput | boolean
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutOrder_itemsInput, OrdersUpdateWithoutOrder_itemsInput>, OrdersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type OrdersCreateNestedOneWithoutProofsOfPaymentInput = {
    create?: XOR<OrdersCreateWithoutProofsOfPaymentInput, OrdersUncheckedCreateWithoutProofsOfPaymentInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutProofsOfPaymentInput
    connect?: OrdersWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutProofsOfPaymentInput = {
    create?: XOR<AdminCreateWithoutProofsOfPaymentInput, AdminUncheckedCreateWithoutProofsOfPaymentInput>
    connectOrCreate?: AdminCreateOrConnectWithoutProofsOfPaymentInput
    connect?: AdminWhereUniqueInput
  }

  export type OrdersUpdateOneRequiredWithoutProofsOfPaymentNestedInput = {
    create?: XOR<OrdersCreateWithoutProofsOfPaymentInput, OrdersUncheckedCreateWithoutProofsOfPaymentInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutProofsOfPaymentInput
    upsert?: OrdersUpsertWithoutProofsOfPaymentInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutProofsOfPaymentInput, OrdersUpdateWithoutProofsOfPaymentInput>, OrdersUncheckedUpdateWithoutProofsOfPaymentInput>
  }

  export type AdminUpdateOneWithoutProofsOfPaymentNestedInput = {
    create?: XOR<AdminCreateWithoutProofsOfPaymentInput, AdminUncheckedCreateWithoutProofsOfPaymentInput>
    connectOrCreate?: AdminCreateOrConnectWithoutProofsOfPaymentInput
    upsert?: AdminUpsertWithoutProofsOfPaymentInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutProofsOfPaymentInput, AdminUpdateWithoutProofsOfPaymentInput>, AdminUncheckedUpdateWithoutProofsOfPaymentInput>
  }

  export type AdminCreateNestedOneWithoutWarehouseInput = {
    create?: XOR<AdminCreateWithoutWarehouseInput, AdminUncheckedCreateWithoutWarehouseInput>
    connectOrCreate?: AdminCreateOrConnectWithoutWarehouseInput
    connect?: AdminWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<ProductCreateWithoutWarehouseInput, ProductUncheckedCreateWithoutWarehouseInput> | ProductCreateWithoutWarehouseInput[] | ProductUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutWarehouseInput | ProductCreateOrConnectWithoutWarehouseInput[]
    createMany?: ProductCreateManyWarehouseInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<ProductCreateWithoutWarehouseInput, ProductUncheckedCreateWithoutWarehouseInput> | ProductCreateWithoutWarehouseInput[] | ProductUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutWarehouseInput | ProductCreateOrConnectWithoutWarehouseInput[]
    createMany?: ProductCreateManyWarehouseInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type AdminUpdateOneRequiredWithoutWarehouseNestedInput = {
    create?: XOR<AdminCreateWithoutWarehouseInput, AdminUncheckedCreateWithoutWarehouseInput>
    connectOrCreate?: AdminCreateOrConnectWithoutWarehouseInput
    upsert?: AdminUpsertWithoutWarehouseInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutWarehouseInput, AdminUpdateWithoutWarehouseInput>, AdminUncheckedUpdateWithoutWarehouseInput>
  }

  export type ProductUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<ProductCreateWithoutWarehouseInput, ProductUncheckedCreateWithoutWarehouseInput> | ProductCreateWithoutWarehouseInput[] | ProductUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutWarehouseInput | ProductCreateOrConnectWithoutWarehouseInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutWarehouseInput | ProductUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: ProductCreateManyWarehouseInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutWarehouseInput | ProductUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutWarehouseInput | ProductUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<ProductCreateWithoutWarehouseInput, ProductUncheckedCreateWithoutWarehouseInput> | ProductCreateWithoutWarehouseInput[] | ProductUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutWarehouseInput | ProductCreateOrConnectWithoutWarehouseInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutWarehouseInput | ProductUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: ProductCreateManyWarehouseInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutWarehouseInput | ProductUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutWarehouseInput | ProductUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUser_addressesInput = {
    create?: XOR<UserCreateWithoutUser_addressesInput, UserUncheckedCreateWithoutUser_addressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_addressesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUser_addressesNestedInput = {
    create?: XOR<UserCreateWithoutUser_addressesInput, UserUncheckedCreateWithoutUser_addressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_addressesInput
    upsert?: UserUpsertWithoutUser_addressesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_addressesInput, UserUpdateWithoutUser_addressesInput>, UserUncheckedUpdateWithoutUser_addressesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserPromoUsageCreateWithoutUserInput = {
    usage_count: number
    promo: PromotionCreateNestedOneWithoutUserPromoUsageInput
    order?: OrdersCreateNestedOneWithoutUserPromoUsageInput
  }

  export type UserPromoUsageUncheckedCreateWithoutUserInput = {
    user_promo_usage_id?: number
    promo_id: number
    usage_count: number
    order_id?: number | null
  }

  export type UserPromoUsageCreateOrConnectWithoutUserInput = {
    where: UserPromoUsageWhereUniqueInput
    create: XOR<UserPromoUsageCreateWithoutUserInput, UserPromoUsageUncheckedCreateWithoutUserInput>
  }

  export type UserPromoUsageCreateManyUserInputEnvelope = {
    data: UserPromoUsageCreateManyUserInput | UserPromoUsageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShoppingCartCreateWithoutUserInput = {
    created_at?: Date | string
    updated_at?: Date | string
    cart_items?: ShoppingCartItemCreateNestedManyWithoutCartInput
    Product?: ProductCreateNestedOneWithoutShoppingCartInput
  }

  export type ShoppingCartUncheckedCreateWithoutUserInput = {
    cart_id?: number
    created_at?: Date | string
    updated_at?: Date | string
    productProduct_id?: number | null
    cart_items?: ShoppingCartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type ShoppingCartCreateOrConnectWithoutUserInput = {
    where: ShoppingCartWhereUniqueInput
    create: XOR<ShoppingCartCreateWithoutUserInput, ShoppingCartUncheckedCreateWithoutUserInput>
  }

  export type ShoppingCartCreateManyUserInputEnvelope = {
    data: ShoppingCartCreateManyUserInput | ShoppingCartCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutUserInput = {
    order_item_id?: number
    order_date: Date | string
    delivery_time: Date | string
    deliver_fee: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    payment_status: string
    order_status: string
    promo_code?: string | null
    promo_discount_amount?: Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: number
    created_at?: Date | string
    updated_at?: Date | string
    admin: AdminCreateNestedOneWithoutOrdersInput
    order_items?: OrderItemCreateNestedManyWithoutOrdersInput
    UserPromoUsage?: UserPromoUsageCreateNestedManyWithoutOrderInput
    ProofsOfPayment?: ProofsOfPaymentCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutUserInput = {
    order_id?: number
    order_item_id?: number
    order_date: Date | string
    delivery_time: Date | string
    deliver_fee: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    payment_status: string
    order_status: string
    admin_id: number
    promo_code?: string | null
    promo_discount_amount?: Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: number
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: OrderItemUncheckedCreateNestedManyWithoutOrdersInput
    UserPromoUsage?: UserPromoUsageUncheckedCreateNestedManyWithoutOrderInput
    ProofsOfPayment?: ProofsOfPaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutUserInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersCreateManyUserInputEnvelope = {
    data: OrdersCreateManyUserInput | OrdersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AffiliateDiscountCreateWithoutUserInput = {
    discount_amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AffiliateDiscountUncheckedCreateWithoutUserInput = {
    affiliate_discount_id?: number
    discount_amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AffiliateDiscountCreateOrConnectWithoutUserInput = {
    where: AffiliateDiscountWhereUniqueInput
    create: XOR<AffiliateDiscountCreateWithoutUserInput, AffiliateDiscountUncheckedCreateWithoutUserInput>
  }

  export type AffiliateDiscountCreateManyUserInputEnvelope = {
    data: AffiliateDiscountCreateManyUserInput | AffiliateDiscountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserAddressCreateWithoutUserInput = {
    province_id: number
    province_name: string
    city_id: number
    city_name: string
    postal_code: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserAddressUncheckedCreateWithoutUserInput = {
    user_address_id?: number
    province_id: number
    province_name: string
    city_id: number
    city_name: string
    postal_code: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserAddressCreateOrConnectWithoutUserInput = {
    where: UserAddressWhereUniqueInput
    create: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput>
  }

  export type UserAddressCreateManyUserInputEnvelope = {
    data: UserAddressCreateManyUserInput | UserAddressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPromoUsageUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPromoUsageWhereUniqueInput
    update: XOR<UserPromoUsageUpdateWithoutUserInput, UserPromoUsageUncheckedUpdateWithoutUserInput>
    create: XOR<UserPromoUsageCreateWithoutUserInput, UserPromoUsageUncheckedCreateWithoutUserInput>
  }

  export type UserPromoUsageUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPromoUsageWhereUniqueInput
    data: XOR<UserPromoUsageUpdateWithoutUserInput, UserPromoUsageUncheckedUpdateWithoutUserInput>
  }

  export type UserPromoUsageUpdateManyWithWhereWithoutUserInput = {
    where: UserPromoUsageScalarWhereInput
    data: XOR<UserPromoUsageUpdateManyMutationInput, UserPromoUsageUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPromoUsageScalarWhereInput = {
    AND?: UserPromoUsageScalarWhereInput | UserPromoUsageScalarWhereInput[]
    OR?: UserPromoUsageScalarWhereInput[]
    NOT?: UserPromoUsageScalarWhereInput | UserPromoUsageScalarWhereInput[]
    user_promo_usage_id?: IntFilter<"UserPromoUsage"> | number
    user_id?: IntFilter<"UserPromoUsage"> | number
    promo_id?: IntFilter<"UserPromoUsage"> | number
    usage_count?: IntFilter<"UserPromoUsage"> | number
    order_id?: IntNullableFilter<"UserPromoUsage"> | number | null
  }

  export type ShoppingCartUpsertWithWhereUniqueWithoutUserInput = {
    where: ShoppingCartWhereUniqueInput
    update: XOR<ShoppingCartUpdateWithoutUserInput, ShoppingCartUncheckedUpdateWithoutUserInput>
    create: XOR<ShoppingCartCreateWithoutUserInput, ShoppingCartUncheckedCreateWithoutUserInput>
  }

  export type ShoppingCartUpdateWithWhereUniqueWithoutUserInput = {
    where: ShoppingCartWhereUniqueInput
    data: XOR<ShoppingCartUpdateWithoutUserInput, ShoppingCartUncheckedUpdateWithoutUserInput>
  }

  export type ShoppingCartUpdateManyWithWhereWithoutUserInput = {
    where: ShoppingCartScalarWhereInput
    data: XOR<ShoppingCartUpdateManyMutationInput, ShoppingCartUncheckedUpdateManyWithoutUserInput>
  }

  export type ShoppingCartScalarWhereInput = {
    AND?: ShoppingCartScalarWhereInput | ShoppingCartScalarWhereInput[]
    OR?: ShoppingCartScalarWhereInput[]
    NOT?: ShoppingCartScalarWhereInput | ShoppingCartScalarWhereInput[]
    cart_id?: IntFilter<"ShoppingCart"> | number
    user_id?: IntFilter<"ShoppingCart"> | number
    created_at?: DateTimeFilter<"ShoppingCart"> | Date | string
    updated_at?: DateTimeFilter<"ShoppingCart"> | Date | string
    productProduct_id?: IntNullableFilter<"ShoppingCart"> | number | null
  }

  export type OrdersUpsertWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
  }

  export type OrdersUpdateManyWithWhereWithoutUserInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutUserInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    order_id?: IntFilter<"Orders"> | number
    user_id?: IntFilter<"Orders"> | number
    order_item_id?: IntFilter<"Orders"> | number
    order_date?: DateTimeFilter<"Orders"> | Date | string
    delivery_time?: DateTimeFilter<"Orders"> | Date | string
    deliver_fee?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    payment_status?: StringFilter<"Orders"> | string
    order_status?: StringFilter<"Orders"> | string
    admin_id?: IntFilter<"Orders"> | number
    promo_code?: StringNullableFilter<"Orders"> | string | null
    promo_discount_amount?: DecimalNullableFilter<"Orders"> | Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: FloatFilter<"Orders"> | number
    created_at?: DateTimeFilter<"Orders"> | Date | string
    updated_at?: DateTimeFilter<"Orders"> | Date | string
  }

  export type AffiliateDiscountUpsertWithWhereUniqueWithoutUserInput = {
    where: AffiliateDiscountWhereUniqueInput
    update: XOR<AffiliateDiscountUpdateWithoutUserInput, AffiliateDiscountUncheckedUpdateWithoutUserInput>
    create: XOR<AffiliateDiscountCreateWithoutUserInput, AffiliateDiscountUncheckedCreateWithoutUserInput>
  }

  export type AffiliateDiscountUpdateWithWhereUniqueWithoutUserInput = {
    where: AffiliateDiscountWhereUniqueInput
    data: XOR<AffiliateDiscountUpdateWithoutUserInput, AffiliateDiscountUncheckedUpdateWithoutUserInput>
  }

  export type AffiliateDiscountUpdateManyWithWhereWithoutUserInput = {
    where: AffiliateDiscountScalarWhereInput
    data: XOR<AffiliateDiscountUpdateManyMutationInput, AffiliateDiscountUncheckedUpdateManyWithoutUserInput>
  }

  export type AffiliateDiscountScalarWhereInput = {
    AND?: AffiliateDiscountScalarWhereInput | AffiliateDiscountScalarWhereInput[]
    OR?: AffiliateDiscountScalarWhereInput[]
    NOT?: AffiliateDiscountScalarWhereInput | AffiliateDiscountScalarWhereInput[]
    affiliate_discount_id?: IntFilter<"AffiliateDiscount"> | number
    user_id?: IntFilter<"AffiliateDiscount"> | number
    discount_amount?: DecimalFilter<"AffiliateDiscount"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"AffiliateDiscount"> | Date | string
    updated_at?: DateTimeFilter<"AffiliateDiscount"> | Date | string
  }

  export type UserAddressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAddressWhereUniqueInput
    update: XOR<UserAddressUpdateWithoutUserInput, UserAddressUncheckedUpdateWithoutUserInput>
    create: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput>
  }

  export type UserAddressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAddressWhereUniqueInput
    data: XOR<UserAddressUpdateWithoutUserInput, UserAddressUncheckedUpdateWithoutUserInput>
  }

  export type UserAddressUpdateManyWithWhereWithoutUserInput = {
    where: UserAddressScalarWhereInput
    data: XOR<UserAddressUpdateManyMutationInput, UserAddressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAddressScalarWhereInput = {
    AND?: UserAddressScalarWhereInput | UserAddressScalarWhereInput[]
    OR?: UserAddressScalarWhereInput[]
    NOT?: UserAddressScalarWhereInput | UserAddressScalarWhereInput[]
    user_address_id?: IntFilter<"UserAddress"> | number
    user_id?: IntFilter<"UserAddress"> | number
    province_id?: IntFilter<"UserAddress"> | number
    province_name?: StringFilter<"UserAddress"> | string
    city_id?: IntFilter<"UserAddress"> | number
    city_name?: StringFilter<"UserAddress"> | string
    postal_code?: IntFilter<"UserAddress"> | number
    created_at?: DateTimeFilter<"UserAddress"> | Date | string
    updated_at?: DateTimeFilter<"UserAddress"> | Date | string
  }

  export type CategoryCreateWithoutProductsInput = {
    category_name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    category_id?: number
    category_name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type WarehouseCreateWithoutProductsInput = {
    province_id: number
    province_name: string
    city_id: number
    city_name: string
    postal_code: number
    created_at?: Date | string
    updated_at?: Date | string
    admin: AdminCreateNestedOneWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateWithoutProductsInput = {
    warehouse_id?: number
    province_id: number
    province_name: string
    city_id: number
    city_name: string
    postal_code: number
    admin_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WarehouseCreateOrConnectWithoutProductsInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutProductsInput, WarehouseUncheckedCreateWithoutProductsInput>
  }

  export type PromotionCreateWithoutProductInput = {
    type: string
    maximum_usage: number
    amount: Decimal | DecimalJsLike | number | string
    remaining_usage: number
    promo_code?: string | null
    admin: AdminCreateNestedOneWithoutPromotionInput
    UserPromoUsage?: UserPromoUsageCreateNestedManyWithoutPromoInput
  }

  export type PromotionUncheckedCreateWithoutProductInput = {
    promo_id?: number
    type: string
    maximum_usage: number
    amount: Decimal | DecimalJsLike | number | string
    remaining_usage: number
    admin_id: number
    promo_code?: string | null
    UserPromoUsage?: UserPromoUsageUncheckedCreateNestedManyWithoutPromoInput
  }

  export type PromotionCreateOrConnectWithoutProductInput = {
    where: PromotionWhereUniqueInput
    create: XOR<PromotionCreateWithoutProductInput, PromotionUncheckedCreateWithoutProductInput>
  }

  export type PromotionCreateManyProductInputEnvelope = {
    data: PromotionCreateManyProductInput | PromotionCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutProductInput = {
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    orders?: OrdersCreateNestedOneWithoutOrder_itemsInput
  }

  export type OrderItemUncheckedCreateWithoutProductInput = {
    order_item_id?: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    ordersOrder_id?: number | null
  }

  export type OrderItemCreateOrConnectWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemCreateManyProductInputEnvelope = {
    data: OrderItemCreateManyProductInput | OrderItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ShoppingCartCreateWithoutProductInput = {
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutShopping_cartsInput
    cart_items?: ShoppingCartItemCreateNestedManyWithoutCartInput
  }

  export type ShoppingCartUncheckedCreateWithoutProductInput = {
    cart_id?: number
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
    cart_items?: ShoppingCartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type ShoppingCartCreateOrConnectWithoutProductInput = {
    where: ShoppingCartWhereUniqueInput
    create: XOR<ShoppingCartCreateWithoutProductInput, ShoppingCartUncheckedCreateWithoutProductInput>
  }

  export type ShoppingCartCreateManyProductInputEnvelope = {
    data: ShoppingCartCreateManyProductInput | ShoppingCartCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ShoppingCartItemCreateWithoutProductInput = {
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
    cart: ShoppingCartCreateNestedOneWithoutCart_itemsInput
  }

  export type ShoppingCartItemUncheckedCreateWithoutProductInput = {
    cart_item_id?: number
    cart_id: number
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ShoppingCartItemCreateOrConnectWithoutProductInput = {
    where: ShoppingCartItemWhereUniqueInput
    create: XOR<ShoppingCartItemCreateWithoutProductInput, ShoppingCartItemUncheckedCreateWithoutProductInput>
  }

  export type ShoppingCartItemCreateManyProductInputEnvelope = {
    data: ShoppingCartItemCreateManyProductInput | ShoppingCartItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehouseUpsertWithoutProductsInput = {
    update: XOR<WarehouseUpdateWithoutProductsInput, WarehouseUncheckedUpdateWithoutProductsInput>
    create: XOR<WarehouseCreateWithoutProductsInput, WarehouseUncheckedCreateWithoutProductsInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutProductsInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutProductsInput, WarehouseUncheckedUpdateWithoutProductsInput>
  }

  export type WarehouseUpdateWithoutProductsInput = {
    province_id?: IntFieldUpdateOperationsInput | number
    province_name?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    city_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutProductsInput = {
    warehouse_id?: IntFieldUpdateOperationsInput | number
    province_id?: IntFieldUpdateOperationsInput | number
    province_name?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    city_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    admin_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionUpsertWithWhereUniqueWithoutProductInput = {
    where: PromotionWhereUniqueInput
    update: XOR<PromotionUpdateWithoutProductInput, PromotionUncheckedUpdateWithoutProductInput>
    create: XOR<PromotionCreateWithoutProductInput, PromotionUncheckedCreateWithoutProductInput>
  }

  export type PromotionUpdateWithWhereUniqueWithoutProductInput = {
    where: PromotionWhereUniqueInput
    data: XOR<PromotionUpdateWithoutProductInput, PromotionUncheckedUpdateWithoutProductInput>
  }

  export type PromotionUpdateManyWithWhereWithoutProductInput = {
    where: PromotionScalarWhereInput
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyWithoutProductInput>
  }

  export type PromotionScalarWhereInput = {
    AND?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
    OR?: PromotionScalarWhereInput[]
    NOT?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
    promo_id?: IntFilter<"Promotion"> | number
    type?: StringFilter<"Promotion"> | string
    maximum_usage?: IntFilter<"Promotion"> | number
    amount?: DecimalFilter<"Promotion"> | Decimal | DecimalJsLike | number | string
    remaining_usage?: IntFilter<"Promotion"> | number
    admin_id?: IntFilter<"Promotion"> | number
    product_id?: IntNullableFilter<"Promotion"> | number | null
    promo_code?: StringNullableFilter<"Promotion"> | string | null
  }

  export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    order_item_id?: IntFilter<"OrderItem"> | number
    product_id?: IntFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    price?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"OrderItem"> | Date | string
    updated_at?: DateTimeFilter<"OrderItem"> | Date | string
    ordersOrder_id?: IntNullableFilter<"OrderItem"> | number | null
  }

  export type ShoppingCartUpsertWithWhereUniqueWithoutProductInput = {
    where: ShoppingCartWhereUniqueInput
    update: XOR<ShoppingCartUpdateWithoutProductInput, ShoppingCartUncheckedUpdateWithoutProductInput>
    create: XOR<ShoppingCartCreateWithoutProductInput, ShoppingCartUncheckedCreateWithoutProductInput>
  }

  export type ShoppingCartUpdateWithWhereUniqueWithoutProductInput = {
    where: ShoppingCartWhereUniqueInput
    data: XOR<ShoppingCartUpdateWithoutProductInput, ShoppingCartUncheckedUpdateWithoutProductInput>
  }

  export type ShoppingCartUpdateManyWithWhereWithoutProductInput = {
    where: ShoppingCartScalarWhereInput
    data: XOR<ShoppingCartUpdateManyMutationInput, ShoppingCartUncheckedUpdateManyWithoutProductInput>
  }

  export type ShoppingCartItemUpsertWithWhereUniqueWithoutProductInput = {
    where: ShoppingCartItemWhereUniqueInput
    update: XOR<ShoppingCartItemUpdateWithoutProductInput, ShoppingCartItemUncheckedUpdateWithoutProductInput>
    create: XOR<ShoppingCartItemCreateWithoutProductInput, ShoppingCartItemUncheckedCreateWithoutProductInput>
  }

  export type ShoppingCartItemUpdateWithWhereUniqueWithoutProductInput = {
    where: ShoppingCartItemWhereUniqueInput
    data: XOR<ShoppingCartItemUpdateWithoutProductInput, ShoppingCartItemUncheckedUpdateWithoutProductInput>
  }

  export type ShoppingCartItemUpdateManyWithWhereWithoutProductInput = {
    where: ShoppingCartItemScalarWhereInput
    data: XOR<ShoppingCartItemUpdateManyMutationInput, ShoppingCartItemUncheckedUpdateManyWithoutProductInput>
  }

  export type ShoppingCartItemScalarWhereInput = {
    AND?: ShoppingCartItemScalarWhereInput | ShoppingCartItemScalarWhereInput[]
    OR?: ShoppingCartItemScalarWhereInput[]
    NOT?: ShoppingCartItemScalarWhereInput | ShoppingCartItemScalarWhereInput[]
    cart_item_id?: IntFilter<"ShoppingCartItem"> | number
    cart_id?: IntFilter<"ShoppingCartItem"> | number
    product_id?: IntFilter<"ShoppingCartItem"> | number
    quantity?: IntFilter<"ShoppingCartItem"> | number
    created_at?: DateTimeFilter<"ShoppingCartItem"> | Date | string
    updated_at?: DateTimeFilter<"ShoppingCartItem"> | Date | string
  }

  export type UserCreateWithoutAffiliate_discountsInput = {
    full_name: string
    password: string
    email: string
    affiliate_code: string
    affiliate_usage: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_promo_usages?: UserPromoUsageCreateNestedManyWithoutUserInput
    shopping_carts?: ShoppingCartCreateNestedManyWithoutUserInput
    orders?: OrdersCreateNestedManyWithoutUserInput
    user_addresses?: UserAddressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAffiliate_discountsInput = {
    user_id?: number
    full_name: string
    password: string
    email: string
    affiliate_code: string
    affiliate_usage: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_promo_usages?: UserPromoUsageUncheckedCreateNestedManyWithoutUserInput
    shopping_carts?: ShoppingCartUncheckedCreateNestedManyWithoutUserInput
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    user_addresses?: UserAddressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAffiliate_discountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAffiliate_discountsInput, UserUncheckedCreateWithoutAffiliate_discountsInput>
  }

  export type UserUpsertWithoutAffiliate_discountsInput = {
    update: XOR<UserUpdateWithoutAffiliate_discountsInput, UserUncheckedUpdateWithoutAffiliate_discountsInput>
    create: XOR<UserCreateWithoutAffiliate_discountsInput, UserUncheckedCreateWithoutAffiliate_discountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAffiliate_discountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAffiliate_discountsInput, UserUncheckedUpdateWithoutAffiliate_discountsInput>
  }

  export type UserUpdateWithoutAffiliate_discountsInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    affiliate_code?: StringFieldUpdateOperationsInput | string
    affiliate_usage?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_promo_usages?: UserPromoUsageUpdateManyWithoutUserNestedInput
    shopping_carts?: ShoppingCartUpdateManyWithoutUserNestedInput
    orders?: OrdersUpdateManyWithoutUserNestedInput
    user_addresses?: UserAddressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAffiliate_discountsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    affiliate_code?: StringFieldUpdateOperationsInput | string
    affiliate_usage?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_promo_usages?: UserPromoUsageUncheckedUpdateManyWithoutUserNestedInput
    shopping_carts?: ShoppingCartUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    user_addresses?: UserAddressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductCreateWithoutCategoryInput = {
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    is_available: boolean
    image: string
    weight: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    warehouse: WarehouseCreateNestedOneWithoutProductsInput
    promotions?: PromotionCreateNestedManyWithoutProductInput
    order_items?: OrderItemCreateNestedManyWithoutProductInput
    ShoppingCart?: ShoppingCartCreateNestedManyWithoutProductInput
    ShoppingCartItem?: ShoppingCartItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    product_id?: number
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    is_available: boolean
    warehouse_id: number
    image: string
    weight: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    promotions?: PromotionUncheckedCreateNestedManyWithoutProductInput
    order_items?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    ShoppingCart?: ShoppingCartUncheckedCreateNestedManyWithoutProductInput
    ShoppingCartItem?: ShoppingCartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    product_id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Product"> | number
    is_available?: BoolFilter<"Product"> | boolean
    category_id?: IntFilter<"Product"> | number
    warehouse_id?: IntFilter<"Product"> | number
    image?: StringFilter<"Product"> | string
    weight?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeFilter<"Product"> | Date | string
  }

  export type PromotionCreateWithoutAdminInput = {
    type: string
    maximum_usage: number
    amount: Decimal | DecimalJsLike | number | string
    remaining_usage: number
    promo_code?: string | null
    product?: ProductCreateNestedOneWithoutPromotionsInput
    UserPromoUsage?: UserPromoUsageCreateNestedManyWithoutPromoInput
  }

  export type PromotionUncheckedCreateWithoutAdminInput = {
    promo_id?: number
    type: string
    maximum_usage: number
    amount: Decimal | DecimalJsLike | number | string
    remaining_usage: number
    product_id?: number | null
    promo_code?: string | null
    UserPromoUsage?: UserPromoUsageUncheckedCreateNestedManyWithoutPromoInput
  }

  export type PromotionCreateOrConnectWithoutAdminInput = {
    where: PromotionWhereUniqueInput
    create: XOR<PromotionCreateWithoutAdminInput, PromotionUncheckedCreateWithoutAdminInput>
  }

  export type PromotionCreateManyAdminInputEnvelope = {
    data: PromotionCreateManyAdminInput | PromotionCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutAdminInput = {
    order_item_id?: number
    order_date: Date | string
    delivery_time: Date | string
    deliver_fee: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    payment_status: string
    order_status: string
    promo_code?: string | null
    promo_discount_amount?: Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: number
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    order_items?: OrderItemCreateNestedManyWithoutOrdersInput
    UserPromoUsage?: UserPromoUsageCreateNestedManyWithoutOrderInput
    ProofsOfPayment?: ProofsOfPaymentCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutAdminInput = {
    order_id?: number
    user_id: number
    order_item_id?: number
    order_date: Date | string
    delivery_time: Date | string
    deliver_fee: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    payment_status: string
    order_status: string
    promo_code?: string | null
    promo_discount_amount?: Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: number
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: OrderItemUncheckedCreateNestedManyWithoutOrdersInput
    UserPromoUsage?: UserPromoUsageUncheckedCreateNestedManyWithoutOrderInput
    ProofsOfPayment?: ProofsOfPaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutAdminInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutAdminInput, OrdersUncheckedCreateWithoutAdminInput>
  }

  export type OrdersCreateManyAdminInputEnvelope = {
    data: OrdersCreateManyAdminInput | OrdersCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type ProofsOfPaymentCreateWithoutAdminInput = {
    image: string
    payment_status: boolean
    promo_usage_updated: boolean
    order: OrdersCreateNestedOneWithoutProofsOfPaymentInput
  }

  export type ProofsOfPaymentUncheckedCreateWithoutAdminInput = {
    proof_of_payment_id?: number
    order_id: number
    image: string
    payment_status: boolean
    promo_usage_updated: boolean
  }

  export type ProofsOfPaymentCreateOrConnectWithoutAdminInput = {
    where: ProofsOfPaymentWhereUniqueInput
    create: XOR<ProofsOfPaymentCreateWithoutAdminInput, ProofsOfPaymentUncheckedCreateWithoutAdminInput>
  }

  export type ProofsOfPaymentCreateManyAdminInputEnvelope = {
    data: ProofsOfPaymentCreateManyAdminInput | ProofsOfPaymentCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type WarehouseCreateWithoutAdminInput = {
    province_id: number
    province_name: string
    city_id: number
    city_name: string
    postal_code: number
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateWithoutAdminInput = {
    warehouse_id?: number
    province_id: number
    province_name: string
    city_id: number
    city_name: string
    postal_code: number
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseCreateOrConnectWithoutAdminInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutAdminInput, WarehouseUncheckedCreateWithoutAdminInput>
  }

  export type WarehouseCreateManyAdminInputEnvelope = {
    data: WarehouseCreateManyAdminInput | WarehouseCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type PromotionUpsertWithWhereUniqueWithoutAdminInput = {
    where: PromotionWhereUniqueInput
    update: XOR<PromotionUpdateWithoutAdminInput, PromotionUncheckedUpdateWithoutAdminInput>
    create: XOR<PromotionCreateWithoutAdminInput, PromotionUncheckedCreateWithoutAdminInput>
  }

  export type PromotionUpdateWithWhereUniqueWithoutAdminInput = {
    where: PromotionWhereUniqueInput
    data: XOR<PromotionUpdateWithoutAdminInput, PromotionUncheckedUpdateWithoutAdminInput>
  }

  export type PromotionUpdateManyWithWhereWithoutAdminInput = {
    where: PromotionScalarWhereInput
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyWithoutAdminInput>
  }

  export type OrdersUpsertWithWhereUniqueWithoutAdminInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutAdminInput, OrdersUncheckedUpdateWithoutAdminInput>
    create: XOR<OrdersCreateWithoutAdminInput, OrdersUncheckedCreateWithoutAdminInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutAdminInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutAdminInput, OrdersUncheckedUpdateWithoutAdminInput>
  }

  export type OrdersUpdateManyWithWhereWithoutAdminInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutAdminInput>
  }

  export type ProofsOfPaymentUpsertWithWhereUniqueWithoutAdminInput = {
    where: ProofsOfPaymentWhereUniqueInput
    update: XOR<ProofsOfPaymentUpdateWithoutAdminInput, ProofsOfPaymentUncheckedUpdateWithoutAdminInput>
    create: XOR<ProofsOfPaymentCreateWithoutAdminInput, ProofsOfPaymentUncheckedCreateWithoutAdminInput>
  }

  export type ProofsOfPaymentUpdateWithWhereUniqueWithoutAdminInput = {
    where: ProofsOfPaymentWhereUniqueInput
    data: XOR<ProofsOfPaymentUpdateWithoutAdminInput, ProofsOfPaymentUncheckedUpdateWithoutAdminInput>
  }

  export type ProofsOfPaymentUpdateManyWithWhereWithoutAdminInput = {
    where: ProofsOfPaymentScalarWhereInput
    data: XOR<ProofsOfPaymentUpdateManyMutationInput, ProofsOfPaymentUncheckedUpdateManyWithoutAdminInput>
  }

  export type ProofsOfPaymentScalarWhereInput = {
    AND?: ProofsOfPaymentScalarWhereInput | ProofsOfPaymentScalarWhereInput[]
    OR?: ProofsOfPaymentScalarWhereInput[]
    NOT?: ProofsOfPaymentScalarWhereInput | ProofsOfPaymentScalarWhereInput[]
    proof_of_payment_id?: IntFilter<"ProofsOfPayment"> | number
    order_id?: IntFilter<"ProofsOfPayment"> | number
    image?: StringFilter<"ProofsOfPayment"> | string
    payment_status?: BoolFilter<"ProofsOfPayment"> | boolean
    promo_usage_updated?: BoolFilter<"ProofsOfPayment"> | boolean
    admin_id?: IntNullableFilter<"ProofsOfPayment"> | number | null
  }

  export type WarehouseUpsertWithWhereUniqueWithoutAdminInput = {
    where: WarehouseWhereUniqueInput
    update: XOR<WarehouseUpdateWithoutAdminInput, WarehouseUncheckedUpdateWithoutAdminInput>
    create: XOR<WarehouseCreateWithoutAdminInput, WarehouseUncheckedCreateWithoutAdminInput>
  }

  export type WarehouseUpdateWithWhereUniqueWithoutAdminInput = {
    where: WarehouseWhereUniqueInput
    data: XOR<WarehouseUpdateWithoutAdminInput, WarehouseUncheckedUpdateWithoutAdminInput>
  }

  export type WarehouseUpdateManyWithWhereWithoutAdminInput = {
    where: WarehouseScalarWhereInput
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyWithoutAdminInput>
  }

  export type WarehouseScalarWhereInput = {
    AND?: WarehouseScalarWhereInput | WarehouseScalarWhereInput[]
    OR?: WarehouseScalarWhereInput[]
    NOT?: WarehouseScalarWhereInput | WarehouseScalarWhereInput[]
    warehouse_id?: IntFilter<"Warehouse"> | number
    province_id?: IntFilter<"Warehouse"> | number
    province_name?: StringFilter<"Warehouse"> | string
    city_id?: IntFilter<"Warehouse"> | number
    city_name?: StringFilter<"Warehouse"> | string
    postal_code?: IntFilter<"Warehouse"> | number
    admin_id?: IntFilter<"Warehouse"> | number
    created_at?: DateTimeFilter<"Warehouse"> | Date | string
    updated_at?: DateTimeFilter<"Warehouse"> | Date | string
  }

  export type AdminCreateWithoutPromotionInput = {
    username: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    Orders?: OrdersCreateNestedManyWithoutAdminInput
    ProofsOfPayment?: ProofsOfPaymentCreateNestedManyWithoutAdminInput
    Warehouse?: WarehouseCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutPromotionInput = {
    admin_id?: number
    username: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    Orders?: OrdersUncheckedCreateNestedManyWithoutAdminInput
    ProofsOfPayment?: ProofsOfPaymentUncheckedCreateNestedManyWithoutAdminInput
    Warehouse?: WarehouseUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutPromotionInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutPromotionInput, AdminUncheckedCreateWithoutPromotionInput>
  }

  export type ProductCreateWithoutPromotionsInput = {
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    is_available: boolean
    image: string
    weight: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    warehouse: WarehouseCreateNestedOneWithoutProductsInput
    order_items?: OrderItemCreateNestedManyWithoutProductInput
    ShoppingCart?: ShoppingCartCreateNestedManyWithoutProductInput
    ShoppingCartItem?: ShoppingCartItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPromotionsInput = {
    product_id?: number
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    is_available: boolean
    category_id: number
    warehouse_id: number
    image: string
    weight: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    ShoppingCart?: ShoppingCartUncheckedCreateNestedManyWithoutProductInput
    ShoppingCartItem?: ShoppingCartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPromotionsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPromotionsInput, ProductUncheckedCreateWithoutPromotionsInput>
  }

  export type UserPromoUsageCreateWithoutPromoInput = {
    usage_count: number
    user: UserCreateNestedOneWithoutUser_promo_usagesInput
    order?: OrdersCreateNestedOneWithoutUserPromoUsageInput
  }

  export type UserPromoUsageUncheckedCreateWithoutPromoInput = {
    user_promo_usage_id?: number
    user_id: number
    usage_count: number
    order_id?: number | null
  }

  export type UserPromoUsageCreateOrConnectWithoutPromoInput = {
    where: UserPromoUsageWhereUniqueInput
    create: XOR<UserPromoUsageCreateWithoutPromoInput, UserPromoUsageUncheckedCreateWithoutPromoInput>
  }

  export type UserPromoUsageCreateManyPromoInputEnvelope = {
    data: UserPromoUsageCreateManyPromoInput | UserPromoUsageCreateManyPromoInput[]
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithoutPromotionInput = {
    update: XOR<AdminUpdateWithoutPromotionInput, AdminUncheckedUpdateWithoutPromotionInput>
    create: XOR<AdminCreateWithoutPromotionInput, AdminUncheckedCreateWithoutPromotionInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutPromotionInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutPromotionInput, AdminUncheckedUpdateWithoutPromotionInput>
  }

  export type AdminUpdateWithoutPromotionInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Orders?: OrdersUpdateManyWithoutAdminNestedInput
    ProofsOfPayment?: ProofsOfPaymentUpdateManyWithoutAdminNestedInput
    Warehouse?: WarehouseUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutPromotionInput = {
    admin_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Orders?: OrdersUncheckedUpdateManyWithoutAdminNestedInput
    ProofsOfPayment?: ProofsOfPaymentUncheckedUpdateManyWithoutAdminNestedInput
    Warehouse?: WarehouseUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ProductUpsertWithoutPromotionsInput = {
    update: XOR<ProductUpdateWithoutPromotionsInput, ProductUncheckedUpdateWithoutPromotionsInput>
    create: XOR<ProductCreateWithoutPromotionsInput, ProductUncheckedCreateWithoutPromotionsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPromotionsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPromotionsInput, ProductUncheckedUpdateWithoutPromotionsInput>
  }

  export type ProductUpdateWithoutPromotionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutProductsNestedInput
    order_items?: OrderItemUpdateManyWithoutProductNestedInput
    ShoppingCart?: ShoppingCartUpdateManyWithoutProductNestedInput
    ShoppingCartItem?: ShoppingCartItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPromotionsInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    category_id?: IntFieldUpdateOperationsInput | number
    warehouse_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    ShoppingCart?: ShoppingCartUncheckedUpdateManyWithoutProductNestedInput
    ShoppingCartItem?: ShoppingCartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserPromoUsageUpsertWithWhereUniqueWithoutPromoInput = {
    where: UserPromoUsageWhereUniqueInput
    update: XOR<UserPromoUsageUpdateWithoutPromoInput, UserPromoUsageUncheckedUpdateWithoutPromoInput>
    create: XOR<UserPromoUsageCreateWithoutPromoInput, UserPromoUsageUncheckedCreateWithoutPromoInput>
  }

  export type UserPromoUsageUpdateWithWhereUniqueWithoutPromoInput = {
    where: UserPromoUsageWhereUniqueInput
    data: XOR<UserPromoUsageUpdateWithoutPromoInput, UserPromoUsageUncheckedUpdateWithoutPromoInput>
  }

  export type UserPromoUsageUpdateManyWithWhereWithoutPromoInput = {
    where: UserPromoUsageScalarWhereInput
    data: XOR<UserPromoUsageUpdateManyMutationInput, UserPromoUsageUncheckedUpdateManyWithoutPromoInput>
  }

  export type UserCreateWithoutUser_promo_usagesInput = {
    full_name: string
    password: string
    email: string
    affiliate_code: string
    affiliate_usage: boolean
    created_at?: Date | string
    updated_at?: Date | string
    shopping_carts?: ShoppingCartCreateNestedManyWithoutUserInput
    orders?: OrdersCreateNestedManyWithoutUserInput
    affiliate_discounts?: AffiliateDiscountCreateNestedManyWithoutUserInput
    user_addresses?: UserAddressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser_promo_usagesInput = {
    user_id?: number
    full_name: string
    password: string
    email: string
    affiliate_code: string
    affiliate_usage: boolean
    created_at?: Date | string
    updated_at?: Date | string
    shopping_carts?: ShoppingCartUncheckedCreateNestedManyWithoutUserInput
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    affiliate_discounts?: AffiliateDiscountUncheckedCreateNestedManyWithoutUserInput
    user_addresses?: UserAddressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser_promo_usagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_promo_usagesInput, UserUncheckedCreateWithoutUser_promo_usagesInput>
  }

  export type PromotionCreateWithoutUserPromoUsageInput = {
    type: string
    maximum_usage: number
    amount: Decimal | DecimalJsLike | number | string
    remaining_usage: number
    promo_code?: string | null
    admin: AdminCreateNestedOneWithoutPromotionInput
    product?: ProductCreateNestedOneWithoutPromotionsInput
  }

  export type PromotionUncheckedCreateWithoutUserPromoUsageInput = {
    promo_id?: number
    type: string
    maximum_usage: number
    amount: Decimal | DecimalJsLike | number | string
    remaining_usage: number
    admin_id: number
    product_id?: number | null
    promo_code?: string | null
  }

  export type PromotionCreateOrConnectWithoutUserPromoUsageInput = {
    where: PromotionWhereUniqueInput
    create: XOR<PromotionCreateWithoutUserPromoUsageInput, PromotionUncheckedCreateWithoutUserPromoUsageInput>
  }

  export type OrdersCreateWithoutUserPromoUsageInput = {
    order_item_id?: number
    order_date: Date | string
    delivery_time: Date | string
    deliver_fee: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    payment_status: string
    order_status: string
    promo_code?: string | null
    promo_discount_amount?: Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: number
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    admin: AdminCreateNestedOneWithoutOrdersInput
    order_items?: OrderItemCreateNestedManyWithoutOrdersInput
    ProofsOfPayment?: ProofsOfPaymentCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutUserPromoUsageInput = {
    order_id?: number
    user_id: number
    order_item_id?: number
    order_date: Date | string
    delivery_time: Date | string
    deliver_fee: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    payment_status: string
    order_status: string
    admin_id: number
    promo_code?: string | null
    promo_discount_amount?: Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: number
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: OrderItemUncheckedCreateNestedManyWithoutOrdersInput
    ProofsOfPayment?: ProofsOfPaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutUserPromoUsageInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutUserPromoUsageInput, OrdersUncheckedCreateWithoutUserPromoUsageInput>
  }

  export type UserUpsertWithoutUser_promo_usagesInput = {
    update: XOR<UserUpdateWithoutUser_promo_usagesInput, UserUncheckedUpdateWithoutUser_promo_usagesInput>
    create: XOR<UserCreateWithoutUser_promo_usagesInput, UserUncheckedCreateWithoutUser_promo_usagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_promo_usagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_promo_usagesInput, UserUncheckedUpdateWithoutUser_promo_usagesInput>
  }

  export type UserUpdateWithoutUser_promo_usagesInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    affiliate_code?: StringFieldUpdateOperationsInput | string
    affiliate_usage?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shopping_carts?: ShoppingCartUpdateManyWithoutUserNestedInput
    orders?: OrdersUpdateManyWithoutUserNestedInput
    affiliate_discounts?: AffiliateDiscountUpdateManyWithoutUserNestedInput
    user_addresses?: UserAddressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_promo_usagesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    affiliate_code?: StringFieldUpdateOperationsInput | string
    affiliate_usage?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shopping_carts?: ShoppingCartUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    affiliate_discounts?: AffiliateDiscountUncheckedUpdateManyWithoutUserNestedInput
    user_addresses?: UserAddressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PromotionUpsertWithoutUserPromoUsageInput = {
    update: XOR<PromotionUpdateWithoutUserPromoUsageInput, PromotionUncheckedUpdateWithoutUserPromoUsageInput>
    create: XOR<PromotionCreateWithoutUserPromoUsageInput, PromotionUncheckedCreateWithoutUserPromoUsageInput>
    where?: PromotionWhereInput
  }

  export type PromotionUpdateToOneWithWhereWithoutUserPromoUsageInput = {
    where?: PromotionWhereInput
    data: XOR<PromotionUpdateWithoutUserPromoUsageInput, PromotionUncheckedUpdateWithoutUserPromoUsageInput>
  }

  export type PromotionUpdateWithoutUserPromoUsageInput = {
    type?: StringFieldUpdateOperationsInput | string
    maximum_usage?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remaining_usage?: IntFieldUpdateOperationsInput | number
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUpdateOneRequiredWithoutPromotionNestedInput
    product?: ProductUpdateOneWithoutPromotionsNestedInput
  }

  export type PromotionUncheckedUpdateWithoutUserPromoUsageInput = {
    promo_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    maximum_usage?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remaining_usage?: IntFieldUpdateOperationsInput | number
    admin_id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrdersUpsertWithoutUserPromoUsageInput = {
    update: XOR<OrdersUpdateWithoutUserPromoUsageInput, OrdersUncheckedUpdateWithoutUserPromoUsageInput>
    create: XOR<OrdersCreateWithoutUserPromoUsageInput, OrdersUncheckedCreateWithoutUserPromoUsageInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutUserPromoUsageInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutUserPromoUsageInput, OrdersUncheckedUpdateWithoutUserPromoUsageInput>
  }

  export type OrdersUpdateWithoutUserPromoUsageInput = {
    order_item_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery_time?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: StringFieldUpdateOperationsInput | string
    order_status?: StringFieldUpdateOperationsInput | string
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    promo_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    admin?: AdminUpdateOneRequiredWithoutOrdersNestedInput
    order_items?: OrderItemUpdateManyWithoutOrdersNestedInput
    ProofsOfPayment?: ProofsOfPaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutUserPromoUsageInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    order_item_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery_time?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: StringFieldUpdateOperationsInput | string
    order_status?: StringFieldUpdateOperationsInput | string
    admin_id?: IntFieldUpdateOperationsInput | number
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    promo_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: OrderItemUncheckedUpdateManyWithoutOrdersNestedInput
    ProofsOfPayment?: ProofsOfPaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ShoppingCartCreateWithoutCart_itemsInput = {
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutShopping_cartsInput
    Product?: ProductCreateNestedOneWithoutShoppingCartInput
  }

  export type ShoppingCartUncheckedCreateWithoutCart_itemsInput = {
    cart_id?: number
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
    productProduct_id?: number | null
  }

  export type ShoppingCartCreateOrConnectWithoutCart_itemsInput = {
    where: ShoppingCartWhereUniqueInput
    create: XOR<ShoppingCartCreateWithoutCart_itemsInput, ShoppingCartUncheckedCreateWithoutCart_itemsInput>
  }

  export type ProductCreateWithoutShoppingCartItemInput = {
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    is_available: boolean
    image: string
    weight: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    warehouse: WarehouseCreateNestedOneWithoutProductsInput
    promotions?: PromotionCreateNestedManyWithoutProductInput
    order_items?: OrderItemCreateNestedManyWithoutProductInput
    ShoppingCart?: ShoppingCartCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutShoppingCartItemInput = {
    product_id?: number
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    is_available: boolean
    category_id: number
    warehouse_id: number
    image: string
    weight: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    promotions?: PromotionUncheckedCreateNestedManyWithoutProductInput
    order_items?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    ShoppingCart?: ShoppingCartUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutShoppingCartItemInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutShoppingCartItemInput, ProductUncheckedCreateWithoutShoppingCartItemInput>
  }

  export type ShoppingCartUpsertWithoutCart_itemsInput = {
    update: XOR<ShoppingCartUpdateWithoutCart_itemsInput, ShoppingCartUncheckedUpdateWithoutCart_itemsInput>
    create: XOR<ShoppingCartCreateWithoutCart_itemsInput, ShoppingCartUncheckedCreateWithoutCart_itemsInput>
    where?: ShoppingCartWhereInput
  }

  export type ShoppingCartUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: ShoppingCartWhereInput
    data: XOR<ShoppingCartUpdateWithoutCart_itemsInput, ShoppingCartUncheckedUpdateWithoutCart_itemsInput>
  }

  export type ShoppingCartUpdateWithoutCart_itemsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutShopping_cartsNestedInput
    Product?: ProductUpdateOneWithoutShoppingCartNestedInput
  }

  export type ShoppingCartUncheckedUpdateWithoutCart_itemsInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    productProduct_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductUpsertWithoutShoppingCartItemInput = {
    update: XOR<ProductUpdateWithoutShoppingCartItemInput, ProductUncheckedUpdateWithoutShoppingCartItemInput>
    create: XOR<ProductCreateWithoutShoppingCartItemInput, ProductUncheckedCreateWithoutShoppingCartItemInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutShoppingCartItemInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutShoppingCartItemInput, ProductUncheckedUpdateWithoutShoppingCartItemInput>
  }

  export type ProductUpdateWithoutShoppingCartItemInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutProductsNestedInput
    promotions?: PromotionUpdateManyWithoutProductNestedInput
    order_items?: OrderItemUpdateManyWithoutProductNestedInput
    ShoppingCart?: ShoppingCartUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutShoppingCartItemInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    category_id?: IntFieldUpdateOperationsInput | number
    warehouse_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    promotions?: PromotionUncheckedUpdateManyWithoutProductNestedInput
    order_items?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    ShoppingCart?: ShoppingCartUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutShopping_cartsInput = {
    full_name: string
    password: string
    email: string
    affiliate_code: string
    affiliate_usage: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_promo_usages?: UserPromoUsageCreateNestedManyWithoutUserInput
    orders?: OrdersCreateNestedManyWithoutUserInput
    affiliate_discounts?: AffiliateDiscountCreateNestedManyWithoutUserInput
    user_addresses?: UserAddressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShopping_cartsInput = {
    user_id?: number
    full_name: string
    password: string
    email: string
    affiliate_code: string
    affiliate_usage: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_promo_usages?: UserPromoUsageUncheckedCreateNestedManyWithoutUserInput
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    affiliate_discounts?: AffiliateDiscountUncheckedCreateNestedManyWithoutUserInput
    user_addresses?: UserAddressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShopping_cartsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShopping_cartsInput, UserUncheckedCreateWithoutShopping_cartsInput>
  }

  export type ShoppingCartItemCreateWithoutCartInput = {
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
    product: ProductCreateNestedOneWithoutShoppingCartItemInput
  }

  export type ShoppingCartItemUncheckedCreateWithoutCartInput = {
    cart_item_id?: number
    product_id: number
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ShoppingCartItemCreateOrConnectWithoutCartInput = {
    where: ShoppingCartItemWhereUniqueInput
    create: XOR<ShoppingCartItemCreateWithoutCartInput, ShoppingCartItemUncheckedCreateWithoutCartInput>
  }

  export type ShoppingCartItemCreateManyCartInputEnvelope = {
    data: ShoppingCartItemCreateManyCartInput | ShoppingCartItemCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutShoppingCartInput = {
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    is_available: boolean
    image: string
    weight: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    warehouse: WarehouseCreateNestedOneWithoutProductsInput
    promotions?: PromotionCreateNestedManyWithoutProductInput
    order_items?: OrderItemCreateNestedManyWithoutProductInput
    ShoppingCartItem?: ShoppingCartItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutShoppingCartInput = {
    product_id?: number
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    is_available: boolean
    category_id: number
    warehouse_id: number
    image: string
    weight: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    promotions?: PromotionUncheckedCreateNestedManyWithoutProductInput
    order_items?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    ShoppingCartItem?: ShoppingCartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutShoppingCartInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutShoppingCartInput, ProductUncheckedCreateWithoutShoppingCartInput>
  }

  export type UserUpsertWithoutShopping_cartsInput = {
    update: XOR<UserUpdateWithoutShopping_cartsInput, UserUncheckedUpdateWithoutShopping_cartsInput>
    create: XOR<UserCreateWithoutShopping_cartsInput, UserUncheckedCreateWithoutShopping_cartsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShopping_cartsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShopping_cartsInput, UserUncheckedUpdateWithoutShopping_cartsInput>
  }

  export type UserUpdateWithoutShopping_cartsInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    affiliate_code?: StringFieldUpdateOperationsInput | string
    affiliate_usage?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_promo_usages?: UserPromoUsageUpdateManyWithoutUserNestedInput
    orders?: OrdersUpdateManyWithoutUserNestedInput
    affiliate_discounts?: AffiliateDiscountUpdateManyWithoutUserNestedInput
    user_addresses?: UserAddressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShopping_cartsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    affiliate_code?: StringFieldUpdateOperationsInput | string
    affiliate_usage?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_promo_usages?: UserPromoUsageUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    affiliate_discounts?: AffiliateDiscountUncheckedUpdateManyWithoutUserNestedInput
    user_addresses?: UserAddressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShoppingCartItemUpsertWithWhereUniqueWithoutCartInput = {
    where: ShoppingCartItemWhereUniqueInput
    update: XOR<ShoppingCartItemUpdateWithoutCartInput, ShoppingCartItemUncheckedUpdateWithoutCartInput>
    create: XOR<ShoppingCartItemCreateWithoutCartInput, ShoppingCartItemUncheckedCreateWithoutCartInput>
  }

  export type ShoppingCartItemUpdateWithWhereUniqueWithoutCartInput = {
    where: ShoppingCartItemWhereUniqueInput
    data: XOR<ShoppingCartItemUpdateWithoutCartInput, ShoppingCartItemUncheckedUpdateWithoutCartInput>
  }

  export type ShoppingCartItemUpdateManyWithWhereWithoutCartInput = {
    where: ShoppingCartItemScalarWhereInput
    data: XOR<ShoppingCartItemUpdateManyMutationInput, ShoppingCartItemUncheckedUpdateManyWithoutCartInput>
  }

  export type ProductUpsertWithoutShoppingCartInput = {
    update: XOR<ProductUpdateWithoutShoppingCartInput, ProductUncheckedUpdateWithoutShoppingCartInput>
    create: XOR<ProductCreateWithoutShoppingCartInput, ProductUncheckedCreateWithoutShoppingCartInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutShoppingCartInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutShoppingCartInput, ProductUncheckedUpdateWithoutShoppingCartInput>
  }

  export type ProductUpdateWithoutShoppingCartInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutProductsNestedInput
    promotions?: PromotionUpdateManyWithoutProductNestedInput
    order_items?: OrderItemUpdateManyWithoutProductNestedInput
    ShoppingCartItem?: ShoppingCartItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutShoppingCartInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    category_id?: IntFieldUpdateOperationsInput | number
    warehouse_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    promotions?: PromotionUncheckedUpdateManyWithoutProductNestedInput
    order_items?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    ShoppingCartItem?: ShoppingCartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutOrdersInput = {
    full_name: string
    password: string
    email: string
    affiliate_code: string
    affiliate_usage: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_promo_usages?: UserPromoUsageCreateNestedManyWithoutUserInput
    shopping_carts?: ShoppingCartCreateNestedManyWithoutUserInput
    affiliate_discounts?: AffiliateDiscountCreateNestedManyWithoutUserInput
    user_addresses?: UserAddressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    user_id?: number
    full_name: string
    password: string
    email: string
    affiliate_code: string
    affiliate_usage: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_promo_usages?: UserPromoUsageUncheckedCreateNestedManyWithoutUserInput
    shopping_carts?: ShoppingCartUncheckedCreateNestedManyWithoutUserInput
    affiliate_discounts?: AffiliateDiscountUncheckedCreateNestedManyWithoutUserInput
    user_addresses?: UserAddressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type AdminCreateWithoutOrdersInput = {
    username: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    Promotion?: PromotionCreateNestedManyWithoutAdminInput
    ProofsOfPayment?: ProofsOfPaymentCreateNestedManyWithoutAdminInput
    Warehouse?: WarehouseCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutOrdersInput = {
    admin_id?: number
    username: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    Promotion?: PromotionUncheckedCreateNestedManyWithoutAdminInput
    ProofsOfPayment?: ProofsOfPaymentUncheckedCreateNestedManyWithoutAdminInput
    Warehouse?: WarehouseUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutOrdersInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutOrdersInput, AdminUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrdersInput = {
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    product: ProductCreateNestedOneWithoutOrder_itemsInput
  }

  export type OrderItemUncheckedCreateWithoutOrdersInput = {
    order_item_id?: number
    product_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutOrdersInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrdersInput, OrderItemUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateManyOrdersInputEnvelope = {
    data: OrderItemCreateManyOrdersInput | OrderItemCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type UserPromoUsageCreateWithoutOrderInput = {
    usage_count: number
    user: UserCreateNestedOneWithoutUser_promo_usagesInput
    promo: PromotionCreateNestedOneWithoutUserPromoUsageInput
  }

  export type UserPromoUsageUncheckedCreateWithoutOrderInput = {
    user_promo_usage_id?: number
    user_id: number
    promo_id: number
    usage_count: number
  }

  export type UserPromoUsageCreateOrConnectWithoutOrderInput = {
    where: UserPromoUsageWhereUniqueInput
    create: XOR<UserPromoUsageCreateWithoutOrderInput, UserPromoUsageUncheckedCreateWithoutOrderInput>
  }

  export type UserPromoUsageCreateManyOrderInputEnvelope = {
    data: UserPromoUsageCreateManyOrderInput | UserPromoUsageCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type ProofsOfPaymentCreateWithoutOrderInput = {
    image: string
    payment_status: boolean
    promo_usage_updated: boolean
    admin?: AdminCreateNestedOneWithoutProofsOfPaymentInput
  }

  export type ProofsOfPaymentUncheckedCreateWithoutOrderInput = {
    proof_of_payment_id?: number
    image: string
    payment_status: boolean
    promo_usage_updated: boolean
    admin_id?: number | null
  }

  export type ProofsOfPaymentCreateOrConnectWithoutOrderInput = {
    where: ProofsOfPaymentWhereUniqueInput
    create: XOR<ProofsOfPaymentCreateWithoutOrderInput, ProofsOfPaymentUncheckedCreateWithoutOrderInput>
  }

  export type ProofsOfPaymentCreateManyOrderInputEnvelope = {
    data: ProofsOfPaymentCreateManyOrderInput | ProofsOfPaymentCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    affiliate_code?: StringFieldUpdateOperationsInput | string
    affiliate_usage?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_promo_usages?: UserPromoUsageUpdateManyWithoutUserNestedInput
    shopping_carts?: ShoppingCartUpdateManyWithoutUserNestedInput
    affiliate_discounts?: AffiliateDiscountUpdateManyWithoutUserNestedInput
    user_addresses?: UserAddressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    affiliate_code?: StringFieldUpdateOperationsInput | string
    affiliate_usage?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_promo_usages?: UserPromoUsageUncheckedUpdateManyWithoutUserNestedInput
    shopping_carts?: ShoppingCartUncheckedUpdateManyWithoutUserNestedInput
    affiliate_discounts?: AffiliateDiscountUncheckedUpdateManyWithoutUserNestedInput
    user_addresses?: UserAddressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AdminUpsertWithoutOrdersInput = {
    update: XOR<AdminUpdateWithoutOrdersInput, AdminUncheckedUpdateWithoutOrdersInput>
    create: XOR<AdminCreateWithoutOrdersInput, AdminUncheckedCreateWithoutOrdersInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutOrdersInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutOrdersInput, AdminUncheckedUpdateWithoutOrdersInput>
  }

  export type AdminUpdateWithoutOrdersInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Promotion?: PromotionUpdateManyWithoutAdminNestedInput
    ProofsOfPayment?: ProofsOfPaymentUpdateManyWithoutAdminNestedInput
    Warehouse?: WarehouseUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutOrdersInput = {
    admin_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Promotion?: PromotionUncheckedUpdateManyWithoutAdminNestedInput
    ProofsOfPayment?: ProofsOfPaymentUncheckedUpdateManyWithoutAdminNestedInput
    Warehouse?: WarehouseUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrdersInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrdersInput, OrderItemUncheckedUpdateWithoutOrdersInput>
    create: XOR<OrderItemCreateWithoutOrdersInput, OrderItemUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrdersInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrdersInput, OrderItemUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrdersInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrdersInput>
  }

  export type UserPromoUsageUpsertWithWhereUniqueWithoutOrderInput = {
    where: UserPromoUsageWhereUniqueInput
    update: XOR<UserPromoUsageUpdateWithoutOrderInput, UserPromoUsageUncheckedUpdateWithoutOrderInput>
    create: XOR<UserPromoUsageCreateWithoutOrderInput, UserPromoUsageUncheckedCreateWithoutOrderInput>
  }

  export type UserPromoUsageUpdateWithWhereUniqueWithoutOrderInput = {
    where: UserPromoUsageWhereUniqueInput
    data: XOR<UserPromoUsageUpdateWithoutOrderInput, UserPromoUsageUncheckedUpdateWithoutOrderInput>
  }

  export type UserPromoUsageUpdateManyWithWhereWithoutOrderInput = {
    where: UserPromoUsageScalarWhereInput
    data: XOR<UserPromoUsageUpdateManyMutationInput, UserPromoUsageUncheckedUpdateManyWithoutOrderInput>
  }

  export type ProofsOfPaymentUpsertWithWhereUniqueWithoutOrderInput = {
    where: ProofsOfPaymentWhereUniqueInput
    update: XOR<ProofsOfPaymentUpdateWithoutOrderInput, ProofsOfPaymentUncheckedUpdateWithoutOrderInput>
    create: XOR<ProofsOfPaymentCreateWithoutOrderInput, ProofsOfPaymentUncheckedCreateWithoutOrderInput>
  }

  export type ProofsOfPaymentUpdateWithWhereUniqueWithoutOrderInput = {
    where: ProofsOfPaymentWhereUniqueInput
    data: XOR<ProofsOfPaymentUpdateWithoutOrderInput, ProofsOfPaymentUncheckedUpdateWithoutOrderInput>
  }

  export type ProofsOfPaymentUpdateManyWithWhereWithoutOrderInput = {
    where: ProofsOfPaymentScalarWhereInput
    data: XOR<ProofsOfPaymentUpdateManyMutationInput, ProofsOfPaymentUncheckedUpdateManyWithoutOrderInput>
  }

  export type ProductCreateWithoutOrder_itemsInput = {
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    is_available: boolean
    image: string
    weight: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    warehouse: WarehouseCreateNestedOneWithoutProductsInput
    promotions?: PromotionCreateNestedManyWithoutProductInput
    ShoppingCart?: ShoppingCartCreateNestedManyWithoutProductInput
    ShoppingCartItem?: ShoppingCartItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrder_itemsInput = {
    product_id?: number
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    is_available: boolean
    category_id: number
    warehouse_id: number
    image: string
    weight: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    promotions?: PromotionUncheckedCreateNestedManyWithoutProductInput
    ShoppingCart?: ShoppingCartUncheckedCreateNestedManyWithoutProductInput
    ShoppingCartItem?: ShoppingCartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrder_itemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrder_itemsInput, ProductUncheckedCreateWithoutOrder_itemsInput>
  }

  export type OrdersCreateWithoutOrder_itemsInput = {
    order_item_id?: number
    order_date: Date | string
    delivery_time: Date | string
    deliver_fee: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    payment_status: string
    order_status: string
    promo_code?: string | null
    promo_discount_amount?: Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: number
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    admin: AdminCreateNestedOneWithoutOrdersInput
    UserPromoUsage?: UserPromoUsageCreateNestedManyWithoutOrderInput
    ProofsOfPayment?: ProofsOfPaymentCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutOrder_itemsInput = {
    order_id?: number
    user_id: number
    order_item_id?: number
    order_date: Date | string
    delivery_time: Date | string
    deliver_fee: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    payment_status: string
    order_status: string
    admin_id: number
    promo_code?: string | null
    promo_discount_amount?: Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: number
    created_at?: Date | string
    updated_at?: Date | string
    UserPromoUsage?: UserPromoUsageUncheckedCreateNestedManyWithoutOrderInput
    ProofsOfPayment?: ProofsOfPaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutOrder_itemsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutOrder_itemsInput, OrdersUncheckedCreateWithoutOrder_itemsInput>
  }

  export type ProductUpsertWithoutOrder_itemsInput = {
    update: XOR<ProductUpdateWithoutOrder_itemsInput, ProductUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<ProductCreateWithoutOrder_itemsInput, ProductUncheckedCreateWithoutOrder_itemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrder_itemsInput, ProductUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type ProductUpdateWithoutOrder_itemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutProductsNestedInput
    promotions?: PromotionUpdateManyWithoutProductNestedInput
    ShoppingCart?: ShoppingCartUpdateManyWithoutProductNestedInput
    ShoppingCartItem?: ShoppingCartItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrder_itemsInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    category_id?: IntFieldUpdateOperationsInput | number
    warehouse_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    promotions?: PromotionUncheckedUpdateManyWithoutProductNestedInput
    ShoppingCart?: ShoppingCartUncheckedUpdateManyWithoutProductNestedInput
    ShoppingCartItem?: ShoppingCartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type OrdersUpsertWithoutOrder_itemsInput = {
    update: XOR<OrdersUpdateWithoutOrder_itemsInput, OrdersUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<OrdersCreateWithoutOrder_itemsInput, OrdersUncheckedCreateWithoutOrder_itemsInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutOrder_itemsInput, OrdersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type OrdersUpdateWithoutOrder_itemsInput = {
    order_item_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery_time?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: StringFieldUpdateOperationsInput | string
    order_status?: StringFieldUpdateOperationsInput | string
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    promo_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    admin?: AdminUpdateOneRequiredWithoutOrdersNestedInput
    UserPromoUsage?: UserPromoUsageUpdateManyWithoutOrderNestedInput
    ProofsOfPayment?: ProofsOfPaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutOrder_itemsInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    order_item_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery_time?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: StringFieldUpdateOperationsInput | string
    order_status?: StringFieldUpdateOperationsInput | string
    admin_id?: IntFieldUpdateOperationsInput | number
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    promo_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    UserPromoUsage?: UserPromoUsageUncheckedUpdateManyWithoutOrderNestedInput
    ProofsOfPayment?: ProofsOfPaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersCreateWithoutProofsOfPaymentInput = {
    order_item_id?: number
    order_date: Date | string
    delivery_time: Date | string
    deliver_fee: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    payment_status: string
    order_status: string
    promo_code?: string | null
    promo_discount_amount?: Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: number
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    admin: AdminCreateNestedOneWithoutOrdersInput
    order_items?: OrderItemCreateNestedManyWithoutOrdersInput
    UserPromoUsage?: UserPromoUsageCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutProofsOfPaymentInput = {
    order_id?: number
    user_id: number
    order_item_id?: number
    order_date: Date | string
    delivery_time: Date | string
    deliver_fee: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    payment_status: string
    order_status: string
    admin_id: number
    promo_code?: string | null
    promo_discount_amount?: Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: number
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: OrderItemUncheckedCreateNestedManyWithoutOrdersInput
    UserPromoUsage?: UserPromoUsageUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutProofsOfPaymentInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutProofsOfPaymentInput, OrdersUncheckedCreateWithoutProofsOfPaymentInput>
  }

  export type AdminCreateWithoutProofsOfPaymentInput = {
    username: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    Promotion?: PromotionCreateNestedManyWithoutAdminInput
    Orders?: OrdersCreateNestedManyWithoutAdminInput
    Warehouse?: WarehouseCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutProofsOfPaymentInput = {
    admin_id?: number
    username: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    Promotion?: PromotionUncheckedCreateNestedManyWithoutAdminInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutAdminInput
    Warehouse?: WarehouseUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutProofsOfPaymentInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutProofsOfPaymentInput, AdminUncheckedCreateWithoutProofsOfPaymentInput>
  }

  export type OrdersUpsertWithoutProofsOfPaymentInput = {
    update: XOR<OrdersUpdateWithoutProofsOfPaymentInput, OrdersUncheckedUpdateWithoutProofsOfPaymentInput>
    create: XOR<OrdersCreateWithoutProofsOfPaymentInput, OrdersUncheckedCreateWithoutProofsOfPaymentInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutProofsOfPaymentInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutProofsOfPaymentInput, OrdersUncheckedUpdateWithoutProofsOfPaymentInput>
  }

  export type OrdersUpdateWithoutProofsOfPaymentInput = {
    order_item_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery_time?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: StringFieldUpdateOperationsInput | string
    order_status?: StringFieldUpdateOperationsInput | string
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    promo_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    admin?: AdminUpdateOneRequiredWithoutOrdersNestedInput
    order_items?: OrderItemUpdateManyWithoutOrdersNestedInput
    UserPromoUsage?: UserPromoUsageUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutProofsOfPaymentInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    order_item_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery_time?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: StringFieldUpdateOperationsInput | string
    order_status?: StringFieldUpdateOperationsInput | string
    admin_id?: IntFieldUpdateOperationsInput | number
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    promo_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: OrderItemUncheckedUpdateManyWithoutOrdersNestedInput
    UserPromoUsage?: UserPromoUsageUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type AdminUpsertWithoutProofsOfPaymentInput = {
    update: XOR<AdminUpdateWithoutProofsOfPaymentInput, AdminUncheckedUpdateWithoutProofsOfPaymentInput>
    create: XOR<AdminCreateWithoutProofsOfPaymentInput, AdminUncheckedCreateWithoutProofsOfPaymentInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutProofsOfPaymentInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutProofsOfPaymentInput, AdminUncheckedUpdateWithoutProofsOfPaymentInput>
  }

  export type AdminUpdateWithoutProofsOfPaymentInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Promotion?: PromotionUpdateManyWithoutAdminNestedInput
    Orders?: OrdersUpdateManyWithoutAdminNestedInput
    Warehouse?: WarehouseUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutProofsOfPaymentInput = {
    admin_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Promotion?: PromotionUncheckedUpdateManyWithoutAdminNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutAdminNestedInput
    Warehouse?: WarehouseUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateWithoutWarehouseInput = {
    username: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    Promotion?: PromotionCreateNestedManyWithoutAdminInput
    Orders?: OrdersCreateNestedManyWithoutAdminInput
    ProofsOfPayment?: ProofsOfPaymentCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutWarehouseInput = {
    admin_id?: number
    username: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    Promotion?: PromotionUncheckedCreateNestedManyWithoutAdminInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutAdminInput
    ProofsOfPayment?: ProofsOfPaymentUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutWarehouseInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutWarehouseInput, AdminUncheckedCreateWithoutWarehouseInput>
  }

  export type ProductCreateWithoutWarehouseInput = {
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    is_available: boolean
    image: string
    weight: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    promotions?: PromotionCreateNestedManyWithoutProductInput
    order_items?: OrderItemCreateNestedManyWithoutProductInput
    ShoppingCart?: ShoppingCartCreateNestedManyWithoutProductInput
    ShoppingCartItem?: ShoppingCartItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutWarehouseInput = {
    product_id?: number
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    is_available: boolean
    category_id: number
    image: string
    weight: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    promotions?: PromotionUncheckedCreateNestedManyWithoutProductInput
    order_items?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    ShoppingCart?: ShoppingCartUncheckedCreateNestedManyWithoutProductInput
    ShoppingCartItem?: ShoppingCartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutWarehouseInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutWarehouseInput, ProductUncheckedCreateWithoutWarehouseInput>
  }

  export type ProductCreateManyWarehouseInputEnvelope = {
    data: ProductCreateManyWarehouseInput | ProductCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithoutWarehouseInput = {
    update: XOR<AdminUpdateWithoutWarehouseInput, AdminUncheckedUpdateWithoutWarehouseInput>
    create: XOR<AdminCreateWithoutWarehouseInput, AdminUncheckedCreateWithoutWarehouseInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutWarehouseInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutWarehouseInput, AdminUncheckedUpdateWithoutWarehouseInput>
  }

  export type AdminUpdateWithoutWarehouseInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Promotion?: PromotionUpdateManyWithoutAdminNestedInput
    Orders?: OrdersUpdateManyWithoutAdminNestedInput
    ProofsOfPayment?: ProofsOfPaymentUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutWarehouseInput = {
    admin_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Promotion?: PromotionUncheckedUpdateManyWithoutAdminNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutAdminNestedInput
    ProofsOfPayment?: ProofsOfPaymentUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutWarehouseInput, ProductUncheckedUpdateWithoutWarehouseInput>
    create: XOR<ProductCreateWithoutWarehouseInput, ProductUncheckedCreateWithoutWarehouseInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutWarehouseInput, ProductUncheckedUpdateWithoutWarehouseInput>
  }

  export type ProductUpdateManyWithWhereWithoutWarehouseInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type UserCreateWithoutUser_addressesInput = {
    full_name: string
    password: string
    email: string
    affiliate_code: string
    affiliate_usage: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_promo_usages?: UserPromoUsageCreateNestedManyWithoutUserInput
    shopping_carts?: ShoppingCartCreateNestedManyWithoutUserInput
    orders?: OrdersCreateNestedManyWithoutUserInput
    affiliate_discounts?: AffiliateDiscountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser_addressesInput = {
    user_id?: number
    full_name: string
    password: string
    email: string
    affiliate_code: string
    affiliate_usage: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_promo_usages?: UserPromoUsageUncheckedCreateNestedManyWithoutUserInput
    shopping_carts?: ShoppingCartUncheckedCreateNestedManyWithoutUserInput
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    affiliate_discounts?: AffiliateDiscountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser_addressesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_addressesInput, UserUncheckedCreateWithoutUser_addressesInput>
  }

  export type UserUpsertWithoutUser_addressesInput = {
    update: XOR<UserUpdateWithoutUser_addressesInput, UserUncheckedUpdateWithoutUser_addressesInput>
    create: XOR<UserCreateWithoutUser_addressesInput, UserUncheckedCreateWithoutUser_addressesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_addressesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_addressesInput, UserUncheckedUpdateWithoutUser_addressesInput>
  }

  export type UserUpdateWithoutUser_addressesInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    affiliate_code?: StringFieldUpdateOperationsInput | string
    affiliate_usage?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_promo_usages?: UserPromoUsageUpdateManyWithoutUserNestedInput
    shopping_carts?: ShoppingCartUpdateManyWithoutUserNestedInput
    orders?: OrdersUpdateManyWithoutUserNestedInput
    affiliate_discounts?: AffiliateDiscountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_addressesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    affiliate_code?: StringFieldUpdateOperationsInput | string
    affiliate_usage?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_promo_usages?: UserPromoUsageUncheckedUpdateManyWithoutUserNestedInput
    shopping_carts?: ShoppingCartUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    affiliate_discounts?: AffiliateDiscountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserPromoUsageCreateManyUserInput = {
    user_promo_usage_id?: number
    promo_id: number
    usage_count: number
    order_id?: number | null
  }

  export type ShoppingCartCreateManyUserInput = {
    cart_id?: number
    created_at?: Date | string
    updated_at?: Date | string
    productProduct_id?: number | null
  }

  export type OrdersCreateManyUserInput = {
    order_id?: number
    order_item_id?: number
    order_date: Date | string
    delivery_time: Date | string
    deliver_fee: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    payment_status: string
    order_status: string
    admin_id: number
    promo_code?: string | null
    promo_discount_amount?: Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AffiliateDiscountCreateManyUserInput = {
    affiliate_discount_id?: number
    discount_amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserAddressCreateManyUserInput = {
    user_address_id?: number
    province_id: number
    province_name: string
    city_id: number
    city_name: string
    postal_code: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserPromoUsageUpdateWithoutUserInput = {
    usage_count?: IntFieldUpdateOperationsInput | number
    promo?: PromotionUpdateOneRequiredWithoutUserPromoUsageNestedInput
    order?: OrdersUpdateOneWithoutUserPromoUsageNestedInput
  }

  export type UserPromoUsageUncheckedUpdateWithoutUserInput = {
    user_promo_usage_id?: IntFieldUpdateOperationsInput | number
    promo_id?: IntFieldUpdateOperationsInput | number
    usage_count?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserPromoUsageUncheckedUpdateManyWithoutUserInput = {
    user_promo_usage_id?: IntFieldUpdateOperationsInput | number
    promo_id?: IntFieldUpdateOperationsInput | number
    usage_count?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ShoppingCartUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: ShoppingCartItemUpdateManyWithoutCartNestedInput
    Product?: ProductUpdateOneWithoutShoppingCartNestedInput
  }

  export type ShoppingCartUncheckedUpdateWithoutUserInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    productProduct_id?: NullableIntFieldUpdateOperationsInput | number | null
    cart_items?: ShoppingCartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type ShoppingCartUncheckedUpdateManyWithoutUserInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    productProduct_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrdersUpdateWithoutUserInput = {
    order_item_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery_time?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: StringFieldUpdateOperationsInput | string
    order_status?: StringFieldUpdateOperationsInput | string
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    promo_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutOrdersNestedInput
    order_items?: OrderItemUpdateManyWithoutOrdersNestedInput
    UserPromoUsage?: UserPromoUsageUpdateManyWithoutOrderNestedInput
    ProofsOfPayment?: ProofsOfPaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutUserInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    order_item_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery_time?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: StringFieldUpdateOperationsInput | string
    order_status?: StringFieldUpdateOperationsInput | string
    admin_id?: IntFieldUpdateOperationsInput | number
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    promo_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: OrderItemUncheckedUpdateManyWithoutOrdersNestedInput
    UserPromoUsage?: UserPromoUsageUncheckedUpdateManyWithoutOrderNestedInput
    ProofsOfPayment?: ProofsOfPaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutUserInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    order_item_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery_time?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: StringFieldUpdateOperationsInput | string
    order_status?: StringFieldUpdateOperationsInput | string
    admin_id?: IntFieldUpdateOperationsInput | number
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    promo_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateDiscountUpdateWithoutUserInput = {
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateDiscountUncheckedUpdateWithoutUserInput = {
    affiliate_discount_id?: IntFieldUpdateOperationsInput | number
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateDiscountUncheckedUpdateManyWithoutUserInput = {
    affiliate_discount_id?: IntFieldUpdateOperationsInput | number
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAddressUpdateWithoutUserInput = {
    province_id?: IntFieldUpdateOperationsInput | number
    province_name?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    city_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAddressUncheckedUpdateWithoutUserInput = {
    user_address_id?: IntFieldUpdateOperationsInput | number
    province_id?: IntFieldUpdateOperationsInput | number
    province_name?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    city_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAddressUncheckedUpdateManyWithoutUserInput = {
    user_address_id?: IntFieldUpdateOperationsInput | number
    province_id?: IntFieldUpdateOperationsInput | number
    province_name?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    city_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionCreateManyProductInput = {
    promo_id?: number
    type: string
    maximum_usage: number
    amount: Decimal | DecimalJsLike | number | string
    remaining_usage: number
    admin_id: number
    promo_code?: string | null
  }

  export type OrderItemCreateManyProductInput = {
    order_item_id?: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    ordersOrder_id?: number | null
  }

  export type ShoppingCartCreateManyProductInput = {
    cart_id?: number
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ShoppingCartItemCreateManyProductInput = {
    cart_item_id?: number
    cart_id: number
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PromotionUpdateWithoutProductInput = {
    type?: StringFieldUpdateOperationsInput | string
    maximum_usage?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remaining_usage?: IntFieldUpdateOperationsInput | number
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUpdateOneRequiredWithoutPromotionNestedInput
    UserPromoUsage?: UserPromoUsageUpdateManyWithoutPromoNestedInput
  }

  export type PromotionUncheckedUpdateWithoutProductInput = {
    promo_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    maximum_usage?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remaining_usage?: IntFieldUpdateOperationsInput | number
    admin_id?: IntFieldUpdateOperationsInput | number
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    UserPromoUsage?: UserPromoUsageUncheckedUpdateManyWithoutPromoNestedInput
  }

  export type PromotionUncheckedUpdateManyWithoutProductInput = {
    promo_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    maximum_usage?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remaining_usage?: IntFieldUpdateOperationsInput | number
    admin_id?: IntFieldUpdateOperationsInput | number
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderItemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUpdateOneWithoutOrder_itemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutProductInput = {
    order_item_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ordersOrder_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderItemUncheckedUpdateManyWithoutProductInput = {
    order_item_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ordersOrder_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ShoppingCartUpdateWithoutProductInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutShopping_cartsNestedInput
    cart_items?: ShoppingCartItemUpdateManyWithoutCartNestedInput
  }

  export type ShoppingCartUncheckedUpdateWithoutProductInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: ShoppingCartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type ShoppingCartUncheckedUpdateManyWithoutProductInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingCartItemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: ShoppingCartUpdateOneRequiredWithoutCart_itemsNestedInput
  }

  export type ShoppingCartItemUncheckedUpdateWithoutProductInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingCartItemUncheckedUpdateManyWithoutProductInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCategoryInput = {
    product_id?: number
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    is_available: boolean
    warehouse_id: number
    image: string
    weight: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneRequiredWithoutProductsNestedInput
    promotions?: PromotionUpdateManyWithoutProductNestedInput
    order_items?: OrderItemUpdateManyWithoutProductNestedInput
    ShoppingCart?: ShoppingCartUpdateManyWithoutProductNestedInput
    ShoppingCartItem?: ShoppingCartItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    warehouse_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    promotions?: PromotionUncheckedUpdateManyWithoutProductNestedInput
    order_items?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    ShoppingCart?: ShoppingCartUncheckedUpdateManyWithoutProductNestedInput
    ShoppingCartItem?: ShoppingCartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    warehouse_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionCreateManyAdminInput = {
    promo_id?: number
    type: string
    maximum_usage: number
    amount: Decimal | DecimalJsLike | number | string
    remaining_usage: number
    product_id?: number | null
    promo_code?: string | null
  }

  export type OrdersCreateManyAdminInput = {
    order_id?: number
    user_id: number
    order_item_id?: number
    order_date: Date | string
    delivery_time: Date | string
    deliver_fee: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    payment_status: string
    order_status: string
    promo_code?: string | null
    promo_discount_amount?: Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProofsOfPaymentCreateManyAdminInput = {
    proof_of_payment_id?: number
    order_id: number
    image: string
    payment_status: boolean
    promo_usage_updated: boolean
  }

  export type WarehouseCreateManyAdminInput = {
    warehouse_id?: number
    province_id: number
    province_name: string
    city_id: number
    city_name: string
    postal_code: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PromotionUpdateWithoutAdminInput = {
    type?: StringFieldUpdateOperationsInput | string
    maximum_usage?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remaining_usage?: IntFieldUpdateOperationsInput | number
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneWithoutPromotionsNestedInput
    UserPromoUsage?: UserPromoUsageUpdateManyWithoutPromoNestedInput
  }

  export type PromotionUncheckedUpdateWithoutAdminInput = {
    promo_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    maximum_usage?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remaining_usage?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    UserPromoUsage?: UserPromoUsageUncheckedUpdateManyWithoutPromoNestedInput
  }

  export type PromotionUncheckedUpdateManyWithoutAdminInput = {
    promo_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    maximum_usage?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remaining_usage?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrdersUpdateWithoutAdminInput = {
    order_item_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery_time?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: StringFieldUpdateOperationsInput | string
    order_status?: StringFieldUpdateOperationsInput | string
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    promo_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    order_items?: OrderItemUpdateManyWithoutOrdersNestedInput
    UserPromoUsage?: UserPromoUsageUpdateManyWithoutOrderNestedInput
    ProofsOfPayment?: ProofsOfPaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutAdminInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    order_item_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery_time?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: StringFieldUpdateOperationsInput | string
    order_status?: StringFieldUpdateOperationsInput | string
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    promo_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: OrderItemUncheckedUpdateManyWithoutOrdersNestedInput
    UserPromoUsage?: UserPromoUsageUncheckedUpdateManyWithoutOrderNestedInput
    ProofsOfPayment?: ProofsOfPaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutAdminInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    order_item_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery_time?: DateTimeFieldUpdateOperationsInput | Date | string
    deliver_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: StringFieldUpdateOperationsInput | string
    order_status?: StringFieldUpdateOperationsInput | string
    promo_code?: NullableStringFieldUpdateOperationsInput | string | null
    promo_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    affiliate_discount_amount?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProofsOfPaymentUpdateWithoutAdminInput = {
    image?: StringFieldUpdateOperationsInput | string
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    promo_usage_updated?: BoolFieldUpdateOperationsInput | boolean
    order?: OrdersUpdateOneRequiredWithoutProofsOfPaymentNestedInput
  }

  export type ProofsOfPaymentUncheckedUpdateWithoutAdminInput = {
    proof_of_payment_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    promo_usage_updated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProofsOfPaymentUncheckedUpdateManyWithoutAdminInput = {
    proof_of_payment_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    promo_usage_updated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WarehouseUpdateWithoutAdminInput = {
    province_id?: IntFieldUpdateOperationsInput | number
    province_name?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    city_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutAdminInput = {
    warehouse_id?: IntFieldUpdateOperationsInput | number
    province_id?: IntFieldUpdateOperationsInput | number
    province_name?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    city_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateManyWithoutAdminInput = {
    warehouse_id?: IntFieldUpdateOperationsInput | number
    province_id?: IntFieldUpdateOperationsInput | number
    province_name?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    city_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPromoUsageCreateManyPromoInput = {
    user_promo_usage_id?: number
    user_id: number
    usage_count: number
    order_id?: number | null
  }

  export type UserPromoUsageUpdateWithoutPromoInput = {
    usage_count?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutUser_promo_usagesNestedInput
    order?: OrdersUpdateOneWithoutUserPromoUsageNestedInput
  }

  export type UserPromoUsageUncheckedUpdateWithoutPromoInput = {
    user_promo_usage_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    usage_count?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserPromoUsageUncheckedUpdateManyWithoutPromoInput = {
    user_promo_usage_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    usage_count?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ShoppingCartItemCreateManyCartInput = {
    cart_item_id?: number
    product_id: number
    quantity: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ShoppingCartItemUpdateWithoutCartInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutShoppingCartItemNestedInput
  }

  export type ShoppingCartItemUncheckedUpdateWithoutCartInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingCartItemUncheckedUpdateManyWithoutCartInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyOrdersInput = {
    order_item_id?: number
    product_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserPromoUsageCreateManyOrderInput = {
    user_promo_usage_id?: number
    user_id: number
    promo_id: number
    usage_count: number
  }

  export type ProofsOfPaymentCreateManyOrderInput = {
    proof_of_payment_id?: number
    image: string
    payment_status: boolean
    promo_usage_updated: boolean
    admin_id?: number | null
  }

  export type OrderItemUpdateWithoutOrdersInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrdersInput = {
    order_item_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutOrdersInput = {
    order_item_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPromoUsageUpdateWithoutOrderInput = {
    usage_count?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutUser_promo_usagesNestedInput
    promo?: PromotionUpdateOneRequiredWithoutUserPromoUsageNestedInput
  }

  export type UserPromoUsageUncheckedUpdateWithoutOrderInput = {
    user_promo_usage_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    promo_id?: IntFieldUpdateOperationsInput | number
    usage_count?: IntFieldUpdateOperationsInput | number
  }

  export type UserPromoUsageUncheckedUpdateManyWithoutOrderInput = {
    user_promo_usage_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    promo_id?: IntFieldUpdateOperationsInput | number
    usage_count?: IntFieldUpdateOperationsInput | number
  }

  export type ProofsOfPaymentUpdateWithoutOrderInput = {
    image?: StringFieldUpdateOperationsInput | string
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    promo_usage_updated?: BoolFieldUpdateOperationsInput | boolean
    admin?: AdminUpdateOneWithoutProofsOfPaymentNestedInput
  }

  export type ProofsOfPaymentUncheckedUpdateWithoutOrderInput = {
    proof_of_payment_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    promo_usage_updated?: BoolFieldUpdateOperationsInput | boolean
    admin_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProofsOfPaymentUncheckedUpdateManyWithoutOrderInput = {
    proof_of_payment_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    promo_usage_updated?: BoolFieldUpdateOperationsInput | boolean
    admin_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductCreateManyWarehouseInput = {
    product_id?: number
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    is_available: boolean
    category_id: number
    image: string
    weight: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductUpdateWithoutWarehouseInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    promotions?: PromotionUpdateManyWithoutProductNestedInput
    order_items?: OrderItemUpdateManyWithoutProductNestedInput
    ShoppingCart?: ShoppingCartUpdateManyWithoutProductNestedInput
    ShoppingCartItem?: ShoppingCartItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutWarehouseInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    category_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    promotions?: PromotionUncheckedUpdateManyWithoutProductNestedInput
    order_items?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    ShoppingCart?: ShoppingCartUncheckedUpdateManyWithoutProductNestedInput
    ShoppingCartItem?: ShoppingCartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutWarehouseInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    category_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminCountOutputTypeDefaultArgs instead
     */
    export type AdminCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromotionCountOutputTypeDefaultArgs instead
     */
    export type PromotionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromotionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShoppingCartCountOutputTypeDefaultArgs instead
     */
    export type ShoppingCartCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShoppingCartCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrdersCountOutputTypeDefaultArgs instead
     */
    export type OrdersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrdersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WarehouseCountOutputTypeDefaultArgs instead
     */
    export type WarehouseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WarehouseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AffiliateDiscountDefaultArgs instead
     */
    export type AffiliateDiscountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AffiliateDiscountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromotionDefaultArgs instead
     */
    export type PromotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromotionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserPromoUsageDefaultArgs instead
     */
    export type UserPromoUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserPromoUsageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShoppingCartItemDefaultArgs instead
     */
    export type ShoppingCartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShoppingCartItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShoppingCartDefaultArgs instead
     */
    export type ShoppingCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShoppingCartDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrdersDefaultArgs instead
     */
    export type OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrdersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderItemDefaultArgs instead
     */
    export type OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProofsOfPaymentDefaultArgs instead
     */
    export type ProofsOfPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProofsOfPaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WarehouseDefaultArgs instead
     */
    export type WarehouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WarehouseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserAddressDefaultArgs instead
     */
    export type UserAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserAddressDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}