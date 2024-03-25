// const { Sequelize, Model, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");

// const User = sequelize.define('User', {
//   username: DataTypes.STRING,
//   password: DataTypes.STRING
// });

module.exports = function(sequelize, dataTypes) {
  const User = sequelize.define('User', {
    username: dataTypes.STRING,
    email: dataTypes.STRING,
    password: dataTypes.STRING
  })
  return User;
}

(async () => {
  try {
    await sequelize.sync();
    const createUser = await User.create({ firstName: "Jane", lastName: "Doe" });
  } catch (error) {
    console.error("Error:", error);
  }
})();