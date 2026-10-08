import React from 'react';
import ReactDOM from 'react-dom/client';
import PageLayout from '../components/PageLayout.jsx';
import HomePage from '../pages/HomePage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageLayout currentPage="home">
      {({ onOpenContact }) => <HomePage onOpenContact={onOpenContact} />}
    </PageLayout>
  </React.StrictMode>
);
