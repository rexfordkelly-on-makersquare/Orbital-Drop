PRAGMA foreign_keys = ON;

CREATE TABLE users (
	id VARCHAR(30) PRIMARY KEY,
	status VARCHAR(10)
);


CREATE TABLE join_user_rooms(
	id PRIMARY KEY ASC,
	room_id INTEGER,
	user_id INTEGER,

	FOREIGN KEY(user_id) REFERENCES user(id),
	FOREIGN KEY(room_id) REFERENCES room(id)
);

CREATE TABLE black_list(
	id PRIMARY KEY ASC,
	user VARCHAR(30)
);

CREATE TABLE join_black_list(
	id PRIMARY KEY ASC,
	user_id INTEGER,
	blocked_user_id INTEGER,

	FOREIGN KEY(user_id) REFERENCES user(id),
	FOREIGN KEY(blocked_user_id) REFERENCES user(id)
);

CREATE TABLE white_list(
	id PRIMARY KEY ASC,
	user VARCHAR(30)
);

CREATE TABLE join_white_list(
	id PRIMARY KEY ASC,
	user_id INTEGER,
	approved_user_id INTEGER,

	FOREIGN KEY(user_id) REFERENCES user(id),
	FOREIGN KEY(approved_user_id) REFERENCES user(id)
);

CREATE TABLE rooms (
	id PRIMARY KEY ASC,
	name VARCHAR(20)
);

CREATE TABLE message(
	id PRIMARY KEY ASC,
	content VARCHAR(144)
);

CREATE TABLE join_rooms_messages(
	id PRIMARY KEY ASC,
	room_id INTEGER,
	message_id INTEGER,

	FOREIGN KEY(room_id) REFERENCES room(id),
	FOREIGN KEY(message_id) REFERENCES message(id)
);


