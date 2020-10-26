"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = process.env.NODE_ENV === 'production'
    ? require('./prod')
    : require('./dev');
//# sourceMappingURL=index.js.map