// 异步
// 进程和线程

function sum(a, b, cb) {
    setTimeout(() => {
        cb(a + b)
    }, 10000);
}


console.log("11")
sum(123, 345, result => {
    sum(result, 456, result => {
        console.log(result);
    })
});
console.log("33")