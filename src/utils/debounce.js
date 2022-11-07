// 防抖
const debounce = (fn, delay) => {
    delay = delay || 200;
    let timer;

    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            fn.apply(this, args);  // 判断上下文，apply改变this的指向，使之指向它的调用者
        }, delay);
    }
}

export default debounce;

