const PROMISE_STATE = {
    PENDING: 0,
    FULFILLED: 1,
    REJECTED: 2
}

class MyPromise {
    $result
    $reason
    $state = PROMISE_STATE.PENDING // pending fulfilled rejected
    constructor(executor) {
        executor(this.$resolve.bind(this), this.$reject.bind(this))

    }
    $resolve(value) {
        if (this.$state !== PROMISE_STATE.PENDING) return
        this.$result = value
        this.$state = PROMISE_STATE.FULFILLED
    }
    $reject(reason) {
        if (this.$state !== PROMISE_STATE.PENDING) return
        this.$reason = reason
        this.$state = PROMISE_STATE.REJECTED
    }
    then(onFulfilled, onRejected) {
        if (this.$state === PROMISE_STATE.FULFILLED) {
            onFulfilled(this.$result)
        }
    }
}

const mp = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("要存储的数据")
    }, 1000);
    // reject("不要存储的数据")
})

mp.then(res => {
    console.log(res);
})

console.log(mp);