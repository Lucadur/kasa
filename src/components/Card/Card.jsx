import "../../styles/Cards.css";

export default function Card({ title, cover}) {
  return ( <>
      <img className="card-img" src={cover} alt={title} />
      <h3 className="card-title">{title}</h3>
	  </>
  );
}
