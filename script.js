// Load the birds.json file
fetch("birds.json")
.then(response => response.json())
.then(data => {
    const container = document.getElementById("birdContainer");

    // For each bird, create a card
    data.forEach(bird => {
        const card = document.createElement("div");
        card.className = "card";

        // You can add more fields later like habitat, diet, image
        card.innerHTML = `
            <h2>${bird.name}</h2>
            <p><b>Scientific:</b> ${bird.scientific}</p>
        `;

        container.appendChild(card);
    });
});