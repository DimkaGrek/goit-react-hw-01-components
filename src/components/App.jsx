import { Profile } from './Profile/Profile';

import user from 'data/user.json';
import data from 'data/data.json';

export const App = () => {
  return (
    <div>
      <Profile {...user} />
    </div>
  );
};
