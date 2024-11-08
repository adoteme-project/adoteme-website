import emailjs from 'emailjs-com';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.REACT_APP_SERVICE_ID,
            import.meta.env.REACT_APP_TEMPLATE_ID,
            e.target,
            import.meta.env.PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
}