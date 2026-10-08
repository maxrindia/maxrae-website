import React from 'react';
import ReactDOM from 'react-dom/client';
import PageLayout from '../components/PageLayout.jsx';
import ContactPage from '../pages/ContactPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageLayout currentPage="contact">
      {() => <ContactPage />}
    </PageLayout>
  </React.StrictMode>
);
