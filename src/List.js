import React from 'react';
import data from './data';
import { format, differenceInDays } from 'date-fns';

function getNextBirthday(birthDate) {
  const today = new Date();
  if (
    birthDate.getDate() == today.getDate() &&
    birthDate.getMonth() == today.getMonth()
  ) {
    return 'O aniversário é hoje! 🥳';
  } else if (
    (birthDate.getMonth() == today.getMonth() &&
      birthDate.getDate() > today.getDate()) ||
    birthDate.getMonth() > today.getMonth()
  ) {
    return (
      'Faz aniversário daqui ' +
      differenceInDays(
        new Date(
          today.getFullYear(),
          birthDate.getMonth(),
          birthDate.getDate() + 1
        ),
        today
      ) +
      ' dias.'
    );
  } else {
    return (
      'Faz aniversário daqui ' +
      differenceInDays(
        new Date(
          today.getFullYear() + 1,
          birthDate.getMonth(),
          birthDate.getDate() + 1
        ),
        today
      ) +
      ' dias.'
    );
  }
}

export default function List() {
  return (
    <div className="list">
      {data.map((friend) => (
        <article key={friend.id} className="person">
          <img src={friend.avatar} />
          <div>
            <h2>{friend.name}</h2>
            <p>Aniversário: {format(friend.birthDate, 'dd/MM')}</p>
            <p>{getNextBirthday(friend.birthDate)}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
