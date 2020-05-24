-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2020 at 03:08 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employeemanagement`
--

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `city_id` int(100) NOT NULL,
  `city_name` varchar(130) NOT NULL,
  `s_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`city_id`, `city_name`, `s_id`) VALUES
(18, 'Namma BELAGAVI', 25);

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `country_id` int(100) NOT NULL,
  `country_code` int(100) NOT NULL,
  `country_name` varchar(130) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`country_id`, `country_code`, `country_name`) VALUES
(14, 1, 'INDIA');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `dept_id` int(100) NOT NULL,
  `dept_name` varchar(130) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`dept_id`, `dept_name`) VALUES
(1, 'department1'),
(2, 'department1'),
(3, 'department77'),
(4, 'department5'),
(5, 'department5'),
(6, 'department5'),
(7, 'department10');

-- --------------------------------------------------------

--
-- Table structure for table `division`
--

CREATE TABLE `division` (
  `div_id` int(100) NOT NULL,
  `div_name` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `division`
--

INSERT INTO `division` (`div_id`, `div_name`) VALUES
(4, 'division2'),
(5, 'division2'),
(6, 'division3'),
(7, 'division3'),
(8, 'division4'),
(9, 'division5');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `emp_id` int(100) NOT NULL,
  `first_name` varchar(60) NOT NULL,
  `last_name` varchar(60) NOT NULL,
  `middle_name` varchar(60) NOT NULL,
  `address` varchar(120) NOT NULL,
  `emp_cityid` int(11) NOT NULL,
  `emp_stateid` int(11) NOT NULL,
  `emp_countryid` int(11) NOT NULL,
  `zip` char(10) NOT NULL,
  `age` int(11) NOT NULL,
  `birthday` date NOT NULL,
  `hiered_date` date NOT NULL,
  `emp_dept` int(11) NOT NULL,
  `emp_divid` int(11) NOT NULL,
  `image` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`emp_id`, `first_name`, `last_name`, `middle_name`, `address`, `emp_cityid`, `emp_stateid`, `emp_countryid`, `zip`, `age`, `birthday`, `hiered_date`, `emp_dept`, `emp_divid`, `image`) VALUES
(1, 'AngularData', 'node', 'Reactjs', 'laravelData', 18, 25, 14, '591000', 47, '1993-05-05', '2019-10-10', 7, 8, 'railway1.png'),
(2, 'data', 'data', 'data', 'data', 18, 25, 14, '591000', 56, '1993-12-03', '2014-12-14', 1, 8, 'no-image.png'),
(3, 'data', 'datsffsgfs', 'angulardatas', 'hgkhfyg', 18, 25, 14, '560001', 45, '1999-01-01', '2019-10-10', 1, 5, 'templatemo-banner.png'),
(4, 'data001', 'lastdata', 'middata', 'addressdata', 18, 25, 14, '568001', 28, '1993-06-10', '2010-10-11', 1, 4, 'ravi.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `employeedata`
--

CREATE TABLE `employeedata` (
  `emp_id` int(100) NOT NULL,
  `f_name` varchar(130) NOT NULL,
  `m_name` varchar(130) NOT NULL,
  `l_name` varchar(130) NOT NULL,
  `address` varchar(130) NOT NULL,
  `zip` int(6) NOT NULL,
  `age` int(100) NOT NULL,
  `emp_country` int(100) NOT NULL,
  `emp_state` int(100) NOT NULL,
  `emp_city` int(100) NOT NULL,
  `b_date` date NOT NULL,
  `h_date` date NOT NULL,
  `emp_department` int(100) NOT NULL,
  `emp_division` int(100) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employeedata`
--

INSERT INTO `employeedata` (`emp_id`, `f_name`, `m_name`, `l_name`, `address`, `zip`, `age`, `emp_country`, `emp_state`, `emp_city`, `b_date`, `h_date`, `emp_department`, `emp_division`, `image`) VALUES
(1, 'demo', 'demo', 'demo', 'demo', 123456, 44, 11, 20, 15, '2020-04-01', '2020-04-25', 1, 5, 'ravi.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `monthdata`
--

CREATE TABLE `monthdata` (
  `id` int(100) NOT NULL,
  `monthdata` int(130) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `monthdata`
--

INSERT INTO `monthdata` (`id`, `monthdata`) VALUES
(1, 47),
(2, 9),
(3, 28),
(4, 54),
(5, 77);

-- --------------------------------------------------------

--
-- Table structure for table `statedata`
--

CREATE TABLE `statedata` (
  `state_id` int(100) NOT NULL,
  `state_name` varchar(130) NOT NULL,
  `c_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `statedata`
--

INSERT INTO `statedata` (`state_id`, `state_name`, `c_id`) VALUES
(25, 'KARNATAKA', 14);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(100) NOT NULL,
  `user_name` varchar(130) NOT NULL,
  `email_address` varchar(130) NOT NULL,
  `first_name` varchar(130) NOT NULL,
  `last_name` varchar(130) NOT NULL,
  `password` varchar(130) NOT NULL,
  `confirm_password` varchar(130) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `email_address`, `first_name`, `last_name`, `password`, `confirm_password`) VALUES
(1, 'admindata', 'admin555@gmail.com', 'admindata', 'dataadmin', 'admin123', '123123'),
(2, 'data1', 'd@gmail.com', 'codeplus', 'codeenvanto', '123456', '123456'),
(3, 'datapicker', 'datap@gmail.com', 'data1', 'data2', 'data123', 'data123');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`city_id`),
  ADD KEY `city_ibfk_1` (`s_id`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`country_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`dept_id`);

--
-- Indexes for table `division`
--
ALTER TABLE `division`
  ADD PRIMARY KEY (`div_id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indexes for table `employeedata`
--
ALTER TABLE `employeedata`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `monthdata`
--
ALTER TABLE `monthdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `statedata`
--
ALTER TABLE `statedata`
  ADD PRIMARY KEY (`state_id`),
  ADD KEY `c_id` (`c_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `city_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `country_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `dept_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `division`
--
ALTER TABLE `division`
  MODIFY `div_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `emp_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `employeedata`
--
ALTER TABLE `employeedata`
  MODIFY `emp_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `monthdata`
--
ALTER TABLE `monthdata`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `statedata`
--
ALTER TABLE `statedata`
  MODIFY `state_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `city`
--
ALTER TABLE `city`
  ADD CONSTRAINT `city_ibfk_1` FOREIGN KEY (`s_id`) REFERENCES `statedata` (`state_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `statedata`
--
ALTER TABLE `statedata`
  ADD CONSTRAINT `statedata_ibfk_1` FOREIGN KEY (`c_id`) REFERENCES `country` (`country_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
