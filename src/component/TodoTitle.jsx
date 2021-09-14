import {useState, useRef, useEffect, memo} from 'react';
import {Enter, ESC, ESCAPE} from '../config.js';

function TodoTitle(props) {
    console.log('todotitle')
    const {todoList, todo, onTodoListChange} = props;
    const [isEdited, setIsEdited] = useState(false); 
    const [editedTitle, setEditedTitle ] = useState('');
    const editInput = useRef(null);
    
    useEffect(() => {
        if (isEdited) editInput.current.focus();
        setEditedTitle('')
    }, [isEdited]);

    const handleChecked = (e) => {
        todo.completed = !todo.completed;
        const newTodoList = todoList.map(_todo => _todo.id === todo.id ? todo : _todo);
        onTodoListChange(newTodoList);
    }

    const handleDeleted = (e) => {
        const newTodoList = todoList.filter(_todo => _todo.id !== todo.id);
        onTodoListChange(newTodoList);
    }

    const handleDoubleClick = (e) => {
        setIsEdited(!isEdited);
    }

    const handleEdit = (e) => {
        setEditedTitle(e.target.value);
    }

    const onKeyUp = (e) => {
        if (e.key === Enter && editedTitle.length > 0) {
            todo.title = editedTitle;
            const newTodoList = todoList.map(_todo => _todo.id === todo.id ? todo : _todo);
            onTodoListChange(newTodoList);
            setIsEdited(!isEdited);
        }

        if (e.key === ESC || e.key === ESCAPE) {
            setIsEdited(!isEdited);
        }
    }

    return (
        <li className={isEdited ? "editing" : (todo.completed ? "completed" : null)} onDoubleClick={handleDoubleClick}>
            <div className="view">
                <input 
                    className="toggle" 
                    type="checkbox"
                    onChange={handleChecked}
                    checked={todo.completed}
                />
                <label className="label">{todo.title}</label>
                <button id={todo.id} className="destroy" onClick={handleDeleted}></button>
            </div>
                <input className="edit" id={todo.id} value={editedTitle} onChange={handleEdit} onKeyUp={onKeyUp} ref={editInput}/>
        </li>
    );
}

export default memo(TodoTitle);