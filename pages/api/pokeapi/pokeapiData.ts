import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2/';

// Função para obter os nomes dos pokémons
async function getPokemonNames(): Promise<string[]> {
  try {
    const response = await axios.get(`${baseUrl}pokemon?limit=10`); // Altere o limite conforme necessário
    const pokemonNames = response.data.results.map((pokemon: any) => pokemon.name);
    
    for (let i = 0; i < pokemonNames.length; i++) {
        pokemonNames[i] = pokemonNames[i][0].toUpperCase() + pokemonNames[i].substring(1);
    }
    
    return pokemonNames;
  } catch (error) {
    console.error('Erro ao obter nomes de pokémons', error);
    throw error;
  }
}

// Função para obter os nomes das cidades
async function getCityNames(): Promise<string[]> {
  try {
    const response = await axios.get(`${baseUrl}location?`); // Altere o limite conforme necessário
    const cityNames = response.data.results.map((city: any) => city.name);
    
    
    for (let i = 0; i < cityNames.length; i++) {
        const words = cityNames[i].split("-");
        
        for (let j = 0; j < words.length; j++) {
            words[j] = words[j][0].toUpperCase() + words[j].substr(1);
        }
        
        cityNames[i] = words.join(" ");
        
    }

    
    return cityNames;
  } catch (error) {
    console.error('Erro ao obter nomes de cidades', error);
    throw error;
  }
}

// Função para obter os nomes das regiões
async function getRegionNames(): Promise<string[]> {
  try {
    const response = await axios.get(`${baseUrl}region?`); // Altere o limite conforme necessário
    const regionNames = response.data.results.map((region: any) => region.name);
    
    for (let i = 0; i < regionNames.length; i++) {
        regionNames[i] = regionNames[i][0].toUpperCase() + regionNames[i].substring(1);
    }
    
    return regionNames;
  } catch (error) {
    console.error('Erro ao obter nomes de regiões', error);
    throw error;
  }
}

// Exemplo de uso
async function fetchData() {
  try {
    const pokemonNames = await getPokemonNames();
    const cityNames = await getCityNames();
    const regionNames = await getRegionNames();

    console.log('Nomes de Pokémons:', pokemonNames);
    console.log('Nomes de Cidades:', cityNames);
    console.log('Nomes de Regiões:', regionNames);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
}

// Chamada da função
fetchData();