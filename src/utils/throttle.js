// 节流
const throttle = (fn, interval) => {
    interval = interval || 2000;
    let last = 0;

    return function (...args) {
        const now = new Date();
        if (now - last < interval) {
            return;
        }
        last = now;
        return fn.apply(this, args);  // 判断上下文，apply改变this的指向，使之指向它的调用者
    };
};

export default throttle;

