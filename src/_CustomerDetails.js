const CustomerDetails = (props) => {

    const Display = () => {

        return props.List.map((item) => {

            <li>{item.name}</li>

        });

    }
    
    return  <>
                <p>Details:</p>
                <ul>
                    {
                        props.List.map((item) => (
                            <li key={item.id}>{item.name}</li>
                        ))
                    }
                </ul>
            </>


}

export default CustomerDetails;