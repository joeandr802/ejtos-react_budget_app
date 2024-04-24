import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const CurrencyForm = () => {
    const { dispatch, currency } = useContext(AppContext);

    const changeCurrency = (newCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    }
    
    return (
        <DropdownButton title={<div>Change Currency: {currency}</div>}>
            <Dropdown.Item as="button"><div onClick={event => changeCurrency("$")}>$ Dollar</div></Dropdown.Item>
            <Dropdown.Item as="button"><div onClick={event => changeCurrency("£")}>£ Pound</div></Dropdown.Item>
            <Dropdown.Item as="button"><div onClick={event => changeCurrency("€")}>€ Euro</div></Dropdown.Item>
            <Dropdown.Item as="button"><div onClick={event => changeCurrency("₹")}>₹ Rupee</div></Dropdown.Item>
        </DropdownButton>
    );
}

export default CurrencyForm;
