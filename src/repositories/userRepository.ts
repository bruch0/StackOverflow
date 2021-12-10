import connection from '../database/database';

import { User } from '../interfaces/userInterface';

const createUser = async (userInfo: User) => {
  const user = await connection.query(
    'INSERT INTO users (name, class_id, answers, total_score) VALUES ($1, $2, 0, 0) returning id',
    [userInfo.name, userInfo.classId]
  );

  return user.rows[0].id;
};

const getUsernameById = async (userId: number) => {
  const user = await connection.query('SELECT * FROM users WHERE id = $1', [
    userId,
  ]);

  return user.rows[0].name;
};

const getAllUsers = async () => {
  const users = await connection.query('SELECT * FROM users');

  return users.rows;
};

export { createUser, getUsernameById, getAllUsers };
