function clock() {
    let showClock = document.getElementById("clock");
    let showToday = document.getElementById("today");

    let n = new Date();
    let hours = String(n.getHours()).padStart(2, "0");
    let minutes = String(n.getMinutes()).padStart(2, "0");

    let days = String(n.getDate()).padStart(2, "0");
    let months = String(n.getMonth() + 1).padStart(2, "0");
    let years = String(n.getFullYear()).padStart(2, "0");

    showClock.textContent = `${hours}:${minutes}`;
    showToday.textContent = `${days}.${months}.${years}`;
}

setInterval(clock, 1000);