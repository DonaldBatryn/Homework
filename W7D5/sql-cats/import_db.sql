-- W7D5 project
DROP TABLE IF EXISTS cattoys;
DROP TABLE IF EXISTS cats;
CREATE TABLE cats (
    id SERIAL PRIMARY KEY NOT NULL,  -- not null, primary key
    name VARCHAR(255),
    color VARCHAR(255) NOT NULL,
    breed VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS toys;
CREATE TABLE toys (
    id SERIAL PRIMARY KEY NOT NULL,
    price int NOT NULL,
    color VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL
);

-- CREATE TABLE test (
--     id SERIAL PRIMARY KEY NOT NULL,
--     price int NOT NULL,
--     color VARCHAR(255) NOT NULL,
--     name VARCHAR(255) NOT NULL
-- );

CREATE TABLE cattoys (
    id SERIAL PRIMARY KEY NOT NULL,
    cat_id int,
    toy_id int NOT NULL,
    FOREIGN KEY (cat_id) REFERENCES cats (id),
    FOREIGN KEY (toy_id) REFERENCES toys (id) 
);


-- CREATING STARTING CATS --
INSERT INTO cats (name, color, breed)
    VALUES ('pickles', 'white', 'cucumber'),
            ('Finster', 'orange', 'nerd'),
            ('zoomble', 'blank', 'hollow'),
            ('sprinkles', 'funfetti', 'cake'),
            ('monkey', 'golden', 'retriever');

-- CREATING STARTING TOYS --
INSERT INTO toys (price, color, name)
    VALUES (10, 'brown', 'scratching thing'),
            (1, 'red', 'squeeky-thing'),
            (200, 'green', 'regret'),
            (9, 'red', 'peanutbutter holder'),
            (50, 'black', 'destroyer');

-- CREATING STARTING CATTOYS FOREIGN KEYS ASSOCIATIONS --
INSERT INTO cattoys (cat_id, toy_id)
    VALUES (
        (SELECT id FROM cats WHERE name = 'Finster'),
        (SELECT id FROM toys WHERE name = 'scratching thing')
            ),
        (
        (SELECT id FROM cats WHERE name = 'monkey'),
        (SELECT id FROM toys WHERE name = 'squeeky-thing')
        ),
        (
        (SELECT id FROM cats WHERE name = 'pickles'),
        (SELECT id FROM toys WHERE name = 'regret')
        ),
        (
        (SELECT id FROM cats WHERE name = 'monkey'),
        (SELECT id FROM toys WHERE name = 'peanutbutter holder')
        ),
        (
        (SELECT id FROM cats WHERE name = 'sprinkles'),
        (SELECT id FROM toys WHERE name = 'scratching thing')
        ),
        (
        (SELECT id FROM cats WHERE name = 'zoomble'),
        (SELECT id FROM toys WHERE name = 'destroyer')
        );

-- data/import_cat_db.sh

-- cat import_db.sql | psql meowtime

-- CREATE DATABASE meowtime;


-- SELECT
--     cats.name      
-- FROM
--     cats
--     JOIN
--         cattoys ON cats.id = cattoys.cat_id
--     JOIN
--         toys ON cattoys.toy_id = toys.id
-- GROUP BY
--     cats.name
--     HAVING
--         COUNT(toys.name) >= 2