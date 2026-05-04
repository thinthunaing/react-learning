import {useEffect, useState} from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getVans } from '../../api';


export default function Vans(){

    const [vans,setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
   

    useEffect(()=>{
        async function loadVans(){
            const data = await getVans()    
            setVans(data)
        }
        loadVans()
    },[])

    const typeFilter = searchParams.get("type")

    const displayedVans = typeFilter ? vans.filter(
        van => van.type.toLowerCase() === typeFilter.toLowerCase()
    )
    : vans
 
    const vansElement = displayedVans.map( van => {
        return (
          
            <div className='van-tile' key={van.id}>
                <Link to={van.id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
                <img src={van.imageUrl}/>
                <div className='van-info'>
                    <h3>{van.name}</h3>
                    <p>{van.price} <span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
            </div>
            
        )
    })

    function handleFilterChange(key,value){
        setSearchParams( prev => {
            if( value === null){
                prev.delete(key)
            }else{
                prev.set(key,value)
            }
            return prev
        })

        
    }

    return (
        <div className='van-list-container'>
            <h1>Explore our vans options</h1>
            <div className="van-list-filter-buttons">
               <button onClick={ () => handleFilterChange("type", "simple")} className={typeFilter === "simple" ? "selected" : null}>
                    Simple
               </button>
                <button onClick={ () => handleFilterChange("type", "luxury")} className={typeFilter === "luxury" ? "selected" : null}>
                    Luxury
                </button>
                <button onClick={ () => handleFilterChange("type", "rugged")} className={typeFilter === "rugged" ? "selected" : null}>
                    Rugged
                </button>
                { typeFilter && (
                    <button onClick={ () => handleFilterChange("type", null)}>
                        Clear filter
                    </button>
                )}
            </div>
            <div className='van-list'>
                {vansElement}
            </div>
        </div>
    )
}