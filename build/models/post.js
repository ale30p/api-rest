"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moongose = require("mongoose");
var Schema = moongose.Schema;
var PostSchema = new Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        required: true
    },
    content: {
        type: String,
        default: '',
        required: true
    }
});
exports.default = moongose.model('Post', PostSchema);
//# sourceMappingURL=post.js.map