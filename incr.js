let count = 0;

let display = document.getElementById("display");
function increment () {
    count++;
    console.log(count);
    display.innerText = count;
}

function decrement () {
    count--;
    console.log(count);
    display.innerText = count;
};
