import { useEffect, useState } from 'react';
import './ChampionBuild.css'
import { useLocation, useParams } from 'react-router-dom';
import logo from '../Assets/Images/loader.png';
import ChampionMatchups from '../Components/ChampionMatchups';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function ChampionBuild() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  const name = useParams();
  async function fetchData() {

    try {
      const baseurl = 'https://lolbuildmaster-default-rtdb.europe-west1.firebasedatabase.app/Build.json';
      const response = await fetch(baseurl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonData = await response.json();


      let dataArray;
      if (Array.isArray(jsonData)) {
        dataArray = jsonData;
      } else if (jsonData && typeof jsonData === 'object') {
        dataArray = Object.values(jsonData);
      } else {
        dataArray = [];
      }

      // Additional validation: Ensure dataArray is an array of objects
      if (!Array.isArray(dataArray)) {
        dataArray = [];
      }


      setData(dataArray);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  const champion = data.filter((champ) => champ.name === name.name);
  const getChampionName = () => {
    if (!champion?.[0]?.name) return 'Default';
    return champion[0].name
      .replace(/'/g, '')
      .toLowerCase()
      .replace(/\b\w/g, char => char.toUpperCase());
  };

  const champName = getChampionName();
  const baseUrl = 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/champion/';
  const primaryImg = `${baseUrl}${champName}.png`;
  const fallbackImg = `${baseUrl}${champName}.webp`;
  const [img, setImg] = useState(primaryImg);

  // Handle image loading error with fallback
  const handleImageError = () => {
    if (img !== fallbackImg) {
      setImg(fallbackImg);
    }
  };




  return (
    <div style={{ height: "100%" }}>
      <div className='ChampionBuild'>

        {data.length > 0 ? (




          <>
           <Navbar/>
            <div className='background-wallpaper text-white flex justify-center  p-6' style={{

              backgroundImage: `url(${champion?.[0]?.background_image
                })`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '100%',

            }}>
           
            </div>
            <div className='flex justify-center text-white'>
              <div key={champion[0].id} className='Champion-container mt-36 justify* flex '>
                <div className='Champion-image flex justify-center w-full'>
                  <img
                    src={img}
                    onError={handleImageError}
                  />

                </div>

                <div className='Championbuild-container'>
                  <div className=' flex justify-center w-full gap-3 items-center mt-20'>
                    <h1 className='text-2xl'>{champion[0].name}</h1>
                    <span className='text-2xl'>|</span>
                    <h1 className='text-2xl'>{champion[0].winrate}</h1>
                  </div>
                  <div className=' text-center text-lg'>
                    <h1 >Build For <span className='text-gray-400'>{champion[0].Position}</span> </h1>
                  </div>
                  <div className='flex mt-4 justify-center gap-6'>

                    <img src={champion[0].Allskills[0].image_url}
                      className=' lg:h-16 lg:w-16 sm:w-14  sm:h-14 md:w-14 md:h-14' />
                    <img src={champion[0].Allskills[1].image_url}
                      className=' lg:h-16 lg:w-16 sm:w-14  sm:h-14 md:w-14 md:h-14' />
                    <img src={champion[0].Allskills[2].image_url}
                      className=' lg:h-16 lg:w-16 sm:w-14  sm:h-14 md:w-14 md:h-14' />
                    <img src={champion[0].Allskills[3].image_url}
                      className=' lg:h-16 lg:w-16 sm:w-14  sm:h-14 md:w-14 md:h-14' />

                  </div>

                  <hr className='w-full h-4 border-solid border-blue-50 mt-4' />
                  <div className='flex justify-center '>
                    <div >
                      <h1 className='Header'>Skills Priority</h1>
                      <div className='flex gap-2 items-center'>
                        <div className='Skills-image-wrapper'>
                          <img src={champion[0].skills[1].image_url} />
                          <b className='Skills-Letter'>{champion[0].skills[1].letter}</b>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" class="arrow-right" height={15} width={15}><path d="M6 12l6-6-6-6-1.053 1.053 4.176 4.21H0v1.474h9.123l-4.21 4.21z" fill="#FFF" fill-rule="nonzero"></path></svg>
                        <div className='Skills-image-wrapper'>
                          <img src={champion[0].skills[0].image_url} />
                          <b className='Skills-Letter '> {champion[0].skills[0].letter}</b>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" class="arrow-right" height={15} width={15}><path d="M6 12l6-6-6-6-1.053 1.053 4.176 4.21H0v1.474h9.123l-4.21 4.21z" fill="#FFF" fill-rule="nonzero" ></path></svg>
                        <div className='Skills-image-wrapper'>
                          <img src={champion[0].skills[2].image_url} />
                          <b className='Skills-Letter  text-lg'>{champion[0].skills[2].letter}</b>
                        </div>

                      </div>
                      <div className='text-center mt-6 text-base'>
                        <p>51.36% Win Rate</p>
                        <p>28,060 Matches</p>
                      </div>
                    </div>
                  </div>
                  <hr className='w-full h-4 border-solid border-gray-500 mt-4' />

                  <div className='sm:text-center'>
                    <h1 className='Header'>Runes</h1>
                    <div className='flex p-1 bg-gray-600 w-max'>
                      <button className='bg-gray-600 ml-2'>Recommended</button>
                      <img className='h-8' src={champion[0].runes.primary_tree.image_url} />
                      <img className='h-8' src={champion[0].runes.secondary_tree.image_url} />
                    </div>
                    <div className='mt-4 flex justify-around  lg:justify-between sm:justify-around'>
                      <div className='flex gap-4 items-center ml-2'>
                        <h1 className=' sm:text-sm md:text-lg text-sm w-max'>{champion[0].name} Runes</h1>
                        <p className='text-sm text-gray-400'>{champion[0].name} {champion[0].Position} Build</p>
                      </div>

                      <h1 className='sm:text-sm md:text-lg text-sm max-w-full text-wrap'>
                        50.6% WR(492 Matches)
                      </h1>


                    </div>
                    <div className='RunesTab-Container'>
                      
                        <div>
                          
                        <div className='Runes-Header flex items-center pl-3 pr-6 bg-gray-700 w-max mt-4'>
                          
                          <img className='h-12 mr-2' src={champion[0].runes.primary_tree.image_url} title={champion[0].runes.primary_tree.header}/>
                          <h1>{champion[0].runes.primary_tree.header}</h1>
                        </div>
                        <div className='flex '>
                          <div>
                            <div className='first-row flex gap-2 ml-6 mt-4'>
                              {champion[0].runes.primary_tree.runes.slice(0, 4).map((rune, index) => {

                                return (
                                  <img
                                    key={index}
                                    src={rune.image_url}
                                    style={{
                                      filter: rune.active ? 'none' : 'grayscale(100%)'
                                    }}
                                    title={rune.name}
                                  />
                                );
                              })}
                            </div>
                            <hr className='w-full h-4 border-solid border-gray-500 mt-6' />
                            <div className='Runes-rows ml-2'>
                              <div className='Second-row flex gap-16 ml-6 mt-2'>
                                {champion[0].runes.primary_tree.runes.slice(4, 7).map((rune, index) => {

                                  return (
                                    <img loading='lazy'
                                      key={index}
                                      src={rune.image_url}
                                      style={{
                                        filter: rune.active ? 'none' : 'grayscale(100%)',
                                        border: rune.active ? '2px solid #3273fa' : 'none'
                                      }}
                                      title={rune.name}
                                    />
                                  );
                                })}
                              </div>
                              <div className='third-row flex gap-16 ml-6 mt-6'>
                                {champion[0].runes.primary_tree.runes.slice(7, 10).map((rune, index) => {

                                  return (
                                    <img loading='lazy'
                                      key={index}
                                      src={rune.image_url}
                                      style={{
                                        filter: rune.active ? 'none' : 'grayscale(100%)',
                                        border: rune.active ? '2px solid #3273fa' : 'none'
                                      }}
                                      title={rune.name}
                                    />
                                  );
                                })}
                              </div>
                              <div className='Fourth-row flex gap-16 ml-6 mt-6'>
                                {champion[0].runes.primary_tree.runes.slice(10, 13).map((rune, index) => {

                                  return (
                                    <img loading='lazy'
                                      key={index}
                                      src={rune.image_url}
                                      style={{
                                        filter: rune.active ? 'none' : 'grayscale(100%)',
                                        border: rune.active ? '2px solid #3273fa' : 'none'
                                      }}
                                      title={rune.name}
                                    />
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                     
                     
                        <div>
                        <div className='Runes-Header flex items-center pl-3 pr-6 bg-gray-700 w-max mt-4 mb-2'>
                          <img className='h-12 mr-2' src={champion[0].runes.secondary_tree.image_url} />
                          <h1>{champion[0].runes.secondary_tree.header}</h1>
                        </div>
                        <div className='flex '>
                          <div>


                            <div className='secondary-Runes-rows ml-2'>
                              <div className='Second-row flex gap-16 ml-6 mt-2'>
                                {champion[0].runes.secondary_tree.runes.slice(0, 3).map((rune, index) => {

                                  return (
                                    <img
                                      key={index}
                                      src={rune.image_url}
                                      style={{
                                        filter: rune.active ? 'none' : 'grayscale(100%)',
                                        border: rune.active ? '2px solid #3273fa' : 'none'
                                      }}
                                      title={rune.name}
                                    />
                                  );
                                })}
                              </div>
                              <div className='third-row flex gap-16 ml-6 mt-6'>
                                {champion[0].runes.secondary_tree.runes.slice(3, 6).map((rune, index) => {

                                  return (
                                    <img loading='lazy'
                                      key={index}
                                      src={rune.image_url}
                                      style={{
                                        filter: rune.active ? 'none' : 'grayscale(100%)',
                                        border: rune.active ? '2px solid #3273fa' : 'none'
                                      }}
                                      title={rune.name}
                                    />
                                  );
                                })}
                              </div>
                              <div className='Fourth-row flex gap-16 ml-6 mt-6'>
                                {champion[0].runes.secondary_tree.runes.slice(6, 9).map((rune, index) => {

                                  return (
                                    <img loading='lazy'
                                      key={index}
                                      src={rune.image_url}
                                      style={{
                                        filter: rune.active ? 'none' : 'grayscale(100%)',
                                        border: rune.active ? '2px solid #3273fa' : 'none'
                                      }}
                                      title={rune.name}
                                    />
                                  );
                                })}
                              </div>
                            </div>
                            <hr className='mt-6 border-gray-500' />
                            <div>
                              <div className=' shards-container flex  justify-center  ml-7'>
                                <img src="https://static.bigbrain.gg/assets/lol/riot_static/14.2.1/img/perk-images/StatMods/StatModsAdaptiveForceIcon.webp" alt="The Adaptive Force Shard" loading='lazy' />

                                <img src="https://static.bigbrain.gg/assets/lol/riot_static/14.2.1/img/perk-images/StatMods/StatModsAttackSpeedIcon.webp" alt="The Attack Speed Shard" loading='lazy' />
                                <img src="https://static.bigbrain.gg/assets/lol/riot_static/14.2.1/img/perk-images/StatMods/StatModsCDRScalingIcon.webp" alt="The Ability Haste Shard" loading='lazy' />
                              </div>
                              <div className='shards-container flex  justify-center  ml-7'>
                                <img class="" src="https://static.bigbrain.gg/assets/lol/riot_static/14.2.1/img/perk-images/StatMods/StatModsAdaptiveForceIcon.webp" alt="The Adaptive Force Shard" loading='lazy' />
                                <img class="" src="https://static.bigbrain.gg/assets/lol/riot_static/14.2.1/img/perk-images/StatMods/StatModsMovementSpeedIcon.webp" alt="The Move Speed Shard" />
                                <img class="" src="https://static.bigbrain.gg/assets/lol/riot_static/14.2.1/img/perk-images/StatMods/StatModsHealthPlusIcon.webp" alt="The Health Scaling Shard" loading='lazy' />
                              </div>
                              <div className='shards-container flex  justify-center  ml-7'>
                                <img class="" src="https://static.bigbrain.gg/assets/lol/riot_static/14.2.1/img/perk-images/StatMods/StatModsHealthScalingIcon.webp" alt="The Health Shard" loading='lazy' />
                                <img class="" src="https://static.bigbrain.gg/assets/lol/riot_static/14.2.1/img/perk-images/StatMods/StatModsTenacityIcon.webp" alt="The Tenacity and Slow Resist Shard" loading='lazy' />
                                <img class="" src="https://static.bigbrain.gg/assets/lol/riot_static/14.2.1/img/perk-images/StatMods/StatModsHealthPlusIcon.webp" alt="The Health Scaling Shard" loading='lazy' />
                              </div>


                            </div>
                          </div>
                        </div>
                      
                      </div>
                    </div>

                  </div>
                  <hr className='w-full h-4 border-solid border-gray-500 mt-4' />
                  <div className='text-center'>
                    <h1 className='Header'>Best items
                    </h1>
                    <div className='Cards-container '>
                      <div className='items-card '>
                        <h1>
                          Starting items
                          <div className='flex mt-4 justify-center gap-2'>
                            {champion[0].items.Starting_items.map((item, index) => (
                              console.log('the image position', item.image_position),
                              <img src={item.image_url} style={{
                                objectPosition: item.image_position,
                                width: "48px",
                                height: "48px",
                                objectFit: "none",
                              }} loading='lazy' />
                            )
                            )}

                          </div>
                          <div className='text-center mt-4'>
                            <p >48.71% WR</p>
                            <p >6,551 Matches</p>
                            <p className='text-gray-600 mt-4'>Best for most matchups                              </p>
                          </div>
                        </h1>
                      </div>
                      <div className='items-card '>
                        <h1>
                          Core items
                          <div className='flex items-center justify-center '>
                            <div className='flex mt-4 justify-center  items-center gap-1'>


                              <img src={champion[0].items.Core_items[0].image_url} style={{
                                objectPosition: champion[0].items.Core_items[0].background_position,
                                width: "48px",
                                height: "48px",
                                objectFit: "none",
                                transform: 'scale(0.9)'
                              }} loading='lazy' />

                              <p className='next'>&gt;</p>
                            </div>
                            <div className='flex mt-4 justify-center  items-center gap-1'>


                              <img src={champion[0].items.Core_items[1].image_url} style={{
                                objectPosition: champion[0].items.Core_items[1].background_position,
                                width: "48px",
                                height: "48px",
                                objectFit: "none",
                                transform: 'scale(0.9)'
                              }} loading='lazy' />

                              <p className='next'>&gt;</p>
                            </div>
                            <div className='flex mt-4 justify-center  items-center gap-1'>


                              <img src={champion[0].items.Core_items[2].image_url} style={{
                                objectPosition: champion[0].items.Core_items[2].background_position,
                                width: "48px",
                                height: "48px",
                                objectFit: "none",
                                transform: 'scale(0.9)'
                              }} loading='lazy' />


                            </div>
                          </div>
                          <div className='text-center mt-4'>
                            <p >58.35% WR
                            </p>
                            <p >4,327 Matches</p>
                            <p className='text-gray-600 mt-4'>Best for most matchups                              </p>
                          </div>
                        </h1>
                      </div>
                      <div className='items-card '>
                        <h1>
                          Fourth items
                          <div className='flex items-center justify-center gap-4'>
                            <div className='flex mt-4 justify-center  items-center gap-4'>


                              <img src={champion[0].items.Fourth_items[0].image_url} style={{
                                objectPosition: champion[0].items.Fourth_items[0].image_position,
                                width: "48px",
                                height: "48px",
                                objectFit: "none",
                              }} loading='lazy' />

                              <p className='next'>&gt;</p>
                            </div>
                            <div className='flex mt-4 justify-center  items-center'>


                              <img src={champion[0].items.Fourth_items[1].image_url} style={{
                                objectPosition: champion[0].items.Fourth_items[1].image_position,
                                width: "48px",
                                height: "48px",
                                objectFit: "none",
                              }} loading='lazy' />


                            </div>
                          </div>
                          <div className='text-center mt-4'>
                            <p >66.92% WR</p>
                            <p >1,129 Matches</p>
                            <p className='text-gray-600 mt-4'>Options after core build
                            </p>
                          </div>
                        </h1>
                      </div>

                      <div className='items-card'>
                        <h1>
                          Fifth items</h1>
                        <div className='flex justify-center' >
                          <div className='flex mt-4  items-center gap-1'>


                            <img src={champion[0].items.Fifth_items[0].image_url} style={{
                              objectPosition: champion[0].items.Fifth_items[0].image_position,
                              width: "48px",
                              height: "48px",
                              objectFit: "none",
                              transform: 'scale(0.8)'
                            }} loading='lazy' />
                            <p className='next'>&gt;</p>



                          </div>
                          <div className='flex mt-4 justify-center items-center gap-1'>


                            <img src={champion[0].items.Fifth_items[1].image_url} style={{
                              objectPosition: champion[0].items.Fifth_items[1].image_position,
                              width: "48px",
                              height: "48px",
                              objectFit: "none",
                              transform: 'scale(0.8)'
                            }} loading='lazy' />
                            <p className='next'>&gt;</p>



                          </div>
                          <div className='flex mt-4 justify-center items-center gap-1'>


                            <img src={champion[0].items.Fifth_items[2].image_url} style={{
                              objectPosition: champion[0].items.Fifth_items[2].image_position,
                              width: "48px",
                              height: "48px",
                              objectFit: "none",
                              transform: 'scale(0.9)'
                            }} loading='lazy' />



                          </div>
                        </div>
                        <div className='text-center mt-4'>
                          <p >56.67% WR</p>
                          <p >150 Matches</p>
                          <p className='text-gray-600 mt-4'>Options after Fourth items
                          </p>
                        </div>

                      </div>
                      <div className='items-card'>
                        <h1>
                          Sixth items</h1>
                        <div className='flex justify-center' >
                          <div className='flex mt-4  items-center gap-1'>


                            <img src={champion[0].items.Sixth_items[0].image_url} style={{
                              objectPosition: champion[0].items.Sixth_items[0].image_position,
                              width: "48px",
                              height: "48px",
                              objectFit: "none",
                              transform: 'scale(0.8)'
                            }} loading='lazy' />
                            <p className='next'>&gt;</p>



                          </div>
                          <div className='flex mt-4 justify-center items-center gap-1'>


                            <img src={champion[0].items.Sixth_items[1].image_url} style={{
                              objectPosition: champion[0].items.Sixth_items[1].image_position,
                              width: "48px",
                              height: "48px",
                              objectFit: "none",
                              transform: 'scale(0.8)'
                            }} loading='lazy' />
                            <p className='next'>&gt;</p>



                          </div>
                          <div className='flex mt-4 justify-center items-center gap-1'>


                            <img src={champion[0].items.Sixth_items[2].image_url} style={{
                              objectPosition: champion[0].items.Sixth_items[2].image_position,
                              width: "48px",
                              height: "48px",
                              objectFit: "none",
                              transform: 'scale(0.9)'
                            }} loading='lazy' />



                          </div>
                        </div>
                        <div className='text-center mt-4'>
                          <p >58.7% WR</p>
                          <p >75 Matches</p>
                          <p className='text-gray-600 mt-4'>Options after Fifth items
                          </p>
                        </div>

                      </div>
                    </div>

                  </div>
                  <hr className='w-full h-4 border-solid border-gray-500 mt-4' />

                  <div>
                    <h1 className='Header'>Toughest Matchup
                    </h1>
                    <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5'>
                      <ChampionMatchups champion={champion} />
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </>


        ) : (
          <div className='loader-container flex items-center justify-center'>
            <img src={logo} className='loader' />
          </div>

        )}
      </div>
    </div>
  );
}

export default ChampionBuild;