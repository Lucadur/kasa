import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import logements from "../datas/logements.json";
import Carousel from "../components/Gallery/Carousel.jsx";
import Tags from "../components/Tags/Tags";
import Collapse from "../components/Collapse/Collapse";
import Rating from "../components/Rating/Rating.jsx"
import "../styles/Logement.css"


function Logement () {
    const customClasses = {
        collapse: 'collapse-logement',
        header: 'collapse-header-logement',
        title: 'collapse-title-logement',
        icon: 'collapse-icon-logement',
        children: 'collapse-children-logement',
        content: 'collapse-content-logement',
      };

    const {indexLogement} = useParams();
    const logement = logements.find(logement => logement.id === indexLogement);
    
    /* condition pour erreur id */
    let navigate = useNavigate();
    useEffect(() => {
        if (logement === undefined) {
            navigate("/Error", { replace: true });
        }
    }, [indexLogement, logement, navigate])
      
    if (logement === undefined) {
        return null;
    }
     
    const fullName = logement.host.name;
    const splitName = fullName.split(' ');
    const hostPre =  splitName[0];
    const hostNom =  splitName[1];

    return (
        <div className="logementGlobale">

            <Carousel photos={logement.pictures}/>
            
            <div className="logementGlobalePos">
                <div className="logement">
                    <div className="logement-Left">
                        <div className="logement-left-text">
                            <p className="logement--textBold">{logement.title}</p>
                            <p className="logement--subtext">{logement.location}</p>
                        </div>
                        <Tags tags={logement.tags} />
        
                    </div>
                    <div className="logement-Right">
                        <div className="logement-rightinfo">
                            <div className="logement-right--name">
                                <div className="logement-right--name--Pre">
                                    <p>{hostPre}</p>
                                </div>
                                <div className="logement-right--name--Nom">
                                    <p>{hostNom}</p>
                                </div>
                            </div>
                            <div>
                                <img className="logement-right--img" src={logement.host.picture} alt={`profil pic`}/>
                            </div>
                    </div>
                    <Rating rating={logement.rating} />
                </div>
            </div>
            
            <div className="collapse-container-logement">
                <Collapse title="Description" children={logement.description} customClasses={customClasses} />
                <Collapse
                    title="Equipements"
                    children={
                        <ul className="equipments">
                        {logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                        </ul>
                    }
                    customClasses={customClasses}
                />
            </div>

        </div>
        </div>
    )
}
export default Logement;