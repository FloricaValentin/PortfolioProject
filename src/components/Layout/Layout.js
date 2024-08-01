import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Loader from '../Loader/Loader';
import './Layout.scss';

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  const isPortfolioPage = location.pathname === '/portfolio';

  return (
    <div className="layout-container">
      <Sidebar />
      <div className={`page ${isPortfolioPage ? 'portfolio-page' : ''}`}>
      {!isPortfolioPage && (
        <span className="tags top-tags">&lt;body&gt;</span>
      )}
        {loading && <Loader isVisible={loading} />}
        <Outlet />
        {!isPortfolioPage && (
          <span className="tags bottom-tags">
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html">&lt;/html&gt;</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default Layout;

