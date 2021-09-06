"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../");
var redis = new __1.RedisConnect(10);
// redis.getAll('AnnouncementNews:*').then((r) => console.log('getAll', r[0].value));
// redis.getAllJson('AnnouncementNews:*').then((r) => console.log('getAllJson', r[0].value));
// redis.getAll('QueueFailed:*').then((r) => console.log('getAll', r));
// console.log('allKeys', allKeys);
// const setResult = redis.set(
//     'key-nya',
//     JSON.stringify({
//         datasatu: 'masuk',
//         bisa: 2,
//     }),
//     'GET',
// );
// setResult
//     .then((res) => {
//         console.log('set', res);
//     })
//     .catch((e) => {
//         console.log(e.message);
//     });
// const getResult = redis.get('key-nya');
// getResult
//     .then((res) => {
//         console.log('get', res);
//     })
//     .catch((e) => {
//         console.log(e.message);
//     });
// const setResultJson = redis.setJson(
//     'json:key-nya',
//     {
//         datasatu: 'masuk',
//         bisa: 2,
//     },
//     'GET',
// );
// setResultJson
//     .then((res) => {
//         console.log('set json', res);
//     })
//     .catch((e) => {
//         console.log(e.message);
//     });
// const getResultJson = redis.getJson('json:key-nya');
// getResultJson
//     .then((res) => {
//         console.log('get json', res);
//     })
//     .catch((e) => {
//         console.log(e.message);
//     });
// redis.set('test-ttl', 'test value', 'EX', 60);
// const failed = redis.get('oke');
// failed.then((res) => console.log('hasil failed', res)).catch((e) => console.log('catch failed', e));
// const failedJson = redis.getJson('oke');
// failedJson.then((res) => console.log('hasil failed json', res)).catch((e) => console.log('catch failed json', e));
//# sourceMappingURL=test-redis.js.map