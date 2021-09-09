import React from 'react';

import Header from './components/Header/header';
import Layout from './components/Layout/layout';
import Footer from './components/Footer/footer';

import bg1 from './assets/bg2.jpg';
import bg2 from './assets/bg3.jpg';

function App() {
  return (
    <>
      <Header />
      <Layout urlBg={bg1} />
      <Layout colorBg={'#e2e2e2'} />
      <Layout urlBg={bg2} />
      <Footer />
    </>
  );
}

export default App;
