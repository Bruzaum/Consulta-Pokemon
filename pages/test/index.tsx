import { useForm, SubmitHandler, useFieldArray, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const schema = yup.object().shape({
  nome: yup.string().required('Campo obrigatório'),
  sobrenome: yup.string().required('Campo obrigatório'),
  regiao: yup.string().required('Campo obrigatório'),
  cidade: yup.string().required('Campo obrigatório'),
  pokemons: yup.array().of(
    yup.object().shape({
      nomePokemon: yup.string().required('Campo obrigatório'),
      data: yup.string().required('Campo obrigatório'),
      horario: yup.string().required('Campo obrigatório'),
    })
  ),
});

const fetchRegions = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/region');
  
  const regionNames: string[] = response.data.results.map((region: any) => region.name);

  for (let i = 0; i < regionNames.length; i++) {
    regionNames[i] = regionNames[i][0].toUpperCase() + regionNames[i].substring(1);
  }

  return regionNames;
};

const fetchCities = async (region: string) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/location`);

  const cityNames: string[] = response.data.results.map((city: any) => {
    const words: string[] = city.name.split("-");

    for (let j = 0; j < words.length; j++) {
      words[j] = words[j][0].toUpperCase() + words[j].substr(1);
    }

    return words.join(" ");
  });

  return cityNames;
};

const fetchPokemons = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
  
  const pokemonNames: string[] = response.data.results.map((pokemon: any) => pokemon.name);

  for (let i = 0; i < pokemonNames.length; i++) {
    pokemonNames[i] = pokemonNames[i][0].toUpperCase() + pokemonNames[i].substring(1);
  }

  return pokemonNames;
};

const YourForm = () => {
  const {
    control,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'pokemons',
  });

  const [regions, setRegions] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [pokemonsList, setPokemonsList] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const regionsData = await fetchRegions();
      setRegions(regionsData);

      if (regionsData.length > 0) {
        const citiesData = await fetchCities(regionsData[0]);
        setCities(citiesData);
      }

      const pokemonsData = await fetchPokemons();
      setPokemonsList(pokemonsData);
    };

    fetchData();
  }, []);

  const canAddPokemon = fields.length < 6;

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log('Form data:', data);
    console.log('Número de pokemons cadastrados:', data.pokemons.length);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Nome:
        <input {...register('nome')} />
        <p>{errors.nome?.message}</p>
      </label>

      <label>
        Sobrenome:
        <input {...register('sobrenome')} />
        <p>{errors.sobrenome?.message}</p>
      </label>

      <label>
        Região:
        <select {...register('regiao')} onChange={async (e) => setCities(await fetchCities(e.target.value))}>
            {regions.map((region) => (
            <option key={region} value={region}>
                {region}
            </option>
            ))}
        </select>
        <p>{errors.regiao?.message}</p>
      </label>

      <label>
        Cidade:
        <select {...register('cidade')}>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <p>{errors.cidade?.message}</p>
      </label>

      <div>
        <h2>Cadastrar Pokémons</h2>
        {fields.map((item, index) => (
          <div key={item.id}>
            <label>
              Pokemon {index + 1}:
              <Controller
                render={({ field }) => (
                  <select {...field}>
                    <option value="" disabled hidden>
                      Selecione um Pokémon
                    </option>
                    {pokemonsList.map((pokemon) => (
                      <option key={pokemon} value={pokemon}>
                        {pokemon}
                      </option>
                    ))}
                  </select>
                )}
                control={control}
                name={`pokemons.${index}.nomePokemon`}
              />
            </label>

            <label>
              Data:
              <input {...register(`pokemons.${index}.data`)} type="date" />
            </label>

            <label>
              Horário:
              <input {...register(`pokemons.${index}.horario`)} type="time" />
            </label>

            {index > 0 && <button type="button" onClick={() => remove(index)}>Remover</button>}
          </div>
        ))}

        {canAddPokemon && (
          <button
            type="button"
            onClick={() => append({ nomePokemon: '', data: '', horario: '' })}
          >
            Adicionar Novo Pokemon
          </button>
        )}

        {!canAddPokemon && (
          <p>Você atingiu o limite de 6 Pokémons. Não é possível adicionar mais.</p>
        )}
      </div>

      <div>
        <p>Número de pokémons a serem atendidos: {fields.length}</p>
        <p>Atendimento unitário por pokémon: R$70.00</p>
        <p>Subtotal: R${(70.0 * fields.length).toFixed(2)}</p>
        <p>Taxa Geracional: R$2.10</p>
        <p>Valor Total: R${(70.0 * fields.length + 2.1).toFixed(2)}</p>
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default YourForm;
