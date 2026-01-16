import './App.css';
import Header from './components/Header';
import Entry from './components/Entry'; 
import data from './data';

function App() {
 
  const entries = data.map(entry => {
    return (
      <Entry 
        key={entry.id}
        image={entry.img}
        location={entry.country}
        mapsLink={entry.googleMapsLink}
        title={entry.title}
        dates={entry.dates}
        description={entry.text}
      />
    )
  })

  return (
    <>
    
      <Header />
      <main className='container'>
        {entries}

      </main>
     
    </>
  )
}

export default App
