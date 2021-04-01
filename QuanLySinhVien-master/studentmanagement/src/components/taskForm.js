import React from "react";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      stdID: "",
      name: "",
      date: "",
      gender: true,
      major: "",
      address: "",
    };
  }

  componentDidMount() {
    let stdEdit = this.props.stdEdit;

    if (stdEdit) {
      this.setState({
        id: stdEdit.id,
        stdID: stdEdit.stdID,
        name: stdEdit.name,
        date: stdEdit.date,
        gender: stdEdit.gender,
        major: stdEdit.major,
        address: stdEdit.address,
      });
      document.getElementById("stdID").value = stdEdit.stdID;
      document.getElementById("name").value = stdEdit.name;
      document.getElementById("major").value = stdEdit.major;
      document.getElementById("date").value = stdEdit.date;
      document.getElementById("address").value = stdEdit.address;
    }
  }

  UNSAFE_componentWillReceiveProps(prop) {
    console.log(prop);
    if (prop && prop.stdEdit) {
      this.setState({
        id: prop.stdEdit.id,
        stdID: prop.stdEdit.stdID,
        name: prop.stdEdit.name,
        date: prop.stdEdit.date,
        gender:prop.stdEdit.gender,
        major: prop.stdEdit.major,
        address: prop.stdEdit.address,
        
      });
      document.getElementById("stdID").value = prop.stdEdit.stdID;
      document.getElementById("name").value = prop.stdEdit.name;
      document.getElementById("major").value = prop.stdEdit.major;
      document.getElementById("date").value = prop.stdEdit.date;
      document.getElementById("address").value = prop.stdEdit.address;
    }
  }
  onChange = (event) => {
    /** ham onChange luon tra ve 1 target  */

    var name = event.target.name;
    var value = event.target.value;

    if (name === "gender") {
      /* Nếu name của input là "true hoặc false" kiểu chuỗi thì gán lại lại bằng kiểu boolen*/
      value = event.target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    var stdID = document.getElementById("stdID");
    var name = document.getElementById("name");
    var major = document.getElementById("major");
    var date = document.getElementById("date");
    var adr = document.getElementById("address");
    if (
      stdID.value === "" ||
      name.value === "" ||
      major.value === "" ||
      date.value === "" ||
      adr.value === ""
    ) {
      alert("Không được để trống !");
    } else {
      this.props.onSubmit(this.state);
    }
  };
  onCancel = () => {
    document.getElementById("ten").value = "";

    this.setState({
      name: "",
      status: false,
    });
  };
  render() {
    let { id } = this.state;
    return (
      <div className="card">
        <div className="card-header">
          {id !== "" ? "Cập Nhật Sinh Viên" : "Thêm Sinh Viên "}
          <span onClick={this.props.onhideDisplay}>
            <i className="fas fa-times"></i>
          </span>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="card-body">
            <div className="form-group">
              <label>Mã Sinh Viên</label>
              <input
                type="text"
                id="stdID"
                className="form-control"
                name="stdID"
                onChange={this.onChange}
              />
              <label>Họ Tên</label>
              <input
                type="text"
                id="name"
                className="form-control"
                name="name"
                onChange={this.onChange}
              />
              <label>Ngày Sinh</label>
              <input
                type="text"
                id="date"
                className="form-control"
                name="date"
                onChange={this.onChange}
              />
              <label>Giới Tính</label>
              <select
                className="form-control"
                name="gender"
                value={this.state.gender}
                onChange={this.onChange}
              >
                <option value={true}>Nam</option>
                <option value={false}>Nữ</option>
              </select>

              <label>Ngành Học</label>
              <input
                type="text"
                id="major"
                className="form-control"
                name="major"
                onChange={this.onChange}
              />
              <label>Địa Chỉ</label>
              <input
                type="text"
                id="address"
                className="form-control"
                name="address"
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="card-footer">
            <div className="form-group"></div>
            <p>
              <input type="submit" className="btn btn-primary" value={id !==''? 'Sửa':'Thêm'} />
              <button
                className="btn btn-danger"
                onClick={this.props.onhideDisplay}
              >
                <i className="pe-7s-close"></i>Hủy Bỏ
              </button>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default TaskForm;
