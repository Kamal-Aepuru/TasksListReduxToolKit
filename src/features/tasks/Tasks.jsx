import { useSelector, useDispatch } from "react-redux";
import { tasksButtonPressed, fetchTasks } from "./tasksSlice";
import { useEffect } from "react";

const Tasks = () => {
  const { tasksList, status, error } = useSelector((state) => state.tasks);
  console.log(tasksList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      {status === "loading" && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* Tasks for 15/07/2024 */}
      <h1>15/07/2024</h1>
      {tasksList.length > 0 && tasksList[0]?.tasks?.length > 0 ? (
        <ul>
          {tasksList[0].tasks.map((task) => (
            <li key={task.taskId}>
              <p>
                <strong>{task.task}</strong>
              </p>
              <button onClick={() => dispatch(tasksButtonPressed(task.taskId))}>
                {task.taskStatus}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks for this date.</p>
      )}

      {/* Tasks for 16/07/2024 */}
      <h2>16/07/2024</h2>
      {tasksList.length > 1 && tasksList[1]?.tasks?.length > 0 ? (
        <ul>
          {tasksList[1].tasks.map((task) => (
            <li key={task.taskId}>
              <p>
                <strong>{task.task}</strong>
              </p>
              <button onClick={() => dispatch(tasksButtonPressed(task.taskId))}>
                {task.taskStatus}
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
