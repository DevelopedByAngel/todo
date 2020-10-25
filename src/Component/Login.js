import React,{Component} from 'react';
import '../stylesheets/Login.css';
import $ from 'jquery';
class Login extends Component {
	constructor(props)
	{
		super(props);
		this.state=
		{
			email:'',
			password:''
		}
	}
	emailchange=(email)=>
	{
		this.setState({email:email.target.value});
	}
	passwordChange=(password)=>
	{
		this.setState({password:password.target.value})
	}
	onsubmit=(e)=>
	{
		e.preventDefault();
		$('form').css('height','0%')
		setTimeout(()=>{
			$('form').css('display','none')
			$('.round').css('display','flex');
		},1000);
		
		
		setTimeout(()=>{
			fetch('http://localhost:3000/login',{
					method:'POST',
					headers:{'Content-Type':'application/json'},
					body:JSON.stringify({
						email:this.state.email,
						password:this.state.password
					})
				})
				.then(res=>res.json())
				.then(user=>
				{
					console.log(user.id);
					this.props.updateuser(user);
					fetch('http://localhost:3000/tasks',{
					method:'POST',
					headers:{'Content-Type':'application/json'},
					body:JSON.stringify({
							id:user.id
						})
					})
					.then(res=>res.json())
					.then(task=>
					{
						console.log(task);
						this.props.updatetask(task);
						this.props.route('task')
					})
					.catch(err=>Error(err.message));
				})
				.catch(err=>alert(err))
			},2500)
	}

	  render()
	  {
	  	// console.log(Quotes.length)
	  	// 
	  return (
	      <div className="Login">
	      <div className="main">
	      <img src={require("../assets/loginpage.png")} alt='' className="loginimg"/>
	      <div className="form">
	      <form className="loginform" onSubmit={(e)=>this.onsubmit(e)}>
	      <h1>Welcome back!!!</h1>
	      <span>
	      <label htmlFor="email">Email</label><br/>
	      <input type="email" id='email' name="email"   onChange={(e)=>this.emailchange(e)}></input><br/>
	      </span>
	      <span>
	      <label htmlFor="password">Password</label><br/>
	      <input type="password" id="password"  name="password" onChange={(e)=>this.passwordChange(e)}></input><br/>
	      </span>
	      <input type="submit" value="Login" id="submit"></input>
	      </form>
	      <div class="round">
	      <span></span>
	      <span></span>
	      <span></span>
	      </div>
	      </div>
	      </div>
	      </div>
	    );
  }
}

export default Login;