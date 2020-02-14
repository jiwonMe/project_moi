
const layoutStyle = {
    margin: 20,
    padding: 20
}

const Question5C1 = props => (
    <div style={layoutStyle}>
        <h2>{props.index}</h2>
        <p>{props.examName}</p>
        <p>{props.statement}</p>
        <ol>
            <li>① {props.choose[0]}</li>
            <li>② {props.choose[1]}</li>
            <li>③ {props.choose[2]}</li>
            <li>④ {props.choose[3]}</li>
            <li>⑤ {props.choose[4]}</li>
        </ol>
        <style jsx>{`

        ol>li{
            list-style: none;
            display:inline-block;
            float:left;
            width:33.33333%;
            margin: 3px 0;
        }
        `}</style>
    </div>
)

export default Question5C1