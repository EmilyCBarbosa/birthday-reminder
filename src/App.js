import React from 'react';
import List from './List';
import './style.css';

export default function App() {
  return (
    <main>
      <section className="container">
        <h1>Birthday Reminder</h1>
        <List />
      </section>
    </main>
  );
}
