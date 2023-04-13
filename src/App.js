import React, { useState } from 'react'

import NewExpense from './components/NewExpenses/NewExpense'
import Expenses from './components/Expenses/Expenses'

const DUMMY_EXPENSES = [
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

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  }

  return(
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
