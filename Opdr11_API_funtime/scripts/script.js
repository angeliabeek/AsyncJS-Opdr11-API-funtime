// Pokemon Image
const getPikachuImage = async () => {
    const pikachu = await getPikachu();
    return pikachu.sprites.other.home.front_default;
};

const createImageHTML = async () => {
    const getBody = document.body;
    const getDiv = document.getElementById("pokemon-image");
    const img = document.createElement("img");
    img.classList.add("image");
    img.src = await getPikachuImage();
    getDiv.appendChild(img);
    getBody.appendChild(getDiv);
};


// Pokemon Abilities
const getPikachuAbilities = async () => {
    const pickachu = await getPikachu();
    const abilities = pickachu.abilities.map(pokemon => pokemon.ability.name);
    return abilities;
}
//getPikachuAbilities().then(result => console.log(result));

const createAbilitiesHTML = async () => {
    const abilities = await getPikachuAbilities();

    const getBody = document.body;
    const getDiv = document.getElementById("abilities");
    const h1 = document.createElement("h1");
    h1.innerHTML = "The abilities of Pikachu are:";
    h1.classList.add("list__header");
    getDiv.appendChild(h1);
    const ul = document.createElement("ul");
    ul.classList.add("list__items");
    getDiv.appendChild(ul);

    abilities.forEach(pokemon => {
        const li = document.createElement("li");
        li.innerHTML = pokemon.toUpperCase();
        ul.appendChild(li);
        getBody.appendChild(getDiv);
    });
};


// Button
document.getElementById("fun-button").addEventListener("click", function () {
    const pikachuInHTML = createImageHTML();
    const abilitiesInHTML = createAbilitiesHTML();
    return pikachuInHTML + abilitiesInHTML;
});
