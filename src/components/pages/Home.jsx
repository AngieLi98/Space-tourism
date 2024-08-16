import Header from '../Header/Header';

const Home = () => {
  return (
    <>
      {/* Aplicamos la clase de fondo al body o al contenedor principal */}
      <div className="home-background min-h-screen">
        {/* Incluye el Header aquí */}
        <Header />
        
        {/* Contenido principal de la página */}
        {/* <div className="flex flex-col items-center justify-center">
          <div className="text-tertiary">
          <h2>SO, YOU WANT TO TRAVEL TO</h2>
          <h2>SPACE</h2>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;