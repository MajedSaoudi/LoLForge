import { useState } from 'react';
import { Link } from 'react-router-dom';

function ChampionCard({ item }) {


const capitalizeFirstLetter = (str) => {
    if (!str) return ''; 
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };




  const rawName = item.name.replace("'", "");
  const championName = capitalizeFirstLetter(rawName);
  const pngUrl = `https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/champion/${championName}.png`;
  const webpUrl = `https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/champion/${championName}.webp`;

  const [imgSrc, setImgSrc] = useState(pngUrl);

  const handleImageError = () => {
    setImgSrc(webpUrl);
  };

  return (
    <div className="Champ-card">
    
        <div className='flex justify-center text-center'>
        <div >
          <>
          <a href={`/ChampionBuild/${item.name}`}> 
          <div className='flex justify-center rounded-lg'>
            <img src={imgSrc} onError={handleImageError} alt={item.name} state={{Secimg :imgSrc}} loading='lazy'/>
            </div>
            <p className='mb-3 mt-1'>{item.name}</p>
            <hr />
            <div className='mt-3 text-sm'>
              <p style={{color : item.win_rate.replace("%","") > 45? '#fcb1b2' : '#ff4e50' }}>{item.win_rate}</p>
              <p className='text-gray-500'>2140 Matches</p>
            </div>
            </a>
          </>
        </div>
        </div>
    
    </div>
  );
}

function ChampionMatchups({ champion }) {
  return (
    <>
      {champion[0].toughest_matchup.map((item, index) => (
        <ChampionCard key={index} item={item} />
      ))}
    </>
  );
}

export default ChampionMatchups;