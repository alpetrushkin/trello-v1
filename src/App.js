import React, {useState} from "react";
import styles from './App.module.css';
import Card from "./components/Card";
import {v1} from "uuid";
import Header from "./components/Header";

function App() {
  const todoListID_1 = v1()
  const todoListID_2 = v1()

  let [todoList, setTodoList] = useState([])

  let [task, setTask] = useState({
    [todoListID_1]: [],
    [todoListID_2]: []
  })

  const removeTodoCard = (todoListID) => {
    setTodoList(todoList.filter(el => el.id !== todoListID))
  }

  const newAddToCard = (title) => {
    const newCardID = v1()
    const newCard = {id: newCardID, titleList: title}
    setTodoList([...todoList, newCard])
    setTask({[newCardID]: [], ...task})
  }

  const onNewTaskHandler = (todoListID, title) => {
    const newID = v1()
    let newTasks = {id: newID, title, isDone: false}
    setTask({...task, [todoListID]:[...task[todoListID], newTasks]})
    // setTask(prev => [...prev, newTask])
  }

  const statusTask = (todoListID, taskID, isDone) => {
    setTask({...task, [todoListID]: task[todoListID].map(el => el.id === taskID ? {...el, isDone} : el)})
    // setTask(task.map(el => el.id === taskID ? {...el, isDone} : el))
  }

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Header newAddToCard={newAddToCard} todoList={todoList} />
        <div className={styles.cardWrapper}>
          {
            todoList.map(todo => {
              let newTask = task[todo.id]
              return (
                <Card
                  key={todo.id}
                  title={todo.titleList}
                  todoListID={todo.id}
                  task={newTask}
                  onNewTaskHandler={onNewTaskHandler}
                  statusTask={statusTask}
                  removeTodoCard={removeTodoCard}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
