"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const orderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    productId: zod_1.z.string().min(1),
    price: zod_1.z.number().positive(),
    quantity: zod_1.z.number().positive(),
});
exports.default = orderValidationSchema;
