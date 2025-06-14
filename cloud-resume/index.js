const counter = document.querySelector(".counter-number");

async function updateCounter() {
    const response = await fetch("https://lxrwoxavtzjmykc5skub3vfici0qmmvr.lambda-url.ap-southeast-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}

updateCounter();
