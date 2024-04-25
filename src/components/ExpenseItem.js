import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td style={{fontSize: '18px'}}>{props.name}</td>
        <td style={{fontSize: '18px'}}>{currency}{props.cost}</td>
        <td><button 
                style={{
                    height: '50px', 
                    width: '50px', 
                    borderRadius: '100%', 
                    backgroundColor: '#00bb00',
                    border: 'none',
                    fontSize: '40px',
                    fontWeight: 'bold',
                    color: 'white',
                    lineHeight: '38px',
                    display: 'flex',
                    justifyContent: 'center'
                }}
                onClick={event => increaseAllocation(props.name)}
        >+</button></td>
        <td><button
                style={{
                    height: '50px', 
                    width: '50px', 
                    borderRadius: '100%', 
                    backgroundColor: '#bb0000',
                    border: 'none',
                    fontSize: '40px',
                    fontWeight: 'bold',
                    color: 'white',
                    lineHeight: '38px',
                    display: 'flex',
                    justifyContent: 'center'
                }}
                onClick={event => decreaseAllocation(props.name)}          
        >-</button></td>
        <td><TiDelete size='3em' style={{cursor: 'pointer'}} onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
