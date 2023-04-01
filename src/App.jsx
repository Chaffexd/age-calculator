import { CalculatorContextProvider } from './context/context';

import './App.css';
import Form from './components/Form/Form';

function App() {

  return (
    <div className="App">
      <CalculatorContextProvider>
        <Form />
      </CalculatorContextProvider>
    </div>
  )
}

export default App
