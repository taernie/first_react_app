import CustomerDetails from './_CustomerDetails';
import React, { useState, useRef } from 'react'

const App = () => {

    const [ Customers, setCustomers ] = useState([]);
    const [ CustomerInput, setCustomerInput ] = useState('')

    const input = useRef(null);

    const onChangeCustomerInput = (e) => {

        setCustomerInput(e.target.value )

    }

    const onClickAddCustomer = () => {

        setCustomers(Customers => [...Customers, { id: Customers.length, name: CustomerInput}  ] )

        setCustomerInput('')

        input.current.focus();
    }

    return  <>

                <input 
                    ref={input}
                    value={CustomerInput}
                    onChange={onChangeCustomerInput}
                />
                <button onClick={() => onClickAddCustomer()}>Add Customer</button>

                <CustomerDetails List={Customers}/>
            </>
    
}

export default App