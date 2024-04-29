DROP TABLE IF EXISTS "bikes";

CREATE TABLE "bikes" (
  "id" SERIAL PRIMARY KEY,
  "manufacturer" VARCHAR(100) NOT NULL,
  "model" VARCHAR(100),
  "year" INTEGER,
  "color" VARCHAR(50)
);

INSERT INTO "bikes"
  ("manufacturer", "model", "year", "color")
  VALUES
  ('Surly', 'Steamroller', 2022, 'Banana Candy Yellow'),
  ('Gitane', 'Tour de France', 1972, 'French Racing Blue'),
  ('Specialized', 'Stumpjumper', 1993, 'Avocado Green'),
  ('Bianchi', 'Specialissima', 2022, 'Celeste'),
  ('All-City', 'Nature Cross', 2022, 'Pink Lemonade'),
  ('Canyon', 'Grail', 2022, 'Forest'),
  ('Eddy Merckx', 'Corsa Extra', 1991, 'Dark Blue');
