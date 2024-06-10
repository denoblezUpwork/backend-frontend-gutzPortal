// SampleComponent.js
import React from 'react';
import { useView } from '../context/ViewContext';

function InvestmentHook() {
  const { currentView, setCurrentView } = useView();

  return (
    <div>
      <h2>Sample Component</h2>
      <p>Current View: {currentView}</p>
      <button onClick={() => setCurrentView('dashboard')}>Go to Dashboard</button>
      <button onClick={() => setCurrentView('viewClients')}>View Clients</button>
    </div>
  );
}

export default InvestmentHook;
