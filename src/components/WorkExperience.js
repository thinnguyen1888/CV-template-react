import React, { Component } from "react";
import "./WorkExperience.css";

class WorkExperience extends Component {
  render() {
    const { workexperience } = this.props;
    return (
      <div className="WorkExperience">
        <div className="ExpSection">
          <h4>WORK EXPERIENCE</h4>
          <h4>SOME CLIENTS</h4>
        </div>
        <div className="ExpContent">
          <div className="Col-3">
            {workexperience.map((work, index) => {
              return (
                <div className="contentItems" key={index}>
                  <h4>{work.edu}</h4>
                  <p>{work.position}</p>
                  <p>{work.career}</p>
                  <p>{work.year}</p>
                </div>
              );
            })}
          </div>
          <div className="Col-1">
            <h6>LE PETIT CHOU</h6>
            <h6>UBC</h6>
            <h6>METAMORPHOUS</h6>
            <h6>CARLA TAYLOR</h6>
            <h6>IL VENTO</h6>
            <h6>MARINE VIEW</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkExperience;
