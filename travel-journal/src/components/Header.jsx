import globe from '../assets/images/globe.png'

export default function Header() {
    return (
        <header>
           <img src={globe} alt="Globe Logo" className='logo' />
           <h1>Travel Journal</h1>
        </header>
    );
}