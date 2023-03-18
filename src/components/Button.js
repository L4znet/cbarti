export default function Button(props) {
    return (
        <>
            <button onClick={props.method} className={"button"}>
                <i className={props.icon}></i>
                {props.text !== "" &&
                    <span>{props.text}</span>
                }
            </button>
        </>

    )
}