import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className="friend-list">
        {friends.map(elem => (
          <FriendListItem {...elem} key={elem.id} />
        ))}
      </ul>
    </div>
  );
};
