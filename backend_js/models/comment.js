module.exports = function(sequelize, DataTypes) {
  const Post = sequelize.define("Post", {
    body: DataTypes.TEXT
  });
  return Post;
};