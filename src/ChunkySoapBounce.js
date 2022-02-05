import React from 'react'
import { useRive} from 'rive-react';

function ChunkySoapBounce() {

  const { RiveComponent, rive } = useRive({
    src: './chunky_bounce.riv',
    autoplay: true,
  });


  // This example is using a state machine with a trigger input.
  return <RiveComponent />;
}


export default ChunkySoapBounce