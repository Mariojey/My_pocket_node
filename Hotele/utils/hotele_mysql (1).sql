-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 02 Sty 2021, 15:40
-- Wersja serwera: 10.4.13-MariaDB
-- Wersja PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `hotele`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `hotele`
--

CREATE TABLE `hotele` (
  `id_hotel` int(11) NOT NULL,
  `nazwa` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_kraj` int(11) DEFAULT NULL,
  `id_miasto` int(11) DEFAULT NULL,
  `adres` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gwiazdki` int(11) DEFAULT NULL,
  `telefon` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `www` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `hotele`
--

INSERT INTO `hotele` (`id_hotel`, `nazwa`, `id_kraj`, `id_miasto`, `adres`, `gwiazdki`, `telefon`, `email`, `www`) VALUES
(1, 'Dwoobok', 1, 1, 'Ul.Zielona 11', 2, '+48 22 5896 57 49', 'Dwoobok@przyklad.pl', 'www.Dwoobok.twoja_domena.pl'),
(2, 'Tri-hotel', 1, 1, 'Ul.Zielna 14', 3, '+48 22 138 16 84', 'Tri-hotel@przyklad.pl', 'www.Tri-hotel.twoja_domena.pl'),
(3, 'Czworak', 1, 1, 'Ul.Barwna 67', 4, '+48 22 158 64 78', 'Czworak@przyklad.pl', 'www.Czworak.twoja_domena.pl'),
(4, 'Piętaszek', 1, 1, 'Ul.Jutra 1', 5, '+48 22 364 12 21', 'Piętaszek@przyklad.pl', 'www.Piętaszek.twoja_domena.pl'),
(5, 'Sześcian', 1, 1, 'Ul.Sześcienna 42', 4, '+48 22 137 98 65', 'Sześcian@przyklad.pl', 'www.Sześcian.twoja_domena.pl'),
(6, 'Sioodemka', 1, 2, 'Ul.Jaśminowa 12', 3, '+48 12 987 65 32', 'Sioodemka@przyklad.pl', 'www.Sioodemka.twoja_domena.pl'),
(7, 'O-Ratio', 1, 2, 'Ul.Dębowa 33', 2, '+48 12 654 32 45', 'O-Ratio@przyklad.pl', 'www.O-Ratio.twoja_domena.pl'),
(8, 'Nine-levels', 1, 2, 'Ul.Klonowa 7', 3, '+48 12 546 12 78', 'Nine-levels@przyklad.pl', 'www.Nine-levels.twoja_domena.pl'),
(9, 'B-Ten', 1, 2, 'Ul.Bukowa 43', 4, '+48 12 753 45 45', 'B-Ten@przyklad.pl', 'www.B-Ten.twoja_domena.pl'),
(10, 'O-Eleven', 1, 3, 'Ul.Brzozowa 2', 5, '+48 32 123 45 45', 'O-Eleven@przyklad.pl', 'www.O-Eleven.twoja_domena.pl'),
(11, 'Twelwe', 1, 3, 'Ul.Czeremchowa 218', 4, '+48 32 654 87 54', 'Twelwe@przyklad.pl', 'www.Twelwe.twoja_domena.pl'),
(12, 'TTN', 1, 3, 'Ul.Jabłoni 23', 3, '+48 32 841 84 14', 'TTN@przyklad.pl', 'www.TTN.twoja_domena.pl'),
(13, 'F-T-Hotele', 1, 4, 'Ul.Jesionowa 63', 2, '+48 61 985 65 89', 'F-T-Hotele@przyklad.pl', 'www.F-T-Hotele.twoja_domena.pl'),
(14, 'Memo', 1, 4, 'Ul.Olchowa 83', 3, '+48 61 658 96 58', 'Memo@przyklad.pl', 'www.Memo.twoja_domena.pl'),
(15, 'Liil', 1, 4, 'Ul.Głogowa 35', 4, '+48 61 225 44 66', 'Liil@przyklad.pl', 'www.Liil.twoja_domena.pl'),
(16, 'Paf', 1, 4, 'Ul.Ul.Zielna 11 63', 2, '+48 61 5896 57 49', 'Paf@przyklad.pl', 'www.Paf.twoja_domena.pl'),
(17, 'Tio', 1, 5, 'Ul.Piaskowa 6', 3, '+48 58 138 16 84', 'Tio@przyklad.pl', 'www.Tio.twoja_domena.pl'),
(18, 'Arrci', 1, 5, 'Ul.Pystynna 4', 4, '+48 58 158 64 78', 'Arrci@przyklad.pl', 'www.Arrci.twoja_domena.pl'),
(19, 'Ryzat', 1, 5, 'Ul.Rzeczna 66', 5, '+48 58 364 12 21', 'Ryzat@przyklad.pl', 'www.Ryzat.twoja_domena.pl'),
(20, 'Zia', 1, 5, 'Ul.Hotelowa 5', 4, '+48 58 137 98 65', 'Zia@przyklad.pl', 'www.Zia.twoja_domena.pl'),
(21, 'Velu', 1, 6, 'Ul.Jasna 2', 3, '+48 17 987 65 32', 'Velu@przyklad.pl', 'www.Velu.twoja_domena.pl'),
(22, 'Vea', 1, 6, 'Ul.Biała 89', 2, '+48 17 654 32 45', 'Vea@przyklad.pl', 'www.Vea.twoja_domena.pl'),
(23, 'Gakof', 2, 7, 'White street 15', 3, '+353 546 12 78', 'Gakof@przyklad.pl', 'www.Gakof.twoja_domena.pl'),
(24, 'Hady', 2, 7, 'Orange street 69', 4, '+353 753 45 45', 'Hady@przyklad.pl', 'www.Hady.twoja_domena.pl'),
(25, 'Bel', 3, 8, 'St John St 5', 5, '+44 171 123 45 45', 'Bel@przyklad.pl', 'www.Bel.twoja_domena.pl'),
(26, 'Hifu', 3, 8, 'Elia St 1', 4, '+44 171 654 87 54', 'Hifu@przyklad.pl', 'www.Hifu.twoja_domena.pl'),
(27, 'Zumder', 3, 8, 'New St 7', 3, '+44 171 841 84 14', 'Zumder@przyklad.pl', 'www.Zumder.twoja_domena.pl'),
(28, 'Bumgi', 4, 9, 'Kreslicka 5', 3, '+420 658 96 58', 'Bumgi@przyklad.pl', 'www.Bumgi.twoja_domena.pl'),
(29, 'Cus', 4, 9, 'Kozacka 5', 2, '+420 985 65 89', 'Cus@przyklad.pl', 'www.Cus.twoja_domena.pl'),
(30, 'Bumgi', 4, 9, 'Krynmska 5', 3, '+420 658 96 58', 'Bumgi@przyklad.pl', 'www.Bumgi.twoja_domena.pl'),
(31, 'Cus', 5, 10, 'Medena 5', 2, '+421 7  985 65 89', 'Cus@przyklad.pl', 'www.Cus.twoja_domena.pl'),
(32, 'Lagi', 5, 10, 'Dunajska 8', 3, '+421 7  591 65 74', 'Lagi@przyklad.pl', 'www.Lagi.twoja_domena.pl'),
(33, 'Lumi', 6, 11, 'Kopenicker Str.3', 4, '+49 123846084', 'Lumi@przyklad.pl', 'www.Lumi.twoja_domena.pl'),
(34, 'Mikka', 6, 11, 'Berlin Str.74', 5, '+49 761954845', 'Mikka@przyklad.pl', 'www.Mikka.twoja_domena.pl'),
(35, 'Leo', 6, 11, 'Noger Str.37', 4, '+49 761845954', 'Leo@przyklad.pl', 'www.Leo.twoja_domena.pl'),
(36, 'Lungari', 7, 12, 'Rue de Rivoli 55', 3, '+32 985 89 65', 'Lungari@przyklad.pl', 'www.Lungari.twoja_domena.pl'),
(37, 'Lambe', 7, 12, 'Avenue Victoria 3', 2, '+32 965 32 87', 'Lambe@przyklad.pl', 'www.Lambe.twoja_domena.pl'),
(38, 'Pirue', 7, 12, 'Rue Pernelle 46', 3, '+32 652 45 43', 'Pirue@przyklad.pl', 'www.Pirue.twoja_domena.pl');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `klienci`
--

CREATE TABLE `klienci` (
  `id_klient` int(11) NOT NULL,
  `imie` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nazwisko` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_kraju` int(11) DEFAULT NULL,
  `id_miasto` int(11) DEFAULT NULL,
  `adres` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `licznik` int(11) DEFAULT NULL,
  `nr_dokumentacji` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `klienci`
--

INSERT INTO `klienci` (`id_klient`, `imie`, `nazwisko`, `id_kraju`, `id_miasto`, `adres`, `licznik`, `nr_dokumentacji`) VALUES
(1, 'Piotr', 'Aktoriusz', 1, 1, 'Ul.	Codzienna	3', 1, 'AAA 00000001'),
(2, 'Jan', 'Fejsbuczak', 1, 1, 'Ul.	Letnia	56', 0, 'AAA 00000002'),
(3, 'Aldona', 'Cisowiak', 1, 1, 'Ul.	Jesienna	8', 0, 'AAA 00000003'),
(4, 'Ilona', 'Murowanka', 1, 2, 'Ul.	Zimowa	3', 0, 'AAA 00000004'),
(5, 'Jacek', 'Profiliusz', 1, 2, 'Ul.	Zaporowa	4', 1, 'AAA 00000005'),
(6, 'Lucjusz', 'Mafojczak', 1, 3, 'Ul.	Ciemna	3', 0, 'AAA 00000006'),
(7, 'Lidia', 'Jazowiak', 1, 3, 'Ul.	Zimna	6', 1, 'AAA 00000007'),
(8, 'Zuza', 'Oneciak', 1, 4, 'Ul.	Zwierzyniecka	7', 2, 'AAA 00000008'),
(9, 'Pola', 'Interiusz', 1, 5, 'Ul.	Klonowa	45', 0, 'AAA 00000009'),
(10, 'Cyprian', 'Kiepściuch', 1, 6, 'Ul.	Kwiatowa	34', 4, 'AAA 00000010'),
(11, 'Piotr', 'Komputerik', 1, 6, 'Ul.	Pomarańczowa	6', 3, 'AAA 00000011'),
(12, 'Maria', 'Elmecka', 1, 6, 'Ul.	Zielona	43', 0, 'AAA 00000012'),
(13, 'Dariusz', 'Drzewołaz', 2, 7, 'Ul.	St Eve St	34', 1, 'AAA 00000013'),
(14, 'Cecylia', 'Kobiecka', 2, 7, 'Ul.	St John St	6', 0, 'AAA 00000014'),
(15, 'Leopold', 'Banko', 3, 8, 'Ul.	St Tomas St	3', 1, 'AAA 00000015'),
(16, 'Zofia', 'Otwarty', 3, 8, 'Ul.	St Lucas St	6', 0, 'AAA 00000016'),
(17, 'Adam', 'Euforik', 4, 9, 'Ul.	Podkopova	45', 0, 'AAA 00000017'),
(18, 'Michał', 'Komórczak', 5, 10, 'Ul.	Prekopova	6', 0, 'AAA 00000018'),
(19, 'Mirosław', 'Ekspresik', 6, 11, 'Ul.	Lukas Str.	34', 1, 'AAA 00000019'),
(20, 'Dariusz', 'Googlarz', 7, 12, 'Ul.	Rue De Rao	6', 0, 'AAA 00000020'),
(21, 'Milena', 'Zgłoska', 7, 12, 'Ul.	Rue Di Deo	45', 1, 'AAA 00000021');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `kraje`
--

CREATE TABLE `kraje` (
  `id_kraju` int(11) NOT NULL,
  `nazwa_kraju` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `kod_kraju` varchar(2) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `kraje`
--

INSERT INTO `kraje` (`id_kraju`, `nazwa_kraju`, `kod_kraju`) VALUES
(1, 'Polska', 'PL'),
(2, 'Irandia', 'IE'),
(3, 'Anglia', 'GB'),
(4, 'Czechy', 'CZ'),
(5, 'Słowacja', 'SK'),
(6, 'Niemcy', 'DE'),
(7, 'Francja', 'FR');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `miasta`
--

CREATE TABLE `miasta` (
  `id_miasta` int(11) NOT NULL,
  `nazwa_miasta` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `kod_miasta` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `miasta`
--

INSERT INTO `miasta` (`id_miasta`, `nazwa_miasta`, `kod_miasta`) VALUES
(1, 'Warszawa', '02-495'),
(2, 'Kraków', '31-144'),
(3, 'Katowice', ''),
(4, 'Poznań', ''),
(5, 'Gdańsk', ''),
(6, 'Rzeszów', ''),
(7, 'Dublin', ''),
(8, 'Londyn', ''),
(9, 'Praga', ''),
(10, 'Bratysława', ''),
(11, 'Berlin', ''),
(12, 'Paryż', '');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `parking`
--

CREATE TABLE `parking` (
  `id_parking` int(11) NOT NULL,
  `id_hotel` int(11) DEFAULT NULL,
  `numer` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `parking`
--

INSERT INTO `parking` (`id_parking`, `id_hotel`, `numer`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 8),
(9, 1, 9),
(10, 1, 10),
(11, 3, 1),
(12, 3, 2),
(13, 3, 3),
(14, 3, 4),
(15, 3, 5),
(16, 4, 1),
(17, 4, 2),
(18, 4, 3),
(19, 4, 4),
(20, 4, 5),
(21, 5, 1),
(22, 5, 2),
(23, 5, 3),
(24, 5, 4),
(25, 5, 5),
(26, 6, 1),
(27, 6, 2),
(28, 6, 3),
(29, 6, 4),
(30, 6, 5),
(31, 7, 1),
(32, 7, 2),
(33, 7, 3),
(34, 7, 4),
(35, 7, 5),
(36, 7, 6),
(37, 7, 7),
(38, 9, 1),
(39, 9, 2),
(40, 9, 3),
(41, 9, 4),
(42, 9, 5),
(43, 9, 6),
(44, 9, 7),
(45, 9, 8),
(46, 10, 1),
(47, 10, 2),
(48, 10, 3),
(49, 10, 4),
(50, 10, 5),
(51, 11, 1),
(52, 11, 2),
(53, 11, 3),
(54, 11, 4),
(55, 11, 5),
(56, 12, 1),
(57, 12, 2),
(58, 12, 3),
(59, 12, 4),
(60, 12, 5),
(61, 12, 6),
(62, 12, 7),
(63, 12, 8),
(64, 12, 9),
(65, 14, 1),
(66, 14, 2),
(67, 14, 3),
(68, 14, 4),
(69, 14, 5),
(70, 14, 6),
(71, 15, 1),
(72, 15, 2),
(73, 15, 3),
(74, 15, 4),
(75, 15, 5),
(76, 16, 1),
(77, 16, 2),
(78, 16, 3),
(79, 16, 4),
(80, 16, 5),
(81, 16, 6),
(82, 16, 7),
(83, 16, 8),
(84, 16, 9),
(85, 16, 10),
(86, 18, 1),
(87, 18, 2),
(88, 18, 3),
(89, 18, 4),
(90, 18, 5),
(91, 19, 1),
(92, 19, 2),
(93, 19, 3),
(94, 19, 4),
(95, 19, 5),
(96, 20, 1),
(97, 20, 2),
(98, 20, 3),
(99, 20, 4),
(100, 20, 5),
(101, 21, 1),
(102, 21, 2),
(103, 21, 3),
(104, 21, 4),
(105, 21, 5),
(106, 21, 6),
(107, 22, 1),
(108, 22, 2),
(109, 22, 3),
(110, 22, 4),
(111, 23, 1),
(112, 23, 2),
(113, 23, 3),
(114, 23, 4),
(115, 23, 5),
(116, 24, 1),
(117, 24, 2),
(118, 24, 3),
(119, 24, 4),
(120, 24, 5),
(121, 24, 6),
(122, 24, 7),
(123, 24, 8),
(124, 25, 1),
(125, 25, 2),
(126, 26, 1),
(127, 26, 2),
(128, 26, 3),
(129, 26, 4),
(130, 26, 5),
(131, 27, 1),
(132, 27, 2),
(133, 27, 3),
(134, 27, 4),
(135, 27, 5),
(136, 28, 1),
(137, 28, 2),
(138, 28, 3),
(139, 28, 4),
(140, 28, 5),
(141, 30, 1),
(142, 30, 2),
(143, 30, 3),
(144, 30, 4),
(145, 30, 5),
(146, 30, 6),
(147, 30, 7),
(148, 30, 8),
(149, 30, 9),
(150, 30, 10),
(151, 30, 11),
(152, 30, 12),
(153, 31, 1),
(154, 31, 2),
(155, 31, 3),
(156, 32, 1),
(157, 32, 2),
(158, 32, 3),
(159, 32, 4),
(160, 32, 5),
(161, 33, 1),
(162, 33, 2),
(163, 33, 3),
(164, 33, 4),
(165, 33, 5),
(166, 34, 1),
(167, 34, 2),
(168, 34, 3),
(169, 34, 4),
(170, 34, 5),
(171, 35, 1),
(172, 35, 2),
(173, 35, 3),
(174, 35, 4),
(175, 35, 5),
(176, 36, 1),
(177, 36, 2),
(178, 36, 3),
(179, 36, 4),
(180, 36, 5),
(181, 36, 6),
(182, 36, 7),
(183, 37, 1),
(184, 37, 2),
(185, 37, 3),
(186, 37, 4),
(187, 38, 1),
(188, 38, 2),
(189, 38, 3),
(190, 38, 4);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `pokoje`
--

CREATE TABLE `pokoje` (
  `id_pokoju` int(11) NOT NULL,
  `id_hotel` int(11) DEFAULT NULL,
  `nr_pokoju` int(11) DEFAULT NULL,
  `pietro` int(11) DEFAULT NULL,
  `ludzie` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `pokoje`
--

INSERT INTO `pokoje` (`id_pokoju`, `id_hotel`, `nr_pokoju`, `pietro`, `ludzie`) VALUES
(1, 1, 1, 1, 1),
(2, 1, 2, 2, 2),
(3, 1, 3, 3, 3),
(4, 1, 4, 4, 4),
(5, 1, 5, 5, 5),
(6, 2, 11, 1, 2),
(7, 2, 22, 2, 3),
(8, 2, 33, 3, 4),
(9, 2, 44, 4, 5),
(10, 2, 55, 5, 2),
(11, 3, 1, 1, 1),
(12, 3, 2, 1, 1),
(13, 3, 3, 2, 2),
(14, 3, 4, 2, 2),
(15, 3, 5, 3, 3),
(16, 4, 12, 2, 2),
(17, 4, 23, 2, 3),
(18, 4, 34, 2, 2),
(19, 4, 45, 2, 3),
(20, 4, 56, 2, 2),
(21, 5, 1, 2, 2),
(22, 5, 2, 2, 2),
(23, 5, 3, 3, 3),
(24, 5, 4, 3, 3),
(25, 5, 5, 4, 4),
(26, 6, 1, 1, 1),
(27, 6, 2, 2, 2),
(28, 6, 3, 3, 3),
(29, 6, 4, 4, 4),
(30, 6, 5, 5, 5),
(31, 7, 11, 1, 2),
(32, 7, 22, 2, 3),
(33, 7, 33, 3, 4),
(34, 7, 44, 4, 5),
(35, 7, 55, 5, 2),
(36, 8, 1, 1, 1),
(37, 8, 2, 1, 1),
(38, 8, 3, 2, 2),
(39, 8, 4, 2, 2),
(40, 8, 5, 3, 3),
(41, 9, 12, 2, 2),
(42, 9, 23, 2, 3),
(43, 9, 34, 2, 2),
(44, 9, 45, 2, 3),
(45, 9, 56, 2, 2),
(46, 10, 1, 2, 2),
(47, 10, 2, 2, 2),
(48, 10, 3, 3, 3),
(49, 10, 4, 3, 3),
(50, 10, 5, 4, 4),
(51, 11, 1, 1, 1),
(52, 11, 2, 2, 2),
(53, 11, 3, 3, 3),
(54, 11, 4, 4, 4),
(55, 11, 5, 5, 5),
(56, 12, 11, 1, 2),
(57, 12, 22, 2, 3),
(58, 12, 33, 3, 4),
(59, 12, 44, 4, 5),
(60, 12, 55, 5, 2),
(61, 13, 1, 1, 1),
(62, 13, 2, 1, 1),
(63, 13, 3, 2, 2),
(64, 13, 4, 2, 2),
(65, 13, 5, 3, 3),
(66, 14, 12, 2, 2),
(67, 14, 23, 2, 3),
(68, 14, 34, 2, 2),
(69, 14, 45, 2, 3),
(70, 14, 56, 2, 2),
(71, 15, 1, 2, 2),
(72, 15, 2, 2, 2),
(73, 15, 3, 3, 3),
(74, 15, 4, 3, 3),
(75, 15, 5, 4, 4),
(76, 16, 1, 1, 1),
(77, 16, 2, 2, 2),
(78, 16, 3, 3, 3),
(79, 16, 4, 4, 4),
(80, 16, 5, 5, 5),
(81, 17, 11, 1, 2),
(82, 17, 22, 2, 3),
(83, 17, 33, 3, 4),
(84, 17, 44, 4, 5),
(85, 17, 55, 5, 2),
(86, 18, 1, 1, 1),
(87, 18, 2, 1, 1),
(88, 18, 3, 2, 2),
(89, 18, 4, 2, 2),
(90, 18, 5, 3, 3),
(91, 19, 12, 2, 2),
(92, 19, 23, 2, 3),
(93, 19, 34, 2, 2),
(94, 19, 45, 2, 3),
(95, 19, 56, 2, 2),
(96, 20, 1, 2, 2),
(97, 20, 2, 2, 2),
(98, 20, 3, 3, 3),
(99, 20, 4, 3, 3),
(100, 20, 5, 4, 4),
(101, 21, 1, 1, 1),
(102, 21, 2, 2, 2),
(103, 21, 3, 3, 3),
(104, 21, 4, 4, 4),
(105, 21, 5, 5, 5),
(106, 22, 11, 1, 2),
(107, 22, 22, 2, 3),
(108, 22, 33, 3, 4),
(109, 22, 44, 4, 5),
(110, 22, 55, 5, 2),
(111, 23, 1, 1, 1),
(112, 23, 2, 1, 1),
(113, 23, 3, 2, 2),
(114, 23, 4, 2, 2),
(115, 23, 5, 3, 3),
(116, 24, 12, 2, 2),
(117, 24, 23, 2, 3),
(118, 24, 34, 2, 2),
(119, 24, 45, 2, 3),
(120, 24, 56, 2, 2),
(121, 25, 1, 2, 2),
(122, 25, 2, 2, 2),
(123, 25, 3, 3, 3),
(124, 25, 4, 3, 3),
(125, 25, 5, 4, 4),
(126, 26, 1, 1, 1),
(127, 26, 2, 2, 2),
(128, 26, 3, 3, 3),
(129, 26, 4, 4, 4),
(130, 26, 5, 5, 5),
(131, 27, 11, 1, 2),
(132, 27, 22, 2, 3),
(133, 27, 33, 3, 4),
(134, 27, 44, 4, 5),
(135, 27, 55, 5, 2),
(136, 28, 1, 1, 1),
(137, 28, 2, 1, 1),
(138, 28, 3, 2, 2),
(139, 28, 4, 2, 2),
(140, 28, 5, 3, 3),
(141, 29, 12, 2, 2),
(142, 29, 23, 2, 3),
(143, 29, 34, 2, 2),
(144, 29, 45, 2, 3),
(145, 29, 56, 2, 2),
(146, 30, 1, 2, 2),
(147, 30, 2, 2, 2),
(148, 30, 3, 3, 3),
(149, 30, 4, 3, 3),
(150, 30, 5, 4, 4),
(151, 31, 1, 1, 1),
(152, 31, 2, 2, 2),
(153, 31, 3, 3, 3),
(154, 31, 4, 4, 4),
(155, 31, 5, 5, 5),
(156, 32, 11, 1, 2),
(157, 32, 22, 2, 3),
(158, 32, 33, 3, 4),
(159, 32, 44, 4, 5),
(160, 32, 55, 5, 2),
(161, 33, 1, 1, 1),
(162, 33, 2, 1, 1),
(163, 33, 3, 2, 2),
(164, 33, 4, 2, 2),
(165, 33, 5, 3, 3),
(166, 34, 12, 2, 2),
(167, 34, 23, 2, 3),
(168, 34, 34, 2, 2),
(169, 34, 45, 2, 3),
(170, 34, 56, 2, 2),
(171, 35, 1, 2, 2),
(172, 35, 2, 2, 2),
(173, 35, 3, 3, 3),
(174, 35, 4, 3, 3),
(175, 35, 5, 4, 4),
(176, 36, 1, 1, 1),
(177, 36, 2, 2, 2),
(178, 36, 3, 3, 3),
(179, 36, 4, 4, 4),
(180, 36, 5, 5, 5),
(181, 37, 11, 1, 2),
(182, 37, 22, 2, 3),
(183, 37, 33, 3, 4),
(184, 37, 44, 4, 5),
(185, 37, 55, 5, 2),
(186, 38, 1, 1, 1),
(187, 38, 2, 1, 1),
(188, 38, 3, 2, 2),
(189, 38, 4, 2, 2),
(190, 38, 5, 3, 3);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `rezerwacje`
--

CREATE TABLE `rezerwacje` (
  `id_rezerwacji` int(11) NOT NULL,
  `id_klient` int(11) DEFAULT NULL,
  `data_start_rezerwacji` date DEFAULT NULL,
  `data_koniec_rezerwacji` date DEFAULT NULL,
  `id_pokoju` int(11) DEFAULT NULL,
  `id_parking` int(11) DEFAULT NULL,
  `zrealizowane` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `rezerwacje`
--

INSERT INTO `rezerwacje` (`id_rezerwacji`, `id_klient`, `data_start_rezerwacji`, `data_koniec_rezerwacji`, `id_pokoju`, `id_parking`, `zrealizowane`) VALUES
(1, 1, '2016-05-12', '2016-05-13', 3, NULL, b'1'),
(2, 2, '2016-05-14', '2016-05-16', 5, NULL, b'1'),
(3, 3, '2016-05-17', '2016-05-20', 8, NULL, b'1'),
(4, 4, '2016-05-21', '2016-05-25', 12, 3, b'1'),
(5, 5, '2016-05-26', '2016-05-31', 17, NULL, b'0'),
(6, 6, '2016-06-01', '2016-06-07', 23, 1, b'1'),
(7, 7, '2016-06-08', '2016-06-15', 30, 1, b'0'),
(8, 8, '2016-06-16', '2016-06-24', 38, NULL, b'0'),
(9, 9, '2016-06-25', '2016-07-04', 47, 1, b'0'),
(10, 10, '2016-07-05', '2016-07-15', 57, 2, b'1'),
(11, 11, '2016-07-16', '2016-07-27', 68, 2, b'1'),
(12, 12, '2016-07-28', '2016-08-09', 80, 3, b'1'),
(13, 13, '2016-08-10', '2016-08-23', 93, 1, b'0'),
(14, 14, '2016-08-24', '2016-09-07', 107, 4, b'1'),
(15, 15, '2016-09-08', '2016-09-23', 122, 1, b'1'),
(16, 16, '2016-09-24', '2016-10-10', 138, 2, b'0'),
(17, 17, '2016-10-11', '2016-10-28', 155, 3, b'0'),
(18, 18, '2016-10-29', '2016-11-16', 173, NULL, b'1'),
(19, 19, '2016-11-17', '2016-12-06', 190, NULL, b'0'),
(20, 20, '2016-12-07', '2016-12-27', 172, 1, b'1'),
(21, 5, '2016-12-12', '2016-12-17', 167, 1, b'0'),
(22, 7, '2016-12-19', '2016-12-26', 160, 3, b'1'),
(23, 9, '2016-12-28', '2017-01-06', 151, 1, b'1'),
(24, 1, '2016-12-29', '2016-12-30', 150, 1, b'1'),
(25, 5, '2017-01-03', '2017-01-08', 145, NULL, b'1'),
(26, 3, '2017-01-06', '2017-01-09', 142, NULL, b'1'),
(27, 7, '2017-01-13', '2017-01-20', 135, 1, b'1'),
(28, 2, '2017-01-15', '2017-01-17', 133, 2, b'1'),
(29, 4, '2017-01-19', '2017-01-23', 129, NULL, b'1'),
(30, 6, '2017-01-25', '2017-01-31', 123, 2, b'1'),
(31, 8, '2017-02-02', '2017-02-10', 115, 2, b'1'),
(32, 9, '2017-02-11', '2017-02-20', 106, 3, b'0'),
(33, 3, '2017-02-14', '2017-02-17', 103, NULL, b'1'),
(34, 2, '2017-02-16', '2017-02-18', 101, NULL, b'0'),
(35, 5, '2017-02-21', '2017-02-26', 96, 1, b'1'),
(36, 12, '2017-03-05', '2017-03-17', 84, NULL, b'1'),
(37, 14, '2017-03-19', '2017-04-02', 70, 1, b'1'),
(38, 17, '2017-04-05', '2017-04-22', 53, 2, b'1'),
(39, 19, '2017-04-24', '2017-05-13', 34, 2, b'1'),
(40, 3, '2017-04-27', '2017-04-30', 31, 3, b'1'),
(41, 5, '2017-05-02', '2017-05-07', 26, 1, b'0'),
(42, 9, '2017-05-11', '2017-05-20', 17, 2, b'1'),
(43, 11, '2017-05-22', '2017-06-02', 6, NULL, b'0'),
(44, 10, '2017-06-01', '2017-06-11', 17, 3, b'1'),
(45, 14, '2017-06-15', '2017-06-29', 27, 1, b'0'),
(46, 15, '2017-06-30', '2017-07-15', 41, 1, b'1'),
(47, 12, '2017-07-12', '2017-07-24', 56, 2, b'1'),
(48, 1, '2017-07-13', '2017-07-14', 68, 3, b'1'),
(49, 9, '2017-07-22', '2017-07-31', 69, 4, b'1'),
(50, 3, '2017-07-25', '2017-07-28', 78, NULL, b'1');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `hotele`
--
ALTER TABLE `hotele`
  ADD PRIMARY KEY (`id_hotel`),
  ADD KEY `fk_hotele_miasta` (`id_miasto`),
  ADD KEY `fk_hotele_kraje` (`id_kraj`);

--
-- Indeksy dla tabeli `klienci`
--
ALTER TABLE `klienci`
  ADD PRIMARY KEY (`id_klient`),
  ADD KEY `fk_klienci_miasta` (`id_miasto`),
  ADD KEY `fk_klienci_kraje` (`id_kraju`);

--
-- Indeksy dla tabeli `kraje`
--
ALTER TABLE `kraje`
  ADD PRIMARY KEY (`id_kraju`);

--
-- Indeksy dla tabeli `miasta`
--
ALTER TABLE `miasta`
  ADD PRIMARY KEY (`id_miasta`);

--
-- Indeksy dla tabeli `parking`
--
ALTER TABLE `parking`
  ADD PRIMARY KEY (`id_parking`);

--
-- Indeksy dla tabeli `pokoje`
--
ALTER TABLE `pokoje`
  ADD PRIMARY KEY (`id_pokoju`),
  ADD KEY `fk_pokoje_hotel` (`id_hotel`);

--
-- Indeksy dla tabeli `rezerwacje`
--
ALTER TABLE `rezerwacje`
  ADD PRIMARY KEY (`id_rezerwacji`),
  ADD KEY `fk_rezerwcje_pokoje` (`id_pokoju`),
  ADD KEY `fk_rezerwacje_klient` (`id_klient`),
  ADD KEY `fk_rezerwacje_parking` (`id_parking`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `hotele`
--
ALTER TABLE `hotele`
  MODIFY `id_hotel` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT dla tabeli `klienci`
--
ALTER TABLE `klienci`
  MODIFY `id_klient` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT dla tabeli `kraje`
--
ALTER TABLE `kraje`
  MODIFY `id_kraju` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT dla tabeli `miasta`
--
ALTER TABLE `miasta`
  MODIFY `id_miasta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT dla tabeli `parking`
--
ALTER TABLE `parking`
  MODIFY `id_parking` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=191;

--
-- AUTO_INCREMENT dla tabeli `pokoje`
--
ALTER TABLE `pokoje`
  MODIFY `id_pokoju` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=191;

--
-- AUTO_INCREMENT dla tabeli `rezerwacje`
--
ALTER TABLE `rezerwacje`
  MODIFY `id_rezerwacji` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `hotele`
--
ALTER TABLE `hotele`
  ADD CONSTRAINT `fk_hotele_kraje` FOREIGN KEY (`id_kraj`) REFERENCES `kraje` (`id_kraju`),
  ADD CONSTRAINT `fk_hotele_miasta` FOREIGN KEY (`id_miasto`) REFERENCES `miasta` (`id_miasta`);

--
-- Ograniczenia dla tabeli `klienci`
--
ALTER TABLE `klienci`
  ADD CONSTRAINT `fk_klienci_kraje` FOREIGN KEY (`id_kraju`) REFERENCES `kraje` (`id_kraju`),
  ADD CONSTRAINT `fk_klienci_miasta` FOREIGN KEY (`id_miasto`) REFERENCES `miasta` (`id_miasta`);

--
-- Ograniczenia dla tabeli `pokoje`
--
ALTER TABLE `pokoje`
  ADD CONSTRAINT `fk_pokoje_hotel` FOREIGN KEY (`id_hotel`) REFERENCES `hotele` (`id_hotel`);

--
-- Ograniczenia dla tabeli `rezerwacje`
--
ALTER TABLE `rezerwacje`
  ADD CONSTRAINT `fk_rezerwacje_klient` FOREIGN KEY (`id_klient`) REFERENCES `klienci` (`id_klient`),
  ADD CONSTRAINT `fk_rezerwacje_parking` FOREIGN KEY (`id_parking`) REFERENCES `parking` (`id_parking`),
  ADD CONSTRAINT `fk_rezerwcje_pokoje` FOREIGN KEY (`id_pokoju`) REFERENCES `pokoje` (`id_pokoju`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
