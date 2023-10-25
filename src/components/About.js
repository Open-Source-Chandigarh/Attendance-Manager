import React from "react";
import "./About.css";
import attendance from "./attendance.json";
import Lottie from "lottie-react";

export default function About() {
  return (
    <div className="about">
      <h1>About</h1>
      <div className="about-content">
        <div className="content">
          <div className="para1">
            The attendance management page within this application represents a
            leap forward in the realm of attendance tracking and record-keeping.
            Utilizing the powerful and versatile React framework, it promises its
            users a remarkable experience, characterized by seamlessness and an
            absence of loading times. In a world where time is of the essence,
            this innovative web page ensures that managing your attendance becomes
            an effortless task.
          </div>

          <div className="para2">
            Whether you're a student keeping tabs on your class attendance, an
            educator monitoring your students' participation, or a professional
            needing to record your presence at meetings and events, this
            attendance management page is designed to cater to all your needs.
            It's tailored to provide a user-friendly, efficient, and
            frustration-free experience.
          </div>

          <div className="para3">
            It simplifies and enhances the way you manage attendance records, making
            it easier than ever before. With this page at your disposal, you can
            focus on what matters most, whether it's your education, your
            teaching, or your professional commitments, while the attendance
            management takes care of itself in the most efficient and
            user-friendly manner possible. Say goodbye to the frustration of
            slow-loading pages and embrace this progressive solution that caters
            to your attendance management needs like never before.
            It is developed by Anshul Jain
          </div>
        </div>
        <div className="lottie-file">
          <Lottie loop={true} animationData={attendance} />
        </div>
      </div>

      <div className="note">
        Note: Currently this app uses local storage to store the user data which
        could leads to data lost during device reset or brower cache clear or
        reset soon the app will be connected to backend for more reliability and
        scalability
      </div>
    </div>
  );
}
