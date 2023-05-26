import { useLocation, useNavigate, useParams } from 'react-router';


function Detail() {
    const { state }= useLocation();

    console.log(state)    
    return (
    <div>
        <h1>I am xd</h1>
    </div>
    );
}

export default Detail