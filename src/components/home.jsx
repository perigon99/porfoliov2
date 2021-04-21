import {Parallax } from 'react-materialize';
import './home.css';

function Home() {
    return (
      <div>
          <div className="section white">
            <div className="row container">
            <h1 className="header">
            Bienvenue sur mon site.
            </h1>
            <p className="grey-text text-darken-3 lighten-3">
            Vous verrez ici un aperçu de mes différents projets en cour ainsi que toutes les informations sur mon cheminement académique.
            </p>
            </div>
        </div>
        <Parallax
            image={<img alt="" src="/images/image-code.jpg"/>}
            options={{
            responsiveThreshold: 0
            }}
        />
        <div className="section white">
            <div className="row container">
            <h1 className="header">
            Aperçu de mon projet final à Lighthouse labs
            </h1>
            </div>
        </div>
        <Parallax
            className="yalper"
            image={<img alt=""  src="/images/Yalper.png"/>}
            options={{
            responsiveThreshold: 0
            }}
        />

        <div className="section white">
            <div className="row container">
            <h3 className="header">
            Vous arrive t-il d'avoir besoin d'une aide à domicile (Taxe, tondre le gazon, ménage ....) ? Nous avons la solution pour ça ! Avec Yalper il sufit de cherner le nom de service et vous trouverez tous ceux qui peuvent vous l'offir.
            Il vous suffit ensuite de selectioner une plage horaire et d'attendre la confirmation de celui qui offre le service.
            </h3>
            </div>
        </div>
        <Parallax
            className="yalper2"
            image={<img alt=""  src="/images/yalper-home.png"/>}
            keepImg
            height='90vh'
            width='50vh'
            options={{
            responsiveThreshold: 0
            
            }}
        > <div style={{ height: '90vh' }} />
            </Parallax>


        <div className="section white">
            <div className="row container">
            <h2 className="header">
            Fonctionalitées clés
            </h2>
            <ul>
                <li>
                    Google Ouath
                </li>
                <li>
                    Détection inteligente d'un nouvel utilisateur et entregistrement semi automatique des formulaires d'inscriptions
                </li>
                <li>
                    Détection inteligente des coordonnées et addresse du client
                </li>
                <li>
                    Calendrier intégré avec selection de plages horaires
                </li>
                <li>
                    Recherche instantané de services
                </li>
                <li>
                    Gestion des services offerts
                </li>
                <li>
                    Système de notification
                </li>
            </ul>
            </div>
        </div>
        <Parallax
        className="yalper-register"
            image={<img alt="" src="/images/yalper-register.png"/>}
            options={{
            responsiveThreshold: 0
            }}
        />
      </div>
    )
}
    
    
    
export default Home;