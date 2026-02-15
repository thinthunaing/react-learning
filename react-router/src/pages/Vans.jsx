import {useEffect, useState} from 'react';


export default function Vans(){

    const [vans,setVans] = useState([])

    useEffect(()=>{
        fetch("./api/vans")
            .then(res => res.json())
            .then(data =>setVans(data.vans))
    },[])

    const vansElement = vans.map( van => {
        return (
            <div className='van-tile' key={van.id}>
                <img src={van.imageUrl}/>
                <div className='van-info'>
                    <h3>{van.name}</h3>
                    <p>{van.price} <span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </div>
        )
    })
    return (
        <div className='van-list-container'>
            <h1>Explore our vans options</h1>
            <div className='van-list'>
                {vansElement}
            </div>
        </div>
    )
}