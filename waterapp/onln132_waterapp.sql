-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 22, 2018 at 06:29 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `onln132_waterapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE IF NOT EXISTS `feedback` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `complaint_number` int(11) NOT NULL,
  `star` varchar(500) NOT NULL,
  `feedback` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id`, `complaint_number`, `star`, `feedback`, `user_id`) VALUES
(1, 23, '', 0, 57),
(2, 0, 'star', 0, 57),
(3, 0, 'star', 0, 57),
(4, 0, 'star', 0, 57),
(5, 0, 'star', 0, 57),
(6, 123, 'star', 0, 59),
(7, 789, '4', 0, 59);

-- --------------------------------------------------------

--
-- Table structure for table `suggestion`
--

CREATE TABLE IF NOT EXISTS `suggestion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `suggestion` varchar(500) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `suggestion`
--

INSERT INTO `suggestion` (`id`, `suggestion`, `user_id`) VALUES
(1, 'fdgfgfdh', 59);

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

CREATE TABLE IF NOT EXISTS `ticket` (
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `complainant_name` varchar(100) NOT NULL,
  `father_name` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `image` varchar(200) NOT NULL,
  `state` int(2) NOT NULL,
  `engineer_id` int(9) NOT NULL DEFAULT '0',
  `remarks` varchar(500) NOT NULL,
  `user_id` int(9) NOT NULL,
  `datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=51 ;

--
-- Dumping data for table `ticket`
--

INSERT INTO `ticket` (`id`, `complainant_name`, `father_name`, `city`, `phone`, `email`, `description`, `image`, `state`, `engineer_id`, `remarks`, `user_id`, `datetime`) VALUES
(1, 'bilal', 'athar', 'lahore', '12345', '123', '123', '123', 3, 51, '', 52, '2018-11-21 21:59:13'),
(2, 'bilal 1', 'haider', 'lahore', '12345', '123', '123', '123', 3, 51, 'remarks', 52, '2018-11-21 21:59:30'),
(3, 'name', 'father_name', 'city', 'phone', 'email', 'description', 'image', 3, 51, '', 52, '2018-11-26 13:35:17'),
(42, 'a', 'a', 'a', 'a', 'a', 'a', '', 2, 51, '', 52, '2018-11-26 17:25:23'),
(43, 't', 't', 't', 't', 't', 't', '', 3, 51, '', 52, '2018-11-27 03:08:27'),
(44, 't', 't', 't', 't', 't', 't', '', 3, 51, '', 52, '2018-11-28 16:20:42'),
(45, 'undefined', '', '', '', '', '', '', 2, 51, '', 57, '2018-12-09 13:44:43'),
(46, 'undefined', '', '', '', '', '', '', 3, 51, '', 57, '2018-12-09 13:44:55'),
(47, 'gdfshh', '', '', '', '', '', '', 3, 51, '', 57, '2018-12-09 13:47:43'),
(48, 'fdsgg', '', '', '', '', '', '', 3, 51, '', 57, '2018-12-09 13:50:36'),
(49, 'fdf', 'df', 'nj', 'j', 'j', 'j', 'j', 3, 51, '', 59, '2018-12-16 01:11:48'),
(50, 'gdf', 'fds', 'fsd', 'fsd', 'fsd', 'fas', 'fas', 2, 66, '', 59, '2018-12-16 01:11:03');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_active` bit(1) NOT NULL,
  `type` int(2) NOT NULL,
  `datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=67 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `phone`, `email`, `password`, `is_active`, `type`, `datetime`) VALUES
(57, 'bilal', '2223567', 'hi@gmail.com', '123', b'1', 1, '2018-11-22 01:04:10'),
(41, 'Nawaz Qaiser', '111', '111', '111', b'1', 1, '2018-11-22 01:04:10'),
(40, 'bilal', '2223', 'hi@gmail.com', '1234', b'1', 1, '2018-11-22 01:04:10'),
(53, 'a', 'a', 'a', 'a', b'1', 1, '2018-11-27 02:50:33'),
(52, 'u', 'u', 'u', 'u', b'1', 1, '2018-11-27 02:10:58'),
(51, 'bilal', '22234', 'hi@gmail.com', 'e', b'1', 2, '2018-11-27 01:54:32'),
(58, 'ew', 'rew', 'rw', 'wr', b'1', 1, '2018-12-08 23:08:32'),
(59, 'test1', '123', 'test1@gmail.com', '123', b'1', 1, '2018-12-15 20:54:10'),
(66, 'fd', 'fd', 'fds', 'fds', b'1', 2, '2018-12-16 00:40:24');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
