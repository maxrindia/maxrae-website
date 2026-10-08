import React from 'react';
import ReactDOM from 'react-dom/client';
import PageLayout from '../components/PageLayout.jsx';
import IndustriesPage from '../pages/IndustriesPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageLayout currentPage="industries">
      {({ onOpenContact }) => <IndustriesPage onOpenContact={onOpenContact} />}
    </PageLayout>
  </React.StrictMode>
);
