import './ExpenseItem.css'
import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import Card from './../UI/Card'

const ExpenseItem = (props) => {

    const [title, setTitle] = useState('helloOne')

    const changeTitleHandler = () => {
        setTitle('Updated Value!!')
        console.log(title)
    }
    

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${props.amount}
                </div>
            </div>
            <button onClick={changeTitleHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem