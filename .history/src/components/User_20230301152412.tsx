import { UserProps } from "../types/user"
import{MdLocationPin} from "react-icons/md"
import {Link} from 'react-router-dom';
import classes from "./User.module.css"



const User = ({
  avatar_url,
        html_url,
        bio,
        login,
        location,
        followers,
        created_at
}: UserProps) => {
  return (
    <div className={classes.User}>
      <img src={avatar_url} alt={login} />
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
             <Link to={html_url}>Ver Perfil</Link>
        </div>
      </div>
    </div>
  );
};

export default User