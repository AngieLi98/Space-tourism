import Header from '../Header/Header';

const Home = () => {
  return (
    <>
      <div className="home-background min-h-screen bg-cover bg-no-repeat">
        <Header />
        <div className="flex flex-row justify-around pt-80 pb-20">
          <div className="text-tertiary flex-col w-1/3">
            <h2 className='home-h2 text-3xl pb-2 tracking-widest'>SO, YOU WANT TO TRAVEL TO</h2>
            <h2 className='space text-[150px] pb-2'>SPACE</h2>
            <p className='parrafo text-lg'>
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
          </div>
          <div className='pt-36 flex justify-center items-center'>
            <div className='relative'>
              {/* Botón Explore */}
              <button className='button-explore bg-tertiary text-primary text-3xl tracking-widest w-64 h-64 rounded-full z-20 relative transition-all duration-300 hover:bg-white'>
                EXPLORE
              </button>

              {/* Círculo más grande y opaco al hacer hover */}
              <div className='absolute top-0 left-0 w-64 h-64 bg-tertiary rounded-full opacity-50 transition-transform duration-300 transform scale-100 hover:scale-150 hover:opacity-100'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;