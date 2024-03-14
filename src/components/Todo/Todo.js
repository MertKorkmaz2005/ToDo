import React from "react";
import Item from "../Item/Item"; // Make sure the path to the Item component is correct
import tasksObject from "../../data/tasks";
import Input from "../input/Input"
import './Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.update = this.update.bind(this)
  }

  componentDidMount() {
    this.setState({
      tasks: tasksObject.tasks,
    });
  }

  update= () => {
    let tempArray = this.state.tasks;
   let combinedArray = tempArray.concat([
    {
      name:"todo afmaken", 
      done: false,
      id: 10
    }, 

   ]);

    this.setState({
      tasks: combinedArray,
    });
  }

  inputEnter = (inputComponent)=> {
    let toBeAdded = [{
        name: inputComponent,
        done:false,
        id: this.state.tasks.length + 1,
    }];
    let mergedArray = this.state.tasks.concat(toBeAdded);
    this.setState({
      tasks: mergedArray
    })
  }


  render() {
    let items = this.state.tasks.map(task => { // Corrected the variable name to 'items'
      return <Item done={task.done} name={task.name} key={task.id}></Item>; // Capitalized 'Item'
    });
  
    return (
      <article className='todo'>
        <header className='todo__header'>
          <h1 className='todo__heading'>Things to do:</h1>
        </header>
        <ul className='todo__list'>
          {items} 
        </ul>
        <Input inputEnter={this.inputEnter} />
      </article>
    );
  }
}

export default Todo;
