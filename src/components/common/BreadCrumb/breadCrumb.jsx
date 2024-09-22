import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";

const breadCrumb = (props,cor) => {
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb" className= 'px-32'>
                <Link underline="hover" color="inherit" to={'/'}>
                    {props.caminho}
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                    style={{ color: cor }} 
                >
                    {props.caminho2}
                </Link>
            </Breadcrumbs>
        </>
    );
}

export default breadCrumb;