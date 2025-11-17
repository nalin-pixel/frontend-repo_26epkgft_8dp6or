import Hero from './components/Hero';
import Intro from './components/Intro';
import WhyRisk from './components/WhyRisk';
import OurSolution from './components/OurSolution';
import AtAGlance from './components/AtAGlance';
import FeatureClone from './components/FeatureClone';
import Results from './components/Results';
import WhyItMatters from './components/WhyItMatters';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <Hero />
      <Intro />
      <WhyRisk />
      <OurSolution />
      <AtAGlance />
      <FeatureClone />
      <Results />
      <WhyItMatters />
      <CTA />
    </div>
  );
}

export default App;
