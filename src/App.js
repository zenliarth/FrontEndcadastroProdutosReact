import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import FormSection from './components/FormSection';
import StockSection from './components/StockSection';


function App(props) {
  return (
    <div className="w-full bg-gray-900">
      <Header />
      <Section />
      <FormSection />
      <StockSection />
    </div>
  );
}

export default App;
