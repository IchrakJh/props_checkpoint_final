import PropTypes from 'prop-types';
import './profile.css'

const Profil = props =>{ 
    return (
        <>
        <h1 className="h1">Welcome</h1>
        <ul className="ul">
            <li>fullName: {props.fullName}</li>
            <li>Bio: {props.bio}</li>
            <li>Profession: {props.profession}</li>
            <li>Image children: <p>{props.children}</p></li>
        </ul>
        <button onClick={props.onClick} type="button" class="btn btn-primary btn-lg btn-block">Click me</button>
        

        </>)}

Profil.defaultProps ={
        fullName:'default fullName',
        bio:'default bio',
        profession:'default profession'
}
    
Profil.prototype={
    fullName: PropTypes.string,
    bio : PropTypes.string,
    profession: PropTypes.string,
} 
export default Profil;
