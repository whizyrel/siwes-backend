\c ashipa-mms_v2

-- Consider Indices
-- turning all logs (transaction) on
-- User Identification
-- Apply constraint on phone_number || email if either one is null
-- users are not to be deleted: determine their acitivity status from session history
-- consider composite uniqueness
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    phone_number TEXT NULL,
    email TEXT NULL,
    password TEXT NOT NULL,
    time DATETIME NOT NULL DEFAULT NOW(),
);

-- POSIX regular expression
-- TODO email & password check constraint
-- ALTER TABLE users ADD CONSTRAINT valid_email CHECK (email ~* '');
-- ALTER TABLE IF EXISTS users ADD CONSTRAINT valid_password CHECK (password ~* '');
ALTER TABLE users ADD CONSTRAINT unique_user_details UNIQUE(phone_number, email);
CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS users_indices ON users (lower(id), phone_number, lower(email), password, time) NULLS LAST;

CREATE TABLE IF NOT EXISTS password_history (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    user VARCHAR(10) REFERENCES users NOT NULL ON UPDATE CASCADE ON DELETE RESTRICT,
    password TEXT NOT NULL,
    time DATETIME NOT NULL DEFAULT NOW()
);

-- confirm password has not bee used in the space of 2 months
-- confirm password is not commonly used
ALTER TABLE password_history ADD CONSTRAINT unique_password_history UNIQUE(user, password, time);
CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS password_history_indices ON password_history (lower(id), lower(user), password, time) NULLS LAST;

CREATE TABLE IF NOT EXISTS companies (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    status BOOLEAN DEFAULT FALSE NOT NULL,
    time DATETIME NOT NULL DEFAULT NOW()
);

-- Can always get coords from geolocation libraries
-- What if their address changes?
ALTER TABLE companies ADD CONSTRAINT unique_companies UNIQUE(name, address);
CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS companies_indices ON companies (lower(id), lower(name)) NULLS LAST;

CREATE TABLE IF NOT EXISTS user_companies (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    user VARCHAR(10) REFERENCES users NOT NULL ON UPDATE CASCADE ON DELETE RESTRICT,
    companies VARCHAR(10) REFERENCES companies NOT NULL ON UPDATE CASCADE ON DELETE RESTRICT,
    time DATETIME NOT NULL DEFAULT NOW()
);

ALTER TABLE companies ADD CONSTRAINT unique_user_companies UNIQUE(user, company);
CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS user_companies_indices ON user_companies (lower(id), lower(user), lower(companies)) NULLS LAST;

