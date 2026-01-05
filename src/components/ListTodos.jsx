import React from 'react'

const ListTodos = (props) => {
    return (
        <div>
            <ul><li>{props.list}</li></ul>
        </div>
    )
}

export default ListTodos