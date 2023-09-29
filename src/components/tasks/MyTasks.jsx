import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailsModal from "../ui/DetailsModal";
import { updateTask, userTasks } from "../../redux/features/task/taskSlice";

const MyTasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState({});
  const { userSpecificTasks, tasks } = useSelector((state) => state.tasksSlice);
  const { name: userName } = useSelector((state) => state.usersSlice);
  const dispatch = useDispatch();

  // const currentUser = users.find((item) => item.name === "Sourave Halder");

  // const filterCurrentUserTasks = tasks.filter(
  //   (item) => item.assignedTo === currentUser.name
  // );

  useEffect(() => {
    dispatch(userTasks(userName));
  }, [dispatch, userName, tasks]);

  return (
    <>
      <div>
        <h1 className="text-xl my-3">My Tasks</h1>
        <div className=" h-[750px] overflow-auto space-y-3">
          {userSpecificTasks.map((item) => (
            <div
              key={item.id}
              className="bg-secondary/10 rounded-md p-3 flex justify-between items-center"
            >
              <h1>{item.title}</h1>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setTask(item);
                  }}
                  className="grid place-content-center"
                  title="Details"
                >
                  <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
                </button>
                <button
                  onClick={() =>
                    dispatch(updateTask({ id: item?.id, status: "done" }))
                  }
                  className="grid place-content-center bg-blue-200 p-1 rounded-full hover:bg-blue-300 transition"
                  title="Done"
                >
                  <CheckIcon className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <DetailsModal isOpen={isOpen} setIsOpen={setIsOpen} task={task} />
    </>
  );
};

export default MyTasks;
