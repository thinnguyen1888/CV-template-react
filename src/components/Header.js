import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Left">
          <p className="Name">NGUYỄN TẤN THỊNH</p>
          <p className="Content">
            Châm ngôn sống: “Không quan trọng bạn đang đi đâu, có ánh sáng cuối
            con đường hay không và rất khó để đạt được điều gì đó, nhưng bạn có
            thể làm được và luôn nhìn về phía trước bạn sẽ tìm thấy mặt tích cực
            của vấn đề.”
          </p>
        </div>
        <div className="Right">
          <h4>Thông tin</h4>
          <div className="BorderBottom"></div>
          <div className="Location">
            <p className="CommonParagraph">VIỆT NAM</p>
          </div>
          <div className="Street CommonParagraph">
            Số 1, đường Lê Duẫn, phường Bến Nghé, Quận 1, TPHCM
          </div>
          <div className="PhoneNumber">
            <div className="Icon">
              <img
                src="https://image.flaticon.com/icons/png/512/65/65680.png"
                alt="Phone"
              />
            </div>
            <div className="Number">0974 668 929</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
