CREATE DATABASE IF NOT EXISTS `netflix` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `netflix`;

CREATE TABLE `USERS` (
  `id_user` INT(42) AUTO_INCREMENT,
  `nom_user` VARCHAR(42),
  `prénom_user` VARCHAR(42),
  `mail_user` VARCHAR(42),
  `city_user` VARCHAR(42),
  `country_user` VARCHAR(42),
  `id_panier` INT(42),
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `PANIER` (
  `id_panier` INT(42) AUTO_INCREMENT,
  `image_film` VARCHAR(42),
  `nom_film` VARCHAR(42),
  `presentation` VARCHAR(42),
  `date` VARCHAR(42),
  PRIMARY KEY (`id_panier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `FILMS` (
  `id_film` INT(42) AUTO_INCREMENT,
  `image_film` VARCHAR(42),
  `nom__film` VARCHAR(42),
  `presentation` VARCHAR(42),
  `date` VARCHAR(42),
  PRIMARY KEY (`id_film`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `PROGRAMMES` (
  `id_prog` INT(42) AUTO_INCREMENT,
  `image_film` VARCHAR(42),
  `nom__film` VARCHAR(42),
  `presentation` VARCHAR(42),
  `date` VARCHAR(42),
  PRIMARY KEY (`id_prog`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `SERIES` (
  `id_serie` INT(42) AUTO_INCREMENT,
  `image_film` VARCHAR(42),
  `nom__film` VARCHAR(42),
  `presentation` VARCHAR(42),
  `date` VARCHAR(42),
  PRIMARY KEY (`id_serie`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `USERS` ADD FOREIGN KEY (`id_panier`) REFERENCES `PANIER` (`id_panier`);