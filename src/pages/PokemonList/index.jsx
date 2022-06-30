import React, { useEffect,useState, useRef } from 'react';
import LogoPokemon from '../../assets/images/logo-pokemon.png'
import ListIcon from '../../assets/images/list-format.svg'
import { formatNUmber, getListPokemon ,splitUrl} from '../../helpers/utils';
import CardPokemon from './CardPokemon';

const Home=()=> {
    const prevScrollY = useRef(0);
    const [loadingApi,setLoadingApi]=useState(false)
    const [fetchApi,setfetchApi]=useState(false)
    const [limit,setLimit]=useState(20)
    const [dataPokemon,setDataPokemon]=useState([])

    useEffect(async()=>{
        const {results} = await getListPokemon(limit)
        if(results.length>0){
            setDataPokemon(results)
        }        
    },[limit])

    useEffect(() => {
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        prevScrollY.current = currentScrollY;
        if(!fetchApi){
            if(window.innerHeight + currentScrollY > document.scrollingElement.scrollHeight-70){
                console.log('loading...');
                // setLoadingApi()
                setLimit((prev)=> prev+20)
                setfetchApi(true)
            }
        }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollY]);



    return (
        <div
         className="p-5 text-sm  overflow-hidden">
            <div className="relative">
                <div className="flex justify-between items-center mb-5 ">
                    <div>
                        <img src={LogoPokemon}  className="w-[150px]" alt=""/>
                    </div>
                    <div className="after-ball-img">
                        <img src={ListIcon} className="w-[30px]" alt=""/>
                    </div>
                </div>
                <div className="bg-[#E9EAEC] rounded-full px-4 py-2 flex justify-between items-center mb-5 ">
                    <i className="far fa-search text-[#AEB0B2]"></i>
                    <input className="bg-transparent outline-none w-[93%] text-sm" placeholder="Search for a Pokemon" type="text" name="" id=""/>
                </div>
                <span className="text-sm">
                    The Pokedex contains detailed for every creature from the Pokemon games.
                </span>
            </div>
            <div className="mt-4">
                <CardPokemon data={dataPokemon} />
            </div>
        </div>
    );
}

export default Home;