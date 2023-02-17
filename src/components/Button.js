export default function Button(props) {
    return (
        <>
            <a href={props.url} className="button"><i className={props.icon}></i> {props.text}</a>
        </>

    )
}