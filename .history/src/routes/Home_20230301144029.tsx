import { UserProps } from "../types/user";

import Search from "../components/Search";
import User from '../components/User';
import Error from "../components/Error";


import { useState } from "react";

const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null);
    const [error, setError] = useState(false);

    const loadUser = async(userName: string) => {

      const res = await fetch(`https://api.github.com/users/${userName}`)

      const data = await res.json();


      if(res.status === 404) {

      }

      const {avatar_url, html_url, bio, login, location, followers, created_at} = data

      const userData: UserProps = {
        avatar_url,
        html_url,
        bio,
        login,
        location,
        followers,
        created_at
      };

      setUser(userData);
    };
  return (
    <div>
      <Search loadUser={loadUser}/>
      {user && <User {...user} />}
    </div>
  );
};

export default Home;