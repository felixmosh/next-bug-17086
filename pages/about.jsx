import React from "react";
import s from "../styles/about.module.css";

export default class AboutPage extends React.Component {
  ref = React.createRef()
  componentDidMount() {
    console.log(window.getComputedStyle(this.ref.current).height);
  }

  render() {
    return (
      <div className={s.about} ref={this.ref}>
        About us
      </div>
    );
  }
}
