import React, { useEffect, useState } from 'react';
import { splitUrlChain } from '../../../helpers/utils';

const Evolution=({evolutionChain})=>{
    const [dataEvolution,setDataEvolution]=useState(null)

    // if(!evolutionChain) return {};

    useEffect(()=>{
        (async()=>{
            const result = await fetch(evolutionChain?.url);
            const data = await result.json();
            setDataEvolution(data.chain)
        })()

    },[evolutionChain])
    return (
        <div>
            <h3 className="text-center text-2xl font-bold my-5">Evolution</h3>
            {dataEvolution?.evolves_to.length>0 ?
                <div className="flex justify-between my-7 items-center relative">
                    <div className="">
                        <img src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${splitUrlChain(dataEvolution?.species?.url)}.png`} className="max-w-[110px]" alt=""/>
                    </div>
                    <div className="text-xs text-[#ABABAB] after-right-arrow">LV {dataEvolution?.evolves_to[0]?.evolution_details[0]?.min_level}</div>
                    <div><img src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${splitUrlChain(dataEvolution?.evolves_to[0]?.species?.url)}.png`} className="max-w-[110px]" alt=""/></div>
                </div>
                :
                <div className="text-center">
                    <img src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${splitUrlChain(dataEvolution?.species?.url)}.png`} className="max-w-[110px] inline" alt=""/>
                </div>
            }
            
            {dataEvolution?.evolves_to[0]?.evolves_to.length>0 &&
                <div className="flex justify-between my-7 items-center relative">
                    <div><img src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${splitUrlChain(dataEvolution?.evolves_to[0]?.species?.url)}.png`} className="max-w-[110px]" alt=""/></div>
                    <div className="text-xs text-[#ABABAB] after-right-arrow">LV {dataEvolution?.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.min_level}</div>
                    <div><img src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${splitUrlChain(dataEvolution?.evolves_to[0]?.evolves_to[0]?.species?.url)}.png`} className="max-w-[110px]" alt=""/></div>
                </div>
            }
        </div>
    );
}

export default Evolution;