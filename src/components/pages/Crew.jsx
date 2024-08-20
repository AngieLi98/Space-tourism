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
    <div className="min-h-screen xl:max-h-screen bg-background-crew bg-cover bg-no-repeat text-white flex flex-col">
      <Header />
      <main className="flex-col items-center justify-center flex-grow w-full px-4 md:px-0">
        <h2 className="font-barlow-condensed font-light  text-tertiary 2xl:text-2xl xl:text-xl text-center lg:text-left lg:self-start md:mt-[11rem] md:text-left md:ml-[3rem] 2xl:ml-80 xl:mt-36 xl:mb-8 xl:ml-60 2xl:mt-48 mt-[5rem]">
          <span className="font-barlow-condensed font-bold text-gray pr-5 2xl:text-3xl xl:text-xl text-lg">02</span> MEET YOUR CREW
        </h2>
        
        <div className="flex flex-col items-center lg:flex-row justify-between w-full lg:w-10/12 mx-auto lg:mt-0 md:mt-0 mt-4">
          <div className="xl:md:w-1/2 text-center lg:text-left lg:top-[2.5rem] xl:ml-32 2xl:ml-40 relative top-[20rem] md:top-[2rem]">
            <h3 className="font-bellefair font-light text-gray 2xl:text-3xl xl:text-2xl md:text-xl text-lg uppercase mb-2 ">{selectedCrew.role}</h3>
            <h1 className="font-bellefair font-light text-tertiary 2xl:text-5xl xl:text-4xl text-2xl md:text-3xl uppercase">{selectedCrew.name}</h1>
            <p className="font-barlow font-light leading-tight text-secondary text-[0.7em] 2xl:text-xl xl:text-base xl:w-3/4 w-3/4 md:max-w-lg mx-auto lg:mx-0 2xl:mt-[3.2%] xl:mt-[3.2%] mt-[3.2%] md:w-[65%] md:text-sm">
              {selectedCrew.bio}
            </p>
          </div>
        </div>
      </main>
      <div className="flex w-full relative bottom-[15rem] flex-col items-center justify-start xl:left-[16.8rem] 2xl:left-[63rem] 2xl:w-1/2 xl:1/3 xl:self-start mb-[5rem] md:top-[5rem] xl:top-[-15.2rem] xl:bottom-[15rem]">
            <div className="w-[150px] xl:w-[650px] 2xl:h-[650px] flex  justify-center md:w-[360px]">
              <img
                src={selectedCrew.images.png}
                alt={selectedCrew.name}
                className=" xl:w-[500px] xl:h-[450px] 2xl:w-[600px] 2xl:h-[650px] xl:object-bottom 2xl:object-bottom object-scale-down "
              />
            </div>
          </div>
          <div className="block ml-[2rem] md:hidden w-[20rem] h-[1px] bg-grayline relative bottom-[20rem]"></div>

          <div className="flex xl:flex space-x-4 lg:self-start 2xl:left-[20rem] 2xl:bottom-[35rem] xl:bottom-[25rem] xl:left-[15.2rem]  relative bottom-[15rem] left-[9.4rem] md:left-[21rem] md:bottom-[35rem]">
              {crewData.map((crew, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCrew(crew)}
                  className={`xl:w-4 xl:h-4 rounded-full w-2 h-2 ${selectedCrew.name === crew.name ? "bg-tertiary" : "bg-gray"}`}
                ></button>
              ))}
            </div>
    </div>
  );
};

export default Crew;
