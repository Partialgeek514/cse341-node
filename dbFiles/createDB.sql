CREATE TABLE twitter_accounts
(ta_id SERIAL PRIMARY KEY,
ta_url_name VARCHAR(64) NOT NULL,
ta_screen_name VARCHAR(64) NOT NULL,
ta_type VARCHAR(16),
ta_last_updated_date DATE NOT NULL
);

INSERT INTO twitter_accounts (ta_url_name, ta_screen_name, ta_last_updated_date)
VALUES ('NelsonRussellM', 'Russell M. Nelson', statement_timestamp());

INSERT INTO twitter_accounts (ta_url_name, ta_screen_name, ta_last_updated_date)
VALUES ('OaksDallinH', 'Dallin H. Oaks', statement_timestamp());

INSERT INTO twitter_accounts (ta_url_name, ta_screen_name, ta_last_updated_date)
VALUES ('EyringHB', 'Henry B. Eyring', statement_timestamp());

INSERT INTO twitter_accounts (ta_url_name, ta_screen_name, ta_last_updated_date)
VALUES ('Ch_JesusChrist', 'The Church of Jesus Christ of Latter-day Saints', statement_timestamp());

INSERT INTO twitter_accounts (ta_url_name, ta_screen_name, ta_last_updated_date)
VALUES ('the_churchnews', 'Church News', statement_timestamp());