"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'email is required'],
    },
    productId: {
        type: String,
        required: [true, 'productId is required'],
    },
    price: {
        type: Number,
        required: [true, 'price is required'],
    },
    quantity: {
        type: Number,
        required: [true, 'quantity is required'],
    }
});
exports.Order = (0, mongoose_1.model)('Order', orderSchema);
