// style
import './../../App.scss'
// add
import React, { useState } from 'react'

function Todos(props) {
	const [changeBlock, setChangeBlock] = useState(false)
	const [taskText, setTaskText] = useState('')

	const onChangeBlock = () => {
		setChangeBlock(true)
		setTaskText(props.todo.title)
	}

	const offChangedBlock = () => {
		setChangeBlock(false)
		props.changeTextTask(props.todo.id, taskText);
	}

	const changeText = (e) => {
		setTaskText(e.currentTarget.value)
	}

	const changeStatus = () => {
		props.changeStatusTask(props.todo.id);
	}

	return(
		<div className='todo_wrap'>
			<div className='todo'>
				<div className='todo_name'>
					{props.todo.userId}
				</div>

				{!props.todo.completed &&
					<button className='todo_button todo_buttonTrue' onClick={changeStatus}>&#10004;</button>
				}

				{props.todo.completed &&
					<button className='todo_button todo_buttonFalse' onClick={changeStatus}>&#10008;</button>
				}

				{props.todo.completed 
					? <div 
						onClick={onChangeBlock} 
						className='todo_true'>
							{!changeBlock 
								? props.todo.title
								: <input 
									autoFocus={true} 
									onBlur={offChangedBlock} 
									value={taskText} 
									onChange={changeText} 
								/>
							}
					</div>

					: <div 
						onClick={onChangeBlock} 
						className='todo_false'>
							{!changeBlock 

								? props.todo.title

								: <input 
									autoFocus={true} 
									onBlur={offChangedBlock} 
									value={taskText}
									onChange={changeText} 
								/>
							}
					</div>
				}

			</div>
		</div>
	)

}

export default Todos