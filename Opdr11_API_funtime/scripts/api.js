// Pokemon Image
const getPikachu = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu/");
    return response.json();
};
//getPikachu().then((result) => console.log(result));
