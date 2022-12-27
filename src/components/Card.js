import React from 'react';
import styles from "../App.module.css";
import InputNewTask from "./InputNewTask";

const Card = (props) => {
  const onNewTaskHandler = (title) => {
    props.onNewTaskHandler(props.todoListID, title)
  }

  const onClickRemoveHandler = () => {
    props.removeTodoCard(props.todoListID)
  }

  return (
    <div className={styles.cards}>
      <div className={styles.titleCards}>
        <h4 className={styles.inbox}>{props.title}</h4>
        <img onClick={onClickRemoveHandler} className={styles.removeCard} width={12} height={12} src="/img/remove.png" alt="removeCard"/>
      </div>

      <div className={styles.main}>
        <div className={styles.addNewTask}>
          {
            props.task.map(el => {
              const onChangeHandler = (event) => {
                props.statusTask(props.todoListID, el.id, event.currentTarget.checked)
              }
              return (
                <div key={el.id} className={el.isDone ? styles.newTasksChecked : styles.newTasks}>
                  {el.title}
                  <input onChange={onChangeHandler} type='checkbox' checked={el.isDone}/>
                </div>
              )
            })
          }
        </div>
      </div>
      <InputNewTask onNewTaskHandler={onNewTaskHandler}/>
    </div>
  );
};

export default Card;