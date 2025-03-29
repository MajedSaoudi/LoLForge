import React, { useState, useEffect } from 'react';
import './HomePage.css'
import logo from '../Assets/Images/Logo.png';
import wallpaper from '../Assets/Images/Wallpaper.jpg';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
function HomePage() {
  const [champions, setChampions] = useState([]);
  const [search, setSearch] = useState('');
  async function fetchData() {
    try {
      const baseurl = 'https://lolbuildmaster-default-rtdb.europe-west1.firebasedatabase.app/Champions.json';
      const response = await fetch(baseurl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonData = await response.json();
      console.log('Raw JSON data from API:', jsonData);

      // Convert object to array if needed
      let championsArray;
      if (Array.isArray(jsonData)) {
        championsArray = jsonData;
      } else if (jsonData && typeof jsonData === 'object') {
        championsArray = Object.values(jsonData);
        console.log('converted ');

      } else {
        championsArray = [];
      }

      console.log('Processed championsArray:', championsArray);
      setChampions(championsArray);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  useEffect(() => {
    fetchData();
  }, []);

  const ShowedChampions = champions.slice(0, 20)
  const SearchedChampions = champions.filter((champ) => {
    if (!search.trim()) return false; 
    return champ.name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '')
      .includes(search.toLowerCase().trim().replace(/\s+/g, ''));
  });
  
  const [Show,setShow] = useState(true)
  useEffect(()=>{
    if(search !== ""){
      setShow(false);
    }else{
      setShow(true);
    }
  },[search])
 
  return (
    <>
         <Navbar />
      <div className='' style={{


      }}>
        <div className='background-wallpaper flex justify-center  p-6' style={{

          backgroundImage: `url(${wallpaper})`,
          backgroundPosition: 'top',
          backgroundSize: 'cover',
        

          width: '100%',

        }}>
          <div className='h-44  w-auto mt-16' >
            <div className='w-full flex justify-center mb-4'>
              <Link to='/'>
                <img src={logo} className=' ' />
              </Link>
            </div>
           <div className='flex justify-center w-[100%]'>
            <div className='search-container flex items-center bg-white p-4 rounded-md'>
              <input onChange={(e) => setSearch(e.target.value)} value={search} type='text' placeholder='Search For A Champion' className='search-input  text-black ' />
              <svg className='w-6 h-6 bg-white' fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z" fill="#626696"></path></svg>
            </div>
            </div>
            <div className=' w-full  mx-auto  bg-black/80 z-10 '>
            {
              SearchedChampions.slice(0, 5).map((champ) => (
                <Link to={`/ChampionBuild/${champ.name}`} >
                <div className='flex justify-between items-center p-2 bg-black text-white align-middle hover:bg-slate-800'>
                  <div className='flex justify-between w-full h-full items-center' >
                    <p>{champ.name}</p>
                    <img className='w-12 h-12' src={champ.image_url} alt={`${champ.name} image`} />
                  </div>

                </div>
                </Link>
              ))
          }
          </div>
            <div className='flex justify-center mt-12 w-[100%]' style={{display : search? 'none' : 'flex'}}>
            <iframe src="https://www.youtube.com/embed/aR-KAldshAE?autoplay=1&loop=1&playlist=aR-KAldshAE&mute=1&controls=0" className="Homepage-video h-80 rounded-xl" frameborder="0" allowfullscreen autoPlay></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className=' bg-black w-full text-white flex justify-center'>
       <div className='Champion-Session mt-10 mb-4'>
         <h1>Champions</h1>
        <div className='Champions-Container p-4 mt-4 bg-gray-800 grid  gap-4 '>
          
          {ShowedChampions.length > 0 ? (
            ShowedChampions.map((champ, index) => {

              const name = champ?.name ?? `Champion ${index}`;
              return (
                <Link to={`/ChampionBuild/${name}`} state={{ imageUrl: champ.image_url }} >
                <div className='champion-card' key={name}>
                  <div className='champion-image'> 
                  <img src={champ.image_url}  className='h-34 w-52 ' loading='lazy'/>
                  </div>
                  
                  <p className='p-0.5'>{name.substr(0, 9)}</p>
                </div>
                </Link>
              )
            })
          ) : (
            <p>No champions available</p>
          )}</div>
          <div className='flex justify-center bg-gray-800  pb-2'>
            <Link to='/Champions'>
          <button className='bg-gray-700 p-3 hover:opacity-70'>See All </button>
          </Link>
          </div>
          </div>
      </div>
      <Footer/>
    </>
  );
}

export default HomePage;