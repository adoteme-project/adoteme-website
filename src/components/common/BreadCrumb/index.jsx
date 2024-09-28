import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";

const breadCrumb = (props,cor) => {
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb" className= 'px-16'>
                <Link
                    underline=""
                    color="inherit"
                    to={'/'}>
                    {props.tituloCaminho}
                </Link>
                <Link
                    underline=""
                    color="inherit"
                    to={props.caminho}
                    style={{ 
                        fontWeight: 'bold',
                        color: cor, 
                    }}
                    className="text-azul-main "
                >
                    {props.tituloCaminho2}
                </Link>
            </Breadcrumbs>
        </>
    );
}

export default breadCrumb;