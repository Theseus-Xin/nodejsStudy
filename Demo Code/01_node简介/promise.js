// function sum(a, b, cb) {
//     cb(a + b)
// }

// sum(123, 234, function (result) {
//     console.log(result);
// })


// promise

// const promise = new Promise((resolve, reject) => {
//     resolve(234)
//     reject(123)
// })

// promise.then(res => {
//     console.log(res);
// }, err => {
//     console.log(err);
// })


// function sum(a, b) {
//     return new Promise((res, rej) => {
//         res(a + b)
//     })
// }

// sum(12, 23).then(res => {
//     console.log(res);
// })

function sum(a, b) {
    return new Promise((res, rej) => {
        res(a + b)
    })
}

sum(12, 23)
.then(res =>res+34)
.then(res =>res+45)
.then(res =>res+56)
.then(res =>console.log(res))