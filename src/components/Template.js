import React from "react";

const Template = props => {
  return (
    <section className={props.class}>
      <div className="bodySection">{props.body}</div>
    </section>
  );
};
export default Template;
