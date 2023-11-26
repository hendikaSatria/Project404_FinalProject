
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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


  const path = require('path')

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\MSI GF63\\OneDrive\\Desktop\\FPFP\\Project404_FinalProject\\e-commerce\\backend\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../..",
  "clientVersion": "5.6.0",
  "engineVersion": "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": true,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": null,
        "value": "postgresql://postgres:postgres@localhost:5432/e-commerce"
      }
    }
  },
  "inlineSchema": "Ly8gc2NoZW1hLnByaXNtYQ0KDQpnZW5lcmF0b3IgY2xpZW50IHsNCiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyINCiAgb3V0cHV0ICAgPSAiLi9nZW5lcmF0ZWQvY2xpZW50Ig0KfQ0KDQpkYXRhc291cmNlIGRiIHsNCiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCINCiAgdXJsICAgICAgPSAicG9zdGdyZXNxbDovL3Bvc3RncmVzOnBvc3RncmVzQGxvY2FsaG9zdDo1NDMyL2UtY29tbWVyY2UiDQp9DQoNCi8vIFVzZXIgVGFibGUNCm1vZGVsIFVzZXIgew0KICB1c2VyX2lkICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgZnVsbF9uYW1lICAgICAgIFN0cmluZw0KICBwYXNzd29yZCAgICAgICAgU3RyaW5nDQogIGVtYWlsICAgICAgICAgICBTdHJpbmcNCiAgYWZmaWxpYXRlX2NvZGUgIFN0cmluZw0KICBiaWxsaW5nX2FkZHJlc3MgU3RyaW5nDQogIGFmZmlsaWF0ZV91c2FnZSBCb29sZWFuDQogIGNyZWF0ZWRfYXQgICAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCiAgdXBkYXRlZF9hdCAgICAgIERhdGVUaW1lIEB1cGRhdGVkQXQNCg0KICAvLyBSZWxhdGlvbnNoaXBzDQogIHVzZXJfcHJvbW9fdXNhZ2VzICAgVXNlclByb21vVXNhZ2VbXQ0KICBzaG9wcGluZ19jYXJ0cyAgICAgIFNob3BwaW5nQ2FydFtdDQogIG9yZGVycyAgICAgICAgICAgICAgT3JkZXJzW10NCiAgYWZmaWxpYXRlX2Rpc2NvdW50cyBBZmZpbGlhdGVEaXNjb3VudFtdDQogIHVzZXJfYWRkcmVzc2VzICAgICAgVXNlckFkZHJlc3NbXQ0KfQ0KDQovLyBQcm9kdWN0cyBUYWJsZQ0KbW9kZWwgUHJvZHVjdCB7DQogIHByb2R1Y3RfaWQgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBuYW1lICAgICAgICAgU3RyaW5nDQogIGRlc2NyaXB0aW9uICBTdHJpbmcNCiAgcHJpY2UgICAgICAgIERlY2ltYWwNCiAgc3RvY2sgICAgICAgIEludA0KICBpc19hdmFpbGFibGUgQm9vbGVhbg0KICBjYXRlZ29yeV9pZCAgSW50DQogIHdhcmVob3VzZV9pZCBJbnQNCiAgaW1hZ2UgICAgICAgIFN0cmluZw0KICB3ZWlnaHQgICAgICAgRGVjaW1hbA0KICBjcmVhdGVkX2F0ICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpDQogIHVwZGF0ZWRfYXQgICBEYXRlVGltZSBAdXBkYXRlZEF0DQoNCiAgLy8gUmVsYXRpb25zaGlwcw0KICBjYXRlZ29yeSAgICAgQ2F0ZWdvcnkgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2NhdGVnb3J5X2lkXSwgcmVmZXJlbmNlczogW2NhdGVnb3J5X2lkXSkNCiAgd2FyZWhvdXNlICAgIFdhcmVob3VzZSAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt3YXJlaG91c2VfaWRdLCByZWZlcmVuY2VzOiBbd2FyZWhvdXNlX2lkXSkNCiAgcHJvbW90aW9ucyAgIFByb21vdGlvbltdDQogIG9yZGVyX2l0ZW1zICBPcmRlckl0ZW1bXQ0KICBTaG9wcGluZ0NhcnQgU2hvcHBpbmdDYXJ0W10NCn0NCg0KLy8gQWZmaWxpYXRlRGlzY291bnQgTW9kZWwNCm1vZGVsIEFmZmlsaWF0ZURpc2NvdW50IHsNCiAgYWZmaWxpYXRlX2Rpc2NvdW50X2lkIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIHVzZXJfaWQgICAgICAgICAgICAgICBJbnQNCiAgZGlzY291bnRfYW1vdW50ICAgICAgIERlY2ltYWwNCiAgY3JlYXRlZF9hdCAgICAgICAgICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkX2F0ICAgICAgICAgICAgRGF0ZVRpbWUgQHVwZGF0ZWRBdA0KDQogIC8vIFJlbGF0aW9uc2hpcHMNCiAgdXNlciBVc2VyIEByZWxhdGlvbihmaWVsZHM6IFt1c2VyX2lkXSwgcmVmZXJlbmNlczogW3VzZXJfaWRdKQ0KfQ0KDQovLyBDYXRlZ29yeSBNb2RlbA0KbW9kZWwgQ2F0ZWdvcnkgew0KICBjYXRlZ29yeV9pZCAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGNhdGVnb3J5X25hbWUgU3RyaW5nDQogIGNyZWF0ZWRfYXQgICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpDQogIHVwZGF0ZWRfYXQgICAgRGF0ZVRpbWUgQHVwZGF0ZWRBdA0KDQogIC8vIFJlbGF0aW9uc2hpcHMNCiAgcHJvZHVjdHMgUHJvZHVjdFtdDQp9DQoNCi8vIEFkbWluIE1vZGVsDQptb2RlbCBBZG1pbiB7DQogIGFkbWluX2lkICAgICAgICBJbnQgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICB1c2VybmFtZSAgICAgICAgU3RyaW5nDQogIHBhc3N3b3JkICAgICAgICBTdHJpbmcNCiAgY3JlYXRlZF9hdCAgICAgIERhdGVUaW1lICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkX2F0ICAgICAgRGF0ZVRpbWUgICAgICAgICAgQHVwZGF0ZWRBdA0KICBQcm9tb3Rpb24gICAgICAgUHJvbW90aW9uW10NCiAgT3JkZXJzICAgICAgICAgIE9yZGVyc1tdDQogIFByb29mc09mUGF5bWVudCBQcm9vZnNPZlBheW1lbnRbXQ0KICBXYXJlaG91c2UgICAgICAgV2FyZWhvdXNlW10NCn0NCg0KLy8gUHJvbW90aW9ucyBUYWJsZQ0KbW9kZWwgUHJvbW90aW9uIHsNCiAgcHJvbW9faWQgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgdHlwZSAgICAgICAgICAgIFN0cmluZw0KICBtYXhpbXVtX3VzYWdlICAgSW50DQogIGFtb3VudCAgICAgICAgICBEZWNpbWFsDQogIHJlbWFpbmluZ191c2FnZSBJbnQNCiAgYWRtaW5faWQgICAgICAgIEludA0KICBwcm9kdWN0X2lkICAgICAgSW50Pw0KDQogIC8vIFJlbGF0aW9uc2hpcHMNCiAgYWRtaW4gICAgICAgICAgQWRtaW4gICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbYWRtaW5faWRdLCByZWZlcmVuY2VzOiBbYWRtaW5faWRdKQ0KICBwcm9kdWN0ICAgICAgICBQcm9kdWN0PyAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtwcm9kdWN0X2lkXSwgcmVmZXJlbmNlczogW3Byb2R1Y3RfaWRdKQ0KICBVc2VyUHJvbW9Vc2FnZSBVc2VyUHJvbW9Vc2FnZVtdDQp9DQoNCi8vIFVzZXIgUHJvbW8gVXNhZ2UgVGFibGUNCm1vZGVsIFVzZXJQcm9tb1VzYWdlIHsNCiAgdXNlcl9wcm9tb191c2FnZV9pZCBJbnQgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIHVzZXJfaWQgICAgICAgICAgICAgSW50DQogIHByb21vX2lkICAgICAgICAgICAgSW50DQogIHVzYWdlX2NvdW50ICAgICAgICAgSW50DQogIG9yZGVyX2lkICAgICAgICAgICAgSW50Pw0KDQogIC8vIFJlbGF0aW9uc2hpcHMNCiAgdXNlciAgVXNlciAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VyX2lkXSwgcmVmZXJlbmNlczogW3VzZXJfaWRdKQ0KICBwcm9tbyBQcm9tb3Rpb24gQHJlbGF0aW9uKGZpZWxkczogW3Byb21vX2lkXSwgcmVmZXJlbmNlczogW3Byb21vX2lkXSkNCiAgb3JkZXIgT3JkZXJzPyAgIEByZWxhdGlvbihmaWVsZHM6IFtvcmRlcl9pZF0sIHJlZmVyZW5jZXM6IFtvcmRlcl9pZF0pDQp9DQoNCi8vIFNob3BwaW5nIENhcnQgVGFibGUNCm1vZGVsIFNob3BwaW5nQ2FydCB7DQogIGNhcnRfaWQgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgdXNlcl9pZCAgICBJbnQNCiAgcHJvZHVjdF9pZCBJbnQNCiAgY3JlYXRlZF9hdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCiAgdXBkYXRlZF9hdCBEYXRlVGltZSBAdXBkYXRlZEF0DQoNCiAgLy8gUmVsYXRpb25zaGlwcw0KICB1c2VyICAgIFVzZXIgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJfaWRdLCByZWZlcmVuY2VzOiBbdXNlcl9pZF0pDQogIHByb2R1Y3QgUHJvZHVjdCBAcmVsYXRpb24oZmllbGRzOiBbcHJvZHVjdF9pZF0sIHJlZmVyZW5jZXM6IFtwcm9kdWN0X2lkXSkNCn0NCg0KLy8gT3JkZXJzIFRhYmxlDQptb2RlbCBPcmRlcnMgew0KICBvcmRlcl9pZCAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICB1c2VyX2lkICAgICAgICBJbnQNCiAgb3JkZXJfaXRlbV9pZCAgSW50ICAgICAgIEBkZWZhdWx0KDEpDQogIG9yZGVyX2RhdGUgICAgIERhdGVUaW1lDQogIGRlbGl2ZXJ5X3RpbWUgIERhdGVUaW1lDQogIGRlbGl2ZXJfZmVlICAgIERlY2ltYWwNCiAgdG90YWxfcHJpY2UgICAgRGVjaW1hbA0KICBwYXltZW50X3N0YXR1cyBTdHJpbmcNCiAgb3JkZXJfc3RhdHVzICAgU3RyaW5nDQogIGFkbWluX2lkICAgICAgIEludA0KICBjcmVhdGVkX2F0ICAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCiAgdXBkYXRlZF9hdCAgICAgRGF0ZVRpbWUgQHVwZGF0ZWRBdCBAZGVmYXVsdChub3coKSkNCg0KICAvLyBSZWxhdGlvbnNoaXBzDQogIHVzZXIgICAgICAgICAgICBVc2VyICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcl9pZF0sIHJlZmVyZW5jZXM6IFt1c2VyX2lkXSkNCiAgYWRtaW4gICAgICAgICAgIEFkbWluICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFthZG1pbl9pZF0sIHJlZmVyZW5jZXM6IFthZG1pbl9pZF0pDQogIG9yZGVyX2l0ZW1zICAgICBPcmRlckl0ZW1bXQ0KICBVc2VyUHJvbW9Vc2FnZSAgVXNlclByb21vVXNhZ2VbXQ0KICBQcm9vZnNPZlBheW1lbnQgUHJvb2ZzT2ZQYXltZW50W10NCn0NCg0KLy8gT3JkZXIgSXRlbXMgVGFibGUNCm1vZGVsIE9yZGVySXRlbSB7DQogIG9yZGVyX2l0ZW1faWQgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgcHJvZHVjdF9pZCAgICBJbnQNCiAgcXVhbnRpdHkgICAgICBJbnQNCiAgcHJpY2UgICAgICAgICBEZWNpbWFsDQogIGNyZWF0ZWRfYXQgICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpDQogIHVwZGF0ZWRfYXQgICAgRGF0ZVRpbWUgQHVwZGF0ZWRBdA0KDQogIC8vIFJlbGF0aW9uc2hpcHMNCiAgcHJvZHVjdCAgICAgICAgUHJvZHVjdCBAcmVsYXRpb24oZmllbGRzOiBbcHJvZHVjdF9pZF0sIHJlZmVyZW5jZXM6IFtwcm9kdWN0X2lkXSkNCiAgb3JkZXJzICAgICAgICAgT3JkZXJzPyBAcmVsYXRpb24oZmllbGRzOiBbb3JkZXJzT3JkZXJfaWRdLCByZWZlcmVuY2VzOiBbb3JkZXJfaWRdKQ0KICBvcmRlcnNPcmRlcl9pZCBJbnQ/DQp9DQoNCi8vIFByb29mcyBvZiBQYXltZW50IFRhYmxlDQptb2RlbCBQcm9vZnNPZlBheW1lbnQgew0KICBwcm9vZl9vZl9wYXltZW50X2lkIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgb3JkZXJfaWQgICAgICAgICAgICBJbnQNCiAgaW1hZ2UgICAgICAgICAgICAgICBTdHJpbmcNCiAgcGF5bWVudF9zdGF0dXMgICAgICBCb29sZWFuDQogIHByb21vX3VzYWdlX3VwZGF0ZWQgQm9vbGVhbg0KICBhZG1pbl9pZCAgICAgICAgICAgIEludD8NCg0KICAvLyBSZWxhdGlvbnNoaXBzDQogIG9yZGVyIE9yZGVycyBAcmVsYXRpb24oZmllbGRzOiBbb3JkZXJfaWRdLCByZWZlcmVuY2VzOiBbb3JkZXJfaWRdKQ0KICBhZG1pbiBBZG1pbj8gQHJlbGF0aW9uKGZpZWxkczogW2FkbWluX2lkXSwgcmVmZXJlbmNlczogW2FkbWluX2lkXSkNCn0NCg0KLy8gV2FyZWhvdXNlIFRhYmxlDQptb2RlbCBXYXJlaG91c2Ugew0KICB3YXJlaG91c2VfaWQgIEludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBwcm92aW5jZV9pZCAgIEludA0KICBwcm92aW5jZV9uYW1lIFN0cmluZw0KICBjaXR5X2lkICAgICAgIEludA0KICBjaXR5X25hbWUgICAgIFN0cmluZw0KICBwb3N0YWxfY29kZSAgIEludA0KICBhZG1pbl9pZCAgICAgIEludA0KDQogIC8vIFJlbGF0aW9uc2hpcHMNCiAgYWRtaW4gICAgICBBZG1pbiAgICAgQHJlbGF0aW9uKGZpZWxkczogW2FkbWluX2lkXSwgcmVmZXJlbmNlczogW2FkbWluX2lkXSkNCiAgcHJvZHVjdHMgICBQcm9kdWN0W10NCiAgY3JlYXRlZF9hdCBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpDQogIHVwZGF0ZWRfYXQgRGF0ZVRpbWUgIEB1cGRhdGVkQXQNCn0NCg0KLy8gVXNlciBBZGRyZXNzIFRhYmxlDQptb2RlbCBVc2VyQWRkcmVzcyB7DQogIHVzZXJfYWRkcmVzc19pZCBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICB1c2VyX2lkICAgICAgICAgSW50DQogIHByb3ZpbmNlX2lkICAgICBJbnQNCiAgcHJvdmluY2VfbmFtZSAgIFN0cmluZw0KICBjaXR5X2lkICAgICAgICAgSW50DQogIGNpdHlfbmFtZSAgICAgICBTdHJpbmcNCiAgcG9zdGFsX2NvZGUgICAgIEludA0KICBjcmVhdGVkX2F0ICAgICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpDQogIHVwZGF0ZWRfYXQgICAgICBEYXRlVGltZSBAdXBkYXRlZEF0DQoNCiAgLy8gUmVsYXRpb25zaGlwcw0KICB1c2VyIFVzZXIgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJfaWRdLCByZWZlcmVuY2VzOiBbdXNlcl9pZF0pDQp9DQo=",
  "inlineSchemaHash": "08033685521179bc7d108963955e42fb08cddd2704fd046d5a54e7ebbf6ff25f",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"full_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"billing_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_usage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user_promo_usages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserPromoUsage\",\"relationName\":\"UserToUserPromoUsage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shopping_carts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ShoppingCart\",\"relationName\":\"ShoppingCartToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Orders\",\"relationName\":\"OrdersToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affiliate_discounts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AffiliateDiscount\",\"relationName\":\"AffiliateDiscountToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_addresses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserAddress\",\"relationName\":\"UserToUserAddress\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Product\":{\"dbName\":null,\"fields\":[{\"name\":\"product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stock\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_available\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"warehouse_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weight\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"category\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Category\",\"relationName\":\"CategoryToProduct\",\"relationFromFields\":[\"category_id\"],\"relationToFields\":[\"category_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"warehouse\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Warehouse\",\"relationName\":\"ProductToWarehouse\",\"relationFromFields\":[\"warehouse_id\"],\"relationToFields\":[\"warehouse_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"promotions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Promotion\",\"relationName\":\"ProductToPromotion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_items\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OrderItem\",\"relationName\":\"OrderItemToProduct\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ShoppingCart\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ShoppingCart\",\"relationName\":\"ProductToShoppingCart\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AffiliateDiscount\":{\"dbName\":null,\"fields\":[{\"name\":\"affiliate_discount_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"AffiliateDiscountToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"user_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Category\":{\"dbName\":null,\"fields\":[{\"name\":\"category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"products\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"CategoryToProduct\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Admin\":{\"dbName\":null,\"fields\":[{\"name\":\"admin_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"Promotion\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Promotion\",\"relationName\":\"AdminToPromotion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Orders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Orders\",\"relationName\":\"AdminToOrders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProofsOfPayment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProofsOfPayment\",\"relationName\":\"AdminToProofsOfPayment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Warehouse\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Warehouse\",\"relationName\":\"AdminToWarehouse\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Promotion\":{\"dbName\":null,\"fields\":[{\"name\":\"promo_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maximum_usage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remaining_usage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Admin\",\"relationName\":\"AdminToPromotion\",\"relationFromFields\":[\"admin_id\"],\"relationToFields\":[\"admin_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"ProductToPromotion\",\"relationFromFields\":[\"product_id\"],\"relationToFields\":[\"product_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserPromoUsage\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserPromoUsage\",\"relationName\":\"PromotionToUserPromoUsage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserPromoUsage\":{\"dbName\":null,\"fields\":[{\"name\":\"user_promo_usage_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"promo_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usage_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserToUserPromoUsage\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"user_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"promo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Promotion\",\"relationName\":\"PromotionToUserPromoUsage\",\"relationFromFields\":[\"promo_id\"],\"relationToFields\":[\"promo_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Orders\",\"relationName\":\"OrdersToUserPromoUsage\",\"relationFromFields\":[\"order_id\"],\"relationToFields\":[\"order_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ShoppingCart\":{\"dbName\":null,\"fields\":[{\"name\":\"cart_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ShoppingCartToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"user_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"ProductToShoppingCart\",\"relationFromFields\":[\"product_id\"],\"relationToFields\":[\"product_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Orders\":{\"dbName\":null,\"fields\":[{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delivery_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deliver_fee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"OrdersToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"user_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Admin\",\"relationName\":\"AdminToOrders\",\"relationFromFields\":[\"admin_id\"],\"relationToFields\":[\"admin_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_items\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OrderItem\",\"relationName\":\"OrderItemToOrders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserPromoUsage\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserPromoUsage\",\"relationName\":\"OrdersToUserPromoUsage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProofsOfPayment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProofsOfPayment\",\"relationName\":\"OrdersToProofsOfPayment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"OrderItem\":{\"dbName\":null,\"fields\":[{\"name\":\"order_item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"OrderItemToProduct\",\"relationFromFields\":[\"product_id\"],\"relationToFields\":[\"product_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Orders\",\"relationName\":\"OrderItemToOrders\",\"relationFromFields\":[\"ordersOrder_id\"],\"relationToFields\":[\"order_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ordersOrder_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProofsOfPayment\":{\"dbName\":null,\"fields\":[{\"name\":\"proof_of_payment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"promo_usage_updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Orders\",\"relationName\":\"OrdersToProofsOfPayment\",\"relationFromFields\":[\"order_id\"],\"relationToFields\":[\"order_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Admin\",\"relationName\":\"AdminToProofsOfPayment\",\"relationFromFields\":[\"admin_id\"],\"relationToFields\":[\"admin_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Warehouse\":{\"dbName\":null,\"fields\":[{\"name\":\"warehouse_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"province_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"province_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postal_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Admin\",\"relationName\":\"AdminToWarehouse\",\"relationFromFields\":[\"admin_id\"],\"relationToFields\":[\"admin_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"products\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"ProductToWarehouse\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserAddress\":{\"dbName\":null,\"fields\":[{\"name\":\"user_address_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"province_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"province_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postal_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserToUserAddress\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"user_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client/schema.prisma")
