import Banner from "../../components/Banner/Banner.jsx"
import banner1 from "../../assets/banner1.png";
import Card from "../../components/Card/Card.jsx"
import logements from "../../datas/logements.json"
import "../../styles/Cards.css"
import { Link } from "react-router-dom";

function Home () {

    return (
        <>
        <Banner
        imageUrl={banner1}
        title="Chez vous, partout et ailleurs"
        containerClassName="banner-container-home"
        imageClassName="banner-image-home"
        titleClassName="banner-title-home"
      />
        
        <div className="cards-container">
				{logements.map((logement) => (
                    <Link to={`/logement/${logement.id}`} className="card-link" key={logement.id}>
					<div className="card-logement">
							<Card cover={logement.cover} title={logement.title} />
					</div>
                    </Link>
				))}
		</div>

        </>
        )
}

export default Home 