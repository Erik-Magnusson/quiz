
--- INIT DATABASE ---

DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS answers CASCADE;
DROP TABLE IF EXISTS questions_and_answers;


CREATE TABLE questions (
    question_id SERIAL PRIMARY KEY,
    question_text TEXT NOT NULL
);


CREATE TABLE answers (
    answer_id SERIAL PRIMARY KEY,
    answer_text TEXT NOT NULL,
    is_correct BOOL NOT NULL
);

CREATE TABLE questions_and_answers (
    question_id INTEGER NOT NULL REFERENCES questions (question_id),
    answer_id INTEGER NOT NULL REFERENCES answers (answer_id)
);


--- INSERTS ---


INSERT INTO questions VALUES (DEFAULT, 'Which year was the enigma code broken?');

INSERT INTO answers VALUES (DEFAULT, '1941', TRUE);
INSERT INTO answers VALUES (DEFAULT, '2021', FALSE);
INSERT INTO answers VALUES (DEFAULT, '1992', FALSE);
INSERT INTO answers VALUES (DEFAULT, '1989', FALSE);

INSERT INTO questions_and_answers VALUES (1, 1);
INSERT INTO questions_and_answers VALUES (1, 2);
INSERT INTO questions_and_answers VALUES (1, 3);
INSERT INTO questions_and_answers VALUES (1, 4);
