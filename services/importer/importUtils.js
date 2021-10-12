import dotenv from 'dotenv';

dotenv.config();
const uniqueIdentifier =
  process.env.IMPORT_EXPORT_VERSION === 'Product' ? 'SKU' : 'Name';

const importToCollectionType = async (uid, item, existingData) => {
  const existingSku = existingData.find(
    (el) => el[uniqueIdentifier] === item[uniqueIdentifier]
  );

  if (existingSku) {
    try {
      await strapi.entityService.update(
        { params: { id: existingSku.id }, data: item },
        { model: uid }
      );
      // await strapi.query(uid).update( , data: item },
      //   { model: uid });
      return true;
    } catch (error) {
      return false;
    }
  } else if (!existingSku) {
    try {
      await strapi.entityService.create({ data: item }, { model: uid });
      // await strapi.query(uid).create(item);

      return true;
    } catch (error) {
      return false;
    }
  }
};

const importToSingleType = async (uid, item) => {
  try {
    const existing = await strapi.query(uid).find({});
    if (existing.length > 0) {
      const { id } = existing[0];
      delete item.created_by;
      await strapi.query(uid).update({ id }, item);
    } else {
      strapi.query(uid).create(item);
    }
    return [true];
  } catch (error) {
    return [false];
  }
};

module.exports = {
  importToCollectionType,
  importToSingleType,
};
