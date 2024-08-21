import { useState, useEffect, useCallback } from "react";
import Header from "../Header/Header";
import { getTechnologies } from "../../services/spaceServices";

const Technology = () => {
  const [technologies, setTechnologies] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const fetchTechnologies = async () => {
      const data = await getTechnologies();
      if (data) {
        setTechnologies(data);
      }
    };
    fetchTechnologies();
  }, []);

  const handleButtonClick = useCallback((techIndex) => {
    setSelectedIndex(techIndex);
  }, []);

  useEffect(() => {
    const updateImageSrc = () => {
      const screenWidth = window.innerWidth;
      const dataTechnology = technologies[selectedIndex];

      if (screenWidth < 768) {
        setImageSrc(dataTechnology?.images.landscape); 
      } else if (screenWidth >= 768 && screenWidth < 1024) {
        setImageSrc(dataTechnology?.images.landscape);
      } else {
        setImageSrc(dataTechnology?.images.portrait);
      }
    };

    updateImageSrc();

    window.addEventListener("resize", updateImageSrc); 

    return () => window.removeEventListener("resize", updateImageSrc);
  }, [selectedIndex, technologies]);

  if (technologies.length === 0) {
    return <div>Loading</div>;
  }

  const dataTechnology = technologies[selectedIndex];

  return (
    <div className="background-technology min-h-screen bg-cover bg-no-repeat">
      <Header />
      <section className="px-0 py-28 pr-0 md:px-0 lg:px-24 md:py-48 md:pr-0 lg:pr-0">
      <h1 className="text-xl md:text-2xl font-thin tracking-widest uppercase mb-8 px-16 md:px-8 lg:px-0 text-center md:text-left">
          <strong className="font-barlow-condensed font-bold text-gray">03</strong>
          <span className="font-barlow-condensed font-normal text-tertiary"> SPACE LAUNCH 101</span>
        </h1>

        <div className="flex flex-col lg:flex-row-reverse md:flex-col items-center justify-between space-y-8 md:space-y-0 w-full">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end md:px-0 md:pr-0 md:pl-0">
            <img
              src={imageSrc}
              alt={dataTechnology?.name}
              className="w-full h-auto block md:max-w-none lg:max-w-none md:mb-8 md:px-0 md:pr-0"
            />
          </div>

          <div className="flex flex-col w-full lg:w-1/2 items-center lg:items-stretch lg:flex-row ">
            <nav className="flex space-x-4 md:space-x-4 lg:space-x-0 lg:flex-col lg:space-y-8 md:mb-8">
              {technologies.map((techItem, techIndex) => (
                <button
                  key={techItem.id}
                  onClick={() => handleButtonClick(techIndex)}
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-full text-center font-semibold transition-all duration-300 ${
                    selectedIndex === techIndex
                      ? "bg-tertiary text-primary scale-110"
                      : "bg-transparent border border-tertiary text-tertiary hover:border-2 hover:border-opacity-100"
                  }`}
                >
                  {techIndex + 1}
                </button>
              ))}
            </nav>

            <div className="mt-8 lg:mt-0 lg:ml-12 text-center lg:text-left lg:mr-16">
              <span className="font-barlow-condensed font-normal text-secondary md:text-1xl">
                THE TERMINOLOGY...
              </span>
              <h2 className="font-bellefair font-normal text-tertiary text-3xl md:text-4xl uppercase">
                {dataTechnology?.name}
              </h2>
              <p className="font-barlow font-normal mt-4 text-secondary leading-relaxed md:leading-loose max-w-md">
                {dataTechnology?.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
