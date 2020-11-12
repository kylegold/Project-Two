module.exports = function(sequelize, DataTypes) {
  var Option = sequelize.define("Option", {
    choice: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  Option.associate = function(models) {
    Option.belongsTo(models.Question, {});
  };

  return Option;
};
