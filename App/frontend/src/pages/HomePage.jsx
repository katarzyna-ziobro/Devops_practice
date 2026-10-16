import '../App.css'
import Task from '../components/Task-box';


function Home() {

    const tasks = [
        { id: 1, name: "pierwsze zadanie", priority: 0 },
        { id: 2, name: "drugie zadanie", priority: 2 },
        { id: 3, name: "trzecie zadanie", priority: 3 },
        { id: 4, name: "czwarte zadanie", priority: 1 },
    ];


    return (
        <div className='home'>
            <div className=' task-list'>
                {tasks.map((task) => (
                    <Task task={task} key={task.id} />
                ))}
            </div>
        </div>
    );

}

export default Home;
