tạo category

INSERT INTO category (id, name, sex)
VALUES (NULL, "Kurtas and Kurtis", "women"),
(NULL, "Dresses and Jumpsuits", "women"),
(NULL, "Casual Shirts", "men"),
(NULL, "Kurtas and Kurtis", "men"),
(NULL, "Jeans", "men")


tạo product
INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId, id)
VALUES (
  'AURELIA Women Striped Band Collar Straight Kurta',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010104295-White-White-1000010104295_01-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010104295-White-White-1000010104295_02-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010104295-White-White-1000010104295_03-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010104295-White-White-1000010104295_04-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010104295-White-White-1000010104295_05-2100.jpg',
  499,
  600,
  3,
  DEFAULT
);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId, id)
VALUES (
  'W Women Colourblocked Three-Quarter Sleeves Straight Kurta',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011695352-Black-Black-1000011695352_01-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011695352-Black-Black-1000011695352_02-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011695352-Black-Black-1000011695352_03-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011695352-Black-Black-1000011695352_04-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011695352-Black-Black-1000011695352_06-2100.jpg',
  1999,
  2500,
  3,
 DEFAULT
);


INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('BIBA Women Printed A-line Kurta with 3/4 Sleeves and Belt', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010251944-Yellow-Mustard-1000010251944_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010251944-Yellow-Mustard-1000010251944_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010251944-Yellow-Mustard-1000010251944_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010251944-Yellow-Mustard-1000010251944_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010251944-Yellow-Mustard-1000010251944_06-2100.jpg', 1499, 1699, 3),
       ('SPAN Women Embroidered A-line Kurta', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010485506-Pink-Peach-1000010485506_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010485506-Pink-Peach-1000010485506_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010485506-Pink-Peach-1000010485506_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010485506-Pink-Peach-1000010485506_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010485506-Pink-Peach-1000010485506_06-2100.jpg', 3219, 3500, 3);


INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('MELANGE Women Embroidered Notched Neck A-Line Kurta', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011338421-Blue-Blue-1000011338421_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011338421-Blue-Blue-1000011338421_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011338421-Blue-Blue-1000011338421_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011338421-Blue-Blue-1000011338421_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011338421-Blue-Blue-1000011338421_06-2100.jpg', 1619, 2000, 3),
('MELANGE Women Printed Three-Quarter Sleeves Straight Kurta', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011338796-Green-Green-1000011338796_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011338796-Green-Green-1000011338796_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011338796-Green-Green-1000011338796_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011338796-Green-Green-1000011338796_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011338796-Green-Green-1000011338796_06-2100.jpg', 1169, 1200, 3);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('MELANGE Women Printed Band Collar Straight Kurta', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011338835-Green-Emerald-1000011338835_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011338835-Green-Emerald-1000011338835_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011338835-Green-Emerald-1000011338835_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011338835-Green-Emerald-1000011338835_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011338835-Green-Emerald-1000011338835_06-2100.jpg', 1169, 1300, 3),
('MELANGE Women Printed Straight Kurta', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011768002-Red-Wine-1000011768002_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011768002-Red-Wine-1000011768002_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011768002-Red-Wine-1000011768002_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011768002-Red-Wine-1000011768002_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011768002-Red-Wine-1000011768002_06-2100.jpg', 1119, 1300, 3);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('MELANGE Women Printed A-line Kurta', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010426103-White-OffWhite-1000010426103_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010426103-White-OffWhite-1000010426103_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010426103-White-OffWhite-1000010426103_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010426103-White-OffWhite-1000010426103_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010426103-White-OffWhite-1000010426103_06-2100.jpg', 1119, 1500, 3),
       ('MELANGE Women Printed Three-Quarter Sleeves A-Line Kurta', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010860504-Pink-Pink-1000010860504_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010860504-Pink-Pink-1000010860504_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010860504-Pink-Pink-1000010860504_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010860504-Pink-Pink-1000010860504_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010860504-Pink-Pink-1000010860504_06-2100.jpg', 1259, 3000, 3);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('MELANGE Women Embroidered Straight Kurta', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010793097-Blue-LightBlue-1000010793097_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010793097-Blue-LightBlue-1000010793097_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010793097-Blue-LightBlue-1000010793097_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010793097-Blue-LightBlue-1000010793097_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010793097-Blue-LightBlue-1000010793097_06-2100.jpg', 909, 1200, 3);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('MELANGE Women Printed Straight Kurta', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784424-Var5-Orange-1000010784424-Var5_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784424-Var5-Orange-1000010784424-Var5_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784424-Var5-Orange-1000010784424-Var5_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784424-Var5-Orange-1000010784424-Var5_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784424-Var5-Orange-1000010784424-Var5_06-2100.jpg', 1119, 1500, 3);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES
("MELANGE Women Embroidered Round Neck A-line Kurta", "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010793110-Blue-Teal-1000010793110_01-2100.jpg", "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010793110-Blue-Teal-1000010793110_02-2100.jpg", "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010793110-Blue-Teal-1000010793110_03-2100.jpg", "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010793110-Blue-Teal-1000010793110_04-2100.jpg", "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010793110-Blue-Teal-1000010793110_06-2100.jpg", 1299, 1500, 3),
("MELANGE Women Abstract Print Straight Kurta", "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011605050-Blue-Indigo-1000011605050_01-2100.jpg", "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011605050-Blue-Indigo-1000011605050_02-2100.jpg", "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011605050-Blue-Indigo-1000011605050_03-2100.jpg", "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011605050-Blue-Indigo-1000011605050_04-2100.jpg", "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011605050-Blue-Indigo-1000011605050_06-2100.jpg", 719, 1100, 3);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES
(
  'MELANGE Women Floral Printed A-Line Kurta',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011023586-Yellow-Mustard-1000011023586_01-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011023586-Yellow-Mustard-1000011023586_02-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011023586-Yellow-Mustard-1000011023586_03-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011023586-Yellow-Mustard-1000011023586_04-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011023586-Yellow-Mustard-1000011023586_06-2100.jpg',
  1399,
  2000,
  3
);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES
(
  'MELANGE Women Printed A-Line Kurta',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784566-Blue-Navy-1000010784566_01-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784566-Blue-Navy-1000010784566_02-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784566-Blue-Navy-1000010784566_03-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784566-Blue-Navy-1000010784566_04-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784566-Blue-Navy-1000010784566_06-2100.jpg',
  1399,
  1500,
  3
);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES
(
    'MELANGE Women Embroidered Straight Kurta',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784126-Beige-Beige-1000010784126_01-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784126-Beige-Beige-1000010784126_02-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784126-Beige-Beige-1000010784126_03-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784126-Beige-Beige-1000010784126_04-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010784126-Beige-Beige-1000010784126_06-2100.jpg',
    909,
    1300,
    3
),
(
    'MELANGE Women Printed Three-Quarter Sleeves Straight Kurta',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010882952-Beige-Blush-1000010882952_01-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010882952-Beige-Blush-1000010882952_02-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010882952-Beige-Blush-1000010882952_03-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010882952-Beige-Blush-1000010882952_04-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010882952-Beige-Blush-1000010882952_06-2100.jpg',
    909,
    1000,
    3
);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES (
  'MELANGE Women Embroidered Three-quarter Sleeves Straight Kurta',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010591104-Var6-Orange-1000010591104-Var6_01-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010591104-Var6-Orange-1000010591104-Var6_02-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010591104-Var6-Orange-1000010591104-Var6_03-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010591104-Var6-Orange-1000010591104-Var6_04-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010591104-Var6-Orange-1000010591104-Var6_06-2100.jpg',
  559,
  800,
  3
);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES (
  'GINGER Women Solid Bodycon Dress',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011504859-Black-Black-1000011504859_01-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011504859-Black-Black-1000011504859_02-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011504859-Black-Black-1000011504859_03-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011504859-Black-Black-1000011504859_04-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011504859-Black-Black-1000011504859_06-2100.jpg',
  899,
  1000,
  4
);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES (
  'GINGER Women Printed Shoulder Strap A-line Dress',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010805169-Pink-Pink-1000010805169_01-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010805169-Pink-Pink-1000010805169_02-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010805169-Pink-Pink-1000010805169_03-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010805169-Pink-Pink-1000010805169_04-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010805169-Pink-Pink-1000010805169_06-2100.jpg',
  559,
  700,
  4
);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('GINGER Women Textured A-Line Lace Dress', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011146828-Grey-Sage-1000011146828_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011146828-Grey-Sage-1000011146828_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011146828-Grey-Sage-1000011146828_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011146828-Grey-Sage-1000011146828_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011146828-Grey-Sage-1000011146828_06-2100.jpg', 1189, 2000, 4),
       ('GINGER Women Printed Sweetheart Neck A-Line Dress', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011242905-Red-Red-1000011242905_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011242905-Red-Red-1000011242905_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011242905-Red-Red-1000011242905_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011242905-Red-Red-1000011242905_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011242905-Red-Red-1000011242905_06-2100.jpg', 909, 1100, 4);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('GINGER Women Printed Square Neck A-Line Dress', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011931630-Multicolour-1000011931630_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011931630-Multicolour-1000011931630_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011931630-Multicolour-1000011931630_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011931630-Multicolour-1000011931630_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011931630-Multicolour-1000011931630_06-2100.jpg', 1399, 1500, 4),
       ('W Women Printed Ethnic Jumpsuit', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011694531-Blue-DarkBlue-1000011694531_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011694531-Blue-DarkBlue-1000011694531_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011694531-Blue-DarkBlue-1000011694531_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011694531-Blue-DarkBlue-1000011694531_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011694531-Blue-DarkBlue-1000011694531_06-2100.jpg', 4999, 6000, 4);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES
  (
    'GINGER Women Textured Shoulder Straps A-Line Dress',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010805105-Grey-Sage-1000010805105_01-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010805105-Grey-Sage-1000010805105_02-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010805105-Grey-Sage-1000010805105_03-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010805105-Grey-Sage-1000010805105_04-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010805105-Grey-Sage-1000010805105_06-2100.jpg',
    909,
    1500,
    4
  ),
  (
    'GINGER Women Printed Skater Dress',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010807005-Yellow-Yellow-1000010807005_01-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010807005-Yellow-Yellow-1000010807005_02-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010807005-Yellow-Yellow-1000010807005_03-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010807005-Yellow-Yellow-1000010807005_04-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010807005-Yellow-Yellow-1000010807005_06-2100.jpg',
    1049,
    2000,
    4
  );

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('GINGER Women Printed Square Neck A-line Dress', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011242938-Blue-Blue-1000011242938_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011242938-Blue-Blue-1000011242938_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011242938-Blue-Blue-1000011242938_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011242938-Blue-Blue-1000011242938_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011242938-Blue-Blue-1000011242938_06-2100.jpg', 1049, 2000, 4);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('GINGER Women Floral Printed V-neck A-line Dress', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011542854-Blue-LightBlue-1000011542854_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011542854-Blue-LightBlue-1000011542854_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011542854-Blue-LightBlue-1000011542854_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011542854-Blue-LightBlue-1000011542854_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011542854-Blue-LightBlue-1000011542854_06-2100.jpg', 899, 1000, 4);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('FAME FOREVER Women Solid Shoulder Straps A-Line Dress', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010968850-Black-Black-1000010968850_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010968850-Black-Black-1000010968850_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010968850-Black-Black-1000010968850_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010968850-Black-Black-1000010968850_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010968850-Black-Black-1000010968850_06-2100.jpg', 979, 1300, 4),
       ('GINGER Women Solid Jumpsuit', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010806443-Black-Black-1000010806443_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010806443-Black-Black-1000010806443_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010806443-Black-Black-1000010806443_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010806443-Black-Black-1000010806443_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010806443-Black-Black-1000010806443_06-2100.jpg', 1399, 1500, 4);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES
(
    'CODE Women Textured Lace Dress',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011128915-Purple-Lavender-1000011128915_01-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011128915-Purple-Lavender-1000011128915_02-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011128915-Purple-Lavender-1000011128915_03-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011128915-Purple-Lavender-1000011128915_04-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011128915-Purple-Lavender-1000011128915_06-2100.jpg',
    1399,
    1500,
    4
);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES
(
    'GINGER Women Solid Sleeveless Bodycon Dress',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011545248-Black-Black-1000011545248_01-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011545248-Black-Black-1000011545248_02-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011545248-Black-Black-1000011545248_03-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011545248-Black-Black-1000011545248_04-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011545248-Black-Black-1000011545248_06-2100.jpg',
    1349,
    1600,
    4
);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('GINGER Women Printed A-Line Dress', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010805127-Var4-Pink-Pink-1000010805127-Var4_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010805127-Var4-Pink-Pink-1000010805127-Var4_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010805127-Var4-Pink-Pink-1000010805127-Var4_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010805127-Var4-Pink-Pink-1000010805127-Var4_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010805127-Var4-Pink-Pink-1000010805127-Var4_06-2100.jpg', 769, 1000, 4),
       ('GINGER Women Floral Printed Square Neck A-Line Dress', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011504977-Black-Black-1000011504977_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011504977-Black-Black-1000011504977_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011504977-Black-Black-1000011504977_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011504977-Black-Black-1000011504977_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011504977-Black-Black-1000011504977_06-2100.jpg', 1349, 1700, 4);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('GINGER Women Solid Skater Dress with Printed Top', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010806704-Black-Black-1000010806704_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010806704-Black-Black-1000010806704_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010806704-Black-Black-1000010806704_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010806704-Black-Black-1000010806704_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010806704-Black-Black-1000010806704_06-2100.jpg', 1189, 2000, 4),
('GINGER Women Striped Jumpsuit', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010443583-White-OffWhite-1000010443583_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010443583-White-OffWhite-1000010443583_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010443583-White-OffWhite-1000010443583_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010443583-White-OffWhite-1000010443583_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010443583-White-OffWhite-1000010443583_06-2100.jpg', 909, 1200, 4);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES
(
  'GINGER Women Embellished Bodycon Dress',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010806597-Silver-Silver-1000010806597_01-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010806597-Silver-Silver-1000010806597_02-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010806597-Silver-Silver-1000010806597_03-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010806597-Silver-Silver-1000010806597_04-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010806597-Silver-Silver-1000010806597_06-2100.jpg',
  1189,
  1900,
  4
);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES
(
  'CODE Women Floral Printed Round Neck A-Line Dress',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011721752-Black-Black-1000011721752_01-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011721752-Black-Black-1000011721752_02-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011721752-Black-Black-1000011721752_03-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011721752-Black-Black-1000011721752_04-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011721752-Black-Black-1000011721752_06-2100.jpg',
  1979,
  2500,
  4
);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('CODE Women Striped Jumpsuit with Waist Tie-Up', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010844447-Purple-Lavender-1000010844447_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010844447-Purple-Lavender-1000010844447_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010844447-Purple-Lavender-1000010844447_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010844447-Purple-Lavender-1000010844447_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010844447-Purple-Lavender-1000010844447_06-2100.jpg', 1749, 2000, 4),
       ('GINGER Women Sequin Embellished Bodycon Dress', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011263441-Silver-Silver-1000011263441_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011263441-Silver-Silver-1000011263441_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011263441-Silver-Silver-1000011263441_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011263441-Silver-Silver-1000011263441_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011263441-Silver-Silver-1000011263441_06-2100.jpg', 1399, 2000, 4);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('CODE Women Printed A-Line Midi Dress', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009839905-Black-Black-1000009839905_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009839905-Black-Black-1000009839905_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009839905-Black-Black-1000009839905_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009839905-Black-Black-1000009839905_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009839905-Black-Black-1000009839905_06-2100.jpg', 1119, 1700, 4),
       ('GINGER Women Printed Sleeveless Jumpsuit', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011242927-Purple-Lilac-1000011242927_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011242927-Purple-Lilac-1000011242927_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011242927-Purple-Lilac-1000011242927_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011242927-Purple-Lilac-1000011242927_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011242927-Purple-Lilac-1000011242927_05-2100.jpg', 1399, 1800, 4);


INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('PUMA SPORT Men Printed Super Slim Fit Casual Shirt', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011511199-White-White-1000011511199_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011511199-White-White-1000011511199_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011511199-White-White-1000011511199_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011511199-White-White-1000011511199_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011511199-White-White-1000011511199_06-2100.jpg', 1324, 1800, 5),
       ('BOSSINI Men Printed Slim Casual Shirt', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011365455-White-White-1000011365455_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011365455-White-White-1000011365455_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011365455-White-White-1000011365455_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011365455-White-White-1000011365455_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011365455-White-White-1000011365455_06-2100.jpg', 899, 1000, 5);


INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('FAME FOREVER Men Checked Slim Fit Casual Shirt', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011057198-Blue-Blue-1000011057198_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011057198-Blue-Blue-1000011057198_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011057198-Blue-Blue-1000011057198_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011057198-Blue-Blue-1000011057198_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011057198-Blue-Blue-1000011057198_06-2100.jpg', 779, 1000, 5),
       ('BOSSINI Men Checked Spread Collar Casual Shirt', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011146281-Red-Red-1000011146281_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011146281-Red-Red-1000011146281_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011146281-Red-Red-1000011146281_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011146281-Red-Red-1000011146281_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011146281-Red-Red-1000011146281_06-2100.jpg', 909, 1200, 5);


INSERT INTO product (title, image, img1, img2, img3, img4, actualPrice, categoryId, price)
VALUES ('BOSSINI Men Solid Full Sleeves Regular Fit Casual Shirt', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010920934-Pink-Pink-1000010920934_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010920934-Pink-Pink-1000010920934_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010920934-Pink-Pink-1000010920934_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010920934-Pink-Pink-1000010920934_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010920934-Pink-Pink-1000010920934_06-2100.jpg', 1500, 5, 1049),
       ('LP SPORT Men Printed Super Slim Casual Shirt', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011511179-Blue-LightBlue-1000011511179_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011511179-Blue-LightBlue-1000011511179_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011511179-Blue-LightBlue-1000011511179_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011511179-Blue-LightBlue-1000011511179_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011511179-Blue-LightBlue-1000011511179_06-2100.jpg', 2000, 5, 1324);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES
(
  'PEPE JEANS Men Printed Casual Shirt',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011280857-Black-Black-1000011280857_01-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011280857-Black-Black-1000011280857_02-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011280857-Black-Black-1000011280857_03-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011280857-Black-Black-1000011280857_04-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011280857-Black-Black-1000011280857_06-2100.jpg',
  1299,
  1800,
  5
),
(
  'BOSSINI Men Checked Casual Shirt',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010483189-Red-Red-1000010483189_01-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010483189-Red-Red-1000010483189_02-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010483189-Red-Red-1000010483189_03-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010483189-Red-Red-1000010483189_04-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010483189-Red-Red-1000010483189_06-2100.jpg',
  540,
  900,
  5
);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('FAME FOREVER Men Striped Slim Fit Casual Shirt', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011148267-Pink-Pink-1000011148267_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011148267-Pink-Pink-1000011148267_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011148267-Pink-Pink-1000011148267_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011148267-Pink-Pink-1000011148267_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011148267-Pink-Pink-1000011148267_06-2100.jpg', 1049, 2000, 5),
       ('FORCA Men Solid Full Sleeves Hooded Shirt', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010919434-Black-Black-1000010919434_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010919434-Black-Black-1000010919434_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010919434-Black-Black-1000010919434_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010919434-Black-Black-1000010919434_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010919434-Black-Black-1000010919434_06-2100.jpg', 1199, 1900, 5);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('FORCA Men Checked Regular Fit Casual Shirt', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011146193-Black-Black-1000011146193_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011146193-Black-Black-1000011146193_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011146193-Black-Black-1000011146193_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011146193-Black-Black-1000011146193_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011146193-Black-Black-1000011146193_06-2100.jpg', 479, 700, 5),
       ('LP SPORT Men Printed Super Slim Casual Shirt', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011511174-Red-Red-1000011511174_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011511174-Red-Red-1000011511174_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011511174-Red-Red-1000011511174_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011511174-Red-Red-1000011511174_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011511174-Red-Red-1000011511174_06-2100.jpg', 1324, 2000, 5);

INSERT INTO product (title, image, img1, img2, img3, img4, actualPrice, categoryId, price)
VALUES ('PEPE JEANS Men Checked Regular Fit Casual Shirt', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010684886-Blue-Royalblue-1000010684886_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010684886-Blue-Royalblue-1000010684886_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010684886-Blue-Royalblue-1000010684886_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010684886-Blue-Royalblue-1000010684886_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010684886-Blue-Royalblue-1000010684886_06-2100.jpg', 2000, 5, 1199),
       ('BOSSINI Men Checked Slim Casual Shirt', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011031588-Yellow-Yellow-1000011031588_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011031588-Yellow-Yellow-1000011031588_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011031588-Yellow-Yellow-1000011031588_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011031588-Yellow-Yellow-1000011031588_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011031588-Yellow-Yellow-1000011031588_06-2100.jpg', 1000, 5, 909);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES
  ('FAME FOREVER Men Checked Slim Fit Casual Shirt', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011148311-Blue-LightBlue-1000011148311_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011148311-Blue-LightBlue-1000011148311_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011148311-Blue-LightBlue-1000011148311_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011148311-Blue-LightBlue-1000011148311_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011148311-Blue-LightBlue-1000011148311_06-2100.jpg', 1299, 1500, 5),
  ('BOSSINI Men Checked Slim Fit Reversible Casual Shirt', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010438155-Yellow-Yellow-1000010438155_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010438155-Yellow-Yellow-1000010438155_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010438155-Yellow-Yellow-1000010438155_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010438155-Yellow-Yellow-1000010438155_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010438155-Yellow-Yellow-1000010438155_07-2100.jpg', 1399, 1700, 5);


  INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES (
  'FAME FOREVER Men Checked Slim Fit Casual Shirt',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011178360-Red-Red-1000011178360_01-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011178360-Red-Red-1000011178360_02-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011178360-Red-Red-1000011178360_03-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011178360-Red-Red-1000011178360_04-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011178360-Red-Red-1000011178360_06-2100.jpg',
  1049,
  1800,
  5
);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES (
  'FORCA Men Checked Casual Shirt',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011259504-Blue-Navy-1000011259504_01-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011259504-Blue-Navy-1000011259504_02-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011259504-Blue-Navy-1000011259504_03-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011259504-Blue-Navy-1000011259504_04-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011259504-Blue-Navy-1000011259504_06-2100.jpg',
  1274,
  2000,
  5
);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('LP SPORT Men Striped Slim Fit Casual Shirt', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011291451-Green-DarkGreen-1000011291451_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011291451-Green-DarkGreen-1000011291451_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011291451-Green-DarkGreen-1000011291451_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011291451-Green-DarkGreen-1000011291451_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011291451-Green-DarkGreen-1000011291451_06-2100.jpg', 1429, 1900, 5);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('FAME FOREVER Men Solid Slim Casual Shirt', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010651455-Red-Red-1000010651455_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010651455-Red-Red-1000010651455_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010651455-Red-Red-1000010651455_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010651455-Red-Red-1000010651455_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010651455-Red-Red-1000010651455_06-2100.jpg', 899, 1000, 5);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('FORCA Men Stonewashed Skinny Fit Jeans',
        'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010919278-Blue-1000010919278_01-2100.jpg',
        'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010919278-Blue-1000010919278_02-2100.jpg',
        'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010919278-Blue-1000010919278_03-2100.jpg',
        'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010919278-Blue-1000010919278_04-2100.jpg',
        'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010919278-Blue-1000010919278_07-2100.jpg',
        1199, 2000, 7);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('BOSSINI Men Stonewashed Skinny Fit Jeans',
        'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011031472-Blue-LightBlue-1000011031472_01-2100.jpg',
        'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011031472-Blue-LightBlue-1000011031472_02-2100.jpg',
        'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011031472-Blue-LightBlue-1000011031472_03-2100.jpg',
        'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011031472-Blue-LightBlue-1000011031472_04-2100.jpg',
        'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011031472-Blue-LightBlue-1000011031472_07-2100.jpg',
        2099, 2400, 7);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES 
(
    'BOSSINI Men Solid Skinny Fit Jeans',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010920759-Blue-DarkBlue-1000010920759_01-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010920759-Blue-DarkBlue-1000010920759_02-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010920759-Blue-DarkBlue-1000010920759_03-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010920759-Blue-DarkBlue-1000010920759_04-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010920759-Blue-DarkBlue-1000010920759_07-2100.jpg',
    1379,
    1500,
    7
);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('BOSSINI Men Light Washed Slim Tapered Fit Jeans', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011031511-Blue-LightBlue-1000011031511_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011031511-Blue-LightBlue-1000011031511_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011031511-Blue-LightBlue-1000011031511_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011031511-Blue-LightBlue-1000011031511_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011031511-Blue-LightBlue-1000011031511_07-2100.jpg', 1259, 2000, 7);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('BOSSINI Men Stonewashed Slim Tapered Fit Jeans', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011054599-Grey-Grey-1000011054599_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011054599-Grey-Grey-1000011054599_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011054599-Grey-Grey-1000011054599_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011054599-Grey-Grey-1000011054599_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011054599-Grey-Grey-1000011054599_07-2100.jpg', 1189, 2000, 7);


INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('FORCA Men Stonewashed Slim Straight Fit Jeans', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010953869-Blue-LightBlue-1000010953869_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010953869-Blue-LightBlue-1000010953869_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010953869-Blue-LightBlue-1000010953869_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010953869-Blue-LightBlue-1000010953869_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010953869-Blue-LightBlue-1000010953869_07-2100.jpg', 2299, 2500, 7);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('BOSSINI Men Solid Skinny Fit Jeans', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010748900-Blue-Indigo-1000010748900_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010748900-Blue-Indigo-1000010748900_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010748900-Blue-Indigo-1000010748900_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010748900-Blue-Indigo-1000010748900_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010748900-Blue-Indigo-1000010748900_07-2100.jpg', 1199, 1500, 7);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES 
(
  'DENIMIZE Men Solid Skinny Fit Jeans',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010451301-White-White-1000010451301_01-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010451301-White-White-1000010451301_02-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010451301-White-White-1000010451301_03-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010451301-White-White-1000010451301_05-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010451301-White-White-1000010451301_07-2100.jpg',
  1019,
  1500,
  7
);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES 
(
  'DENIMIZE Men Solid Dark Jeans',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010583761-Blue-DarkBlue-1000010583761_01-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010583761-Blue-DarkBlue-1000010583761_02-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010583761-Blue-DarkBlue-1000010583761_03-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010583761-Blue-DarkBlue-1000010583761_04-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010583761-Blue-DarkBlue-1000010583761_07-2100.jpg',
  1599,
  1900,
  7
);


INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('FORCA Dark Wash Five Pocket Jeans', 'https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000005265622-Fcr-Skinny-Blk-Black-Black-1000005265622_01-294.jpg', 'https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000005265622-Fcr-Skinny-Blk-Black-Black-1000005265622_02-294.jpg', 'https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000005265622-Fcr-Skinny-Blk-Black-Black-1000005265622_03-294.jpg', 'https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000005265622-Fcr-Skinny-Blk-Black-Black-1000005265622_04-294.jpg', 'https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000005265622-Fcr-Skinny-Blk-Black-Black-1000005265622_05-294.jpg', 1274, 1700, 7);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('DENIMIZE Men Stonewashed Skinny Fit Jeans', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577632-Blue-MidBlue-1000011577632_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577632-Blue-MidBlue-1000011577632_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577632-Blue-MidBlue-1000011577632_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577632-Blue-MidBlue-1000011577632_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577632-Blue-MidBlue-1000011577632_07-2100.jpg', 1444, 1800, 7);


INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES
  (
    'DENIMIZE Men Stonewashed Slim Fit Jeans',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011169167-Grey-Grey-1000011169167_01-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011169167-Grey-Grey-1000011169167_02-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011169167-Grey-Grey-1000011169167_03-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011169167-Grey-Grey-1000011169167_04-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011169167-Grey-Grey-1000011169167_07-2100.jpg',
    1299,
    1800,
    7
  ),
  (
    'WRANGLER Men Washed Slim Tapered Fit Jeans',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010319656-Blue-Blue-1000010319656_01-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010319656-Blue-Blue-1000010319656_02-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010319656-Blue-Blue-1000010319656_03-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010319656-Blue-Blue-1000010319656_05-2100.jpg',
    'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010319656-Blue-Blue-1000010319656_04-2100.jpg',
    2309,
    3000,
    7
  );



  INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('LEE Men Stonewashed Slim Straight Jeans', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011309528-Black-Black-1000011309528_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011309528-Black-Black-1000011309528_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011309528-Black-Black-1000011309528_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011309528-Black-Black-1000011309528_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011309528-Black-Black-1000011309528_07-2100.jpg', 2279, 3000, 7);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('FORCA Men Slim Tapered Dark Jeans', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577801-Black-Black-1000011577801_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577801-Black-Black-1000011577801_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577801-Black-Black-1000011577801_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577801-Black-Black-1000011577801_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577801-Black-Black-1000011577801_07-2100.jpg', 2124, 2800, 7);


INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('LEE Men Solid Slim Straight Jeans', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010884967-Blue-DarkStone-1000010884967_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010884967-Blue-DarkStone-1000010884967_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010884967-Blue-DarkStone-1000010884967_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010884967-Blue-DarkStone-1000010884967_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010884967-Blue-DarkStone-1000010884967_07-2100.jpg', 2379, 2999, 7);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('FLYING MACHINE Men Stonewashed Skinny Fit Jeans', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011304346-Blue-DarkStone-1000011304346_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011304346-Blue-DarkStone-1000011304346_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011304346-Blue-DarkStone-1000011304346_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011304346-Blue-DarkStone-1000011304346_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011304346-Blue-DarkStone-1000011304346_07-2100.jpg', 1819, 2000, 7);


INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES ('FORCA Men Solid Slim Fit Jeans', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577527-Green-Olive-1000011577527_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577527-Green-Olive-1000011577527_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577527-Green-Olive-1000011577527_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577527-Green-Olive-1000011577527_06-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577527-Green-Olive-1000011577527_03-2100.jpg', 2294, 2700, 7),
       ('BOSSINI Men Faded Slim-Fit Jeans', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011442191-Blue-MidBlue-1000011442191_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011442191-Blue-MidBlue-1000011442191_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011442191-Blue-MidBlue-1000011442191_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011442191-Blue-MidBlue-1000011442191_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011442191-Blue-MidBlue-1000011442191_07-2100.jpg', 1784, 2000, 7);


INSERT INTO product (title, image, img1, img2, img3, img4, actualPrice, categoryId, price)
VALUES ('LEE Men Solid Slim Straight Jeans', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011236990-Blue-SuperStone-1000011236990_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011236990-Blue-SuperStone-1000011236990_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011236990-Blue-SuperStone-1000011236990_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011236990-Blue-SuperStone-1000011236990_05-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011236990-Blue-SuperStone-1000011236990_07-2100.jpg', 1500, 7, 2379),
       ('U.S. POLO ASSN. Men Light Faded Skinny Fit Jeans', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011265504-Blue-MidStone-1000011265504_01-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011265504-Blue-MidStone-1000011265504_02-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011265504-Blue-MidStone-1000011265504_03-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011265504-Blue-MidStone-1000011265504_04-2100.jpg', 'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011265504-Blue-MidStone-1000011265504_07-2100.jpg', 3000, 7, 2519);

INSERT INTO product (title, image, img1, img2, img3, img4, price, actualPrice, categoryId)
VALUES (
  'FORCA Men Distressed Skinny Fit Jeans',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577650-Blue-LightBlue-1000011577650_01-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577650-Blue-LightBlue-1000011577650_02-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577650-Blue-LightBlue-1000011577650_03-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577650-Blue-LightBlue-1000011577650_04-2100.jpg',
  'https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011577650-Blue-LightBlue-1000011577650_07-2100.jpg',
  2124,
  2700,
  7
);




