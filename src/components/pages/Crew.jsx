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
    <div className="xl:flex-col min-h-screen xl:max-h-screen bg-background-crew bg-cover bg-no-repeat text-white flex flex-col lg:flex-row">
      <Header />
      <main className="flex-col items-center justify-center flex-grow w-full px-4 sm:px-0">
        <h2 className="title-crew font-barlow-condensed font-light  text-tertiary 2xl:text-2xl xl:text-xl text-center lg:ml-24 lg:text-2xl lg:self-start sm:mt-[11rem] sm:text-left sm:ml-[3rem] 2xl:ml-80 xl:mt-36 xl:mb-8 xl:ml-60 2xl:mt-48 mt-[5rem]">
          <span className="font-barlow-condensed font-bold text-gray pr-5 2xl:text-3xl xl:text-xl text-lg lg:text-2xl">02</span> MEET YOUR CREW
        </h2>
        
        <div className="flex flex-col items-center lg:flex-row justify-between w-full lg:w-10/12 mx-auto lg:mt-12 sm:mt-0 mt-4">
          <div className="xl:sm:w-1/2 text-center lg:text-left lg:ml-12 lg:top-[2.5rem] xl:ml-32 2xl:ml-40 relative top-[20rem] sm:top-[2rem]">
            <h3 className="role-crew font-bellefair font-light text-gray 2xl:text-3xl xl:text-2xl lg:text-2xl sm:text-xl text-lg uppercase mb-2 ">{selectedCrew.role}</h3>
            <h1 className="name-crew font-bellefair font-light text-tertiary 2xl:text-5xl lg:text-4xl text-2xl sm:text-3xl uppercase">{selectedCrew.name}</h1>
            <p className="bio-crew font-barlow font-light leading-tight text-secondary text-[0.7em] 2xl:text-xl xl:text-base lg:text-base lg:w-full xl:w-3/4 w-3/4 sm:max-w-lg mx-auto lg:mx-0 2xl:mt-[3.2%] xl:mt-[3.2%] mt-[3.2%] sm:w-[65%] sm:text-sm">
              {selectedCrew.bio}
            </p>
          </div>
        </div>
      </main>
      <div className="lg:flex-row flex w-full relative lg:h-1/2 lg:w-1/2 lg:bottom-0 bottom-52 flex-col items-center justify-start lg:top-36 xl:left-[29rem] xl:1/3 xl:self-center mb-[5rem] lg:mb-0 sm:top-20 xl:top-[-15.2rem] xl:bottom-[15rem]">
            <div className="image-crew w-[150px]  flex  justify-center sm:w-[360px]">
              <img
                src={selectedCrew.images.png}
                alt={selectedCrew.name}
                className="lg:w-[358px] xl:w-[333px] object-scale-down "
              />
            </div>
            <div className="bar-vertical-crew flex lg:w-0 items-center ml-4 sm:hidden w-80 h-[1px] bg-grayline relative lg:bottom-10"></div>
            <div className="flex lg:flex-row xl:flex space-x-4 lg:items-start lg:right-[52.3rem] lg:top-40  relative top-12 sm:top-[-32rem] xl:right-[58rem] xl:top-[10rem]">
              {crewData.map((crew, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCrew(crew)}
                  className={`botton-selection-crew  lg:w-4 lg:h-4 xl:w-4 xl:h-4 rounded-full w-2 h-2 ${selectedCrew.name === crew.name ? "bg-tertiary" : "bg-gray"}`}
                ></button>
              ))}
            </div>
          </div>
          


    </div>
  );
};

export default Crew;
