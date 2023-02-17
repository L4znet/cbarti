
export default function Filter(props) {
    return (
        <li style={{"backgroundColor": props.filterBgColor}}>{props.name}</li>
    )
}