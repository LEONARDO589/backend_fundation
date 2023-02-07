const {config} = require('dotenv')
config();

exports.PAYPAL_API_URL = process.env.PAYPAL_API_URL;
exports.PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT;
exports.PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET;

exports.HOST_API = process.env.HOST_API