import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, currency, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);

        if (event.target.value > 20000) {
            alert("Cannot increase funds above "+currency+"20,000");
        } else {
            if (event.target.value < totalExpenses) {
                alert("Cannot decrease funds below current spending value: "+currency+totalExpenses);
            } else {
                setNewBudget(event.target.value);
                dispatch({
                    type: 'SET_BUDGET',
                    payload: event.target.value,
                });
            }
        }     
    }

    return (
        <div className='alert alert-secondary'>
        <span style={{fontSize: '18px'}}>Budget: {currency}</span>
        <input type="number" step="10" style={{fontSize: '18px', width: '8rem'}} value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
