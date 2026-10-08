import React from 'react';
import ReactDOM from 'react-dom/client';
import PageLayout from '../components/PageLayout.jsx';
import AboutPage from '../pages/AboutPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageLayout currentPage="about">
      {({ onOpenContact }) => <AboutPage onOpenContact={onOpenContact} />}
    </PageLayout>
  </React.StrictMode>
);
