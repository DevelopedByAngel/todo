import React,{Component} from 'react';
import Signup from './Component/Signup';
import Login from './Component/Login';
import TaskList from './Component/TaskList';
import Newtask from './Component/Newtask';
import UpdateTask from './Component/UpdateTask';
import Nav from './Component/Nav';
import Button from './Component/Button';
import Quote from './Component/Quote';
import Options from './Component/Options';
import './App.css';
import $ from 'jquery';
class App extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      route:'login',
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
    $('.delete,.edit,.NewTask').css('display','none') 
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
    var due=data.due;
    fetch('http://localhost:3000/update',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        id:this.state.user.id,
        taskid:id,
        task:task,
        due:due
      })
    })
    .then(res=>res.json())
    .then(task=>
    {
      console.log(task)
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
        <Quote/>
        <Options/>
        <div className="TaskList">
        <TaskList tasklist={this.state.task} deletetask={this.deletetask} /></div>
        <Newtask state={this.state} updatetask={this.updatetask}/>
        <UpdateTask state={this.state} updatetaskname={this.updatetaskname}/>
        </div>
            }
                  <Options/>

      </div>
    );
  }
}

export default App;
