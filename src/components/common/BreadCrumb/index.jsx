import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {

    const paths = [
        { titulo: props.tituloCaminho, caminho: "/" },
        { titulo: props.tituloCaminho2, caminho: props.caminho },
    ];


    if (props.tituloCaminho3 && props.caminho) {
        paths.push({ titulo: props.tituloCaminho3, caminho: props.caminho });
    }

    return (
        <>
            <Breadcrumbs aria-label="breadcrumb" className='px-16 py-4'>
                {paths.map((path, index) => (
                    <Link
                        key={index}
                        underline="none"
                        to={path.caminho}
                        style={{
                            fontWeight: 'bold',
                            color: index === paths.length - 1 ? '#4C8EB5' : 'inherit' 
                        }}
                    >
                        {path.titulo}
                    </Link>
                ))}
            </Breadcrumbs>
        </>
    );
}

export default BreadCrumb;
