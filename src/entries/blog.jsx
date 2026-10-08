import React from 'react';
import ReactDOM from 'react-dom/client';
import PageLayout from '../components/PageLayout.jsx';
import BlogPage from '../pages/BlogPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageLayout currentPage="blog">
      {({ onOpenContact }) => <BlogPage onOpenContact={onOpenContact} />}
    </PageLayout>
  </React.StrictMode>
);
