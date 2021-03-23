CREATE TABLE IF NOT EXISTS sales (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    user_id int(11) NOT NULL,
    inventory_id int(11) NOT NULL,
    quantity int(11) NOT NULL DEFAULT 1,
    order_status ENUM('processing', 'complete', 'canceled') NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
    /*FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (inventory_id) REFERENCES inventory(id)*/
);

CREATE TABLE IF NOT EXISTS `test_table` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  active BOOLEAN DEFAULT false
) ENGINE=InnoDB DEFAULT CHARSET=utf8;