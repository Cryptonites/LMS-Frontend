import React, { Component } from "react";
import CommonTabs from "../common/commonTabs";
import Countdown from "../common/countdown";
import "../css/dashboard.css";

export default class Dashboard extends Component {
  
  render() {
    return (
      <div>
        <CommonTabs user={this.props.user}/>
        <div className="content-section">
          <Countdown />
          <hr className="line-break-countdown" />
          <div className="div-ds-workshop">
            <div className="ds-workshop-section-1">
              <div className="ds-title">Today Day schools & Workshops</div>
              <div className="ds-navigate">See All -{">"}</div>
            </div>
            <div className="ds-workshop-section-2">
              <div className="div-ds-1">
                <div className="title-section">
                  <div className="div-title-img">
                    <img
                      className="title-img"
                      src={require("../images/study img 2.jpg")}
                      alt="ds-title-img"
                    />
                  </div>
                  <div className="div-title">
                    EEX3373 - Communication and Computer Technology
                  </div>
                </div>
                <hr className="line-break-ds-workshop" />
                <div className="div-workshop-details">
                  <span>Refer Unit 08 & 09</span> <br />
                  <span>Time - 6.00 p.m - 8.00 p.m </span>
                </div>

                <div className="join-btn">Join Meeting</div>
              </div>
              <div className="div-ds-2">
                <div className="title-section">
                  <div className="div-title-img">
                    <img
                      className="title-img"
                      src={require("../images/cf.jpg")}
                      alt="ds-title-img"
                    />
                  </div>

                  <div className="div-title">
                    Carrer Fair Platform awareness session
                  </div>
                </div>
                <hr className="line-break-ds-workshop" />
                <div className="div-workshop-details">
                  <span>Please watch first training session </span> <br />
                  <span>Time - 8.30 p.m - 10.00 p.m </span>
                </div>
                <div className="join-btn">Join Meeting</div>
              </div>
            </div>
          </div>
          <div className="div-cm-notification-forum">
            <div className="div-cm-forum">
              <div className="div-course-material">
                <div className="course-material-section-1">
                  Course materials & Recordings
                </div>
                <div className="course-material-section-2">
                  <div className="div-description">
                    <div className="description-title">
                      Download Text books, Day school <br />
                      Presentations & <br />
                      Meeting Recording
                    </div>
                    <div className="see-more-btn">Show Details -{">"}</div>
                  </div>
                  <div className="div-cm-image">
                    <img
                      className="cm-image"
                      src={require("../images/course materials3.jpg")}
                      alt="ds-title-img"
                    />
                  </div>
                </div>
              </div>
              <div className="div-forum">
                <div className="forum-section-1">
                  <div className="div-forum-img">
                    <img
                      className="forum-image"
                      src={require("../images/forum (2).jpg")}
                      alt="ds-title-img"
                    />
                  </div>
                </div>
                <div className="forum-section-2">
                  <div className="div-forum-title">Get Help From Friends</div>
                </div>
              </div>
            </div>
            <div className="div-notification-section">
              <div className="notification-section-1">
                <div className="notification-title">Notifications</div>
                <div className="notification-navigate">See All -{">"}</div>
              </div>
              <div className="notification-section-2">
                <div className="div-notification">
                  <div className="notification-title-section">
                    <div className="div-notifier-img">
                      <img
                        className="notifier-img"
                        src={require("../images/nalin sir.jpg")}
                        alt="ds-title-img"
                      />
                    </div>
                    <div className="div-notifier-name">Nalin Wikramanayake</div>
                  </div>
                  <div className="div-notification-body-section">
                    Please note that the recording of the Training Session on
                    the Future Careers Platform is available on the LMS. We will
                    hold another session before the Career Fair. You can also
                    ask questions on the Discussion Forum.
                  </div>
                </div>

                <div className="div-notification">
                  <div className="notification-title-section">
                    <div className="div-notifier-img">
                      <img
                        className="notifier-img"
                        src={require("../images/uditha madam (2).jpg")}
                        alt="ds-title-img"
                      />
                    </div>
                    <div className="div-notifier-name">Uditha Ratnayake</div>
                  </div>
                  <div className="div-notification-body-section">
                    Dear students, Please don't send me emails asking to
                    postpone the exams. University decision is to not to
                    postpone any exams.All examinations scheduled to be held
                    from 15th November till 30th of November 2022.
                  </div>
                </div>

                <div className="div-notification">
                  <div className="notification-title-section">
                    <div className="div-notifier-img">
                      <img
                        className="notifier-img"
                        src={require("../images/Screenshot (269).png")}
                        alt="ds-title-img"
                      />
                    </div>
                    <div className="div-notifier-name">Kasun Aratthanage</div>
                  </div>
                  <div className="div-notification-body-section">
                    The CAT 2 of ISI 3376 will be available at exams openlearn
                    .lk at 11.00 AM Today. Please note that the back button will
                    not be provided. You guys cheating so much in the CAT exams.
                    Good Luck!!!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
