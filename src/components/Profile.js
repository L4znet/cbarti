import user from "../images/user.png";

export default function Profile(props){
    return (
        <a href="" className="profile_button">
            {props.username}
            <img src={user} alt=""/>
        </a>
    )
}