import './App.css';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import FormSection from './components/FormSection/FormSection';
import StockSection from './components/StockSection/StockSection';


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
