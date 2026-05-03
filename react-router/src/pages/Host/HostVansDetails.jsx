import {useState, useEffect} from "react"
import { useParams,Link, Outlet, NavLink} from "react-router-dom"


export default function(){
    const [currentVan, setCurrentVan] = useState(null)
    const {id} = useParams()
    useEffect(
        () => {
            fetch(`/api/host/vans/${id}`)
                .then(res => res.json())
                .then(data => setCurrentVan(data.vans))
        }, [id]
    )

   

    if(!currentVan) return <h2>Loading...</h2>

    return(
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
            </div>

             <nav className="host-van-detail-nav">
                    <NavLink
                        to="."
                        end
                        className={({ isActive }) => isActive ? "my-link" : null}
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        className={({ isActive }) => isActive ? "my-link" : null}
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                        className={({ isActive }) => isActive ? "my-link" : null}
                    >
                        Photos
                    </NavLink>
                </nav>
            <Outlet context={{currentVan}}/>
        </section>
    )
}