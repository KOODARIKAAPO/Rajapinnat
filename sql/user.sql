-- User-taulu Opintorekisteri-kantaan (arviointi).
-- Salasana tallennetaan bcrypt-tiivisteenä (60 merkkiä), ei koskaan selväkielisenä.
USE arviointi;

CREATE TABLE IF NOT EXISTS user (
    username VARCHAR(20) PRIMARY KEY,
    fname VARCHAR(20),
    password VARCHAR(255)
) ENGINE=InnoDB;
