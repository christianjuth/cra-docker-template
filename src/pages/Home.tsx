import * as React from 'react';
import { useTitle } from '../navigation';
import Helmet from 'react-helmet';

function Home() {
  const title = useTitle();
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h1>Hello World</h1>
    </>
  );
};

export default Home;