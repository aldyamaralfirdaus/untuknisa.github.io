function moveButton() {
    const engga = document.getElementById("engga");
    const container = document.querySelector(".input-group");

    const containerRect = container.getBoundingClientRect();
    const enggaRect = engga.getBoundingClientRect();

    const maxX = containerRect.width - enggaRect.width;
    const maxY = containerRect.height - enggaRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    engga.style.position = "absolute";
    engga.style.left = randomX + "px";
    engga.style.top = randomY + "px";
}
