import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses, currency } = useContext(AppContext);
    
    return (
        <table className='table'>
          <thead className="thead-light">
            <tr style={{fontSize: '18px'}}>
              <th scope="col">Department</th>
              <th scope="col">Allocated Budget</th>
              <th scope="col">Increase by 10</th>
              <th scope="col">Decrease by 10</th>
              <th scope="col">Reset to {currency}0</th>
            </tr>
          </thead>
          <tbody>
          {expenses.map((expense) => (
              <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
          ))}
          </tbody>
        </table>
    );
};

export default ExpenseList;
