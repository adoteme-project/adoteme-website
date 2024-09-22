import adotanteOption from "../../assets/man_with_dog.png";
import ongOption from "../../assets/woman_with_dog.png";
import logoAdoteme from "../../assets/logo_adotme.png";
import UserSelect from "../../components/common/UserSelect";

const LoginSelection = () => {
  const userSelectOptions = [
    {
      key: 1,
      userLogo: adotanteOption,
      context: "adotante",
    },
    {
      key: 2,
      userLogo: ongOption,
      context: "ong",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center my-9">
      <div className="flex flex-col gap-3 items-center">
        <img src={logoAdoteme} className="h-40 w-48" alt="Logo adotme" />
        <h4 className="text-azul-main font-bold text-4xl"> adoteMe </h4>
        <p>Entrar como</p>
      </div>
      <div className="flex gap-14 mt-14">
        {userSelectOptions.map((option) => (
          <UserSelect
            key={option.key}
            userLogo={option.userLogo}
            context={option.context}
          />
        ))}
      </div>
    </div>
  );
};

export default LoginSelection;
