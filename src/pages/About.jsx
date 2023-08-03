import Banner from "../components/Banner/Banner"
import banner2 from "../assets/banner2.png"
import Collapse from "../components/Collapse/Collapse"
import "../styles/Collapse.css"

function About () {
    const customClasses = {
        collapse: 'collapse-about',
        header: 'collapse-header-about',
        title: 'collapse-title-about',
        icon: 'collapse-icon-about',
        children: 'collapse-children-about',
        content: 'collapse-content-about',
      };

    return (
        <div>
             <Banner
        imageUrl={banner2}
        title=""
        containerClassName="banner-container-about"
        imageClassName="banner-image-about"
        titleClassName="banner-title-about"
      />
            <div className="collapse-container-about">
                <Collapse title="Fiabilité" customClasses={customClasses}>
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                </Collapse>

                <Collapse title="Respect" customClasses={customClasses}>
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Collapse>

                <Collapse title="Service" customClasses={customClasses}>
                    <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </Collapse>

                <Collapse title="Sécurité" customClasses={customClasses}>
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </Collapse>
            </div>
        </div>
    )
}

export default About 