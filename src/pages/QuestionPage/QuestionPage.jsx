import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { Question } from "./component/Question";
import './QuestionPage.scss'
import AuthProvider from "../../components/AuthProvider/AuthProvider";

export function QuestionPage () {

    const {user} = useContext(AuthProvider)
    const [question, setQuestion] = useState([{
        _id: 1,
        intitule: 'test',
        responses: [{
                name: 'r1',
                isValid: false
            },
            {
                name: 'r2',
                isValid: false
            },{
                name: 'r3',
                isValid: false
            },
            {
                name: 'r4',
                isValid: true
            }
        ], 
        theme: {
            name: 'Géographie',
        },
        user: user,
        times: 25,
        questionType: 'qcm',
        status: 'public'
    }]);

    return (
        <section className="questionPage">
                <h2>Listes Questions</h2>
                {
                    question.length > 0 ? 
                        question.map(q => (
                            <Fragment key={q._id}>
                                <Question question={q} />
                            </Fragment>
                        )) : (
                            <p className="notQuestion">Vous n'avez pas encore créer de question</p>
                        )
                }
        </section>
    )       
}