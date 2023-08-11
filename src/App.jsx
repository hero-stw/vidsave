// import reactLogo from './assets/react.svg'
import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className='relative bg-gradient-to-b from-[#44B2FA] via-[#4F9DF9] to-[#B79AFD] '>
        <Header />
        <Hero />
      </div>
      <Features />
      <Cta />
      <Faq />
    </>
  );
}

export default App;
