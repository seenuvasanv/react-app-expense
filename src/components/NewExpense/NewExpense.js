
import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = props => {
    const newExpenseHandler = expense => {
        const formattedExpense = {
            ...expense,
            id: Math.random().toString()
        }

        props.onAddExpense(formattedExpense)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onNewExpense={newExpenseHandler} />
        </div>
    )
}

export default NewExpense