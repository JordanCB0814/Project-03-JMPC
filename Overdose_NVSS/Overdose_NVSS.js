// Function to draw the line graph
async function drawLineGraph() {
    // Fetch the JSON data
    const response = await fetch('Overdose_Deaths_Data.Cleaned_Overdose_Data.json');
    const data = await response.json();

    // Count occurrences per year
    const dataPointsPerYear = {};
    data.forEach(item => {
        const year = item.year; // Adjust this if your JSON key is different
        if (dataPointsPerYear[year]) {
            dataPointsPerYear[year] += 1;
        } else {
            dataPointsPerYear[year] = 1;
        }
    });

    // Extract sorted years and counts
    const years = Object.keys(dataPointsPerYear).sort((a, b) => a - b);
    const counts = years.map(year => dataPointsPerYear[year]);

    // Get canvas context
    const canvas = document.getElementById('dataPointsCanvas');
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Define graph margins
    const margin = 50;
    const graphWidth = canvas.width - margin * 2;
    const graphHeight = canvas.height - margin * 2;

    // Find min and max values
    const maxCount = Math.max(...counts);
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);

    // Draw X and Y axes
    ctx.beginPath();
    ctx.moveTo(margin, margin);
    ctx.lineTo(margin, margin + graphHeight);
    ctx.lineTo(margin + graphWidth, margin + graphHeight);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;
    ctx.stroke();

    // Draw year labels on X-axis
    const yearStep = (graphWidth) / (years.length - 1);
    years.forEach((year, index) => {
        const x = margin + index * yearStep;
        ctx.fillText(year, x - 10, margin + graphHeight + 20);
    });

    // Draw count labels on Y-axis
    const countStep = graphHeight / maxCount;
    for (let i = 0; i <= maxCount; i += Math.ceil(maxCount / 10)) {
        const y = margin + graphHeight - i * countStep;
        ctx.fillText(i, margin - 30, y + 5);
    }

    // Draw the line graph
    ctx.beginPath();
    years.forEach((year, index) => {
        const x = margin + index * yearStep;
        const y = margin + graphHeight - counts[index] * countStep;
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });

    ctx.strokeStyle = "rgba(54, 162, 235, 1)";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw points on the line
    ctx.fillStyle = "rgba(54, 162, 235, 0.8)";
    years.forEach((year, index) => {
        const x = margin + index * yearStep;
        const y = margin + graphHeight - counts[index] * countStep;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
    });
}

// Call the function to draw the graph
drawLineGraph();