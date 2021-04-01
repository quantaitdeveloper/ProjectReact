import React from 'react';
import TaskItem from './taskItem'

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterid: "",
            filtergender: -1,
            dateS: '',
            dateE: '',
            getdateS : 0,
            getdateE :0 ,
            getMonthS : 0,
            getMonthE:0 
        }
    }

    onChange = (event) => {

      
        var name = event.target.name;
        var value = event.target.value;
        this.props.onFilter(name === 'filterid' ? value : this.state.filterid, name === 'filtergender' ? value : this.state.filtergender)
        this.setState({
            [name]: value
        })
        
        
    }
    onSubmit=(e)=>{
      
       e.preventDefault();
        let dateS = this.state.dateS.split('/');
        let dateE =this.state.dateE.split('/');
        let getdateS = parseInt(dateS[0]);
        let getdateE = parseInt(dateE[0]);
        let getMonthS = parseInt(dateS[1]);
        let getMonthE = parseInt(dateE[1]);
        this.setState({
            getdateS:getdateS ,
            getdateE:getdateE,
            getMonthS:getMonthS,
            getMonthE:getMonthE,
        },()=> this.props.onDate(this.state.getdateS, this.state.getdateE , this.state.getMonthS , this.state.getMonthE))

    
    }

    render() {
        let students = this.props.students;

        let elmStudents = students.map((student, index) => {
            /*lap qua moi phan tu cua task*/
            return <TaskItem
                key={student.id}
                index={index}
                student={student}
                onDelete={this.props.onDelete}
                onUpdate={this.props.onUpdate}
            >
            </TaskItem> /*truyn cho tk con taskitem 1 prop task , 1 prop index  */
        })
        return (
            <div className="col-lg-12">


                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th style={{ width: '130px' }}>Mã Sinh Viên</th>
                            <th>Họ Tên</th>
                            <th>Ngày Sinh</th>
                            <th>Giới Tính</th>
                            <th>Ngành Học</th>
                            <th>Địa Chỉ</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >


                            </td>
                            <td>


                            </td>
                            <td></td>
                            <td>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="dateS" value={this.state.dateS}
                                            placeholder="Từ Ngày" onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="dateE" value={this.state.dateE}
                                            placeholder="Đến Ngày" onChange={this.onChange} />
                                    </div>
                                    <input type="submit" className="btn btn-primary" onClick={this.onDate} value="Tìm"/>
                                </form>
                               
                            </td>
                            <td>
                                <div className="form-group">
                                    <select className="form-control" name="filtergender" value={this.state.filtergender} onChange={this.onChange} >
                                        <option value={-1} >Tất Cả</option>
                                        <option value={1} >Nam</option>
                                        <option value={0} >Nữ</option>
                                    </select>
                                </div>
                            </td>
                            <td>

                            </td>
                        </tr>
                        {elmStudents}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default TaskList;