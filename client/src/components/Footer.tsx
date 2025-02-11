import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub} from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
        <footer className="fixed-bottom footer-background footer-top-custom">
        <div className="container">
        <ul className="d-flex justify-content-center align-items-center list-unstyled mb-0" id='social-links'>
            <li className="px-3">
                <a href="https://github.com/carlbr3/" target="_blank">
                    <FontAwesomeIcon icon={faSquareGithub} className="icon fa-2x fa-fw" />
                </a>
            </li>
            <li className="px-3">
                <a href="https://github.com/Joelogical/" target="_blank">
                    <FontAwesomeIcon icon={faSquareGithub} className="icon fa-2x fa-fw" />
                </a>
            </li>
            <li className="px-3">
                <a href="https://github.com/stephanuh" target="_blank">
                    <FontAwesomeIcon icon={faSquareGithub} className="icon fa-2x fa-fw" />
                </a>
            </li>
        </ul>
        </div>

        </footer>    
    )

}