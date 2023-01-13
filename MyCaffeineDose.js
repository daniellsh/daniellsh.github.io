var counter = document.getElementById("counter");
var button = document.getElementById("button");

// Save counter value to local storage
localStorage.setItem("counter", counter.innerHTML);

// Retrieve counter value from local storage
var savedCounter = localStorage.getItem("counter");
if (savedCounter) {
  counter.innerHTML = savedCounter;
}

button.addEventListener("click", function() {
    if (counter.innerHTML > 1) {
        counter.innerHTML = parseInt(counter.innerHTML) - 1;
    } else {
        counter.innerHTML = "You have your last cup today 🥲 Stay tuned for a couple days.";
    }
    localStorage.setItem("counter", counter.innerHTML);
});

setInterval(function() {
    if (counter.innerHTML > 0) {
        counter.innerHTML = parseFloat(counter.innerHTML) + 0.25;
        localStorage.setItem("counter", counter.innerHTML);
    }
}, 86400000); // 86400000ms = 24h


