DROP TABLE IF EXISTS sale_items;
DROP TABLE IF EXISTS sales;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS vehicles;
DROP TABLE IF EXISTS makes;
DROP TABLE IF EXISTS types;
DROP TABLE IF EXISTS classes;
DROP TABLE IF EXISTS parts;




CREATE TABLE IF NOT EXISTS users (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    type ENUM('customer', 'employee', 'admin') NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    password_hash_algorithm VARCHAR(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS makes (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);
CREATE TABLE IF NOT EXISTS types (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);
CREATE TABLE IF NOT EXISTS classes (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS vehicles (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    make_id int(11) NOT NULL,
    type_id int(11) NOT NULL,
    class_id int(11) NOT NULL,
    model VARCHAR(50) NOT NULL,
    year YEAR(4) NOT NULL,
    price DECIMAL(8, 2) NOT NULL,
    exterior_color VARCHAR(50) NOT NULL,
    interior_color VARCHAR(50), 
    engine VARCHAR(50),
    transmission VARCHAR(50),
    mileage int(11),
    short_description VARCHAR(255) NOT NULL,
    description VARCHAR(65535),
    image LONGBLOB,
    FOREIGN KEY (make_id) REFERENCES makes(id),
    FOREIGN KEY (type_id) REFERENCES types(id),
    FOREIGN KEY (class_id) REFERENCES classes(id)
);

CREATE TABLE IF NOT EXISTS parts (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    price DECIMAL(8, 2) NOT NULL,
    quantity int(11) NOT NULL DEFAULT 1,
    short_description VARCHAR(255) NOT NULL,
    description VARCHAR(65535),
    warranty VARCHAR(255),
    compatibility VARCHAR(255),
    color VARCHAR(255),
    product_id VARCHAR(255),
    image LONGBLOB
);

CREATE TABLE IF NOT EXISTS sales (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    user_id int(11) NOT NULL,
    status ENUM('processing', 'complete', 'canceled') NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    address VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS sale_items (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    sale_id int(11) NOT NULL,
    vehicle_id int(11),
    part_id int(11),
    quantity int(11) NOT NULL DEFAULT 1,
    FOREIGN KEY (sale_id) REFERENCES sales(id) ON DELETE CASCADE,
    FOREIGN KEY (vehicle_id) REFERENCES vehicles(id) ON DELETE CASCADE,
    FOREIGN KEY (part_id) REFERENCES parts(id) ON DELETE CASCADE,
    CONSTRAINT vehicle_or_part CHECK 
        ((vehicle_id IS NULL OR part_id IS NULL) AND NOT
        (vehicle_id IS NULL AND part_id IS NULL))
);