import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo';

function IndexLink() {
  return (
    <Link to="/" className="cursor-pointer flex items-center justify-center">
      <Logo dimensions='h-9 w-9'/>
    </Link>
  );
}

export default IndexLink