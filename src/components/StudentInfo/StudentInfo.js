import React, {Component} from "react";
import FinkiTimetableService from "../../repository/axiosFinkiTimetableRepository";

class StudentInfo extends Component{

    constructor(props,context) {
        super(props, context);
        this.state={
            student: {},
        };
    }

    componentDidMount() {
        FinkiTimetableService.fetchStudentInfo(this.props.studentIndex).then(data=>{
            this.setState({student: data.data})
        })
        this.props.populateStudentTimetable(this.props.studentIndex);
    }

    render() {
        return(
            <div>
                <h4>Распоред на часови за студентот:</h4>
                <div>{this.state.student.name} {this.state.student.surname} {this.state.student.studentindex}</div>
            </div>
        )
    }
}

export default StudentInfo;