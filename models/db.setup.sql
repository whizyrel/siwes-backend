CREATE USER ashipa_dev WITH LOGIN CREATEDB ENCRYPTED PASSWORD 'Anything5000';

-- create db
CREATE DATABASE ashipa_mms_v2 WITH OWNER=ashipa_dev;

\c ashipa_mms_v2 ashipa_dev

-- grant privileges
GRANT ALL PRIVILEGES ON DATABASE ashipa_mms_v2 TO ashipa_dev;