import { useState } from 'react';
import Information from './Information';

function App() {
  return (
    <>
      <Information name='Ayushman' skills={["HTML", "REACT", "Angular"]} age={50}/>
    </>
  )
}

export default App
