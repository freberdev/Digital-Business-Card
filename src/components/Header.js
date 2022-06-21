import profilePic from "../images/profilepicture.jpg";

export function Header(props) {

  return (
    
    <div className="HeaderApp">
      <img src={profilePic} alt="headerimage" />
      <h1>{props.name}</h1>
      <p>{props.title}</p>
      <div className="diva">
        <a href={props.url}>{props.siteName}</a>
      </div>
      <button onClick={() => window.location = `mailto:${props.email}`} className="button"><i className="material-icons">mail</i> Email</button>
    </div>
  );
}
