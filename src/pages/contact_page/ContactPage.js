import "./contactpage.css";
//import neo from "../../assets/images/neo.jpg";
//import businesscard from "../../assets/images/business-card1.png";

// Components
//import Sidebar from "../../components/common/sidebar/Sidebar";
import Header from "../../components/common/header/Header";

function Contact () {  
    return (
    <>
        <div className="contact-page">
            <div className="header-container">
                <Header />
            </div>

            {/*<!-- The front is based on of my SVG link hover effect https://codepen.io/Zeaklous/pen/kyGqm --> */}
            <div className="container">
                <div className="card">
                    
                    <div className="front side">
                        <h1 className="logo">Peter Perez</h1>
                    </div>
                    
                    <div className="back side">
                        <h3 className="name">Peter Perez</h3>
                        <div>IT Project Manager</div>      
                        <div className="info">
                            <p className="contactInfo"><span className="property">Email: </span>some-email-url@gmail.com</p>
                            <p className="contactInfo"><span className="property">Linkedin: </span>https://www.linkedin.com/in/some-linkedin-id/</p>
                            <p className="contactInfo"><span className="property">Phone: </span>(702) 468-8204</p>
                            <p className="contactInfo"><span className="property">Website: </span>nubeWebDev.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}  
export default Contact;  