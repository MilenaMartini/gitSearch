import { UserProps } from "../types/user"
import{MdLocationPin} from "react-icons/md"
import classes from "./Search.module.css";
import {Link} from 'react-router-dom';

let date_create;
let date_now;


const User = ({
  avatar_url,
        html_url,
        bio,
        login,
        location,
        followers,
        created_at
}: UserProps) => {
  date_create = new Date(created_at);
  date_now = new Date(Date.now());
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
          <p>{date_create.getFullYear() - date_now}</p>
        </div>
        <div className={classes.red}>
             <Link to={html_url}>Ver Perfil</Link>
        </div>
      </div>
    </div>
  );
};

export default User