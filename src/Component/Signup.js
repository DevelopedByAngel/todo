import React,{Component} from 'react';
import '../stylesheets/Signup.css'
class Signup extends Component {
	constructor(props)
	{
		super(props);
		this.state=
		{
			email:'angelfrancis1806@gmail.com',
			name:'angel',
			password:'angel'
		}
	}
	emailchange=(email)=>
	{
		this.setState({email:email.target.value});
	}
	namechange=(name)=>
	{
		this.setState({name:name.target.value});
	}
	onsubmit=(e)=>
	{
		e.preventDefault();
		fetch('https://todo-appapi.herokuapp.com/register',{
			method:'POST',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				name:this.state.name,
				email:this.state.email,
				password:this.state.password
			})
		})
		.then(res=>res.json())
		.then(user=>
		{
			if(user.id)
			{
				this.props.updateuser(user);
				this.props.updatetask([]);
				this.props.route('task')
			}
			if(user.severity=="ERROR")
			{
				var error;
				if(user.code=="23505")
					error="Email already registered .Try to login"
				alert(error)
			}
		})
		.catch(err=>alert(err))
	}
	
	  render()
	  {
	  return (
	      <div className="Signup">
	      <div className="main">
	      <img src={require("../assets/homepage.png")} alt='' className="loginimg"/>
	      <div className="form">
	      <form className="signupform" onSubmit={(e)=>this.onsubmit(e)}>
	      <h1>Create New account</h1>
	      <span>
	      <label htmlFor="name">Name</label><br/>
	      <input type="text" name="name" ></input><br/>
	      </span>
	      <span>
	      <label htmlFor="email">Email</label><br/>
	      <input type="email" name="email"  onChange={(e)=>this.emailchange(e)}></input><br/>
	      </span>
	      <span>
	      <label htmlFor="password">Password</label><br/>
	      <input type="password" name="password" ></input><br/>
	      </span>
	      <input type="submit" value="Sign Up" id="submit"></input>
	      </form>
	      </div>
	      </div>
	      </div>
	    );
  }
}

export default Signup;