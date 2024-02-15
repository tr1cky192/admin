
import React, { useState } from 'react';
import { Wrapper} from './Users.styled';
import { StatisticsHeader } from '../StatisticsHeader/StatisticsHeader';
import {UsersList} from "./UsersList/UsersList"


type UsersProps = {
  isShowUsersPage: boolean; 
};
export const Users: React.FC<UsersProps> = ({ isShowUsersPage }) => {
  const [isShowUsers] = useState <number | null> (null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  }
  return (
    <Wrapper padding={typeof isShowUsers === 'number'}>
      {isShowUsersPage ? (
        <div>
          <StatisticsHeader type="Users" isShowUsers={isShowUsers} />
          <UsersList isShowUsers={isShowUsers} searchQuery={searchQuery} onSearch={handleSearch}/>
        </div>
      ) : null}
    </Wrapper>
  );
}

export default Users;

