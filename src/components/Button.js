export default function Button(props) {
    return (
        <>
            {props.icon !== "" &&
                <>
                    {props.url !== "" &&
                        <a href={props.url} class="button"><i className={props.icon}></i> {props.text}</a>
                    }
                </>
            }
            {props.icon === "" &&
                <>
                    {props.url !== "" &&
                        <a href={props.url} class="button">{props.text}</a>
                    }
                </>
            }
        </>

    )
}