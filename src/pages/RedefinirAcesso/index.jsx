import { useState } from "react";
import emailjs from "emailjs-com";

const RedefinirAcesso = () => {
  const [codigo] = useState(Math.floor(Math.random() * 900000) + 100000);

  localStorage.setItem("codigo", codigo);

  const serviceID = 'service_tecougb';
  const templateID = 'template_3k0ri7n';
  const publicKey = 'JXqrlCplo7UCdW_xK';

  const textContent = 'Insira o e-mail do usuário para a recuperação de senha. O sistema irá enviar o e-mail de confirmação caso o usuário esteja validado.';

  const handleSendEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    emailjs.send(
      serviceID, 
      templateID,
      {
        email_usuario: email,
        codigo: codigo
      },
      publicKey
    )
      .then((result) => {
        console.log("Email enviado:", result.text);
      })
      .catch((error) => {
        console.error("Erro ao enviar email:", error.text);
      });
  };

  return (
    <div className="w-full justify-center items-center flex">
      <form onSubmit={handleSendEmail}>
        <input type="email" name="email" />
        <button type="submit" value="Submit">Enviar</button>
      </form>
    </div>
  );
};

export default RedefinirAcesso;
