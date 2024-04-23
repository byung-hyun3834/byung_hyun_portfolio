import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <>
            MainPage
            <Link to='/Portfolio'>
                this Main Page ! go to Portfolio
            </Link>
        </>
    );
}


export default MainPage;