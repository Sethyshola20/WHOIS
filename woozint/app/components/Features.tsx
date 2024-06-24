"use client"

import "./features.scss"
import Image from "next/image"
export const Features = () => {
    return (
        <ul>
            <Feature titre="Recherche avancée" desc="Trouvez des informations spécifiques à partir de divers critères." />
            <Feature titre="Analyse de profil en ligne" desc="Obtenez un aperçu complet de votre présence en ligne."/>
            <Feature titre="Surveillance des menaces" desc="Recevez des alertes en cas de découverte d'informations sensibles."/>
            <Feature titre="Cartographie des relations" desc="Visualisez les liens entre vos données collectées."/>
        </ul>
    )
}

export const Feature = ({titre,desc}:{titre:string,desc:string}) => {
    return(
        <li>
            <h4>{titre}</h4>
            <Image
                src=""
                alt="feature"
                width={200}
                height={150}
             />
            <p>{desc}</p>
        </li>
    )
}