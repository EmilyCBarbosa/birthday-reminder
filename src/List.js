import React from 'react';
import data from './data';
import { format, parse } from 'date-fns';

export default function List() {
  return (
    <>
      {data.map((friend) => (
        <article key={friend.id} className="person">
          <img src={friend.avatar} />
          <div>
            <h2>{friend.name}</h2>
            <p>{format(friend.birthDate, 'dd/MM/yyyy')}</p>
          </div>
        </article>
      ))}
    </>
  );
}
