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
    <button className="text-2xl md:text-4xl self-start" onClick={() => setIsPaused(!isPaused)}>See what I can do</button>
    <ul className="flex flex-wrap">
      {React.Children.map(techStack, (child, index) => {
        return <li className='p-2.5 white-space-nowrap bg-pink' style={{ clipPath: 'polygon(0 5%, 95% 0, 100% 100%, 0 95%)' }} id={`${index}`}>{child}</li>;
      })}
    </ul>
  </>);
}
