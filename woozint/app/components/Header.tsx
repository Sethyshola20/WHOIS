"use client"

import Image from "next/image"
import Link from "next/link"
import "./header.scss"

export const Header = () => {
   return ( 
   <section >
    <div className="text_container">
        <h1>Protégez votre vie privée en ligne avec Woozint </h1>
        <p className="desc">Découvrez et analysez votre empreinte numérique en quelques clics</p>
        <p className="big">Votre vie privée compte. Woozint vous aide à retrouver et analyser vos informations personnelles en ligne pour que vous puissiez prendre le contrôle de votre empreinte numérique.
        Faites confiance à Woozint pour protéger votre identité en ligne.</p>
        <div className="text_links">
            <Link href={""} className="special_link">Essayer</Link>
            <Link href={""}>En savoir plus</Link>
        </div>
    </div>
    <div className="picture_wrapper">
        <Image
            width={620}
            height={470}
            alt="display" src={""}        
        />
    </div>
</section>
)
}