import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import CurrencyForm from './components/CurrencyForm';

import { AppProvider } from './context/AppContext';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3' style={{textAlign: 'center'}}>Company Budget Allocation</h1>
                <hr></hr>
                <div className='row mt-3'>
                    {
                        /* Budget component */
                        <div className='col-sm' style={{textAlign: 'center'}}>
                            <Budget />
                        </div>
                    }        
                    {
                        /* Remaining component */
                        <div className='col-sm' style={{textAlign: 'center'}}>
                            <Remaining />
                        </div>
                    }         
                    {
                        /* ExpenseTotal component */
                        <div className='col-sm' style={{textAlign: 'center'}}>
                            <ExpenseTotal />
                        </div>
                    }
                    {
                        /* CurrencyForm component */
                        <div className='col-sm'>
                            <CurrencyForm />
                        </div>
                    }  
                    <h3 className='mt-3'>Allocation by Department</h3>
                    {
                        /* ExpenseList component */
                        <div className='row '>
                            <div className='col-sm'>
                                <ExpenseList />
                            </div>
                        </div>
                    }                
                    <h3 className='mt-3'>Change Allocation</h3>
                    {
                        /* AllocationForm component */
                        <div className='row mt-3'>
                            <div className='col-sm'>
                                <AllocationForm/>
                            </div>
                        </div>
                    }        
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
