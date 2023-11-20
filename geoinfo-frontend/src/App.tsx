import React from 'react';
import { Routes, Route } from 'react-router-dom';

import styles from './App.module.css';

import Navigation from './routes/navigation/navigation.route';
import Landing from './routes/landing/landing.route';

function App() {
  return (
    <div className={styles.backgroundGradient}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
