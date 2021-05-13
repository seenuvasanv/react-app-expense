import './ExpenseItem.css'
import React from 'react'
import ExpenseDate from './ExpenseDate'
import Card from './../UI/Card'

const ExpenseItem = ({title, amount, date}) => {

    const changeTitleHandler = () => {
        console.log('Clicked !!!')
    }
    

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${amount}
                </div>
            </div>
            <button onClick={changeTitleHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem