const styles ={
"footer" :{
  "display": "flex",
  "flex": "1",
  "padding": "2rem 0",
  "borderTop": "1px solid #eaeaea",
  "justify-content": "center",
  "alignItems": "center",
  "font-family":"var(--int)"
},

"a": {
  "display": "flex",
  "justifyContent": "center",
  "alignItems": "center",
  "flex-grow": "1"
  }
}
const d = new Date();

export const Footer = (props)=>{
    return(
        <>
        <footer style={styles.footer}>

					<span className={styles.powered}>
            Powered by{" "}
					<strong>FEMAG</strong> 
          {" "}
          &copy;
          {d.getFullYear()}
					</span>
        </footer>
        </>
    )
}