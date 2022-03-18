import InputBox from "../../components/InputBox"
import Layout from "../../components/layout"
import styles from "../../styles/LoginReg.module.css"
import { Footer } from "../../components/Footer"
import Button from "../../components/Button"
import { NavBar } from "../../components/NavBar"
import Link from "next/link"
export default function Register(props){
    return(
        <Layout>
              <main className={styles.main}>
        <NavBar/>
        <section className={styles.section}>
        <header className={styles.header}>
            <h2>Register</h2>
        </header>
        <div className={styles.inputBox}>
            <InputBox inputType={'emal'} placeholder={'First Name'} inputStyle={styles.input}/>
            <InputBox inputType={'emal'} placeholder={'Last Name'} inputStyle={styles.input}/>
            <InputBox inputType={'emal'} placeholder={'Email'} inputStyle={styles.input}/>
            <InputBox inputType={'password'}  placeholder={'password'} inputStyle={styles.input}/>
            <Button value={'Register'} styleBtn={styles.btn}/>
            <Link href={'/login'}><a id="login">Login</a></Link>
        </div>
        
        </section>
        </main>
        <Footer/>
        <style jsx>
            {`
            #login{
                font-size:var(--fontSize);
                width:4rem;
                padding:4px;
                transition: color .5s ease-in;
                border-radius:var(--boxRadius)
            }
            #login:hover{
                color:var(--color1);
            }
            `}
        </style>
        </Layout>
    )
}