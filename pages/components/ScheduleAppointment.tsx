import styled from 'styled-components';
import Link from 'next/link';
import { useForm, SubmitHandler, useFieldArray, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
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

const ScheduleAppointment: React.FC = () => {
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

  const SA_Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    form {
        min-width: 720px; 
    }

    h2 {
        font-size: 24px;
        font-weight: 600;
        padding-bottom: 5px;
        padding-left: 20px;
    }

  `;

  const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 15px;
  `;

  const SA_LabelContainer = styled.div`
    width: 26%;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: start;

    label {
        font-size: 12px;
        font-weight: 700;
        padding: 3px;
    }

    input, select{
        border-radius: 8px;
        border-width: 1px;
        height: 45px;
        border-color: #D5D5D5;
        border-style: groove;
        min-width: 200px;
    }

    ::placeholder {
        padding: 8px;
    }
  `;

  const AddPokemon_LabelContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    padding-bottom: 15px;
  `;

  const AddPokemon_Label = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  label {
      font-size: 12px;
      font-weight: 700;
      padding: 3px;
  }

  select{
      border-radius: 8px;
      border-width: 1px;
      height: 45px;
      border-color: #D5D5D5;
      border-style: groove;
      min-width: 200px;
      width: 500px;
  }

  ::placeholder {
      padding: 8px;
      font-size: 12px;
  }
`;

  const AddPokemon = styled.button`
    font-size: 12px;
    font-weight: bold;
    color: #1D1D1D;
    background-color: white;
    border-radius: 30px;
    border-width: 1.5px;
    border-color: #1D1D1D;
    height: 45px;
    cursor: pointer;
    padding: 5px;
  `;

  const AddPokemonContainer = styled.div`

    display: flex;
    flex-direction: column;

    h3 {
        font-size: 12px;
        font-weight: 700;
    }

    h4 {
        font-size: 12px;
        font-weight: 500;
        color: #747474;
    }
  `;

  const DivisorLine = styled.hr`
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding-left: 0;
  `;

  const ScheduleSummary = styled.div`
        font-size: 14px;
        font-weight: 400;
        color: #747474;
  `;

  const ObservationText = styled.p`
    font-size: 8px !important;
    font-weight: 400;
    color: #747474;
    `;

  const ConfirmationButton = styled.button`
    background-color: #e40f0f;
    width: 100%;
    height: 42px;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 36px;
    cursor: pointer;
`;

const ValueTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-size: 24px;
        font-weight: 600;
        color: #1D1D1D;
    }
`;

const RemoveButton = styled.button`
    background: white;
    color: red;
    border: none;
    cursor: pointer;
`;

  return (
    <SA_Container>
        <h2>Preencha o formulário abaixo para agendar sua consulta</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>

                <SA_LabelContainer>
                    <label>
                        Nome
                    </label>
                    <input {...register('nome')} placeholder='Digite seu nome'/>
                </SA_LabelContainer>

                <SA_LabelContainer>
                    <label>
                        Sobrenome
                    </label>
                    <input {...register('sobrenome')} placeholder='Digite seu sobrenome'/>
                </SA_LabelContainer>
            </InputContainer>

            <InputContainer>

                <SA_LabelContainer>
                    <label>
                        Região
                    </label>
                    <select {...register('regiao')}>
                        {regions.map((region) => (
                        <option key={region} value={region}>
                            {region}
                        </option>
                        ))}
                    </select>
                </SA_LabelContainer>

                <SA_LabelContainer>
                    <label>
                        Cidade
                    </label>
                    <select {...register('cidade')}>
                    {cities.map((city) => (
                        <option key={city} value={city}>
                        {city}
                        </option>
                    ))}
                    </select>
                </SA_LabelContainer>
            </InputContainer>


            <AddPokemonContainer>
                <h3>Cadastrar Pokémons</h3>
                <h4>Atendemos até 06 pokémons por vez</h4>
                {fields.map((item, index) => (
                    <AddPokemon_LabelContainer>
                        <AddPokemon_Label key={item.id}>
                            <label>
                            Pokemon {index + 1}
                            </label>
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
                            

                            {<RemoveButton type="button" onClick={() => remove(index)}>
                                <FaTrashAlt />
                            </RemoveButton>}
                        </AddPokemon_Label>
                    </AddPokemon_LabelContainer>
                ))}

            </AddPokemonContainer>

            {canAddPokemon && (
            <AddPokemon
                type="button"
                onClick={() => append({ nomePokemon: '', data: '', horario: '' })}
            >
                Adicionar novo pokémon ao time...   +
            </AddPokemon>
            )}

            {!canAddPokemon && (
            <p>Você atingiu o limite de 6 Pokémons. Não é possível adicionar mais.</p>
            )}

            <InputContainer>
                <SA_LabelContainer>
                    <label>
                        Data para Atendimento
                    </label>
                    <input type="date" />
                </SA_LabelContainer>

                <SA_LabelContainer>
                    <label>
                        Horário de Atendimento
                    </label>
                    <input type="time" />
                </SA_LabelContainer>
            </InputContainer>

            <DivisorLine/>

            

            <ScheduleSummary>
                <p>Número de pokémons a serem atendidos: {fields.length}</p>
                <p>Atendimento unitário por pokémon: R$70.00</p>
                <p>Subtotal: R${(70.0 * fields.length).toFixed(2)}</p>
                <p>Taxa Geracional: R${(70.0 * fields.length * 0.03).toFixed(2)}</p>
                <ObservationText>*adicionamos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30%</ObservationText>
            </ScheduleSummary>

            <ValueTotal>
                <p>Valor Total: R${(70.0 * fields.length + (70.0 * fields.length * 0.03)).toFixed(2)}</p>
                <Link href="/schedule-appointment/confirmation">
                    <ConfirmationButton type="submit">Concluir Agendamento</ConfirmationButton>
                </Link>
            </ValueTotal>
        </form>
    </SA_Container>
  );
};

export default ScheduleAppointment;
