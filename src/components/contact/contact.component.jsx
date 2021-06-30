import React from 'react';
import './contact.styles.scss';
import CustomButton from '../button/button.component'; //reusing our custom button 


// Class component is used because we need to define state in this.
class Contact extends React.Component{
    constructor(){
        super();
        this.state={
            email:'abc@gmail.com'
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:''});
    }
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name] : value});
    }
    render(){
        return(
            <div>
            <h2 className='form-heading'>Have Question in mind?</h2>
            <h2 className='form-heading'>Let us help you</h2>
            <div className='form'>
            <form onSubmit={this.handleSubmit}>
            <input name='email' 
                type='email' 
                handleChange={this.handleChange}
                value={this.state.email} 
                required /> 
            <CustomButton type='submit'>Send</CustomButton>   
            </form>
            </div>
            </div>
        )
    }
}

export default Contact;