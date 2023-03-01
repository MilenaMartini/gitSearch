import { UserProps } from "../types/user";

import Search from "../components/Search";
import User from '../components/User';
import Error from "../components/Error";


import { useState } from "react";

const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null);
    const [error, setError] = useState(false);

    const loadUser = async(userName: string) => {
      setError(false);
      setUser(null);

      const res = await fetch(`https://api.github.com/users/${userName}`)

      const data = await res.json();


      if(res.status === 404) {
        setError(true);
        return;

      }

      const {avatar_url,
             html_url,
             bio,
             login,
             location,
             followers,
             created_at
            } = data

      const a = new Date(created_at).toLocaleString('pt-BR').toString()
console.log(a)
      const userData: UserProps = {
        avatar_url,
        html_url,
        bio,
        login,
        location,
        followers,
        a
      };

      setUser(userData);
    };
  return (
    <div>
      <Search loadUser={loadUser}/>
      {user && <User {...user} />}
      {error && <Error/>}
    </div>
  );
};

export default Home;