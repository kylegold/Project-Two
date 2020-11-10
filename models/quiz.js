module.exports = function(sequelize, DataTypes) {
    var Quiz = sequelize.define("Quiz", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      description: DataTypes.TEXT
    });
  
    Quiz.associate = function(models) {
      // Associating Quiz with Questions
      // When an Quiz is deleted, also delete any associated Questions
      Quiz.hasMany(models.Question, {
        // onDelete: "cascade"
      });
      Quiz.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        },
        onDelete: "cascade"
      });
    };
  
    return Quiz;
  };
  