import React, { useState, useEffect, useCallback } from 'react';
import Header from '../Header/Header';
import { getCrew } from '../../services/spaceServices';

const Crew = () => {
  const [crewData, setCrewData] = useState([]);
  const [selectedCrew, setSelectedCrew] = useState(null);

  const fetchCrew = useCallback(() => {
    getCrew().then((response) => {
      setCrewData(response);
      setSelectedCrew(response[0]); 
    }).catch(error => console.warn(error));
  }, []);

  useEffect(() => {
    fetchCrew();
  }, [fetchCrew]);

  if (!selectedCrew) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background-crew bg-cover bg-no-repeat text-white flex flex-col">
      <Header />
      <main className="flex-col items-center justify-center flex-grow w-full px-4 md:px-0">
        <h2 className="text-tertiary 2xl:text-2xl xl:text-xl text-center md:text-left md:self-start 2xl:ml-80 xl:mt-36 xl:mb-8 xl:ml-60 2xl:mt-48 mt-[5rem]">
          <span className="font-bold text-gray pr-5 2xl:text-3xl xl:text-xl text-lg">02</span> MEET YOUR CREW
        </h2>
        
        <div className="flex flex-col items-center md:flex-row justify-between w-full md:w-10/12 mx-auto md:mt-0 mt-4">
          <div className="xl:md:w-1/2 text-center md:text-left xl:top-0 xl:ml-32 2xl:ml-40 relative top-[20rem]">
            <h3 className="text-gray 2xl:text-3xl xl:text-2xl md:text-3xl text-lg uppercase mb-2 ">{selectedCrew.role}</h3>
            <h1 className="text-tertiary 2xl:text-5xl xl:text-4xl text-2xl uppercase">{selectedCrew.name}</h1>
            <p className="text-tertiary 2xl:text-xl xl:text-base xl:w-3/4 w-3/4 max-w-md md:max-w-lg mx-auto md:mx-0 leading-relaxed 2xl:mt-10 xl:mt-6 sm:line-clamp-4 sm:text-xs sm:leading-tight">
              {selectedCrew.bio}
            </p>

            <div className="flex xl:flex space-x-4 md:self-start 2xl:mt-40 xl:mt-24  relative bottom-[11rem] xl:bottom-0">
              {crewData.map((crew, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCrew(crew)}
                  className={`xl:w-4 xl:h-4 rounded-full w-2 h-2 ${selectedCrew.name === crew.name ? "bg-tertiary" : "bg-gray"}`}
                ></button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-start xl:bottom-0 xl:mt-2 2xl:mt-8 2xl:mr-20 xl:md:w-1/3 xl:self-start relative  xl:md:justify-end  ">
            <div className="h-[100px] w-[120px] xl:h-[420px] xl:w-full 2xl:h-[650px] flex items-start justify-center">
              <img
                src={selectedCrew.images.png}
                alt={selectedCrew.name}
                className="xs:w-[375px] xs:h-[667px] xl:h-full xl:object-contain"
              />
            </div>
            <div className="block md:hidden w-full h-[1px] bg-gray mt-2"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Crew;
