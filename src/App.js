import React, { Component } from "react";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import TaskList from "./Component/TaskList";
import Newtask from "./Component/Newtask";
import UpdateTask from "./Component/UpdateTask";
import Nav from "./Component/Nav";
import Button from "./Component/Button";
import Quote from "./Component/Quote";
import Options from "./Component/Options";
import "./App.css";
import $ from "jquery";
const Quotes=require('./Component/quotes.json')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "login",
      task: [],
      user: {},
      quote:"",
      sort:"date"
    };
  }
  updateuser = (user) => {
    this.setState({ user: user });
  };
  updatetask = (task) => {
    console.log(task);
    this.setState({ task: task });
    $("#updatetask").css("display", "none");
  };
  deletetask = (data) => {
    console.log(data);
    var id = data;
    fetch("https://todo-appapi.herokuapp.com/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: this.state.user.id,
        taskid: id,
      }),
    })
      .then((res) => res.json())
      .then((task) => {
        this.updatetask(task);
      })
      .catch((err) => alert(err));
  };
  updatetaskname = (data) => {
    console.log(data);
    var id = data.id;
    var task = data.task;
    var due = data.due;
    var done = data.done;
    fetch("https://todo-appapi.herokuapp.com/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: this.state.user.id,
        taskid: id,
        task: task,
        due: due,
        done: done,
      }),
    })
      .then((res) => res.json())
      .then((task) => {
        console.log(task);
        this.updatetask(task);
        $("#updatetask").css("display", "none");
      })
      .catch((err) => alert(err));
  };
  sort=(type)=>
  {
    if(this.state.sort!=type)
    this.setState({sort: type});
  }
  /*
  *
  *
  *
  *
  *
  *
  *
  *
  *

  add delete and edit in task .
  add new task as the first task
  in settins => change dark mode,, sorting ,, change size
  *
  *
  *
  *
  *
  *
  *** ************
  ****************************************************************/
  RouteChange = (route) => {
    if (route == "login") this.setState({ route: "login" });
    else if (route == "signup") this.setState({ route: "signup" });
    else if (route == "task") 
      {
        this.setState({ route: "task" });
        const q=Quotes[Math.floor(Math.random()*333)];
         this.setState({quote:q})
       }
  };
  rerender = () => {
    console.log("re-rendering............");
    this.updateuser(this.state.user);
  };
  render() {
    // console.log(deletetask)

    return (
      <div className="App">
        <Button />
        <Nav route={this.RouteChange} now={this.state.route} />
        {this.state.route === "login" ? (
          <Login
            updateuser={this.updateuser}
            updatetask={this.updatetask}
            route={this.RouteChange}
          />
        ) : this.state.route === "signup" ? (
          <Signup
            updateuser={this.updateuser}
            updatetask={this.updatetask}
            route={this.RouteChange}
          />
        ) : (
          <div className="taskpage">
            <Quote quote={this.state.quote}/>
            <div className="TaskList">
            <Newtask state={this.state} updatetask={this.updatetask} />
              <TaskList
                sort={this.state.sort}
                tasklist={this.state.task}
                deletetask={this.deletetask}
                rerender={this.rerender}
                updatetaskname={this.updatetaskname}
              />
              
              <Options sort={this.sort}/>
            </div>
            <UpdateTask
              state={this.state}
              updatetaskname={this.updatetaskname}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
