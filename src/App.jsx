import CalculatorContext from './context/context';
import useForm from './hooks/use-form';

import './App.css';
import Form from './components/Form/Form';

function App() {

  return (
    <div className="App">
      <CalculatorContext.Provider >
        <Form />
      </CalculatorContext.Provider>
    </div>
  )
}

export default App
