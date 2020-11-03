import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";
import "./CV.css";

class CV extends Component {
  render() {
    const {
      personalSkills,
      academicSkills,
      computerSkills,
      education,
      workexperience,
    } = this.props;
    return (
      <div className="CV">
        <Header />
        <Body
          personalSkills={personalSkills}
          academicSkills={academicSkills}
          computerSkills={computerSkills}
          education={education}
          workexperience={workexperience}
        />
      </div>
    );
  }
}

export default CV;
