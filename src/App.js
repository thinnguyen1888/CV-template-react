import React, { Component } from "react";
import "./App.css";
import CV from "./components/CV";

class App extends Component {
  render() {
    const personalSkills = [
      "Experience of working with large, small teams and independently",
      "Experience of time management and meet dead lines",
      "Ability to multi-task and handle several projects",
    ];

    const academicSkills = [
      "Experience of concept character design",
      "Highly experienced in drawing, painting, illustration",
      "Experience of layout and magazine design",
    ];

    const computerSkills = [
      {
        icon:
          "https://res.cloudinary.com/dpy2iegdk/image/upload/v1591163386/company_rukygn.png",
        label: "APPLE",
      },
      {
        icon:
          "https://res.cloudinary.com/dpy2iegdk/image/upload/v1591163386/microsoft_bxmxmb.png",
        label: "WINDOWS",
      },
      {
        icon:
          "https://res.cloudinary.com/dpy2iegdk/image/upload/v1591163386/linux_wvzakz.png",
        label: "LINUX",
      },
      {
        icon:
          "https://res.cloudinary.com/dpy2iegdk/image/upload/v1591163386/adobe-illustrator_iztdus.png",
        label: "ILLUSTRATOR",
      },
      {
        icon:
          "https://res.cloudinary.com/dpy2iegdk/image/upload/v1591163386/adobe-photoshop_rqt3nj.png",
        label: "PHOTOSHOP",
      },
      {
        icon:
          "https://res.cloudinary.com/dpy2iegdk/image/upload/v1591163386/adobe-indesign_dv2tgm.png",
        label: "INDESIGN",
      },
      {
        icon:
          "https://res.cloudinary.com/dpy2iegdk/image/upload/v1591163386/wordpress_vy5fuc.png",
        label: "WORDPRESS",
      },
      {
        icon:
          "https://res.cloudinary.com/dpy2iegdk/image/upload/v1591163385/word_uctq6u.png",
        label: "WORD",
      },
      {
        icon:
          "https://res.cloudinary.com/dpy2iegdk/image/upload/v1591163385/excel_hm1bc0.png",
        label: "EXCEL",
      },
      {
        icon:
          "https://res.cloudinary.com/dpy2iegdk/image/upload/v1591163385/powerpoint_pljepk.png",
        label: "POWERPOINT",
      },
    ];

    const education = [
      {
        edu: "EMILY CARR UNIVERSITY",
        sub: "3d Rhino",
        year: "2013-2014",
      },
      {
        edu: "BCIT COLLEGE",
        sub: "Design Essentials",
        year: "2015-2016",
      },
      {
        edu: "EMILY CARR UNIVERSITY",
        sub: "Design Essentials",
        year: "2017-2018",
      },
      {
        edu: "ART & ARCHITECHTURE AZAD UNIVERSITY OF TEHRAN",
        sub: "Fine Arts",
        year: "2019-2020",
      },
    ];
    const workexperience = [
      {
        edu: "PRESSED METAL",
        position: "PRODUCTS",
        career: "Graphic | Industrial Designer",
        year: "2020 - Present",
      },
      {
        edu: "WHOLE FOODS",
        position: "MARKET",
        career: "Graphic Artist",
        year: "2013 - 2015",
      },
      {
        edu: "PRESSED METAL",
        position: "MARKET",
        career: "Graphic Designer",
        year: "2015 - 2018",
      },
      {
        edu: "PRESSED METAL",
        position: "",
        career: "Graphic",
        year: "2018 - 2019",
      },
      {
        edu: "PRESSED METAL",
        position: "",
        career: "Graphic Designer",
        year: "2019 - 2020",
      },
    ];

    return (
      <div className="App">
        <CV
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

export default App;
