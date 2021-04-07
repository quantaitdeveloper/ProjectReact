import React from 'react';
class TaskItem extends React.Component {

   
    onDelete = () => {
        this.props.onDelete(this.props.student.id)
        
    }
    onUpdate =() =>{
        this.props.onUpdate(this.props.student.id)
        
    }
    render() {
        let students = this.props.student;
     
        let index = this.props.index;
     
        return (
            <tr>
                <td scope="row">{index + 1}</td>
                <td>{students.stdID}</td>
                <td className="bg">{students.name}</td>
                <td><img src={students.urlImage} width="100" height="100" /></td>
                <td className="bg">{students.date}</td>
                <td>
                    <span className={students.gender ? 'badge badge-success' : 'badge badge-danger'} >
                        {students.gender ? 'Nam' : 'Nữ'}
                    </span>

                </td>
                <td className="bg">{students.major}</td>
                <td>{students.address}</td>
                <td>
                    <button type="button" className="btn btn-success" onClick={this.onUpdate}><i className="fas fa-pencil-alt"></i> Sửa</button>
                    <button type="button" className="btn btn-dark" onClick={this.onDelete}><i className="fas fa-trash-alt"></i> Xóa</button>
                </td>
            </tr>

        )
    }
}

export default TaskItem;