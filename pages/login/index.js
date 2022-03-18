import InputBox from "../../components/InputBox"
import Layout from "../../components/layout"
import styles from "../../styles/LoginReg.module.css"
import { Footer } from "../../components/Footer"
import Button from "../../components/Button"
import { NavBar } from "../../components/NavBar"
import Link from "next/link"

export default function Login(props){
    return (
        <Layout>
        <main className={styles.main}>
        <NavBar/>
        <section className={styles.section}>
        <header className={styles.header}>
            <h2>Login</h2>
        </header>
        <div className={styles.inputBox}>
            <InputBox inputType={'emal'} placeholder={'Email'} inputStyle={styles.input}/>
            <InputBox inputType={'password'} inputStyle={styles.input} placeholder={'password'}/>
            <Button value={'Login'} styleBtn={styles.btn}/>
            <Link href={'/register'}><a id="reg">Register</a></Link>
        </div>
        
        </section>
        </main>
        <Footer/>
        <style jsx>
            {`
            #reg{
                font-size:var(--fontSize);
                width:6rem;
                padding:4px;
                transition: color .5s ease-in;
                border-radius:var(--boxRadius)
            }
            #reg:hover{
                color:var(--color1);
            }
            `}
        </style>
        </Layout>
    )
}