import Expenses from './components/Expenses'

function App() {
  const expenses = [
    {
      id: 'e1', 
    title: 'Toilet Paper', 
    amount: 94.12, 
    date: new Date(2023, 1, 8)
    },
    {
      id: 'e2', 
      title: 'Car Insurance', 
      amount: 295.67, 
      date: new Date(2023, 3, 28)
    },
    {
      id: 'e3', 
      title: 'New TV', 
      amount: 899.49, 
      date: new Date(2023, 2, 10)
    },
    {
      id: 'e4', 
      title: 'New Desk (Wood)', 
      amount: 450, 
      date: new Date(2023, 4, 11)
    }
  ]

  return(
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  )
}

export default App;
