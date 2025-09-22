CREATE DATABASE team_mates_19;

CREATE TABLE team_mate (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(25) NOT NULL,
hobby VARCHAR(75) NOT NULL,
happiness INT NOT NULL,
left_hand TINYINT NOT NULL,
pie_pizza_noodles VARCHAR(7),
date_started_coding DATE
);

-- alter table
ALTER TABLE team_mate 
MODIFY COLUMN hobby VARCHAR(255) NOT NULL;

-- Insert Values
INSERT INTO team_mate (name, hobby, happiness, left_hand, pie_pizza_noodles, date_started_coding)
VALUES ("Arjan", "Gaming", 4, 0, "team_matepizza", "2025-07-07");

INSERT INTO team_mate (name, hobby, happiness, left_hand, pie_pizza_noodles, date_started_coding)
VALUES ('Bonnie', 'crafting', 4, 0, 'pizza', '2022-08-01'),
('Phoebe', 'dancing', 5, 0, 'pizza', '2022-08-01'),
('Bob', 'cycling', 5, 1, 'pie', '2022-08-01'),
('Daisy', 'gym', 5, 0, 'pie', '2022-08-01'),
('James', 'gaming', 4, 1, 'noodles', '2020-01-01'),
('Nate', 'gardening', 3, 0, 'pizza', '2022-08-01'),
('Allie', 'reading', 2, 1, 'noodles', '2019-08-13'),
('Sara', 'dancing', 4, 0, 'pie', '2021-02-01');

-- SELECT
SELECT name FROM team_mate;
SELECT * FROM team_mate;
SELECT name, hobby FROM team_mate;

-- WHERE
SELECT name, pie_pizza_noodles FROM team_mate WHERE pie_pizza_noodles = "pizza";

-- COMPARISON OPERATORS
SELECT name, pie_pizza_noodles FROM team_mate WHERE pie_pizza_noodles != "pizza";
SELECT * FROM team_mate WHERE happiness >= 4;

-- LOGICAL OPERATORS
SELECT * FROM team_mate WHERE happiness > 2 AND happiness < 5;
SELECT * FROM team_mate WHERE happiness BETWEEN 2 AND 5;
SELECT * FROM team_mate WHERE happiness >= 4 AND pie_pizza_noodles = "pie";
SELECT * FROM team_mate WHERE left_hand = 1 OR pie_pizza_noodles = "pizza";
SELECT * FROM team_mate WHERE pie_pizza_noodles IN ("pie", "pizza");
SELECT * FROM team_mate
WHERE left_hand = 1
AND (pie_pizza_noodles = "pie" OR pie_pizza_noodles = "noodles");

-- LIKE
SELECT name, hobby FROM team_mate WHERE hobby LIKE 'ga%';
SELECT * FROM team_mate WHERE pie_pizza_noodles LIKE 'pi%';
SELECT * FROM team_mate WHERE pie_pizza_noodles LIKE 'pizz_';

-- DISTINCT (unique values)
SELECT DISTINCT pie_pizza_noodles FROM team_mate;
SELECT DISTINCT hobby FROM team_mate;
SELECT DISTINCT happiness, pie_pizza_noodles FROM team_mate;

-- ORDER BY 
SELECT * FROM team_mate ORDER BY happiness;
SELECT * FROM team_mate ORDER BY date_started_coding DESC;
SELECT * FROM team_mate ORDER BY happiness DESC, date_started_coding;
SELECT name FROM team_mate WHERE name LIKE 'b%' ORDER BY name; 

-- LIMIT
SELECT * FROM team_mate LIMIT 3;
SELECT * FROM team_mate LIMIT 3, 2;

-- CLAUSE ORDER
SELECT * FROM team_mate WHERE pie_pizza_noodles = "pizza" ORDER BY id DESC LIMIT 3;


--------- FUNCTIONS --------

-- COUNT
SELECT COUNT(*) FROM team_mate; 
SELECT COUNT(*) FROM team_mate WHERE pie_pizza_noodles = "noodles"; 
SELECT COUNT(DISTINCT hobby) FROM team_mate; 

-- AS
SELECT COUNT(*) AS pizza_lover FROM team_mate WHERE pie_pizza_noodles = "pizza";
SELECT COUNT(DISTINCT hobby) AS unique_hobbies FROM team_mate;

-- NUMERIC
SELECT AVG(happiness) AS average_happiness FROM team_mate;
SELECT MIN(happiness) AS lowest_happiness FROM team_mate;
SELECT MAX(happiness) AS highest_happiness FROM team_mate;

-- STRING
SELECT CONCAT(name, " likes ", hobby, " and likes to eat ", pie_pizza_noodles, ".")
AS person_likes
FROM team_mate;

-- GROUP BY
SELECT pie_pizza_noodles, ROUND(AVG(happiness)) AS average_happiness FROM team_mate
GROUP BY pie_pizza_noodles
HAVING average_happiness >= 4
ORDER BY average_happiness DESC;

-- UPDATE
UPDATE team_mate SET hobby = "photography", happiness = 5 WHERE name = "Bonnie";

-- DELETE
-- be careful! make sure to include a where condition
-- DELETE FROM team_mate WHERE name = "Allie";