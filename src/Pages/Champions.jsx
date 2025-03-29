import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import('./Champions.css')

function Champions() {

  const [Champions, setChampions] = useState([]);
  const [filter, setFilter] = useState("All");
  const [filteredchampions, setFilterChampions] = useState(Champions);


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


      setChampions(championsArray);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  useEffect(() => {
    fetchData();
  }, []);




  useEffect(() => {
    if (filter === 'All') {
      setFilterChampions(Champions);
    } else {
      setFilterChampions(Champions.filter((champ) => champ.Position === filter));
    }
  }, [filter, Champions]);

  const handleFilterClick = (role) => {
    if (filter === role) {
      setFilter('All'); 
    } else {
      setFilter(role); 
    }
  };




  console.log('this is the filtered champions : ', filteredchampions)
  console.log("Filter : ", filter);
  console.log("champ position : ", Champions.Position);
  return (
    <>
    <Navbar/>
    <div className='flex justify-center bg-black min-h-screen'>
      <div className='w-[1000px] p-3 mt-10'>
        <div className='Champions-header'>
          <h1 >LoL Champions Search</h1>
          <p >Discover the best builds for every champion</p>
        </div>
        <div className='Choise-container mt-8 mb-4 flex gap-2'>
          <p className='border-solid border-b-2'>Champions</p>
          <Link to={"/Items"}><p >Items</p></Link>
        </div>
        <div>
          <div class="role-filter-container   gap-2 bg-gray-800 p-4">
            <div className='flex gap-4  w-max'>
            <a className={`transition-opacity duration-200 ${filter === 'All' ? 'opacity-120' : 'opacity-30'}`} onClick={() => handleFilterClick('All')}><img width="25" height="25" src="https://cdn5.runes.lol/lane27/all.webp" srcset="https://cdn5.runes.lol/lane27/all.webp 27w,
                 https://cdn5.runes.lol/lane54/all.webp 54w" alt="default" /></a>
              <a className={`transition-opacity duration-200 ${filter === 'Top' ? 'opacity-120' : 'opacity-30'}`} onClick={() => handleFilterClick('Top')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height={25} width={25}><g fill="none" fill-rule="evenodd"><path fill="#7878B5" d="M5.867 10.133h4.266V5.867H5.867z"></path><path fill="#7878B5" d="M16 16V1.25L13.172 4.08v9.093H4.078L1.25 16z"></path><path fill="#FFF" d="M0 0v14.75l2.828-2.829V2.828h9.094L14.75 0z"></path></g></svg></a>
              <a className={`transition-opacity duration-200 ${filter === 'Jungle' ? 'opacity-120' : 'opacity-30'}`} onClick={() => handleFilterClick('Jungle')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height={25} width={25}><path d="M3.078 0s8.57 8.931 5.13 16c0 0-2.414-3.123-5.31-4.548 0 0 .482-4.22-2.898-7.014 0 0 4.587 1.973 5.553 5.041 0 0 1.086-4.383-2.475-9.479zM16 4s-3.44 3.068-2.837 6.85c0 0-2.414 1.424-2.836 2.3 0 0 .241-6.63 5.673-9.15zm-3.393-4s-2.656 4.603-2.414 8c0 0-.543.767-.725 1.425 0 0-.663-2.52-1.207-3.124l.016-.03c.202-.386 2.32-4.395 4.33-6.271z" fill="#FFF" fill-rule="evenodd"></path></svg></a>
              <a className={`transition-opacity duration-200 ${filter === 'Mid' ? 'opacity-120' : 'opacity-30'}`} onClick={() => handleFilterClick('Mid')}><svg height={25} width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path fill="#565691" d="M8.305 2.828L11.133 0H0v11.133l2.828-2.828V2.828zM7.695 13.172L4.867 16H16V4.867l-2.828 2.828v5.477z"></path><path fill="#FFF" d="M13.371 0L0 13.371v2.63h2.629L16 2.628V0z"></path></g></svg></a>
              <a className={`transition-opacity duration-200 ${filter === 'ADC' ? 'opacity-120' : 'opacity-30'}`} onClick={() => handleFilterClick('ADC')}><svg height={25} width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path fill="#565691" d="M10.133 5.867H5.867v4.266h4.266z"></path><path fill="#565691" d="M0 0v14.75l2.828-2.829V2.828h9.094L14.75 0z"></path><path fill="#FFF" d="M16 16V1.25L13.172 4.08v9.093H4.078L1.25 16z"></path></g></svg></a>
              <a className={`transition-opacity duration-200 ${filter === 'Support' ? 'opacity-120' : 'opacity-30'}`} onClick={() => handleFilterClick('Support')}><svg height={25} width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.43 5.67l1.703 8.616L8 16l-2.133-1.714L7.57 5.67 8 6.249l.43-.578zM16 3.404c-.304 2.498-4.119 2.261-4.119 2.261l1.75 2.315-2.81 1.13L9.6 5.234l1.857-1.83zm-11.457 0L6.4 5.233 5.18 9.11 2.368 7.98l1.75-2.316S.305 5.901 0 3.403h4.543zM9.998 0l.669 1.185L8 4.456 5.333 1.185 6.003 0h3.995z" fill="#FFF" fill-rule="evenodd"></path></svg></a>
            </div>
          </div>
        </div>
        <div className=' bg-black w-full text-white flex justify-center'>

          <div className='Champions-Container'>

            <div className='Champions-Container pl-4 pr-4 p-2 bg-gray-800 grid  gap-4 '>

              {Champions.length > 0 ? (
                filteredchampions.map((champ, index) => {

                  const name = champ?.name ?? `Champion ${index}`;
                  return (
                    <Link to={`/ChampionBuild/${name}`} state={{ imageUrl: champ.image_url }} >
                      <div className='champion-card' key={name}>
                        <div className='champion-image'>
                          <img src={champ.image_url} className='h-34 w-52 ' loading='lazy' />
                        </div>

                        <p className='p-0.5'>{name.substr(0, 8)}</p>
                      </div>
                    </Link>
                  )
                })
              ) : (
                <p>Loading ...</p>
              )}</div>

          </div>
        </div>

      </div>
    </div>
    <Footer />
    </>
  )
}

export default Champions;