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

        const offset = 15;

        let left = e.pageX + offset;
        let top = e.pageY + offset;

        if (left + tooltip.offsetWidth > window.scrollX + window.innerWidth) {
            left = e.pageX - tooltip.offsetWidth - offset;
        }

        if (top + tooltip.offsetHeight > window.scrollY + window.innerHeight) {
            top = e.pageY - tooltip.offsetHeight - offset;
        }

        tooltip.style.left = left + "px";
        tooltip.style.top = top + "px";
    });

    day.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });

});

