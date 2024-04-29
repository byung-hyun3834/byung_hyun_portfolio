import { Link } from 'react-router-dom';
import Styles, {Contents, Sidebar} from './components/Layout/styles';
import Layout from "./components/Layout";
function PortfolioPage() {

    return (
        <>
            PortfolioPage
            <Link to='/'>
                Portfolio Page ! go to Main Page
            </Link>
            <Layout />
        </>
    );
}


export default PortfolioPage;