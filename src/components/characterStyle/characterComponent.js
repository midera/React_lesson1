import './characterStyle.css'

function CharacterComponent(props) {
    return <div>
        <p>{props.description}</p>
        <img src={props.image}/>


    </div>
}

export default CharacterComponent;