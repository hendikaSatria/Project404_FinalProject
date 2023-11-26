
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  user_id: 'user_id',
  full_name: 'full_name',
  password: 'password',
  email: 'email',
  affiliate_code: 'affiliate_code',
  billing_address: 'billing_address',
  affiliate_usage: 'affiliate_usage',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ProductScalarFieldEnum = {
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

exports.Prisma.AffiliateDiscountScalarFieldEnum = {
  affiliate_discount_id: 'affiliate_discount_id',
  user_id: 'user_id',
  discount_amount: 'discount_amount',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CategoryScalarFieldEnum = {
  category_id: 'category_id',
  category_name: 'category_name',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AdminScalarFieldEnum = {
  admin_id: 'admin_id',
  username: 'username',
  password: 'password',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.PromotionScalarFieldEnum = {
  promo_id: 'promo_id',
  type: 'type',
  maximum_usage: 'maximum_usage',
  amount: 'amount',
  remaining_usage: 'remaining_usage',
  admin_id: 'admin_id',
  product_id: 'product_id'
};

exports.Prisma.UserPromoUsageScalarFieldEnum = {
  user_promo_usage_id: 'user_promo_usage_id',
  user_id: 'user_id',
  promo_id: 'promo_id',
  usage_count: 'usage_count',
  order_id: 'order_id'
};

exports.Prisma.ShoppingCartScalarFieldEnum = {
  cart_id: 'cart_id',
  user_id: 'user_id',
  product_id: 'product_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.OrdersScalarFieldEnum = {
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
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.OrderItemScalarFieldEnum = {
  order_item_id: 'order_item_id',
  product_id: 'product_id',
  quantity: 'quantity',
  price: 'price',
  created_at: 'created_at',
  updated_at: 'updated_at',
  ordersOrder_id: 'ordersOrder_id'
};

exports.Prisma.ProofsOfPaymentScalarFieldEnum = {
  proof_of_payment_id: 'proof_of_payment_id',
  order_id: 'order_id',
  image: 'image',
  payment_status: 'payment_status',
  promo_usage_updated: 'promo_usage_updated',
  admin_id: 'admin_id'
};

exports.Prisma.WarehouseScalarFieldEnum = {
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

exports.Prisma.UserAddressScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  Product: 'Product',
  AffiliateDiscount: 'AffiliateDiscount',
  Category: 'Category',
  Admin: 'Admin',
  Promotion: 'Promotion',
  UserPromoUsage: 'UserPromoUsage',
  ShoppingCart: 'ShoppingCart',
  Orders: 'Orders',
  OrderItem: 'OrderItem',
  ProofsOfPayment: 'ProofsOfPayment',
  Warehouse: 'Warehouse',
  UserAddress: 'UserAddress'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
