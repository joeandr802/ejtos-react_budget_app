import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
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
                <h1 className='mt-3' style={{textAlign: 'center'}}>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            /* Add Budget component here */
                            <div className='col-sm'>
                                <Budget />
                            </div>
                        }        

                        {
                            /* Add Remaining component here*/
                            <div className='col-sm'>
                                <Remaining />
                            </div>
                        }         

                        {
                            /* Add ExpenseTotal component here */
                            <div className='col-sm'>
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
                            /* Add ExpenseList component here */
                            <div className='row '>
                                <div className='col-sm'>
                                    <ExpenseList />
                                </div>
                            </div>
                        }         

                        {
                            /* Add ExpenseItem component here */
                        }        
                        <h3 className='mt-3'>Change allocation</h3>
                        {
                            /* Add AllocationForm component here under */
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
