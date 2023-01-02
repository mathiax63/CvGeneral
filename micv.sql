-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 02-01-2023 a las 21:24:37
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `micv`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `diplomas`
--

DROP TABLE IF EXISTS `diplomas`;
CREATE TABLE IF NOT EXISTS `diplomas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `academia` varchar(100) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `inicio` date NOT NULL,
  `descargadiploma` varchar(100) NOT NULL,
  `imagenes` varchar(100) NOT NULL,
  `cierre` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `diplomas`
--

INSERT INTO `diplomas` (`id`, `academia`, `titulo`, `descripcion`, `inicio`, `descargadiploma`, `imagenes`, `cierre`) VALUES
(11, 'Digital House', 'Programacion Web Full Stack', 'Curso intensivo de 6 meses de duracion', '2021-02-02', 'MathiasReidDiplomaDH', 'xnae7uhjw8epfc7c8llu', '2021-08-12'),
(2, 'Universidad Tecnológica Nacional ', 'diplomatura en programación básica con Javascript', 'curso de 3 meses en desarrollo usando JavaScript', '2021-10-02', 'ver mas adelante ', 'v9449a1zr8vebbxcjj3l', '2021-12-01'),
(3, 'Universidad Tecnológica Nacional', 'Desarrollador Web Full Stack', 'Curso intensivo de 6 meses de duración', '2022-02-02', 'ver mas adelante ', 'biqte2gchqzodqn5rmor', '2022-08-31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

DROP TABLE IF EXISTS `proyectos`;
CREATE TABLE IF NOT EXISTS `proyectos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8 NOT NULL,
  `descripcion` varchar(225) NOT NULL,
  `tipo` varchar(60) NOT NULL,
  `participantes` varchar(80) NOT NULL,
  `inicio` date NOT NULL,
  `urldegithub` varchar(225) NOT NULL,
  `cierre` date DEFAULT NULL,
  `imagenes` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `proyectos`
--

INSERT INTO `proyectos` (`id`, `nombre`, `descripcion`, `tipo`, `participantes`, `inicio`, `urldegithub`, `cierre`, `imagenes`) VALUES
(1, 'Relojes ronin', 'local e-comerce de relojes', 'Educativo', '4', '2021-02-02', 'https://github.com/Lukendziur/sprint8_grupo9\'>https://github.com/Lukendziur/sprint8_grupo9', '2021-08-12', 'gwle1kapi1bophxqzqif'),
(2, 'GlobeLife', 'pagina de ONG dedicada a la ayuda ambiental ', 'educativo', '1', '2021-10-02', 'https://github.com/mathiax63/parcial-UTN', '2021-12-01', 'kjtcqieyh6bnpnafhl2h'),
(3, 'PeliMax', 'pagina dedicada a la búsqueda de información de películas y series', 'educativo', '1', '2022-02-02', 'https://github.com/mathiax63/UTN-Full-Stack', '2022-08-31', 'dmx4i5zzkfebup0mzekt');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) NOT NULL,
  `email` varchar(80) NOT NULL,
  `password` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `email`, `password`) VALUES
(1, 'Mathias', 'mathyoyo@hotmail.es', '1234');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
