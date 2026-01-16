export default function Die(props) {
    return (    
        <button className={`die-face ${props.isHeld ? "held" : ""}`}
            onClick={() => props.holdDie(props.id)}>
            {props.value}
        </button>

    )}