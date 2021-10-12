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

- Limit of documents queried set to -1 (infinite).
- Short error message showing which lines in CSV were problematic. Enhancements for this error handler is in the works.
- Upload will now first check to update any existing values based on the Name or SKU unique identifier.
- Set IMPORT_EXPORT_VERSION to "Product" or "Content" to set the update/create feature's unique identifier column to "Name" or "SKU". There will be future work to make this value dynamic.

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

Initially developed by: Edison Peñuela – [@EdisonPeM](https://github.com/EdisonPeM/) – edisonpe961206@hotmail.com

This plugin has been inspired by the tutorial [How to create an import content plugin](https://strapi.io/blog/how-to-create-an-import-content-plugin-part-1-4)
