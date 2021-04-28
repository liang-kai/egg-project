'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // },
  cors: {
    enable: true,
    package: "egg-cors",
  },
  ejs : {
    enable: true,
    package: 'egg-view-ejs',
  }
};

// exports.view = {
//   enable: true,
//   package: 'egg-view',
// };

// exports.ejs = {
//   enable: true,
//   package: 'egg-view-ejs',
// };