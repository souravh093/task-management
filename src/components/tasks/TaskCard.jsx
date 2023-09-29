import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { removeTask, updateTask } from "../../redux/features/task/taskSlice";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  let updatedTask;

  if (task.status === "pending") {
    updatedTask = "running";
  } else if (task.status === "running") {
    updatedTask = "done";
  } else {
    updatedTask = "archive";
  }

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3 ${
          task.priority === "high"
            ? " text-red-400"
            : task.priority === "medium"
            ? " text-yellow-500 "
            : " text-green-400 "
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">
          <button onClick={() => dispatch(removeTask(task.id))} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={() =>
              dispatch(updateTask({ id: task?.id, status: updatedTask }))
            }
            title="Update Status"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
