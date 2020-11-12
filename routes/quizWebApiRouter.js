// const Router = require("express").Router();
// const axios = require('axios');

// const headers = {
//   'api-key': '\',
//   'Content-Type': 'application/json',
// };

// const config = {
//   headers,
//   baseUrl:  'https://quizapi.io/api/v1/questions/?apiKey=<api-key>',
//   validateStatus(){
// 	return true;
//   }
// };

// const sendGetRequest = async () => {
//     try {
//         const resp = await axios.get('https://quizapi.io/api/v1/questions?category=linux', config);
//         console.log(resp);
//     } catch (err) {
//         // Handle Error Here
//         console.error(err);
//     }
// };

// sendGetRequest();
// module.exports = Router;