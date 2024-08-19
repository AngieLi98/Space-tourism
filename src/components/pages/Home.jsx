import Header from '../Header/Header';

const Home = () => {
  return (
    <>
      <main className="home-background min-h-screen bg-cover bg-no-repeat">
        <Header />
        <div className="flex flex-col justify-around items-center sm:pt-80 sm:pb-20 pt-36 pb-10  md:flex-row md:justify-around md:items-start">
          <section className="flex-col w-2/3 md:w-1/3 md:text-left text-center">
            <h2 className="home-h2 text-base md:text-3xl sm:text-xl pb-2 tracking-widest w-full text-secondary">SO, YOU WANT TO TRAVEL TO</h2>
            <h2 className="space text-7xl md:text-[150px] sm:text-9xl pb-2 text-tertiary">SPACE</h2>
            <p className="parrafo text-sm sm:text-lg text-secondary">
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
          </section>
          <section className="pt-32 md:pt-16 sm:pt-60 flex justify-center items-center">
            <div className="relative flex justify-center items-center">
              <button className="button-explore bg-tertiary text-primary sm:text-3xl text-xl sm:w-64 sm:h-64 w-40 h-40 tracking-widest rounded-full">
                EXPLORE
              </button>

            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
