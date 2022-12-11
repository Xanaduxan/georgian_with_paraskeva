import React, {Component} from 'react'

import axios from 'axios'
import './Form.css'



export default class Form extends Component{
  state={
    fullname:'',
    phone:'',
    email:'',
    sent:false
  }

  //handle inputs
  handleFullname=(e:React.ChangeEvent<HTMLInputElement>)=>{
    this.setState({
      fullname:e.target.value
  })
  }

  handlePhone=(e:React.ChangeEvent<HTMLInputElement>)=>{
    this.setState({
      phone:e.target.value
  })
  }

  handleEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
    this.setState({
      email:e.target.value
  })

  }

  //end of handle inputs

  formSubmit=(e:React.MouseEvent<HTMLFormElement> )=>{
  e.preventDefault();

    let data = {
        fullname:this.state.fullname,

        email:this.state.email,
    }


    axios.post('api/form', data)
    .then(res=>{
      this.setState({
        sent:true
      });
      this.resetForm()
    })
    .catch(()=>{
      console.log("message is not sending");
      
    })
  }

  //for reseting initial form

  resetForm=()=>{
    this.setState({
      fullname:'',
      phone:'',
      email:'',
    })
    setTimeout(()=>{
      this.setState({
        sent:false,
      })
    }, 3000)
  }

  render(): React.ReactNode {
    return (
      <div className='container'>
        <form onSubmit={this.formSubmit}>
        <div className="singleItem">
          <label htmlFor="fullname">Ваше имя*:</label>
          <input type="text" name="fullname" value={this.state.fullname} onChange={this.handleFullname} required/>
        </div>
          <div className="singleItem">
            <label htmlFor="phone">
              Номер
              телефона*:
            </label>
            <input type="text" name="phone" value={this.state.phone} onChange={this.handlePhone} required />
          </div>

          <div className="singleItem">
            <label htmlFor="email">Email*:</label>
            <input type="text" 
            name="email" 
            value={this.state.email} 
            onChange={this.handleEmail} required />
          </div>
         
      
        <div className="btn">
          <button type='submit'>Отправить предварительную заявку</button>
        </div>
        {' '}
        <div className={this.state.sent ? 'msg msgAppear' : 'msg'}>Предварительная заявка отправлена. Ожидайте звонка</div>
      </form>
      </div>
    
  )
}


  }
  