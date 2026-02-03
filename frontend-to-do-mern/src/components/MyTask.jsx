import { HiClipboardDocumentList } from "react-icons/hi2";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyTask = ({ tasks, fetchTasks }) => {

  // const [tasks, setTasks] = useState([])


  const deleteTask = async (id) => {
    const token = localStorage.getItem("token")

    const res = await fetch(`https://web-dev-practice-azure.vercel.app/form/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if (res.ok) {
      toast.success("Task deleted")
      fetchTasks()
    } else {
      toast.error("Delete failed")
    }
  }

  const updateTask = async (id, oldTitle, oldDetails) => {
    const { value: formValues } = await Swal.fire({
      title: "Update Task",
      html:
        `<input id="swal-title" class="swal2-input" placeholder="Title" value="${oldTitle}">` +
        `<textarea id="swal-details" class="swal2-textarea" placeholder="Details">${oldDetails}</textarea>`,
      focusConfirm: false,
      preConfirm: () => {
        return {
          title: document.getElementById('swal-title').value,
          details: document.getElementById('swal-details').value
        }
      }
    })

    if (!formValues) return

    const token = localStorage.getItem("token")

    const res = await fetch(`https://web-dev-practice-azure.vercel.app/form/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(formValues)
    })

    if (res.ok) {
      toast.success("Task updated")
      fetchTasks()
    } else {
      toast.error("Update failed")
    }
  }

  return (
    <>
      <div className='text-white flex items-center gap-2 text-2xl'>
        <h1 className='text-gray-600 font-medium'>My Tasks </h1>
        <span className='text-green-400'><HiClipboardDocumentList /></span>
      </div>

      <div className='flex mt-5 flex-wrap gap-4'>

        {tasks.map((task) => (
          <div
            key={task._id}
            className='sm:w-72 w-full border-2 hover:scale-105 transition border-green-600 p-2 rounded bg-zinc-900 h-64 flex flex-col justify-between'
          >
            <div>
              <h1 className='text-white mb-2 font-semibold text-2xl line-clamp-2 wrap-break-word'>
                {task.title}
              </h1>

              <p className='text-zinc-500 line-clamp-5 wrap-break-word'>
                {task.details}
              </p>
            </div>

            <div className='flex items-center justify-center gap-2 mt-2 w-full'>
              <button
                onClick={() => updateTask(task._id, task.title, task.details)}
                className='bg-yellow-500 transition gap-2 p-2 flex mt-3 rounded-md cursor-pointer text-black border-white border-2 hover:scale-90 items-center text-sm'
              >
                <h1 className='text-xl'><FaEdit /></h1>
              </button>

              <button
                onClick={() => deleteTask(task._id)}
                className='bg-red-500 transition gap-2 p-2 flex mt-3 rounded-md cursor-pointer text-white border-white border-2 hover:scale-90 items-center text-sm'
              >
                <h1 className='text-xl'><RiDeleteBin6Fill /></h1>
              </button>
            </div>
          </div>
        ))}


      </div>
    </>
  )
}

export default MyTask
