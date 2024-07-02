import { TypeAnimation as TypeAnimationComponent } from 'react-type-animation'
import React from "react";

function TypeAnimation ({ sequence, delay = 1000 }) {
  const modifiedSequence = []

  sequence.forEach((item, index) => {
    modifiedSequence.push(item)

    if (index < sequence.length) {
      modifiedSequence.push(delay)
    }
  })

  return (
    <TypeAnimationComponent
      sequence={modifiedSequence}
      speed={40}
      deletionSpeed={70}
      repeat={Infinity}
      aria-label={sequence[0]}
      cursor={false}
    />
  )
}

export default TypeAnimation