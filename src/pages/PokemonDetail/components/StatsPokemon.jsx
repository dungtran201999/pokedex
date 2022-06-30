import React, { useEffect, useState } from 'react';


const StatsPokemon=({stats})=>{
    const [biggerNumber,setBiggerNumber]=useState(0)
    const IconBaseStats=(stats)=>{
        switch (stats) {
            case 'hp':
                return <i className="far fa-heart-rate text-[#FF380C] text-lg"></i>;
            case 'attack':
                return <i className="fas fa-bolt text-[#FFB601] text-lg"></i>;
            case 'defense':
                return <i className="far fa-shield text-[#5EDAFA] text-lg"></i>;
            case 'speed':
                return <i className="far fa-wind text-[#45C79D] text-lg"></i>;
            default:
                return;
        }
    }
    const NameBaseStats=(stats)=>{
        switch (stats) {
            case 'hp':
                return 'HP';
            case 'attack':
                return 'ATK';
            case 'defense':
                return 'DEF';
            case 'speed':
                return 'SPD';
            case 'special-attack':
                return 'S.ATK';
            case 'special-defense':
                return 'S.DEF';
            default:
                return;
        }
    }

    useEffect(()=>{
        if(!stats) return

        const number= Math.max.apply(Math, stats?.map(function(o) { return o.base_stat }))
        setBiggerNumber(number)

    },[stats])
    return (
        <div>
            <div className="flex justify-between mb-5">
                {stats?.map((items,index)=>
                    (items.stat.name==='hp' || items.stat.name==='attack' || items.stat.name==='defense' || items.stat.name==='speed') &&
                        <div key={index} className="grid bg-[#F4F6FC] py-4 rounded-xl text-center w-[78px]">
                            <span>{IconBaseStats(items.stat.name)}</span>
                            <span className="capitalize text-xs">{items.stat.name}</span>
                            <span className="font-bold text-lg">{items.base_stat}</span>
                        </div>
                )}
            </div>
            <div className="">
                {biggerNumber>0 &&
                    stats?.map((items,index)=>(
                        <div key={index} className="text-sm flex items-center mb-3">
                            <div className="w-[140px] mr-2 flex justify-between"><span>{NameBaseStats(items.stat.name)}</span> <span className="text-xs">{items.base_stat}</span></div>
                            <div className="w-full bg-gray-200 rounded-full">
                                <div className={`bg-[#5FA8DE] text-xs font-medium rounded-full text-blue-100 text-center p-[0.01rem] leading-none rounded-l-full h-[8px]`} style={{width:`${(items.base_stat/biggerNumber)*100}%`}}></div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default StatsPokemon;
