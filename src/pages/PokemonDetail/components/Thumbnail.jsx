import React from 'react';
import { formatNUmber } from '../../../helpers/utils';
import { Link } from 'react-router-dom';

const Thumbnail=({id})=>{
    
    return (
        <div className="relative">
           
            <div className="clip-path-bg"></div>
            {/* <div className="electric"></div> */}
            <div className="flex justify-between items-center text-white">
                <Link to={'/'}>
                    <div className="flex items-center text-sm"><i className="fal fa-angle-left text-2xl mr-2"></i>Pokédex</div>
                </Link>
                <div>
                    <ul className="flex items-center">
                        <li><i className="fal fa-heart text-lg mr-2"></i></li>
                        <li><i className="fal fa-star text-lg mr-2"></i></li>
                        <li><i className="fal fa-cog text-lg"></i></li>
                    </ul>
                </div>
            </div>
            <div className="">
                <div className="after-ball-pokemon">
                    <img src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${formatNUmber(id)}.png`} alt=""/>
                </div>
            </div>
            
        </div>
    );
}

export default Thumbnail;