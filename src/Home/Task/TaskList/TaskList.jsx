import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import TaskListRow from './TaskListRow';

const TaskList = () => {
    const [alltasks, setAlltasks] = useState([]);

    const url = `https://job-task-server-self.vercel.app/task`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAlltasks(data))

    }, [url]);

    const handleDelete = id => {
        const proceed = confirm('Are You sure want To Delete Task');
        if (proceed) {
            fetch(`https://job-task-server-self.vercel.app/task/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        alert('deleted SuccessFully');
                        const remaining = alltasks.filter(alltask => alltask._id !== id);
                        setAlltasks(remaining);
                    }
                })

        }
    }
    return (
        <div className='mt-5'>
            <SectionTitle title={"TASK List"}></SectionTitle>
            <div className='mt-10 mb-10'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Index </th>
                                <th>Title</th>
                                <th>Email</th>
                                <th>Describe</th>
                                <th>Rating</th>
                                <th>Status</th>
                                <th>Button</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        {alltasks.map((alltask, index) => (
                            <TaskListRow key={alltask._id} alltask={alltask} index={index + 1}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TaskList;