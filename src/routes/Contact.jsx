import ContactInfo from "../Pages/ContactInfo";
import Cover from "../Shared/Cover";
import img from '../assets/assets/contact/banner.jpg'
const Contact = () => {
    return (
        <div>
<div className="flex items-center justify-center bg-fixed" style={{backgroundImage:`url(${img})`, height:'700px', backgroundSize:'cover'}}>
            
            <Cover title='CONTACT US' description='Would you like to try a dish?'></Cover>
    </div>

<ContactInfo></ContactInfo>
        </div>
    );
};

export default Contact;