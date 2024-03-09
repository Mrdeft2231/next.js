

export const getData = async (url) => {
 try {
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error("Ошибка получения данных");
  }
  const data = await response.json();
  return data;
 } catch (error) {
   return error
 }
}

export const isResposneOk = (response) => {
  return !(response instanceof Error);
}

const normalizeDataObject = (obj) => {
  return {
    ...obj,
    category: obj.categories,
    users: obj.users_permissions_users,
  }
}

export const normalizeData = (data) => {
  return data.map((item) => {
    return normalizeDataObject(item);
  });
}

export const getNormalizedGameDataById = async (url, id) => {
  const data = await getData(`${url}/${id}`);
  return isResposneOk(data) ? normalizeDataObject(data) : data;
}

export const getNormalizedGamesDataByCategory = async (url, category) => {
  try {
    const data = await getData(`${url}?category.name=${category}`);
    if (!data.length) {
      throw new Error("Нет такой категории");
    }
    return isResposneOk(data) ? normalizeData(data) : data;
  } catch (error) {
    return error
  }
}
