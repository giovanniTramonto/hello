import React from 'react'

interface PropsType {
  children: React.ReactNode;
}

export default function ListView(props: PropsType) {
  return (
    <ul className="list">
      {React.Children.map(props.children, (child) => {
        return <li className='list__item'>{child}</li>;
      })}
    </ul>
  );
}
