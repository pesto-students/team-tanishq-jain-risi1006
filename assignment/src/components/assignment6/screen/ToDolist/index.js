import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../../../Navbar'
import CustomToggleButton from '../../components/customTab'
import CheckboxLabels from '../../components/checkbox'
import {finishTask, restoreTask} from './reducer'
import CustomInput from '../../../assignment5/component/input'
import CustomButton from '../../../../molecules/button'
import { useNavigate} from 'react-router';

const ToDoList = () => {
    const allTasks = useSelector((state) => state?.todo?.item)
    const ogTask = useSelector((state) => state?.todo?.onging)
    const cTask = useSelector((state) => state?.todo?.completed)

    const [taskState, setTaskState] = useState('ongoing');
    const [ongoingTasks, setOngoingTasks] = useState(ogTask);
    const [completedTasks, setCompletedTasks] = useState(cTask);
    const [newTask, setNewTask] = useState('');

    const navigation = useNavigate();

    const dispatch = useDispatch()

    const markAsCompleted = (task) => {
        dispatch(finishTask(task));
    }
    const markAsOngoing = (task) => {
        dispatch(restoreTask(task));
    }

    const onInputChange = (event) => {
        console.log(event.target.value)
        setNewTask(event.target.value)
    }

    return(
        <div>
            <Navbar onHomeButtonClick={()=>{navigation('/')}}/>
            <div style={{margin:10}}> 
                <h1>This is part of Assignment 6</h1>
                <p>This is todo app. User can create task, delete task and mark as completed</p>
                <CustomToggleButton onSelect={setTaskState} />
                {
                    taskState === 'ongoing' ? (<div style={{margin:10}}>
                        {ogTask.map((task)=>{
                            return (
                                <CheckboxLabels 
                                    label={task.title}
                                    onCheck={()=>{
                                        markAsCompleted(task);
                                    }}
                                />
                            )
                        })}
                    </div>) : (<div style={{margin:10}}>
                        {cTask.map((task)=>{
                            return <CheckboxLabels 
                                label={task.title}
                                checked={true}
                                onCheck={()=>{
                                    markAsOngoing(task);
                                }}
                            />
                        })}
                    </div>)
                }
            </div>
            <CustomInput 
                value = {newTask}
                onChange = {onInputChange}
                label = {'Add New Task'}
                id = {'newTask'}
                customStyle = {{marginLeft:10, marginTop:50}}
            />
            <CustomButton
                label={'Add New Task'}
                onClick = {()=>{
                    markAsOngoing({
                        title : newTask,
                        status:'ongoing'
                    })
                    setNewTask('');
                }}
                customStyle={{marginTop:20, marginLeft:10}}
            />
        </div>
    )
}

export default ToDoList;