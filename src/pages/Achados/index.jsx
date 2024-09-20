import { useNavigate } from "react-router-dom";
import MapaAchados from "../../components/Maps";

const Achados = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/mapa-achados", { state: {mapCenter} });
  }

  return <MapaAchados/>
  
};

export default Achados;
