import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

export class App extends Component {
    constructor(){
        super()
        this.state = {
            fullName : '',
            username : '',
            email : '',
            password : ''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered ={
            fullName : this.state.fullName,
            username : this.state.username,
            email : this.state.email,
            password : this.state.password
        }

        axios.post('http://localhost:4000/app/signup', registered)
        .then(response => console.log(response.data))

        //window.location = '/'
        this.setState({
            fullName : '',
            username : '',
            email : '',
            password : ''
        });
    }



    render() {
        return (
        
               
                <div className="container form-group ">
                         <div className='form-control'>
                        <form onSubmit={this.onSubmit}>
                            
                            <div className='p-3 bg-success'>
                            <input type="text" 
                            placeholder="Full Name Here"
                            onChange={this.changeFullName}
                            value = {this.state.fullName}
                            className='form-control form-group'
                            />
                            </div>
                           
                            <div className='p-3 bg-success'>
                            <input type="text" 
                            placeholder="Username Here"
                            onChange={this.changeUsername}
                            value = {this.state.username}
                            className='form-control form-group'
                            />
                            </div>
                             
                            <div className='p-3 bg-success'>
                            <input type="text" 
                            placeholder="Email Here"
                            onChange={this.changeEmail}
                            value = {this.state.email}
                            className='form-control form-group'
                            />
                            </div>
                              
                            <div className='p-3 bg-success'>
                            <input type="password" 
                            placeholder="Password Here"
                            onChange={this.changePassword}
                            value = {this.state.password}
                            className='form-control form-group'
                            />
                            </div>
                            
                        
                           <div className="p-3">
                           <input type="submit" value="Submit" className="btn btn-danger btn-block" />
                           </div>
                           

                        </form>
                    </div>
                </div>
                   
              
            
            
        );
    }
}

export default App
