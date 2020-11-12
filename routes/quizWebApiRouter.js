const Router = require("express").Router();
const axios = require("axios");

// const sendGetRequest = async () => {
//     try {
//         const resp = await axios.get('https://quizapi.io/api/v1/questions/?apiKey=' + process.env.API_KEY);
//         console.log(resp);
//     } catch (err) {
//         console.error(err);
//     }
// };

// sendGetRequest();
module.exports = Router;