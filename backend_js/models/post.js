module.exports = function(sequelize, DataTypes) {
  const Post = sequelize.define("Post", {
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  });
  return Post;
};