const { error, log } = require("node:console");
const { resolve } = require("node:dns");

const delayedGreet = (name, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`hello ${name}`), delay)
    });
}
delayedGreet("Sara", 1000).then((resault) => {
    console.log(resault);
})
const randomOperation = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.5)
            resolve("success")
        else
            reject("failure")
    })
}
randomOperation().then((result) => {
    console.log(result)
}).catch((error) => console.log(error))
const raceTimers = () => {
    const timera = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("timer A finished")
        }, 2000);
    })
    const timerb = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("timer B finished")
        }, 3000);
    })
    return (timera, timerb)
}
raceTimers().then((result) => {
    console.log(result);

})

const waitAll = () => {
    const a = new Promise((resolve) => {
        setTimeout(() => {
            resolve("first")
        }, 1000);
    })
    const b = new Promise((resolve) => {
        setTimeout(() => {
            resolve("second")
        }, 2000);
    })
    const c = new Promise((resolve) => setTimeout(() => resolve("third"), 3000))
    return Promise.all([a, b, c])
}
waitAll().then((resault) => console.log(resault));

const sayHi = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hi!");
            resolve();
        }, 1000);
    });
};
const sayHowAreYou = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("How are you?");
            resolve();
        }, 2000);
    });
};
const sayGoodbye = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Goodbye!");
            resolve();
        }, 1000);
    });
};
const chainedGreetings = () => {
    return sayHi()
        .then(() => sayHowAreYou())
        .then(() => sayGoodbye());
};
chainedGreetings();