import React, { useEffect, useState } from 'react';
import './Items.css';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Items() {
  const [items, setItems] = useState({}); // Initialize as an empty object to match JSON structure

  async function fetchData() {
    const baseUrl = "https://lolbuildmaster-default-rtdb.europe-west1.firebasedatabase.app/Items.json";

    try {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setItems(data || {}); // Set data or empty object if null
    } catch (error) {
      console.log("Fetching data failed: ", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log("The data: ", items);

  // Define sections with their keys and display names
  const sections = [
    { key: 'starter_items', title: 'Starter Items' },
    { key: 'consumable_items', title: 'Consumable Items' },
    { key: 'distributed_items', title: 'Distributed Items' },
    { key: 'boots', title: 'Boots' },
    { key: 'basic_items', title: 'Basic Items' },
    { key: 'epic_items', title: 'Epic Items' },
    { key: 'legendary_items', title: 'Legendary Items' },
  ];

  return (
    <>
    <Navbar/>
    <div className="flex justify-center bg-black text-white ">
      <div className="Items-container mt-12">
        <div className='Champions-header mb-6'>
          <h1>League of Legends Items</h1>
          <p>
            All in-game items for League of Legends, including mythics, legendary, starting items, and consumables. Up-to-date stats, passives, actives, and gold costs
          </p>
        </div>
        <div className='Choise-container mt-8 mb-4 flex gap-2'>
         <p className='border-solid border-b-2'>Items</p>
          <Link to={"/Champions"}><p>Champions</p></Link>
          
        </div>
        {sections.map((section) => (
          <div key={section.key} className="items-container pt-5 pb-5">
            <div className="w-full bg-gray-800 pl-4">
              <h1 className="text-lg pt-4 pb-4">{section.title}</h1>
            </div>
            <div className="items-container pl-4 pr-4 pb-4 bg-gray-800 grid gap-2">
              {Object.keys(items).length > 0 ? (
                items[section.key]?.length > 0 ? (
                  items[section.key].map((item, index) => (
                    <div key={index} className="champion-card">
                      <div className="items-image">
                        <img src={item}  alt={`${section.title} item`} />
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No items found for {section.title}</p>
                )
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Items;