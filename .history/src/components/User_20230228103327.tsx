import { UserProps } from "../types/user"
import{MdLocationPin} from "react-icons/md"
import classes from "./Search.module.css";
import {Link} from 'react-router-dom'

const User = ({
  avatar_url,
        html_url, 
        bio,
        login,
        location,
        followers,
        created_at,
        public_repos
}: UserProps) => {
  return (
    <div className={classes.user}>
      
      <img className={classes.image} src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (<p>
        <MdLocationPin />
        <span>{location}</span>
      </p>
      )}
      <div>
        <div>
          <p>Seguidores:</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>descrição:</p>
          <p>{bio}</p>
        </div>
        <div>
          <p>data Criação:</p>
          <p>{created_at}</p>
        </div>
        <div>
        <Link to={html_url}>Ver Mais</Link>
        </div>
      </div>
    </div>
  );
};

export default User