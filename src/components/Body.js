import React, { Component } from "react";
import Links from "./Links.js";
import PersonalSkills from "./PersonalSkills.js";
import ComputerSkills from "./ComputerSkills.js";
import Education from "./Education.js";
import WorkExperience from "./WorkExperience.js";
import Interests from "./Interests.js";
import "./Body.css";

class Body extends Component {
  render() {
    const {
      personalSkills,
      academicSkills,
      computerSkills,
      education,
      workexperience,
    } = this.props;
    return (
      <div className="Body">
        <PersonalSkills
          personalSkills={personalSkills}
          academicSkills={academicSkills}
        />
        <ComputerSkills computerSkills={computerSkills} />
        <Education education={education} />
        <WorkExperience workexperience={workexperience} />
        <Interests />
        <Links />
      </div>
    );
  }
}

export default Body;
