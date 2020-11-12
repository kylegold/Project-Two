USE quizapp_db;
INSERT INTO quizzes (title, description, userId, createdAt, updatedAt)
VALUES ("Math quiz", "Some basic addition and subtraction", 1, NOW(), NOW());
INSERT INTO questions (question, quizId, createdAt, updatedAt)
VALUES ("1+2?", 1, NOW(), NOW()),
("21-9?", 1, NOW(), NOW()),
("419+1?", 1, NOW(), NOW());
INSERT INTO options (choice, isCorrect, questionId, createdAt, updatedAt)
VALUES ("5", false, 1, NOW(), NOW()),
("4", false, 1, NOW(), NOW()),
("3", true, 1, NOW(), NOW()),
("2", false, 1, NOW(), NOW());
INSERT INTO options (choice, isCorrect, questionId, createdAt, updatedAt)
VALUES ("10", false, 2, NOW(), NOW()),
("12", true, 2, NOW(), NOW()),
("13", false, 2, NOW(), NOW()),
("15", false, 2, NOW(), NOW());
INSERT INTO options (choice, isCorrect, questionId, createdAt, updatedAt)
VALUES ("322", false, 3, NOW(), NOW()),
("1337", false, 3, NOW(), NOW()),
("777", false, 3, NOW(), NOW()),
("420", true, 3, NOW(), NOW());
