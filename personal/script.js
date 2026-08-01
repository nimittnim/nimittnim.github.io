const tooltip = document.getElementById("tooltip");

document.querySelectorAll(".day").forEach(day => {

    if (!day.dataset.date) return;

    day.addEventListener("mouseenter", () => {

        tooltip.innerHTML = `
            <strong>${day.dataset.date}</strong><br><br>

            <b>${day.dataset.title}</b><br>

            Distance: ${day.dataset.distance} km<br>
            Time: ${day.dataset.duration}<br>
            Pace: ${day.dataset.pace}/km

            ${day.dataset.notes
                ? `<hr>${day.dataset.notes}`
                : ""}
        `;

        tooltip.style.display = "block";
    });

    day.addEventListener("mousemove", e => {

        tooltip.style.left = (e.pageX + 15) + "px";
        tooltip.style.top = (e.pageY + 15) + "px";
    });

    day.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });

});

