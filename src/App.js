import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import FormSection from './components/FormSection';


function App(props) {
  return (
    <div className="w-full bg-gray-900">
      <Header />
      <Section />
      <FormSection />
    </div>
  );
}

export default App;
