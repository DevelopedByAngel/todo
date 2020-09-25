import React,{Component} from 'react';
import Signup from './Component/Signup';
import Login from './Component/Login';
import TaskList from './Component/TaskList';
import Newtask from './Component/Newtask';
import Nav from './Component/Nav';
import Button from './Component/Button';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      route:'signup',
      task:[],
      user:{}
    }
  }
  updateuser=(user)=>
  {
    this.setState({user:user})
  }
  updatetask=(task)=>
  {
    console.log(task)
    this.setState({task:task})
  }
  deletetask=(data)=>
  {
    var id=data.id;
    fetch('http://localhost:3000/delete',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        id:this.state.user.id,
        taskid:id
      })
    })
    .then(res=>res.json())
    .then(task=>
    {
      this.updatetask(task);
      
    })
    .catch(err=>alert(err))
  }
  updatetaskname=(data)=>
  {
    var id=data.id;
    var task=data.task;
    fetch('http://localhost:3000/update',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        id:this.state.user.id,
        taskid:id,
        task:task
      })
    })
    .then(res=>res.json())
    .then(task=>
    {
      this.updatetask(task);
      
    })
    .catch(err=>alert(err))
  }
  RouteChange=(route)=>
  {
    if(route=='login')
      this.setState({route:'login'})
    else if(route=='signup')
      this.setState({route:'signup'})
    else if(route=='task')
      this.setState({route:'task'})

  }
  render()
  {
    // console.log(deletetask)
  return (
      <div className="App">
      <Button/>
      <Nav route={this.RouteChange} now={this.state.route}/>
      {(this.state.route==='login')
        ?<Login updateuser={this.updateuser} updatetask={this.updatetask} route={this.RouteChange}/>
        :(this.state.route==='signup')
        ?<Signup updateuser={this.updateuser} updatetask={this.updatetask} route={this.RouteChange}/>
        :<div className="taskpage">
        <TaskList tasklist={this.state.task} deletetask={this.deletetask} updatetaskname={this.updatetaskname}/>
        <Newtask state={this.state} updatetask={this.updatetask}/>
        </div>
            }

      </div>
    );
  }
}

export default App;
