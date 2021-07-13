"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redis_connect_1 = require("./lib/redis-connect");
var redis = new redis_connect_1.RedisConnect(1);
var setResult = redis.set('key-nya', JSON.stringify({
    datasatu: 'masuk',
    bisa: 2,
}), 'GET');
setResult
    .then(function (res) {
    console.log('set', res);
})
    .catch(function (e) {
    console.log(e.message);
});
var getResult = redis.get('key-nya');
getResult
    .then(function (res) {
    console.log('get', res);
})
    .catch(function (e) {
    console.log(e.message);
});
var setResultJson = redis.setJson('json:key-nya', {
    datasatu: 'masuk',
    bisa: 2,
}, 'GET');
setResultJson
    .then(function (res) {
    console.log('set json', res);
})
    .catch(function (e) {
    console.log(e.message);
});
var getResultJson = redis.getJson('json:key-nya');
getResultJson
    .then(function (res) {
    console.log('get json', res);
})
    .catch(function (e) {
    console.log(e.message);
});
redis.set('test-ttl', 'test value', 'EX', 60);
var failed = redis.get('oke');
failed.then(function (res) { return console.log('hasil failed', res); }).catch(function (e) { return console.log('catch failed', e); });
var failedJson = redis.getJson('oke');
failedJson.then(function (res) { return console.log('hasil failed json', res); }).catch(function (e) { return console.log('catch failed json', e); });
//# sourceMappingURL=test-redis.js.map