import SliderQuizz from "./sliderQuizz/SliderQuizz";
import SliderThemes from "./sliderThemes/SliderThemes";
import './Acceuil.scss';
import ReactGA from 'react-ga4'

export default function Acceuil () {
    ReactGA.send({
        hitType:'pageview', 
        page:'accueil'
    })

    return (
        <div className={`main`} >
            <SliderQuizz online={false} > Quizz </SliderQuizz>
            <SliderQuizz online={true} > Quizz en attentes</SliderQuizz>
            <SliderThemes />
        </div>
    )
}