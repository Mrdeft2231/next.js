import {data} from './data'

export const getGamesByCategory = (category) => {
  return data.filter((game) => {
    return game.category.find((item) => item.name === category);
    });
  };

  export const getGameId = (id) => {
    return data.find((game) => game.id == id);
  }
