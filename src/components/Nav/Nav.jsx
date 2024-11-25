import React from 'react';
import { Link } from 'react-router';

export function Nav() {
  return (
    <nav>
      <b>Pet-log</b>
      <span>
        <Link to='/pets'>
          <b>name's pets</b>
        </Link>
        <b>update pets</b>
      </span>
    </nav>
  );
}