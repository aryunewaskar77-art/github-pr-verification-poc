document.addEventListener('DOMContentLoaded', () => {
    const heading = document.getElementById('clickable-heading');
    const colors = ['#f0f2f5', '#e8f0fe', '#fce8e6', '#e6fffa', '#fffaf3'];
    let colorIndex = 0;

    heading.addEventListener('click', () => {
        colorIndex = (colorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[colorIndex];
        console.log(`Background changed to ${colors[colorIndex]}`);
    });
});
