# strapi-import-export-no-limit

Plugin to import and export content according to user permissions in json or csv format. Removed limit for exports.

## Installation

```bash
yarn add strapi-plugin-import-export-no-limit
```

or

```bash
npm i strapi-plugin-import-export-no-limit
```

## Set environment variable & plugin config

This plugin's upload functionality is to update/create. If the imported CSV or JSON contains the same data as one of the existing Collection Type documents, it will attempt to update it. If no matching document is found, the plugin will go ahead and create the new document. The config variable specified here sets whether the unique identifying field (column) is "Name", or "SKU". Future work on this plugin will make this value fully dynamic and selectable during the import process. In the meantime, set the config variable to "Content" to set the unique identifying field to "Name", or Product" to set the unique identifying field to "SKU"

```javascript
// IMPORT_EXPORT_VERSION="Content" is the default behavior.

const version = env('IMPORT_EXPORT_VERSION');
return {
  importExport: { version },
  // other config variables you want to pass to other plugins such as providerData for strapi-provider-upload-aws-S3
};
```

## Rebuild your administration panel

New releases can introduce changes to the administration panel that require a rebuild. Rebuild the admin panel with one of the following commands:

```bash
yarn build --clean
```

or

```bash
npm run build -- --clean
```

## Features

- Limit of documents queried for exports set to -1 (infinite).
- Short error message showing which lines in CSV were problematic. Enhancements for this error handler is in the works.
- Upload will now first check to update any existing values based on the Name or SKU unique identifier.
- Set environment variable IMPORT_EXPORT_VERSION to "Product" or "Content" to set the update/create feature's unique identifier column to "SKU" or "Name". There will be future work to make this value dynamic.

### Import

- Read data from CSV and JSON file or from typing raw text
- Import contents to collection or single Type
- Manual mapping from source fields to destination fields
- Recognize format of inputs and content types
- Import content as draft or public
- Upload media from URL
- Import Media by id or object with id key
- Import Relations by id or object with id key
- Import Components and Dynamic Zone Content as json objects

### Export

- Export CSV and JSON contents allowed for the user
- Download files or copy exported data to clipboard
- Options to remove ids and timestamps
- Options to export media as ids, urls, full content or full content without formats
- Options to export relatons as ids or full content

## Acknowledgments

This is a fork of the plugin initially developed by: Edison Peñuela – [@EdisonPeM](https://github.com/EdisonPeM/) – edisonpe961206@hotmail.com
This plugin has been inspired by the tutorial [How to create an import content plugin](https://strapi.io/blog/how-to-create-an-import-content-plugin-part-1-4)

## Deprecation Notes

All versions below 1.1 should not be used. Please update to the latest version.
