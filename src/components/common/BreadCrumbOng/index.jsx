import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  
  const breadcrumbMap = {
    'ong': 'Ong',
    'cadastrar-pet': 'Cadastrar Pet',
    'abrigo': 'Abrigo',
    'abrigo-imagens': 'Imagens do Pet',
    'abrigo-informacoes': 'Informações do Pet',
    'abrigo-taxa': 'Taxa de Adoção'
  };

  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="flex items-center">
      {pathnames.map((name, index) => {
        const formattedName = breadcrumbMap[name] || (name.charAt(0).toUpperCase() + name.slice(1));
        
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return (
          <span key={index} className="text-preto font-nunito">
            <Link to={to} className="hover:underline">
              {formattedName}
            </Link>
            {index < pathnames.length - 1 && (
              <span className="mx-2">
                <FontAwesomeIcon icon={faChevronRight} size="sm" />
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;