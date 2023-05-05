const PROMISE_STATE = {
    PENDING: 0,
    FULFILLED: 1,
    REJECTED: 2
}

class MyPromise {
    // 创建一个变量存储resolve结果
    $result
    // 创建一个变量存储reject结果
    $reason
    // 创建一个变量存储回调函数
    $callback
    // 创建一个变量存储promise状态
    $state = PROMISE_STATE.PENDING // pending fulfilled rejected
    constructor(executor) {
        executor(this.$resolve.bind(this), this.$reject.bind(this))

    }
    $resolve(value) {
        if (this.$state !== PROMISE_STATE.PENDING) return
        this.$result = value
        this.$state = PROMISE_STATE.FULFILLED
        // 当resolve执行时，说明数据已经进入Promise，需要调用then的回调函数。
        this.$callback && this.$callback(this.$result)
    }
    $reject(reason) {
        if (this.$state !== PROMISE_STATE.PENDING) return
        this.$reason = reason
        this.$state = PROMISE_STATE.REJECTED

    }
    then(onFulfilled, onRejected) {
        if (this.$state === PROMISE_STATE.PENDING) {
            // 说明数据还没有进入Promise
            this.$callback = onFulfilled
        }
        // 目前then只能读取已经存储进Promise的数据，而不能读取异步存储的数据
        else if (this.$state === PROMISE_STATE.FULFILLED) {
            onFulfilled(this.$result)
        }
    }

}

const mp = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("要存储的数据")
    }, 5000);
    // resolve("要存储的数据")
    // reject("不要存储的数据")
})

mp.then(res => {
    console.log(res);
})

// console.log(mp);