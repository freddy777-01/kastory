const styles ={
    "padding": "0 5rem",
}
export default function Layout({children}){
    return(
        <>
            <div style={styles}>{children}</div>
        </>
    )
}