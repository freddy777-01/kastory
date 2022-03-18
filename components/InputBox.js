const style = {
   "outline":"none"
}
export default function InputBox(props){
    return(
        <>
            <input style={style} type={props.inputType} placeholder={props.placeholder} className={props.inputStyle}/>
        </>
    );
}
InputBox.defaultProps ={
    inputType:'text',
    placeholder:''
}