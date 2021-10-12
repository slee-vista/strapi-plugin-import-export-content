const {
  COLLECTION_TYPE,
  SINGLE_TYPE,
} = require('../../constants/contentTypes');
const { importToCollectionType, importToSingleType } = require('./importUtils');

// updated to check whether importToCollectionType shouldd create or update
async function importContent(target, items, options) {

  const { uid, kind } = target;
  const existingData = await strapi.query(uid).find({ _limit: -1 });
  switch (kind) {
    case COLLECTION_TYPE:
      return Promise.all(
        items.map((item) =>
          importToCollectionType(
            uid,
            {
              ...item,
              ...options,
            },
            existingData
          )
        )
      );

    case SINGLE_TYPE:
      return importToSingleType(uid, {
        ...items[0],
        ...options,
      });

    default:
      throw new Error('Tipe is not supported');
  }
}

module.exports = {
  importContent,
};
