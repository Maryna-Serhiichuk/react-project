// style
import './../../App.scss'
// add
import React from 'react'

class TodoList extends React.Component {
	
	state = {
		changeBlock: false,
		taskText: ''
	}

	onChangeBlock(){
		this.setState({
			changeBlock: true,
			taskText: this.props.todo.title,
		})
	}

	offChangedBlock(){
		this.setState({
			changeBlock: false,
		})
		this.props.changeTextTask(this.props.todo.id, this.state.taskText);
	}

	changeText(e){
		this.setState({
			taskText: e.currentTarget.value,
		})
	}

	changeStatus(){
		this.props.changeStatusTask(this.props.todo.id);
	}

	render(){
		return(
			<div className='todo_wrap'>
				<div className='todo'>
					<div className='todo_name'>
						{this.props.todo.userId}
					</div>

					{!this.props.todo.completed &&
						<button className='todo_button todo_buttonTrue' onClick={this.changeStatus.bind(this)}>&#10004;</button>
					}

					{this.props.todo.completed &&
						<button className='todo_button todo_buttonFalse' onClick={this.changeStatus.bind(this)}>&#10008;</button>
					}

					{this.props.todo.completed 
						? <div 
							onClick={this.onChangeBlock.bind(this)} 
							className='todo_true'>
								{!this.state.changeBlock 
									? this.props.todo.title
									: <input 
										autoFocus={true} 
										onBlur={this.offChangedBlock.bind(this)} 
										value={this.state.taskText} 
										onChange={this.changeText.bind(this)} 
									/>
								}
						</div>

						: <div 
							onClick={this.onChangeBlock.bind(this)} 
							className='todo_false'>
								{!this.state.changeBlock 

									? this.props.todo.title

									: <input 
										autoFocus={true} 
										onBlur={this.offChangedBlock.bind(this)} 
										value={this.state.taskText}
										onChange={this.changeText.bind(this)} 
									/>
								}
						</div>
					}

				</div>
			</div>
		)
	}

}

export default TodoList