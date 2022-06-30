import React from 'react';
import {splitUrl,idPokemon} from '../../helpers/utils';
import { Link } from 'react-router-dom';


const CardPokemon=({data})=>{

    return (
        data.map((items,index)=>(
            <Link key={index} to={`pokedex/${idPokemon(items.url)}`}>
                <div  className="flex justify-between border rounded-full relative shadow-sm mb-5">
                    <div className="after-dots-img py-3 px-5 w-full overflow-hidden relative">
                        <div>
                            <span className="text-xl font-bold text-[#686d74] capitalize">{items.name}</span>
                            <div className="font-black text-[#EAE9E7] text-[40px] leading-8 italic ml-2" style={{fontFamily:'sans-serif'}}>#{splitUrl(items.url)}</div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0"><img src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${splitUrl(items.url)}.png`} className="w-24" alt=""/></div>
                </div>
            </Link>
        ))
        
    );
}

export default CardPokemon;