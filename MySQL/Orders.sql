CREATE TABLE orders (
order_id INT PRIMARY KEY AUTO_INCREMENT,
fruit VARCHAR(255) NOT NULL,
person_id int,
FOREIGN KEY (person_id) REFERENCES team_mate(id)
);

INSERT INTO orders VALUES
(null, "kiwifruit", 1),
(null, "apples", 2),
(null, "peaches", 7),
(null, "pears", 2),
(null, "oranges", 1);

-- INNER JOIN
SELECT * FROM team_mate INNER JOIN orders 
ON team_mate.id = orders.person_id;

SELECT order_id , name, person_id, fruit FROM team_mate INNER JOIN orders
ON team_mate.id = orders.person_id;

SELECT order_id, name, person_id, fruit FROM team_mate INNER JOIN orders
ON team_mate.id = orders.person_id WHERE name = "Bonnie";

-- LEFT JOIN
SELECT name, order_id, fruit, person_id FROM team_mate LEFT JOIN orders
ON team_mate.id = orders.person_id;

-- RIGHT JOIN
SELECT name, order_id, fruit, person_id FROM team_mate RIGHT JOIN orders
ON team_mate.id = orders.person_id;