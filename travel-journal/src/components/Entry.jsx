import marker from '../assets/images/marker.png'

export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className='main-image-container'>
                <img src={props.image.src} alt={props.image.alt} className="main-image" />
            </div>
            
            <div className="entry-details">
                <div className="entry-location">
                    <img src={marker} className="marker"  alt='location-marker-icon'/>
                    <span className="location-icon">{props.location}</span>
                    <a href={props.mapsLink} className="maps-link" target="_blank">View on Google Maps</a>
                </div>
                <h2 className="entry-title">{props.title}</h2>
                <p className="entry-dates">{props.dates}</p>
                <div className="entry-description">
                    <p>{props.description}</p>
                </div>
            </div>
        </article>
    );
}