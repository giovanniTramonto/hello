import React, { useState, useEffect } from 'react';
import techStack from '../../data/techstack';

export default function TechStack() {
  const [isPaused, setIsPaused] = useState(true)


  useEffect(() => {
    if (!isPaused) {
      let timerId : number

      const run = () => {
        console.log('animation')
        timerId = requestAnimationFrame(run)
      }

      run()

      return () => cancelAnimationFrame(timerId)
    }
  }, [isPaused])
  return (<>
    <button className="button" onClick={() => setIsPaused(!isPaused)}>See what I can do</button>
    <ul className="list">
      {React.Children.map(techStack, (child, index) => {
        return <li className='list__item' id={`${index}`}>{child}</li>;
      })}
    </ul>
  </>);
}
