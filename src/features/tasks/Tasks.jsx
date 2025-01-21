import { useSelector, useDispatch } from "react-redux";
import { tasksButtonPressed } from "./tasksSlice";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const tasksFirstDate = tasks.tasks.filter(
    (task) => task.date === "15/07/2024"
  );
  const tasksSecondDate = tasks.tasks.filter(
    (task) => task.date === "16/07/2024"
  );

  return (
    <>
      <h1>15/07/2024</h1>
      {tasksFirstDate.length > 0 ? (
        <ul>
          {tasksFirstDate.map((task) => (
            <li key={task.id}>
              <p>
                <strong>{task.name}</strong>
              </p>
              <button onClick={() => dispatch(tasksButtonPressed(task.id))}>
                {task.status}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks for this date.</p>
      )}
      <h2>16/07/2024</h2>
      {tasksSecondDate.length > 0 ? (
        <ul>
          {tasksSecondDate.map((task) => (
            <li key={task.id}>
              <p>
                <strong>{task.name}</strong>
              </p>
              <button onClick={() => dispatch(tasksButtonPressed(task.id))}>
                {task.status}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks for this date.</p>
      )}
    </>
  );
};
export default Tasks;
