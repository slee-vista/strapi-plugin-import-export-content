import { HeaderNav, PluginHeader } from 'strapi-helper-plugin';
import React, { memo } from 'react';

import PropTypes from 'prop-types';
import dotenv from 'dotenv';

dotenv.config();

const version = {
  edition: `${
    process.env.IMPORT_EXPORT_VERSION
      ? process.env.IMPORT_EXPORT_VERSION
      : 'Content'
  } CMS Edition`,
  uniqueIdentifier:
    process.env.IMPORT_EXPORT_VERSION === 'Product'
      ? 'SKU'
      : process.env.IMPORT_EXPORT_VERSION === 'Content'
      ? 'Name'
      : 'Name',
};

function Layout({ navLinks, children }) {
  return (
    <div className='container-fluid' style={{ padding: '18px 30px' }}>
      <PluginHeader
        title={`Import/Export Content - ${version.edition}`}
        description='Import and export CSV and JSON into your Content Types.'
      />
      <div>
        <h3>Instructions for Import:</h3>
        <p>
          Select a CSV file to import into the CMS, hit "Analyze", and then
          select whether you would like to import the data as drafts or
          published documents.
        </p>
        <p>
          This feature is built to update or create documents based on whether
          the "{version.uniqueIdentifier}" column can be found in the Content
          Type. This will be further developed so that the unique identifying
          column can be selected during import.
        </p>
        <p>
          A brief error message will show lines that need fixing. This feature
          will be worked on to show the messasge for a longer time.
        </p>
        <p>
          Go through this checklist when troubleshooting errors:
          <ul>
            <li>
              Numbers should be whole or decimal numbers without currency signs,
              parentheses, etc.{' '}
            </li>
            <li>The {version.uniqueIdentifier} field must be unique.</li>
            <li>Make sure the encoding type of the CSV is utf-8</li>
            <li>Make sure there is no column labeled id in the CSV. </li>
          </ul>
        </p>
      </div>
      <HeaderNav links={navLinks} style={{ marginTop: '4.4rem' }} />
      <div className='row'>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  navLinks: [],
  children: null,
};

Layout.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.any,
};

export default memo(Layout);
