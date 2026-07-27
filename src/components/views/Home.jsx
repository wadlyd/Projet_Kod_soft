import Banner from "../Banner";
import Header from "../Header";
import ParticlesBackground from "../config/ParticlesBackground"


function Home() {
  return (
    <div
      id="home"
      className="w-full h-screen bg-banner-bg bg-no-repeat bg-center bg-cover relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-white">
        <Header />
        <Banner />
      </div>
      <div className="w-full h-screen absolute top-0 left-0">
        <ParticlesBackground />
      </div>
    </div>
  );
}

export default Home;
