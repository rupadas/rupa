let Schema = require('schema-object');

let Message = new Schema ({ "target": String, "msg": Object });

let Queue = [];

module.exports = { Message, Queue };
