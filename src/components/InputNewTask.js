import React, {useState} from 'react';
import styles from "../App.module.css";

const InputNewTask = (props) => {
  const [newTitle, setNewTitle] = useState('')
  const [error, setError] = useState(false)
  const [widthInput, setWidthInput] = useState(false)

  const onChangeHandler = (event) => {
    setNewTitle(event.currentTarget.value)
    setError(false)
  }

  const onClickHandler = () => {
    if (newTitle.trim() !== '') {
      props.onNewTaskHandler(newTitle)
      setNewTitle('')
      setError(false)
    } if (newTitle === '') {
      setError(true)
    }

  }

  const onKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      onClickHandler()
    }
  }

  const onNewInputHandler = () => {
    setWidthInput(true)
    setNewTitle('')
    setError(false)
  }

  return (
    <div>
      {widthInput
        ? <div>
          <input value={newTitle}
                 onKeyDown={onKeyDownHandler}
                 onChange={onChangeHandler}
                 className={error ? styles.addInputTaskError : styles.addInputTask}
                 placeholder={"Ввести заголовок для этой карточки"}/>
          <div className={styles.addNewTaskWrapper}>
            <button onClick={onClickHandler} className={styles.btnAddTasks}>Добавить задачу</button>
            <img onClick={() => setWidthInput(false)} className={styles.removeBtn} width={25} height={25} src="/img/close.png" alt="close"/>
          </div>
        </div>
        : <p onClick={onNewInputHandler} className={styles.addToCart}>+ Добавить задачу</p>}
    </div>
  );
};

export default InputNewTask;