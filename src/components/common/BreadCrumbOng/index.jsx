import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="flex items-center">
      {pathnames.map((name, index) => {
        const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
        return (
          <span key={index} className="text-preto font-nunito">
            {formattedName}
            {index < pathnames.length - 1 && (
              <span className="mx-2"> {<FontAwesomeIcon icon={faChevronRight} size='sm'/>} </span>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;