import React, { useState } from 'react';
import Header from '../Header/Header';

const destinations = {
  Moon: {
    name: 'Moon',
    description: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: '384,400 KM',
    travelTime: '3 DAYS',
    image: '/src/assets/images/destination/image-moon.webp', 
  },
  Mars: {
    name: 'Mars',
    description: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    distance: '225 MIL. KM',
    travelTime: '9 MONTHS',
    image: '/src/assets/images/destination/image-mars.webp',
  },
  Europa: {
    name: 'Europa',
    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: '628 MIL. KM',
    travelTime: '3 YEARS',
    image: '/src/assets/images/destination/image-europa.webp',
  },
  Titan: {
    name: 'Titan',
    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: '1.6 BIL. KM',
    travelTime: '7 YEARS',
    image: '/src/assets/images/destination/image-titan.webp',
  },
};

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState('Moon');

  const destinationData = destinations[selectedDestination];

  return (
    <div className="background-destination min-h-screen bg-cover bg-no-repeat">
      <Header />
      <section className="text-white flex flex-col md:flex-row items-center justify-between px-6 py-16 md:px-24 md:py-32 space-y-8 md:space-y-0">
        <div className="md:w-1/2">
        <h2 className="planet-pick text-xl md:text-2xl font-thin tracking-widest uppercase mb-10 md:mb-10  ml-20">
          <strong className="text-gray">01</strong> 
          <span className="text-tertiary"> PICK YOUR DESTINATION</span>
        </h2>

        <img
          src={destinationData.image}
          alt={destinationData.name}
          className="w-[350px] md:w-[350px] mx-auto md:mx-20"
        />
        </div>
        <div className="md:w-1/2 ml-20">
        <nav className="planet-nav flex justify-center md:justify-start space-x-8 mb-6 md:mb-12 mt-20">
          {Object.keys(destinations).map((dest) => (
            <button
              key={dest}
              onClick={() => setSelectedDestination(dest)}
              className={`uppercase tracking-widest md:text-lg pb-2 ${
                selectedDestination === dest
                  ? 'border-b-2 border-white text-tertiary' 
                  : 'text-[#D0D6F9] hover:border-b-2 hover:border-[#D0D6F9]'
              }`}
            >
              {dest}
            </button>
          ))}
        </nav>

          <h1 className="title-planet text-5xl md:text-8xl font-semibold uppercase text-tertiary">
            {destinationData.name}
          </h1>
          <p className="description-planet text-[#D0D6F9] mt-4 leading-relaxed md:leading-loose max-w-[50ch] md:max-w-[45ch]">
            {destinationData.description}
          </p>

          <hr className="bg-[#383B4B] h-[2px] my-8 w-[350px]"/>

          <div className="mt-8 flex flex-col md:flex-row md:justify-start md:space-x-16 ">
            <div className="mb-4 md:mb-0">
              <h3 className="avg-text text-xs md:text-sm text-[#D0D6F9] uppercase">
                Avg. Distance
              </h3>
              <p className="distance-text text-xl md:text-2lg text-tertiary">{destinationData.distance}</p>
            </div>
            <div>
              <h3 className="est-text text-xs md:text-sm text-[#D0D6F9] uppercase">
                Est. Travel Time
              </h3>
              <p className=" days-text text-xl md:text-2lg text-tertiary mt-1">{destinationData.travelTime}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;
