/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import '../../assets/prismjs.css';

import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ExportPage from '../ExportPage';
// Pages
import ImportPage from '../ImportPage';
import Layout from '../../components/Layout';
// Utils
import pluginId from '../../pluginId';
import { request } from 'strapi-helper-plugin';
import useContentTypes from '../../hooks/useContentTypes';

const pathTo = (uri = '') => `/plugins/${pluginId}/${uri}`;
const navLinks = [
  {
    name: 'Import Data',
    to: pathTo('import'),
  },
  {
    name: 'Export Data',
    to: pathTo('export'),
  },
];

function App() {
  const userContentTypes = useContentTypes();
  const [version, setVersion] = useState('');

  const setCmsVersion = async () => {
    const { data } = await request(`/${pluginId}/get-version`, {
      method: 'GET',
    });

    setVersion(data);
    console.log('getversion function');
    console.log(data);
  };
  useEffect(() => {
    setCmsVersion();
  }, []);

  return (
    <Layout navLinks={navLinks} version={version}>
      <Switch>
        <Route path={pathTo('import')}>
          <ImportPage contentTypes={userContentTypes} />
        </Route>
        <Route path={pathTo('export')}>
          <ExportPage contentTypes={userContentTypes} />
        </Route>
        <Route>
          {/* Default Route Retur to Import Page */}
          <Redirect to={pathTo('import')} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
