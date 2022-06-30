import React from 'react';
import Fire from '../../../assets/png/fire.png'
import Flying from '../../../assets/png/flying.png'
import Bug from '../../../assets/png/bug.png'
import Dark from '../../../assets/png/dark.png'
import Dragon from '../../../assets/png/dragon.png'
import Electric from '../../../assets/png/electric.png'
import Fairy from '../../../assets/png/fairy.png'
import Fighting from '../../../assets/png/fighting.png'
import Ghost from '../../../assets/png/ghost.png'
import Grass from '../../../assets/png/grass.png'
import Ground from '../../../assets/png/ground.png'
import Ice from '../../../assets/png/ice.png'
import Normal from '../../../assets/png/normal.png'
import Poison from '../../../assets/png/poison.png'
import Psychic from '../../../assets/png/psychic.png'
import Rock from '../../../assets/png/rock.png'
import Steel from '../../../assets/png/steel.png'
import Water from '../../../assets/png/water.png'
import { formatNUmber } from '../../../helpers/utils';
import { backgroundColors } from '../../../assets/color';
//2.2046
const InfoPokemon=({type,weight,height,id,name})=>{
    const ImgTypesPk=(type)=>{
        switch (type) {
            case 'fire':
                return <img src={Fire} className="w-[20px] mr-1" alt=""/>
            case 'flying':
                return <img src={Flying} className="w-[20px] mr-1" alt=""/>
            case 'bug':
                return <img src={Bug} className="w-[20px] mr-1" alt=""/>
            case 'dark':
                return <img src={Dark} className="w-[20px] mr-1" alt=""/>
            case 'dragon':
                return <img src={Dragon} className="w-[20px] mr-1" alt=""/>
            case 'electric':
                return <img src={Electric} className="w-[20px] mr-1" alt=""/>
            case 'fairy':
                return <img src={Fairy} className="w-[20px] mr-1" alt=""/>
            case 'fighting':
                return <img src={Fighting} className="w-[20px] mr-1" alt=""/>
            case 'ghost':
                return <img src={Ghost} className="w-[20px] mr-1" alt=""/>
            case 'grass':
                return <img src={Grass} className="w-[20px] mr-1" alt=""/>
            case 'ground':
                return <img src={Ground} className="w-[20px] mr-1" alt=""/>
            case 'ice':
                return <img src={Ice} className="w-[20px] mr-1" alt=""/>
            case 'normal':
                return <img src={Normal} className="w-[20px] mr-1" alt=""/>
            case 'poison':
                return <img src={Poison} className="w-[20px] mr-1" alt=""/>
            case 'psychic':
                return <img src={Psychic} className="w-[20px] mr-1" alt=""/>
            case 'rock':
                return <img src={Rock} className="w-[20px] mr-1" alt=""/>
            case 'steel':
                return <img src={Steel} className="w-[20px] mr-1" alt=""/>
            case 'water':
                return <img src={Water} className="w-[20px] mr-1" alt=""/>
            default:
                return <img src={Normal} className="w-[20px] mr-1" alt=""/>
        }
    }
    
    return (
        <>
            <h2 className="font-bold text-3xl text-center text-[#0B1F3C] capitalize" style={{fontFamily:'sans-serif'}}>{name}</h2>
            <div className="flex justify-center my-4">
                {type?.map((items,index)=>(
                    <span key={index} style={{background:backgroundColors[items.type.name]}} className={`flex items-center capitalize text-white py-1 text-sm px-2 mr-3 rounded-lg`}>
                        {ImgTypesPk(items.type.name)}
                        {items.type.name}
                    </span>
                ))}
            </div>
            <div className="flex justify-around my-10">
                <div className="text-center">
                    <h1 className="text-2xl font-medium">#{formatNUmber(id)}</h1>
                    <span className="text-xs text-[#ABABAB]">Id</span>
                </div>
                <div className="w-[1.5px] h-auto bg-black"></div>
                <div className="text-center">
                    <h1 className="text-2xl font-medium">{height/10} <span className="text-lg">M</span></h1>
                    <span className="text-xs text-[#ABABAB]">Height</span>
                </div>
                <div className="w-[1.5px] h-auto bg-black"></div>
                <div className="text-center">
                    <h1 className="text-2xl font-medium">{weight} <span className="text-lg">Ibs</span></h1>
                    <span className="text-xs text-[#ABABAB]">Weight</span>
                </div>
            </div>
        </>
    );
}

export default InfoPokemon;