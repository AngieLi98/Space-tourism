import { useState, useEffect, useCallback } from 'react';
import Header from '../Header/Header';
import { getDestinations } from '../../services/spaceServices';


const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState('Moon');
  const [destinationData, setDestinationData] = useState(null);

  const fetchDestinations = useCallback(() => {
    getDestinations().then((response) => {
      setDestinations(response);
      setDestinationData(response.find(dest => dest.name === selectedDestination));
    }).catch(error => console.warn(error));
  }, [selectedDestination]);

  useEffect(() => {
    fetchDestinations();
  }, [fetchDestinations]);

  useEffect(() => {
    if (destinations.length) {
      setDestinationData(destinations.find(dest => dest.name === selectedDestination));
    }
  }, [selectedDestination, destinations]);

  if (!destinationData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="background-destination min-h-screen bg-cover bg-no-repeat">
      <Header />
      <section className="planet-section text-white flex flex-col md:flex-row items-center justify-between px-6 py-16 md:px-24 md:py-32 space-y-8 md:space-y-0">
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
        <h2 className="planet-pick text-xl md:text-2xl font-thin tracking-widest uppercase mb-10 md:mb-10 md:ml-0 text-left relative z-10 ">
          <strong className="text-gray">01</strong> 
          <span className="text-tertiary"> PICK YOUR DESTINATION</span>
        </h2>

          <img
            src={destinationData.images.webp}
            alt={destinationData.name}
            className="w-[290px] md:w-[350px] mx-auto"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left md:ml-16">
          <nav className="planet-nav flex justify-center md:justify-start space-x-8 mb-6 mt-20 md:mb-12">
            {destinations.map((dest) => (
              <button
                key={dest.name}
                onClick={() => setSelectedDestination(dest.name)}
                className={`uppercase tracking-widest md:text-lg pb-2 ${
                  selectedDestination === dest.name
                    ? 'border-b-2 border-white text-tertiary' 
                    : 'text-[#D0D6F9] hover:border-b-2 hover:border-[#D0D6F9]'
                }`}
              >
                {dest.name}
              </button>
            ))}
          </nav>

          <h1 className="title-planet text-7xl md:text-8xl font-semibold uppercase text-tertiary">
            {destinationData.name}
          </h1>
          <p className="description-planet text-[#D0D6F9] mt-4 leading-relaxed md:leading-loose max-w-[65ch] md:max-w-[48ch]">
            {destinationData.description}
          </p>

          <hr className="bg-[#383B4B] h-[2px] my-8 w-[500px] md:w-[370px] mx-auto md:mx-0"/>

          <div className="information mt-8 flex flex-row justify-around md:justify-start md:space-x-16">
            <div className="mb-4 md:mb-0">
              <h3 className="avg-text text-xs md:text-sm text-[#D0D6F9] uppercase">
                Avg. Distance
              </h3>
              <p className="distance-text text-xl md:text-2lg text-tertiary uppercase">{destinationData.distance}</p>
            </div>
            <div>
              <h3 className="est-text text-xs md:text-sm text-[#D0D6F9] uppercase">
                Est. Travel Time
              </h3>
              <p className=" days-text text-xl md:text-2lg text-tertiary mt-1 uppercase">{destinationData.travel}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;