-- sites
-- TODO REFLECT ON ERD
CREATE TABLE IF NOT EXISTS site_statuses (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL UNIQUE,
    description TEXT NULL,
    time DATETIME NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS sites (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    coordinates POINT NULL UNIQUE DEFAULT POINT(0,0),
    -- TODO REFLECT ON ERD
    status  VARCHAR(10) NOT NULL REFERENCES site_statuses ON UPDATE CASCADE ON DELETE SET NULL,
    company VARCHAR(10) NOT NULL REFERENCES companies ON UPDATE CASCADE ON DELETE RESTRICT,
    time DATETIME NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS sites_indices ON users (lower(id), lower(name), lower(description), coordinates, lower(company), time) NULLS LAST;

-- all kinds of users with different privileges like vending...
CREATE TABLE IF NOT EXISTS user_sites (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    user VARCHAR(10) NOT NULL REFERENCES users ON UPDATE CASCADE ON DELETE CASCADE,
    site VARCHAR(10) NOT NULL REFERENCES sites ON UPDATE CASCADE ON DELETE RESTRICT,
    time DATETIME NOT NULL DEFAULT NOW()
);

ALTER TABLE sites ADD CONSTRAINT unique_user_sites UNIQUE(user, site);
CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS user_sites_indices ON user_sites (lower(id), lower(user), lower(sites)) NULLS LAST;

-- user privileges
CREATE TABLE IF NOT EXISTS privileges (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    status BOOLEAN DEFAULT FALSE NOT NULL,
    author VARCHAR(10) NOT NULL REFERENCES users ON UPDATE CASCADE ON DELETE SET NULL, 
    company VARCHAR(10) NOT NULL REFERENCES companies ON UPDATE CASCADE ON DELETE RESTRICT, 
    time DATETIME NOT NULL DEFAULT NOW()
);

ALTER TABLE sites ADD CONSTRAINT unique_privileges UNIQUE(name, company);
CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS privileges_indices ON privileges (lower(id), lower(name), lower(author), lower(company)) NULLS LAST;

-- privilege assigned to a user
CREATE TABLE IF NOT EXISTS user_privileges (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    user VARCHAR(10) NOT NULL REFERENCES users ON UPDATE CASCADE ON DELETE CASCADE, 
    privilege VARCHAR(10) NOT NULL REFERENCES privileges ON UPDATE CASCADE ON DELETE CASCADE, 
    status BOOLEAN DEFAULT FALSE NOT NULL,
    time DATETIME NOT NULL DEFAULT NOW()
);

ALTER TABLE sites ADD CONSTRAINT unique_user_privileges UNIQUE(user, privilege);
CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS user_privileges_indices ON user_privileges (lower(id), lower(user), lower(privilege)) NULLS LAST;

-- payments
CREATE TABLE IF NOT EXISTS payment_types (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    amount DECIMAL NOT NULL,
    tokenizable BOOLEAN DEFAULT FALSE NOT NULL,
    -- user that created/added the payment type
    user VARCHAR(10) NOT NULL REFERENCES users ON UPDATE CASCADE ON DELETE SET NULL,
    company VARCHAR(10) NOT NULL REFERENCES companies ON UPDATE CASCADE ON DELETE RESTRICT,
    time DATETIME NOT NULL DEFAULT NOW()
);

ALTER TABLE sites ADD CONSTRAINT unique_payment_types UNIQUE(name, company);
CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS payment_types_indices ON payment_types (lower(id), lower(user), amount, time, lower(company)) NULLS LAST;

CREATE TABLE IF NOT EXISTS payments (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    type VARCHAR(10) NOT NULL REFERENCES payment_types ON UPDATE CASCADE ON DELETE SET NULL,
    user VARCHAR(10) NOT NULL REFERENCES users ON UPDATE CASCADE ON DELETE RESTRICT,
    amount DECIMAL NOT NULL,
    status TEXT NOT NULL DEFAULT 'unconfirmed',
    payment_metadata JSONB NOT NULL,
    reference TEXT NOT NULL,
    time DATETIME NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS payments_indices ON payments (lower(id), lower(type), lower(user), lower(status), amount, lower(reference)) NULLS LAST;

CREATE TABLE IF NOT EXISTS discounts (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    type VARCHAR(10) NOT NULL REFERENCES payment_types ON UPDATE CASCADE ON DELETE SET NULL,
    name TEXT NOT NULL,
    percent DECIMAL NOT NULL ADD CONSTRAINT price_check CHECK (percent >= 0),
    user VARCHAR(10) NOT NULL REFERENCES users ON UPDATE CASCADE ON DELETE RESTRICT,
    -- TODO REFLECT ON ERD
    company VARCHAR(10) NOT NULL REFERENCES companies ON UPDATE CASCADE ON DELETE RESTRICT,
    time DATETIME NOT NULL DEFAULT NOW()
);

ALTER TABLE sites ADD CONSTRAINT unique_discounts_names UNIQUE(name, company);
ALTER TABLE sites ADD CONSTRAINT unique_discounts_types UNIQUE(type, company);
-- unique combo of percent and company
CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS discounts_indices ON discounts (lower(id), lower(type), lower(name), percent, lower(user), lower(company)) NULLS LAST;

CREATE TABLE IF NOT EXISTS vats (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    type VARCHAR(10) NOT NULL REFERENCES payment_types ON UPDATE CASCADE ON DELETE SET NULL,
    percent DECIMAL NOT NUL ADD CONSTRAINT price_check CHECK (percent >= 0),
    user VARCHAR(10) NOT NULL REFERENCES users ON UPDATE CASCADE ON DELETE RESTRICT,
    -- TODO REFLECT ON ERD
    company VARCHAR(10) NOT NULL REFERENCES companies ON UPDATE CASCADE ON DELETE CASCADE,
    time DATETIME NOT NULL DEFAULT NOW()
);

ALTER TABLE sites ADD CONSTRAINT unique_vats_types UNIQUE(type, company);
CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS vats_indices ON vats (lower(id), lower(type), percent, lower(user), lower(company)) NULLS LAST;

CREATE TABLE IF NOT EXISTS enterprise_user_properties (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL UNIQUE,
    disabled BOOLEAN DEFAULT FALSE NOT NULL,
    exposed BOOLEAN DEFAULT TRUE NOT NULL,
    time DATETIME NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS enterprise_user_properties_indices ON enterprise_user_properties (lower(id), lower(name)) NULLS LAST;

CREATE TABLE IF NOT EXISTS enterprise_user_property_values (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    company VARCHAR(10) NOT NULL REFERENCES companies ON UPDATE CASCADE ON DELETE RESTRICT,
    property TEXT NOT NULL REFERENCES enterprise_user_properties ON UPDATE CASCADE ON DELETE SET NULL,
    value TEXT NOT NULL,
    time DATETIME NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS enterprise_user_property_values_indices ON enterprise_user_property_values (lower(id), lower(name), lower(company), lower(property), lower(value)) NULLS LAST;

-- billings are created every first day of the month and increased everyday
CREATE TABLE IF NOT EXISTS enterprise_billings (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    company VARCHAR(10) NOT NULL REFERENCES companies ON UPDATE CASCADE ON DELETE RESTRICT,
    bill TEXT NOT NULL,
    time DATETIME NOT NULL DEFAULT NOW()
);

-- unique combination of a company's bill at different times
ALTER TABLE sites ADD CONSTRAINT unique_enterprise_billings UNIQUE(company, bill, time);
CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS enterprise_billings_indices ON enterprise_billings (lower(id), lower(company), lower(bill), time) NULLS LAST;

CREATE TABLE IF NOT EXISTS enterprise_billing_payments (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    billings VARCHAR(10) NOT NULL REFERENCES enterprise_billings ON UPDATE CASCADE ON DELETE RESTRICT,
    payment VARCHAR(10) NOT NULL REFERENCES payments ON UPDATE CASCADE ON DELETE RESTRICT,
    time DATETIME NOT NULL DEFAULT NOW()
);

-- unique combination of payment of billings at different time is arguable
ALTER TABLE sites ADD CONSTRAINT unique_enterprise_billing_payments UNIQUE(billings, payment, time);
CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS enterprise_billing_payments_indices ON enterprise_billing_payments (lower(id), lower(billings), lower(payment), time) NULLS LAST;

-- assets
CREATE TABLE IF NOT EXISTS asset_types (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    company VARCHAR(10) NOT NULL REFERENCES companies ON UPDATE CASCADE ON DELETE RESTRICT,
    time DATETIME NOT NULL DEFAULT NOW()
);

ALTER TABLE sites ADD CONSTRAINT unique_asset_types UNIQUE(name, company);
CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS asset_types_indices ON asset_types (lower(id), lower(name), lower(company), time) NULLS LAST;

CREATE TABLE IF NOT EXISTS asset_properties (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    company VARCHAR(10) NOT NULL REFERENCES companies ON UPDATE CASCADE ON DELETE CASCADE,
    time DATETIME NOT NULL DEFAULT NOW()
);

ALTER TABLE sites ADD CONSTRAINT unique_asset_properties UNIQUE(name, company);
CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS asset_properties_indices ON asset_properties (lower(id), lower(name), lower(company), time) NULLS LAST;

CREATE TABLE IF NOT EXISTS assets (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    type VARCHAR(10) NOT NULL REFERENCES asset_types ON UPDATE CASCADE ON DELETE RESTRICT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    endpoint TEXT NOT NULL,
    time DATETIME NOT NULL DEFAULT NOW()
);

-- whatever asset type created, the name must be unique
ALTER TABLE sites ADD CONSTRAINT unique_assets UNIQUE(name, type);
CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS assets_indices ON assets (lower(id), lower(type), lower(name), lower(description), lower(endpoint), time) NULLS LAST;

CREATE TABLE IF NOT EXISTS asset_own_properties (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    asset VARCHAR(10) NOT NULL REFERENCES assets ON UPDATE CASCADE ON DELETE CASCADE,
    property VARCHAR(10) NOT NULL REFERENCES asset_properties ON UPDATE CASCADE ON DELETE CASCADE,
    value TEXT NOT NULL,
    time DATETIME NOT NULL DEFAULT NOW()
);

-- PITFALL
ALTER TABLE sites ADD CONSTRAINT unique_asset_own_properties UNIQUE(asset, property);
CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS asset_own_properties_indices ON asset_own_properties (lower(id), lower(asset), lower(property), lower(value), time) NULLS LAST;

CREATE TABLE IF NOT EXISTS owner_asset_groups (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    -- TODO REFLECT ON ERD
    user VARCHAR(10) NOT NULL REFERENCES users ON UPDATE CASCADE ON DELETE RESTRICT,
    company VARCHAR(10) NOT NULL REFERENCES companies ON UPDATE CASCADE ON DELETE RESTRICT,
    time DATETIME NOT NULL DEFAULT NOW()
);

ALTER TABLE sites ADD CONSTRAINT unique_owner_asset_groups_user UNIQUE(name, user);
ALTER TABLE sites ADD CONSTRAINT unique_owner_asset_groups_company UNIQUE(name, company);
CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS owner_asset_groups_indices ON owner_asset_groups (lower(id), lower(name), time) NULLS LAST;

CREATE TABLE IF NOT EXISTS owned_assets (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    asset VARCHAR(10) NOT NULL REFERENCES assets ON UPDATE CASCADE ON DELETE RESTRICT,
    user VARCHAR(10) NULL REFERENCES users ON UPDATE CASCADE ON DELETE RESTRICT,
    site VARCHAR(10) NULL REFERENCES sites ON UPDATE CASCADE ON DELETE RESTRICT,
    status BOOLEAN NOT NULL DEFAULT TRUE,
    time DATETIME NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS owned_assets_indices ON owned_assets (lower(id), lower(asset), lower(user), lower(site), status, time) NULLS LAST;

CREATE TABLE IF NOT EXISTS grouped_assets (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    owner VARCHAR(10) NOT NULL REFERENCES owned_assets ON UPDATE CASCADE ON DELETE CASCADE,
    group VARCHAR(10) NOT NULL REFERENCES owner_asset_groups ON UPDATE CASCADE ON DELETE CASCADE,
    time DATETIME NOT NULL DEFAULT NOW()
);

-- TODO:SUSPENDED grouped assets unique
CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS grouped_assets_indices ON grouped_assets (lower(id), lower(owner), lower(group), time) NULLS LAST;

-- assets energy profile
CREATE TABLE IF NOT EXISTS energy_information_types (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    unit TEXT NOT NULL,
    data_type TEXT NOT NULL,
    company VARCHAR(10) NOT NULL REFERENCES companies ON UPDATE CASCADE ON DELETE RESTRICT,
    time DATETIME NOT NULL DEFAULT NOW()
);

ALTER TABLE sites ADD CONSTRAINT unique_energy_information_types UNIQUE(name, unit, data_type, company);
CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS energy_information_types_indices ON energy_information_types (lower(id), lower(name), lower(unit), lower(data_type)) NULLS LAST;

CREATE TABLE IF NOT EXISTS energy_profiles (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    asset VARCHAR(10) NOT NULL REFERENCES assets ON UPDATE CASCADE ON DELETE RESTRICT,
    profile_type VARCHAR(10) NOT NULL REFERENCES energy_information_types ON UPDATE CASCADE ON DELETE SET NULL,
    data TEXT NOT NULL,
    time DATETIME NOT NULL DEFAULT NOW() 
);

CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS energy_profiles_indices ON energy_profiles (lower(id), lower(asset), lower(profile_type), lower(data), time) NULLS LAST;

-- settings
CREATE TABLE IF NOT EXISTS settings_value_types (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL UNIQUE,
    -- can have multiple values
    multiple BOOLEAN NOT NULL DEFAULT FALSE,
    time DATETIME NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS settings_value_types_indices ON settings_value_types (lower(id), lower(name), time) NULLS LAST;

CREATE TABLE IF NOT EXISTS settings (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    company VARCHAR(10) NOT NULL REFERENCES companies ON UPDATE CASCADE ON DELETE RESTRICT,
    type VARCHAR(10) NOT NULL REFERENCES settings_value_types ON UPDATE CASCADE ON DELETE SET NULL,
    time DATETIME NOT NULL DEFAULT NOW()
);

ALTER TABLE sites ADD CONSTRAINT unique_settings UNIQUE(name, company);
CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS settings_indices ON settings (lower(id), lower(name), lower(company), lower(type), time) NULLS LAST;

CREATE TABLE IF NOT EXISTS settings_values (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    setting VARCHAR(10) NOT NULL REFERENCES settings ON UPDATE CASCADE ON DELETE CASCADE,
    value TEXT NOT NULL,
    time DATETIME NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS settings_values_indices ON settings_values (lower(id), lower(settings), lower(value), time) NULLS LAST;

CREATE TABLE IF NOT EXISTS settings_options (
    id VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    setting VARCHAR(10) NOT NULL REFERENCES settings ON UPDATE CASCADE ON DELETE CASCADE,
    value TEXT NOT NULL,
    time DATETIME NOT NULL DEFAULT NOW()
);

ALTER TABLE sites ADD CONSTRAINT unique_settings_options UNIQUE(setting, value);
CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS settings_options_indices ON settings_options (lower(id), lower(setting), lower(value), time) NULLS LAST;