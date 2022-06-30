import React, { useEffect, useState } from 'react';
import MegaEvolution from '../../../assets/images/Mega-Evolution-Sigil.png'
import { splitUrl } from '../../../helpers/utils';

const EvolutionMega=({evoluMega})=>{
    const [evolutionMega,setEvolutionMega]=useState([])
    const [evoluGmax,setEvoluGmax]=useState([])
    
    useEffect(()=>{
        if(evoluMega){
            //filter name mega and gmax
            const MegaEvolu = evoluMega.filter(item => item.pokemon.name.includes('mega'));
            const GmaxEvolu = evoluMega.filter(item => item.pokemon.name.includes('gmax'));
            setEvolutionMega(MegaEvolu)
            setEvoluGmax(GmaxEvolu)
        }
    },[evoluMega])

    if (!evoluMega || evoluMega.length<2){
        return(<div></div>)
    }

    return (
        <>
            <div className="relative">
                {evolutionMega.length>0 &&
                    <>
                        <h3 className="text-center text-2xl font-bold my-5">Mega </h3>
                        <div>
                            <div className="m-auto table relative after-right-arrow-mega "><img src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${splitUrl(evoluMega[0]?.pokemon.url)}.png`} className="max-w-[110px]" alt=""/></div>

                            <div className="m-auto table my-10">
                                <div className={`relative ${evolutionMega.length>1 ?'after-arrow-mega' : 'after-right-arrow-mega after:left-[10px]'} `}><img src={MegaEvolution} className="w-[40px]" alt=""/></div>
                            </div>
                            <div className={`flex ${evolutionMega.length>1 ? 'justify-between' :'justify-center'}`}>
                                {evolutionMega.map((items,index)=>
                                    (items.pokemon.name.includes('mega')) &&
                                        <div key={index} className="">
                                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${splitUrl(items.pokemon.url)}.png`} className="max-w-[130px]" alt=""/>
                                            <div className="text-xs bg-[#F4F6FC] capitalize rounded-full text-center py-1 px-2">{items.pokemon.name}</div>
                                        </div>
                                )}
                            </div>
                        </div>
                        <div className="absolute top-[85px] left-0 opacity-[.03] w-full -z-[1]">
                            <svg className="w-full h-full" width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <path d="M28.3718079,0 C26.8818246,4.31772675 27.0962953,7.83695773 29.01522,10.5576929 C31.893607,14.6387958 37.9377485,19.8145261 40.2904175,23.0823112 C42.6430865,26.3500963 43.3058898,34.4047656 37.3988336,39.0668285 C33.4607962,42.1748705 28.1277117,45.1525934 21.3995802,48 C21.9747638,44.4364761 21.782602,41.5423633 20.8230948,39.3176587 C19.383834,35.9806017 17.6134408,34.3581885 15.0803255,31.855033 C13.8416657,30.631023 11.5874934,29.0711059 9.63508916,27.0256836 L9.61177851,27.0101739 C7.58349645,24.8705554 5.88435739,22.2092488 6.00616833,18.8515811 C6.24532694,12.259274 11.2265155,7.35917973 17.6134408,4.42548299 L18.4379455,4.04895978 C22.3362886,2.27931715 25.647576,0.929663892 28.3718079,0 Z M22.2351428,33.561002 L22.3123485,33.6628124 C23.226378,34.8999711 23.9679326,36.1963902 24.6336005,37.7398018 C25.1342167,38.9005258 25.4775558,40.1545856 25.6709862,41.5015074 L25.6779192,41.5513427 L25.7933791,41.4930418 C28.5280588,40.1077382 30.913505,38.7032666 32.9483652,37.2843099 C28.373066,35.7705746 24.8052889,34.530496 22.2351428,33.561002 Z M10.1424158,19.3784838 L10.1436334,19.4529244 C10.2192719,20.931272 10.9299718,22.3504372 12.3321124,23.9064439 L11.8591736,23.6071124 C16.0132417,26.2409704 19.5733601,28.1442316 22.5217688,29.3161913 L22.9230236,29.4732186 C25.7460083,30.5669116 30.1238518,32.0871452 36.0436169,34.0284574 L36.442348,34.1588243 C37.1339509,33.1424167 37.5722497,31.9744017 37.7599736,30.7038001 L38.4557267,30.8958576 C33.1087351,29.4283756 28.6255984,28.0533421 25.0016588,26.7682724 L24.7762813,26.6880726 C21.251731,25.4294588 16.3872442,22.9960978 10.1424158,19.3784838 Z M11.107221,15.2245057 L10.8997793,15.1025188 C17.5995802,19.0410798 22.7138174,21.6373755 26.1927852,22.8797119 L26.6325223,23.0356355 C29.609429,24.0838623 33.1975166,25.2013347 37.3940482,26.3865928 C37.2655605,26.0285433 37.1151077,25.7195831 36.9509667,25.4774021 L36.9100871,25.418864 C36.2398889,24.4879792 35.9239958,24.1106849 33.4859382,21.5982685 L30.091264,20.1466547 C27.0796243,18.8565363 24.342157,17.6760209 21.878774,16.6050682 C18.7322959,15.2371406 16.0612937,13.6368897 13.8717746,11.7977866 L13.7796562,11.7173476 C12.6198993,12.8017377 11.7217957,13.9778118 11.107221,15.2245057 Z M23.2995363,6.346264 L23.2012697,6.38826622 C21.9965158,6.90653554 20.7189834,7.47568831 19.3693292,8.09562294 C18.5977995,8.45000849 17.8700159,8.82649127 17.1877458,9.22336945 C18.9421494,10.5894535 21.0636322,11.8162201 23.5565176,12.899999 L25.9990838,13.9589605 L26.6534002,14.242332 C26.2741417,13.7686593 25.9290412,13.3116392 25.6120177,12.8621495 C24.2774171,10.9698944 23.5227228,8.85297827 23.3161871,6.55103818 L23.2995363,6.346264 Z" fill="#000000" fill-rule="nonzero"></path>
                                </g>
                            </svg>
                        </div>
                    </>
                }
            </div>
            <div className="relative">
                {evoluGmax.length>0 &&
                    <>
                        <h3  className="text-center text-2xl font-bold my-5 mt-10">Dynamax</h3>
                        <div>
                            <div>
                                {evoluGmax.map((items,index)=>(
                                    <div key={index}>
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${splitUrl(items.pokemon.url)}.png`} alt=""/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    );
}

export default EvolutionMega;