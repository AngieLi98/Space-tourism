import Header from '../Header/Header';


const Home = () => {
  return (
    <>
      <div className="home-background min-h-screen bg-cover bg-no-repeat">
        <Header />
        <div className="flex flex-col justify-around items-center pt-80 pb-20 md:flex-row md:justify-around md:items-start">
          <div className="text-tertiary flex-col w-2/3 md:w-1/3 md:text-left text-center">
            <h2 className="home-h2 text-3xl pb-2 tracking-widest">SO, YOU WANT TO TRAVEL TO</h2>
            <h2 className="space text-9xl md:text-[150px] pb-2">SPACE</h2>
            <p className="parrafo text-lg">
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
          </div>
          <div className="pt-60 md:pt-16 flex justify-center items-center">
            <div className="relative">
              <button className="button-explore bg-tertiary text-primary text-3xl tracking-widest w-64 h-64 md:w-64 rounded-full ">
                EXPLORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;