DATABASE QUIZ APPLICATION

Tables:

Users
columns:
-id
-email
-password
-createdAt
-updatedAt

Quizzes
columns:
-id (PK A_I)
-title (STRING)
-userAuthor (FK references Users (id))
-description (TEXT)
-createdAt
-updatedAt


Questions:
-id (PK A_I)
-question (STRING)
-quizId (FK references Quizzes (id))
-createdAt
-updatedAt


Options:
-id (PK A_I)
-choice (STRING)
-questionId (FK references Questions (id))
-isCorrect (BOOLEAN DEFAULT false)
-createdAt
-updatedAt


Categories:
-id (PK A_I)
-category (STRING)
-quizId (FK references Quizzes (id))
-createdAt
-updatedAt
 