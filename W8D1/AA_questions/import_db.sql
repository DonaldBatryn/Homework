PRAGMA foreign_keys = ON;

DROP TABLE replies;
DROP TABLE question_likes;
DROP TABLE question_follows;
DROP TABLE questions;
DROP TABLE users;

CREATE TABLE users (
    id INTEGER PRIMARY KEY NOT NULL,
    fname TEXT NOT NULL,
    lname TEXT NOT NULL
);


CREATE TABLE questions (
    id INTEGER PRIMARY KEY NOT NULL,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    author INTEGER NOT NULL,
    FOREIGN KEY (author) REFERENCES users(id)
);


CREATE TABLE question_follows (
    id INTEGER PRIMARY KEY NOT NULL,
    user_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);


CREATE TABLE replies (
    id INTEGER PRIMARY KEY NOT NULL,
    question_id INTEGER NOT NULL,
    parent_id INTEGER,
    user_id INTEGER NOT NULL,
    body TEXT NOT NULL, 
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (parent_id) REFERENCES replies(id)
) ;


CREATE TABLE question_likes (
    id INTEGER PRIMARY KEY NOT NULL,
    user_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

--data for users
INSERT INTO 
    users (fname, lname)
VALUES 
    ('Donnie', 'Batryn'),
    ('Winnie', 'Chin');

-- data for questions
INSERT INTO 
    questions (title, body, author)
VALUES 
    ('SQL???', 'How do you do self joins??', (SELECT id FROM users WHERE fname = 'Donnie')),
    ('Recursion???', 'I dont get it can you help me?', (SELECT id FROM users WHERE fname = 'Winnie'));

--data for question follows
INSERT INTO
    question_follows (user_id, question_id)
VALUES  
    ((SELECT id FROM users WHERE fname = 'Winnie'), (SELECT id FROM questions WHERE title = 'SQL???')),
    ((SELECT id FROM users WHERE fname = 'Donnie'), (SELECT id FROM questions WHERE title = 'Recursion???'));


-- data for replies
INSERT INTO 
    replies (question_id, parent_id, user_id, body)
VALUES
    ((SELECT id FROM questions WHERE title = 'SQL???'), NULL, (SELECT id FROM users WHERE fname = 'Winnie'), 'I dont know SQL either!'),
    ((SELECT id FROM questions WHERE title = 'Recursion???'), NULL, (SELECT id FROM users WHERE fname = 'Donnie'), 'idkidkidkidk'),
    ((SELECT id FROM questions WHERE title = 'SQL???'), (SELECT id FROM replies WHERE user_id = (SELECT id FROM users WHERE fname = 'Winnie')), (SELECT id FROM users WHERE fname = 'Donnie'), 'Maybe we can ask Andy');

-- data for question likes

INSERT INTO 
    question_likes (user_id, question_id)
VALUES 
    ((SELECT id FROM users WHERE fname = 'Winnie'), (SELECT id FROM questions WHERE title = 'SQL???'));

    