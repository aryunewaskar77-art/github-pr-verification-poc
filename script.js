document.addEventListener('DOMContentLoaded', () => {
    const heading = document.getElementById('clickable-heading');
    const colors = ['#f0f2f5', '#e8f0fe', '#fce8e6', '#e6fffa', '#fffaf3'];
    let colorIndex = 0;

    heading.addEventListener('click', () => {
        colorIndex = (colorIndex + 1) % colors.length;
        const newColor = colors[colorIndex];
        document.body.style.backgroundColor = newColor;
        const statusMsg = document.getElementById('status-message');
        if (statusMsg) {
            statusMsg.textContent = `Background color is now ${newColor}`;
        }
        console.log(`Background changed to ${newColor}`);
    });
});
