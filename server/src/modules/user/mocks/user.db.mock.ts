import { getConnection } from 'typeorm';
import { User } from '../models/user.entity';
import { userMock } from './user.mock';

export const userDbMock = async () => await getConnection()
    .createQueryBuilder()
    .insert()
    .into(User)
    .values([{...userMock, password: 'johndoe'}])
    .execute();
