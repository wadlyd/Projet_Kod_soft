import Banner from "../Banner";
import ParticlesBackground from "../config/ParticlesBackground"


function Home() {
  return (
    <div
      id="home"
      className="w-full min-h-screen bg-banner-bg bg-no-repeat bg-center bg-cover relative overflow-hidden pb-12"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 text-white pt-24 md:pt-28">
        <Banner />
      </div>
      <div className="w-full h-full absolute top-0 left-0">
        <ParticlesBackground className="w-full h-full" id="tsparticles-hero" />
      </div>
    </div>
  );
}

export default Home;
