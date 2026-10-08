import React from 'react';
import ReactDOM from 'react-dom/client';
import PageLayout from '../components/PageLayout.jsx';
import ServicesPage from '../pages/ServicesPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageLayout currentPage="services">
      {({ onOpenContact }) => <ServicesPage onOpenContact={onOpenContact} />}
    </PageLayout>
  </React.StrictMode>
);
