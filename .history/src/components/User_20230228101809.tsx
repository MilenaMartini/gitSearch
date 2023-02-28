import { UserProps } from "../types/user"
import{MdLocationPin} from "react-icons/md"
import classes from "./Search.module.css";
import {Link} from 'react-router-dom'

const User = ({
  avatar_url,
        url, 
        bio,
        login,
        location,
        followers,
        created_at
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
          <p><link rel="stylesheet" href="url" />:Link Perfil</p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>Ver Mais</Link>
    </div>
  );
};

export default User