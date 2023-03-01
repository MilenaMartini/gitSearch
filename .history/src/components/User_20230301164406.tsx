import { UserProps } from "../types/user"
import{MdLocationPin} from "react-icons/md"
import classes from "./Search.module.css";
import {Link} from 'react-router-dom';


const User = ({
  avatar_url,
        html_url,
        bio,
        login,
        location,
        followers,
        following,
        created_at
}: UserProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
      <p className={classes.location}>
        <MdLocationPin />
        <span>{location}</span>
      </p>
      )}
      <div className={classes.stats}>
        <div>
        <p>Seguidores:</p>
          <p className={classes.number}>{followers}</p>
        </div>
        <div>
          <p>descrição:</p>
          <p>{bio}</p>
        </div>
        <div>
          <p>data Criação:</p>
          <p>{created_at}</p>
        </div>
        <div className={classes.red}>
             <Link to={html_url}>Ver Perfil</Link>
        </div>
      </div>
    </div>
  );
};

export default User