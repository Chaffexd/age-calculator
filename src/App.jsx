import CalculatorContext from './context/context'

import './App.css'
import Form from './components/Form/Form'

function App() {

  return (
    <div className="App">
      <CalculatorContext.Provider value={{
        enteredDay,
        enteredMonth,
        enteredYear
      }} />
        <Form />
      <CalculatorContext.Provider />
    </div>
  )
}

export default App
