import React from 'react';
class TaskItem extends React.Component {

   
    onDelete = () => {
        this.props.onDelete(this.props.student.id)
        
    }
    onUpdate =() =>{
        this.props.onUpdate(this.props.student.id)
        
    }
    render() {
        var students = this.props.student;
        var index = this.props.index;
     
        return (
            <tr>
                <td >{index + 1}</td>
                <td>{students.stdID}</td>
                <td className="bg">{students.name}</td>
                <td>{students.date}</td>
                <td className="bg">
                    <span className={students.gender ? 'badge badge-success' : 'badge badge-danger'} >
                        {students.gender ? 'Nam' : 'Nữ'}
                    </span>

                </td>
                <td>{students.major}</td>
                <td className="bg">{students.address}</td>
                <td>
                    <button type="button" className="btn btn-success" onClick={this.onUpdate}><i class="fas fa-pencil-alt"></i> Sửa</button>
                    <button type="button" className="btn btn-dark" onClick={this.onDelete}><i class="fas fa-trash-alt"></i> Xóa</button>
                </td>
            </tr>

        )
    }
}

export default TaskItem;