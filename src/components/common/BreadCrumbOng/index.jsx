import { Link, useMatches } from "react-router-dom";

const BreadCrumbOng = () => {
    const matches = useMatches();

    const crumbs = matches
        .filter((match) => Boolean(match.handle?.crumb))
        .map((match) => ({
            crumb: match.handle.crumb,
            path: match.pathname
        }));

    return (
        <nav aria-label="breadcrumb">
            <ol>
                {crumbs.map((crumb, index) => (
                    <li key={index}>
                        <Link to={crumb.path}>{crumb.crumb}</Link>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default BreadCrumbOng;