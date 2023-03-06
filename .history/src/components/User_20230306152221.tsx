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

        <p className={classes.title}>Seguidores:</p>
          <p>{followers}</p>
          <br></br>
        </div>
        <div>
          <p className={classes.title}>Descrição:</p>
          <p>{bio}</p>
          <br></br>
        </div>
        <div>
          <p className={classes.title}>Tempo de uso:</p>
          <p className={classes.title}>{date_now.getFullYear() - date_create.getFullYear()} anos, {date_create.getMonth() - date_now.getMonth()} meses </p>
          <br></br>
        </div>

        <div className={classes.button}>
             <Link to={html_url}>Ver Perfil</Link>
        </div>
      </div>
    </div>
  );
};

export default User