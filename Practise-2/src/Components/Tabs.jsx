import React from 'react'
import { Link } from 'react-router-dom'
export default function Tabs() {
  return (
    <div>
        <ul>
            <li><Link to={'child'}>Child</Link></li>
            <li><Link to={'parent'}>Parent</Link></li>
      
        </ul>
    </div>
  )
}
