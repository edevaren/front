import { useEffect } from "react";
import c from "./style/Table.module.css";
import Todo from "./Todo";
import axios from "axios";

function Table() {
  let username = "ion";

  useEffect(() => {
    console.log("Yo");
    axios
      .get("http://localhost:3001")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  let DATA = {
    data: [
      {
        id: 1,
        taskTitle: "Ma tache 1",
        done: true,
      },

      {
        id: 2,
        taskTitle: "Ma tache 2",
        done: false,
      },
      {
        id: 3,
        taskTitle: "Ma tache 2",
        done: false,
      },
    ],
  };

  return (
    <div className={c.container}>
      Ici y aura la table de {username}.
      {DATA.data.map((task) => (
        <Todo key={task.id} taskTitle={task.taskTitle} done={task.done} />
      ))}
    </div>
  );
}

export default Table;
