import Header from '../Header/Header';

const Home = () => {
  return (
    <>
      <div className="home-background min-h-screen bg-cover bg-no-repeat">
        <Header />
        <div className="flex flex-row px-6 py-16 md:px-24 md:py-32 space-y-8 md:space-y-0">
          <div className="text-tertiary flex-col ">
            <h2>SO, YOU WANT TO TRAVEL TO</h2>
            <h2>SPACE</h2>
            <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div>
            <button className='bg-tertiary text-primary w-24 h-24 rounded-full mx-auto'>EXPLORE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;