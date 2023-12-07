function revealJoke() {
    document.getElementById("joke-text").innerText = "Because it wanted to get to the other side!";
}

function submitJoke() {
    const userJoke = document.getElementById("userJoke").value;
    alert(`Thank you for your joke: ${userJoke}`);
}
