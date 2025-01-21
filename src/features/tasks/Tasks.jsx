import { useSelector } from "react-redux";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const tasksFirstDate = tasks.tasks.filter(
    (task) => task.date === "15/07/2024"
  );
  const tasksSecondDate = tasks.tasks.filter(
    (task) => task.date === "16/07/2024"
  );
  console.log(tasksSecondDate);

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
             <p>Status: {task.status}</p>
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
              <p>Status: {task.status}</p>
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
