import React from 'react';
class Search extends React.Component {
    constructor(props) {
        super(props);
        
        this.state={
            keyword : ''
        }
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
        
    }
    onSearch=()=>{
        this.props.onSearch(this.state.keyword)
    }
    render() {
        
        return (
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
                <div className="row ">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 col-9">
                        <div className="form-group">
                            <input type="text" className="form-control" name="keyword" value={this.state.keyword}
                                placeholder="Nhập Mã Sinh Viên..."  onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-3">
                        <button type="button" className="btn btn-primary" onClick={this.onSearch}><i className="fas fa-search"></i> Tìm</button>
                    </div>
                </div>

            </div>

        )
    }
}

export default Search;