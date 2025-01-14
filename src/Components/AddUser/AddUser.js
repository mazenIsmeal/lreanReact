import React, {useState} from "react";
import Form from "../Layout/Form";
import Button from "../Layout/Button";

const AddUser = ({addNewUserHandel, close}) => {
    const [input, setInput] = useState({
        id: Math.random(Math.random() * 100),
        name: '',
        age: '',
        address: '',
        phone: ''
    })

    const inputHandler = (e) => {
        const key = e.target.id
        const value = e.target.value
        setInput((prevState) => {
            return {...prevState, [key]: value}
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        addNewUserHandel(input)
        close()
    }


    return (
        <Form onSubmit={onSubmitHandler}>
                <Form.Controller>
                    <label htmlFor='name'>Name</label>
                    <input type="name" id="name" placeholder="Enter name" value={input.name} onChange={inputHandler} />
                </Form.Controller>
                <Form.Controller>
                    <label htmlFor='age'>Age</label>
                    <input type="age" id="age" placeholder="Enter age" value={input.age} onChange={inputHandler} />
                </Form.Controller>
                <Form.Controller>
                    <label htmlFor='address'>Address</label>
                    <input type="address" id="address" placeholder="Enter address" value={input.address} onChange={inputHandler} />
                </Form.Controller>
                <Form.Controller>
                    <label htmlFor='phone'>Phone</label>
                    <input type="phone" id="phone" placeholder="Enter phone" onChange={inputHandler} />
                </Form.Controller>
                <Form.Controller>
                    <label htmlFor='type'>Type</label>
                    <input type="type" id="type" placeholder="Enter type" onChange={inputHandler} />
                </Form.Controller>
                <div>
                    <Button type='submit' style={{marginRight: '20px'}}>Save</Button>
                    <Button type='reset'>Reset</Button>
                </div>
            </Form>
    );
}

export default AddUser;