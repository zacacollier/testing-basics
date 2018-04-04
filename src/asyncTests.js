const axios = require('axios');

// Adding Promise implementation for reference
const getUsersPromise = (results = 10) =>
  axios
    .get(
      `https://randomuser.me/api/?inc=name,picture,id,location&results=${results}`
    )
    .then(res => res)
    .catch(error => error);

const getUsers = async (results = 10) => {
  try {
    const { data } = await axios
      .get(`https://randomuser.me/api/?inc=name,picture,id,location&results=${results}`);
    return data;
  }
  catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  getUsers,
  getUsersPromise,
};
