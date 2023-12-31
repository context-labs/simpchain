export async function wait(timeoutMs, value = null) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), timeoutMs);
    });
}
export async function forTrue(fn) {
    const count = 0;
    return new Promise((resolve, reject) => {
        if (fn()) {
            resolve(true);
            return;
        }
        const interval = setInterval(() => {
            if (fn()) {
                clearInterval(interval);
                resolve(true);
                return;
            }
            if (count >= 200)
                reject();
        }, 50);
    });
}
//# sourceMappingURL=WaitUtil.js.map