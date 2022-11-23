import React from 'react'
import Imagepage from './Imagepage'
import Selector from './Selector'

export default function Readmore() {
  return (
    <div>
      <h2>Readmore Second page</h2>
      <div>
        <a href="/">Homepage</a>
      </div>
      <Selector />
      <Imagepage/>
    </div>
  )
}
