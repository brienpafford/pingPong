// angular
//   .module('pingPong')

//   .factory('Game', function ($http, FBURL) {
//     return {
//       getOne(id, cb) {
//         $http
//           .get(`${FBURL}/user/${id}.json`)
//           .success(cb);
//       },

//       getAll(cb) {
//         $http
//           .get(`${FBURL}/user.json`)
//           .success(cb);
//       },

//       create(data, cb) {
//         $http
//           .post(`${FBURL}/user.json`, data)
//           .success(cb);
//       },

//       update(id, data, cb) {
//         $http
//           .put(`${FBURL}/user/${id}.json`, data)
//           .success(cb);
//       },

//       destroy(id, cb) {
//         $http
//           .delete(`${FBURL}/user/${id}.json`)
//           .success(cb);
//       }
//     }
//   });
