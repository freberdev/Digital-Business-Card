export function Footer(props) {
  return (
    <div className="Footer">
      <div>
        <a
          href={props.twitter}
          target="_blank"
          className="fa fa-twitter fa-2x"
        ></a>
        <a
          href={props.github}
          target="_blank"
          className="fa fa-github fa-2x"
        ></a>
        <a
          href={props.linkedin}
          target="_blank"
          className="fa fa-linkedin fa-2x"
        ></a>
      </div>
    </div>
  );
}
