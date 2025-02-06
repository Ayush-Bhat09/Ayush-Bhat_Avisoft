// Function Expression
const counter1 = (function () {
    let count = 0;
    return {
        increment: function () {
            count++;
            document.getElementById('count1').innerText = count;
        }
    };
})();
document.getElementById('btn1').addEventListener('click', function() { counter1.increment(this); });

// Function Declaration Counter
function Counter() {
    let count = 0;

    this.increment = function () {
        count++;
        document.getElementById('count2').innerText = count;
    };
}

const counter3 = new Counter();
document.getElementById('btn2').addEventListener('click', function() { counter3.increment.call(this); });

// Arrow Function Counter
const counter2 = (() => {
    let count = 0;
    const increment = () => {
        count++;
        document.getElementById('count3').innerText = count;
    };
    return { increment };
})();

document.getElementById('btn3').addEventListener('click', function() { counter2.increment.call(this); });

