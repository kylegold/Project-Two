module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("Question", {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Question.associate = function(models) {
    // Associating Question with Choices
    // When an Question is deleted, also delete any associated Choices
    Question.hasMany(models.Option, {
      onDelete: "cascade"
    });
    Question.belongsTo(models.Quiz, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
  };

  return Question;
};
