"use client"
import { useState } from "react";
import "./form.scss"
import { makeRequest } from "@/utils";

    export const Form = () => {
    const [prenom, setPrenom] = useState("");
    const [site, setSite] = useState("");
    const [email, setEmail] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
         try {
            await makeRequest(e)
         } catch (error:any) {
            alert(error.message);
            return
         }
         
      }
   return(
    <section className="form_section">
    <div className="form_container">
    <form onSubmit={handleSubmit}>
  <div className="input">
    <label htmlFor="prenom" className="floating-label">Prénom</label>
    <input type="text" name="prenom" className="floating-input" placeholder=" "/>
  </div>
  <div className="input">
    <label htmlFor="site" className="floating-label">Site Web</label>
    <input type="text" name="site" className="floating-input" placeholder=" "/>
  </div>
  <div className="input">
    <label htmlFor="email" className="floating-label">Adresse mail</label>
    <input type="text" name="email" className="floating-input" placeholder=" "/>
  </div>
  <div className="checkbox">
    <input type="checkbox" name="cgu" id="cgu"/>
    <label htmlFor="cgu">J&apos;ai lu et j&apos;accepte les conditions d&apos;utilisations</label>
  </div>
  <button type="submit" className="submit">Lancer la recherche</button>
</form>

    </div>
    <div className="publi">
        <div className="big_logo"></div>
        <h2>Analysez votre présence en ligne dès maintenant !</h2>
        <p>En 1 clic, identifier et évaluez toutes vos informations personnelles accessibles publiquement en ligne. </p>
    </div>
</section>
   )
}