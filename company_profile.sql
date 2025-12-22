-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 22, 2025 at 12:48 PM
-- Server version: 8.4.3
-- PHP Version: 8.3.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `company_profile`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_info`
--

CREATE TABLE `contact_info` (
  `id` int NOT NULL,
  `address` text,
  `phone` varchar(50) DEFAULT NULL,
  `whatsapp` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `open_hours` varchar(255) DEFAULT NULL,
  `weekday_hours` varchar(100) DEFAULT NULL,
  `saturday_hours` varchar(100) DEFAULT NULL,
  `sunday_hours` varchar(100) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `contact_info`
--

INSERT INTO `contact_info` (`id`, `address`, `phone`, `whatsapp`, `email`, `open_hours`, `weekday_hours`, `saturday_hours`, `sunday_hours`, `updated_at`) VALUES
(3, 'PV74+8GP Batu Ampar, East Jakarta City, Jakarta', '08765432112345', '+62-876-5432-1123', 'company@gmail.com', 'Senin - Jumat 09:00 - 17:00', '09-00 - 17:00', '10:00 - 16:00', 'By Appointment', '2025-12-11 12:21:31');

-- --------------------------------------------------------

--
-- Table structure for table `contact_messages`
--

CREATE TABLE `contact_messages` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `company` varchar(100) DEFAULT NULL,
  `event_type` varchar(50) DEFAULT NULL,
  `event_info` varchar(150) DEFAULT NULL,
  `message` text NOT NULL,
  `is_read` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `contact_messages`
--

INSERT INTO `contact_messages` (`id`, `name`, `email`, `phone`, `company`, `event_type`, `event_info`, `message`, `is_read`, `created_at`) VALUES
(7, 'w', 'w@gmail.com', '123', 'test', 'Concert', 'ads', '123', 1, '2025-12-16 13:08:10'),
(8, 'zzz', '123a@gmail.com', '123', 'xyz', 'Gala Dinner', 'zz', 'zzz', 1, '2025-12-16 13:10:38'),
(9, 'test23', 'test23@gmail.com', '123123', 'awdawd', 'Wedding', 'Jakarta- Mei 2026', 'awdtest23', 1, '2025-12-16 13:25:54'),
(10, 'awd', 'asd@gmail.com', '+62812398798', 'asd@gmail.com', 'Wedding', 'Jakarta Mei 2029', 'adw', 1, '2025-12-16 13:35:34'),
(11, 'test pagi', 'test@gmail.com', '123123123', 'wda', 'Wedding', 'Jakarta Juli 2026', 'awd', 1, '2025-12-16 21:31:21'),
(12, 'test4', 'test4@gmail.com', '123', 'aaa', 'Corporate Event', 'aaa', 'aa', 1, '2025-12-16 21:36:13'),
(13, 'q', 'Q@gmail.com', '1', 'q', 'Gala Dinner', 'q', 'q', 1, '2025-12-16 21:47:12'),
(14, 's', 's@gmail.com', '123', '123', 'Product Launch', 'Jakarta s', 's', 1, '2025-12-16 22:22:54'),
(15, 'Tester', 'tester@gmail.com', '12345', 'Tester ', 'Activation / Pop-up', 'Jakarta - 30 Mei 2026', 'Test kebutuhan', 1, '2025-12-19 13:18:35');

-- --------------------------------------------------------

--
-- Table structure for table `maps`
--

CREATE TABLE `maps` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `embed_code` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `maps`
--

INSERT INTO `maps` (`id`, `title`, `embed_code`, `created_at`) VALUES
(1, 'Kantor Pusat', 'https://www.google.com/maps/@-7.234567,112.730836,15z?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTIwOC4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D', '2025-12-11 08:52:18');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `image` varchar(255) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `description`, `image`, `category`, `created_at`) VALUES
(5, 'Glow Festival 2025', 'electronic music event with over 5,000 visitors, including stage design and lighting', '/uploads/1765455982202-767286213.jpg', 'Music & Festival', '2025-12-11 12:26:22'),
(6, 'Corporate Gathering PT XYZ', 'Outdoor team-building gathering in Bandung.', '/uploads/1765456624426-845084440.jpg', 'Corporate & Seminar', '2025-12-11 12:37:04'),
(7, 'Wedding Expo Jakarta 2024', 'Jakarta\'s largest wedding exhibition, handle booths and event flow.', '/uploads/1765457467848-397971925.jpg', 'Exhibition & Wedding', '2025-12-11 12:51:07'),
(8, 'Tech Innovation Summit 2025', 'Corporate & Seminar', '/uploads/1765457589953-949996866.jpg', 'Technology conference with over 50 speakers and 1,200 participants.', '2025-12-11 12:53:09'),
(9, 'Charity Run “Run for Hope', 'Charity run with sponsorship, merchandise and documentation.', '/uploads/1765457641420-931036528.jpg', 'Exhibition & Charity', '2025-12-11 12:54:01'),
(10, 'Fashion Week 2026', 'Stage, catwalk and lighting for 15 local designers.', '/uploads/1765957087171-87639754.jpg', 'Music & Festival', '2025-12-11 12:55:21');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `icon` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `title`, `description`, `icon`, `created_at`) VALUES
(5, 'Event Planning', 'Event planning, from concept and timeline to budget.', '🧮', '2025-12-11 13:03:08'),
(6, 'Event Production', 'Handling technical aspects of events, lighting, sound, stage, and decoration', '🖥', '2025-12-11 13:04:16'),
(7, 'Corporate Event Management', 'Management of corporate events such as seminars, gatherings, and workshops', '📠', '2025-12-11 13:04:47'),
(8, 'Wedding & Private Party Organizer', 'Providing complete packages for weddings and private events', '💒', '2025-12-11 13:05:09'),
(9, 'Marketing & Promotion', 'Promotional, social media, and branding strategies for events', '💰', '2025-12-11 13:05:57'),
(10, 'Talent & Artist Management', 'Providing MCs, performers, and talent according to event requirements.', '🎭', '2025-12-11 13:06:20');

-- --------------------------------------------------------

--
-- Table structure for table `slides`
--

CREATE TABLE `slides` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `subtitle` text,
  `image` varchar(255) DEFAULT NULL,
  `order_position` int DEFAULT '0',
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `slides`
--

INSERT INTO `slides` (`id`, `title`, `subtitle`, `image`, `order_position`, `is_active`, `created_at`) VALUES
(9, 'Stage, Lighting, Multimedia — Perfected', 'Our production team ensures the highest quality visuals and audio for every event.', '/uploads/1765488513709-380609108.jpg', 0, 1, '2025-12-11 21:28:33'),
(10, 'Crafting Beautiful and Memorable Celebrations', 'Elegant concepts and detailed execution for your most important moments.', '/uploads/1765488635562-677286621.jpg', 0, 1, '2025-12-11 21:30:35'),
(11, 'Delivering Seamless Corporate Events', 'Conferences, gatherings, product launches, and award nights with flawless coordination.', '/uploads/1765488703455-223109146.jpg', 0, 1, '2025-12-11 21:31:43'),
(12, 'We Create Unforgettable Experiences', 'From concept to execution, we bring your event ideas to life with creativity and precision.', '/uploads/1765488777148-339598627.jpg', 0, 1, '2025-12-11 21:32:57'),
(13, 'Professional Event Solutions for Every Occasion', 'Corporate events, festivals, exhibitions, and private celebrations — expertly handled from start to finish.', '/uploads/1765488822458-12293628.jpg', 0, 1, '2025-12-11 21:33:42');

-- --------------------------------------------------------

--
-- Table structure for table `social_media`
--

CREATE TABLE `social_media` (
  `id` int NOT NULL,
  `platform` varchar(50) NOT NULL,
  `url` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `social_media`
--

INSERT INTO `social_media` (`id`, `platform`, `url`, `created_at`, `updated_at`) VALUES
(1, 'Instagram', 'https://www.instagram.com/', '2025-12-11 10:37:02', '2025-12-11 13:31:20'),
(2, 'Facebook', 'https://www.facebook.com/', '2025-12-11 11:07:25', '2025-12-11 13:33:50'),
(3, 'Youtube', 'https://www.youtube.com/', '2025-12-11 13:32:31', '2025-12-11 13:33:42'),
(4, 'LinkedIn', 'https://id.linkedin.com/', '2025-12-11 13:33:20', '2025-12-11 13:33:20');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `bio` text,
  `instagram` varchar(255) DEFAULT NULL,
  `tiktok` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`id`, `name`, `position`, `photo`, `bio`, `instagram`, `tiktok`, `created_at`) VALUES
(3, 'Andi Pratama', 'CEO & Founder', '/uploads/1765458536459-121381268.jpg', 'Leading agency with innovative vision, 10+ years experience in the event industry', 'https://www.instagram.com', 'https://www.tiktok.com/', '2025-12-11 09:43:00'),
(4, 'Sarah Cameron', 'Creative Director', '/uploads/1765458676605-356165806.jpg', 'Experts in event concept design and branding, ensuring every event is unique and memorable.', 'https://www.instagram.com/madelyncline/', 'https://www.tiktok.com/', '2025-12-11 13:11:16'),
(5, 'JJ Maybank', 'Event Manager', '/uploads/1765458819297-67501585.jpg', 'Specialist in operational management of events from small to large scale.', 'https://www.instagram.com/', 'https://www.tiktok.com/', '2025-12-11 13:13:39'),
(6, 'Pope', 'Marketing & PR', '/uploads/1765458903434-739192959.jpg', 'Develop promotional and media strategies to increase attendee engagement in the event.', 'https://www.instagram.com/', 'https://www.tiktok.com/', '2025-12-11 13:15:03'),
(7, 'Kiara', 'Production Head', '/uploads/1765458977776-828024685.jpg', 'Responsible for technical production, stage, lighting, and sound system.', 'https://www.instagram.com/', 'https://www.tiktok.com/', '2025-12-11 13:16:10'),
(8, 'Rafe Cameron', 'Finance & Admin', '/uploads/1765459724071-735422709.jpg', 'Manage administration and budget to ensure all events run smoothly', 'https://www.instagram.com/', 'https://www.tiktok.com/', '2025-12-11 13:28:44');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `created_at`) VALUES
(1, 'Admin', 'admin@gmail.com', '$2b$10$kiwmSHNYkFp73GZ.UYwkMeAT5BqTR20eU8BCbybDQ2.Tibq5Cl1v6', '2025-12-10 16:41:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_info`
--
ALTER TABLE `contact_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_messages`
--
ALTER TABLE `contact_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `maps`
--
ALTER TABLE `maps`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `slides`
--
ALTER TABLE `slides`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `social_media`
--
ALTER TABLE `social_media`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_info`
--
ALTER TABLE `contact_info`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `contact_messages`
--
ALTER TABLE `contact_messages`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `maps`
--
ALTER TABLE `maps`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `slides`
--
ALTER TABLE `slides`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `social_media`
--
ALTER TABLE `social_media`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
