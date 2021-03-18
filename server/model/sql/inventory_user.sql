SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema vehicle_database(inventory_&_user)
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema vehicle_database(inventory_&_user)
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `vehicle_database(inventory_&_user)` DEFAULT CHARACTER SET utf8 ;
USE `vehicle_database(inventory_&_user)` ;

-- -----------------------------------------------------
-- Table `vehicle_database(inventory_&_user)`.`inventory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vehicle_database(inventory_&_user)`.`inventory` (
  `idinventory` INT NOT NULL,
  `model` VARCHAR(45) NULL,
  `make` VARCHAR(45) NULL,
  `year` YEAR(4) NULL,
  `color` VARCHAR(45) NULL,
  `description` TEXT(1000) NULL,
  `image` VARBINARY(8000) NULL,
  `price` DECIMAL(8,2) NULL,
  PRIMARY KEY (`idinventory`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vehicle_database(inventory_&_user)`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vehicle_database(inventory_&_user)`.`user` (
  `iduser` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `address` VARCHAR(45) NULL,
  `passwordHash` BINARY(64) NULL,
  PRIMARY KEY (`iduser`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
