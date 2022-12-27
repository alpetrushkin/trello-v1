import React, {useState} from 'react';
import styles from "../App.module.css";

const Header = (props) => {
  const [title, setTitle] = useState('')

  const onChangeNewToCard = (event) => {
    setTitle(event.currentTarget.value)
  }

  const onClickNewCard = () => {
    if (title !== '') {
      props.newAddToCard(title)
      setTitle('')
    }

  }

  const onKeyDownHandler = (event) => {
    if (event.key === 'Enter') {
      onClickNewCard()
    }
  }

  return (
    <div className={styles.header}>
      <img width={40} height={40} src="/img/trello-logo.svg" alt="logo"/>
      <h1 className={styles.title}>Trello</h1>
      <p className={styles.line}>|</p>
      <img className={styles.user} src="/img/user.png" alt="user"/>
      <div className={styles.search}>
        <input value={title} onKeyDown={onKeyDownHandler} onChange={onChangeNewToCard} className={styles.inputSearch}
               placeholder={'Добавить карточку'}/>
        <img style={{cursor: 'pointer'}} onClick={() => setTitle('')} className={styles.remove} width={11} height={11} src="/img/remove.png" alt="remove"/>
      </div>
      <button onClick={onClickNewCard} className={styles.btnNewAddTask}>Добавить</button>
    </div>
  );
};

export default Header;