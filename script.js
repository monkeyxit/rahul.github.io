const birds = [

{
name:"Bald Eagle",
scientific:"Haliaeetus leucocephalus",
habitat:"North America",
diet:"Fish",
image:"https://upload.wikimedia.org/wikipedia/commons/1/1c/Bald_Eagle_Portrait.jpg"
},

{
name:"Peacock",
scientific:"Pavo cristatus",
habitat:"India and Sri Lanka",
diet:"Seeds and insects",
image:"https://upload.wikimedia.org/wikipedia/commons/5/50/Peacock_Plumage.jpg"
},

{
name:"Parrot",
scientific:"Psittaciformes",
habitat:"Tropical forests",
diet:"Fruits and seeds",
image:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Parrot.jpg"
},

{
name:"Sparrow",
scientific:"Passeridae",
habitat:"Cities and villages",
diet:"Seeds and insects",
image:"https://upload.wikimedia.org/wikipedia/commons/2/2e/House_sparrow04.jpg"
}

];

function displayBirds(list){

const container=document.getElementById("birdContainer");

container.innerHTML="";

list.forEach(bird=>{

const card=document.createElement("div");

card.className="card";

card.innerHTML=`
<img src="${bird.image}">
<h2>${bird.name}</h2>
<p><b>Scientific:</b> ${bird.scientific}</p>
<p><b>Habitat:</b> ${bird.habitat}</p>
<p><b>Diet:</b> ${bird.diet}</p>
`;

container.appendChild(card);

});

}

function searchBird(){

const input=document.getElementById("searchInput").value.toLowerCase();

const filtered=birds.filter(bird =>
bird.name.toLowerCase().includes(input)
);

displayBirds(filtered);

}

displayBirds(birds);