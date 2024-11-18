import emailjs from "emailjs-com";

export function sendEmail(params) {
    emailjs
        .send(
            import.meta.env.REACT_APP_SERVICE_ID,
            import.meta.env.REACT_APP_TEMPLATE_ID,
            params,
            import.meta.env.PUBLIC_KEY
        )
        .then((result) => {
            console.log("Email enviado:", result.text);
        })
        .catch((error) => {
            console.error("Erro ao enviar email:", error.text);
        });
}
