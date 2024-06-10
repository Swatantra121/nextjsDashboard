import React from 'react';
import Header from './components/Header';
import DashboardContent from './components/DashboardContent';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <DashboardContent />
      <Footer />
    </>
  );
};

export default Home;
