import styles from "./styles.css";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  return (
    <div className="container">
      <div className={styles.header}>ToDo list using FireBase</div>
      <div className={styles.inputContainer}></div>
      <div className={styles.list}>
        {items.map((item) => (
          <ListItem />
        ))}
      </div>
    </div>
  );
};

const ListItem = () => {
  return <div className={styles.listItem}></div>;
};

export default App;
