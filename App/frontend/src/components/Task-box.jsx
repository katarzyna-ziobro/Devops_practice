import '../App.css'
import { useState } from 'react';

function Task({ task }) {

    const priorityIcons = {
        0: '/src/assets/icon-priority0.png',
        1: '/src/assets/icon-priority1.png',
        2: '/src/assets/icon-priority2.png',
        3: '/src/assets/icon-priority3.png',
    }

    const [isDone, SetIsDone] = useState(false);

    return <div className="task-item">
        <button onClick={() => SetIsDone(prev => !prev)}>
            Done
        </button>
        <img
            src={priorityIcons[task.priority]}
            alt={`priority-${task.priority}`}
            className="priority-icon"
        />
        <div>
            {isDone ? <p><s> {task.name} </s></p> : <p> {task.name}</p>}
        </div>
    </div>
}

export default Task;
