import React, { Component } from "react";
import "./Education.css";

class Education extends Component {
  render() {
    const { education } = this.props;
    return (
      <div className="Education">
        <div className="EduSection">
          <h4>EDUCATION</h4>
          <h4>LANGUAGES</h4>
        </div>
        <div className="Content">
          <div className="Col Col-3">
            {education.map((univer, index) => {
              return (
                <div key={index}>
                  <h4>{univer.edu}</h4>
                  <p>{univer.sub}</p>
                  <p>{univer.year}</p>
                </div>
              );
            })}
          </div>
          <div className="Col Col-1">
            <h6>ENGLISH</h6>
            <h6>CHINESE</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
