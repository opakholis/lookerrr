import { Navigation } from './components/navigation';
import { Hero } from './components/hero';
import { JobsList } from './components/jobs-list';
import { Footer } from './components/footer';

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <JobsList />
      <Footer />
    </>
  );
}

export default App;
