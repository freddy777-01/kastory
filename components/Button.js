export default function Button(props) {
    const style = {
        "textDecoration":"none",
        "outline":"none"
    }
    return (
         <>
         <button className={props.styleBtn} style={style}>{props.value}</button>
        
        </> 
    );
};