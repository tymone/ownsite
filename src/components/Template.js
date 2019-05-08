import React from 'react';

const Template = (props) => {

  return (
    <section className={props.class}>
      <h2>{props.title}</h2>
      <div className='bodySection'>{props.body}</div>
    </section>
  )
}
export default Template