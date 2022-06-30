import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import { getInfoPokemon,getEvolutionPokemon,getPokemonSpecies } from '../../helpers/utils';
import Thumbnail from './components/Thumbnail';
import InfoPokemon from './components/InfoPokemon';
import StatsPokemon from './components/StatsPokemon';
import EvolutionMega from './components/EvolutionMega';
import Evolution from './components/Evolution';

const PokemonDetail=()=>{
    const { id } = useParams();
    const [dataInfoPk,setDataInfoPK]=useState([])
    const [dataSpecies,setDataSpecies]=useState([])
    useEffect(async()=>{
        const [infoPK,species] = await Promise.all([getInfoPokemon(id),getPokemonSpecies(id)])
        setDataInfoPK(infoPK)
        setDataSpecies(species)
    },[])
    //EB544D
    return (
        <div className="p-5 overflow-hidden ">
            <Thumbnail  id={dataInfoPk.id}/>
            <div>
                <div>
                    <InfoPokemon type={dataInfoPk.types} weight={dataInfoPk.weight} height={dataInfoPk.height} id={dataInfoPk.id} name={dataInfoPk.name}/>
                    <StatsPokemon stats={dataInfoPk.stats}/>
                    <Evolution evolutionChain={dataSpecies.evolution_chain}/>
                    <EvolutionMega evoluMega={dataSpecies.varieties}/>
                    
                </div>
            </div>
        </div>
    );
}

export default PokemonDetail;