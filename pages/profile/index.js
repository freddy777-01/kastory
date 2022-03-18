import Link from 'next/link';
import PropTypes from 'prop-types';
import Card from '../../components/Card';
import Image from 'next/image';
import { NavBar } from '../../components/navbar';
import Layout from '../../components/layout';
import imgPlaceHolder from '../../assets/icns/image-placeHolder.png'
import { Footer } from '../../components/Footer';
import profilePlaceHolder from '../../assets/icns/outline_person_black_48dp.png'
import styles from '../../styles/Profile.module.css'


export default function Index(){
    return (
        <Layout>
        <NavBar>
        <Link href={'/profile'}>
        Profile
        </Link>
        </NavBar>
            <main className={styles.main}>
            <header className={styles.header}>
            <div id={styles.cover}>
                <Image src={imgPlaceHolder} alt="cover-image" height={390} width={500}/>
            </div>
            <div id={styles.userImage}>
                <Image src={profilePlaceHolder} alt="user-image" width={200} height={200}/>
            </div>
            </header>
                <section id={styles.mainContent}>
            <aside id={styles.aside}>
                <div>
                <h3>User Bio</h3>
                <p>
                    Lorem ipsum dolor sit amet amet, lorem, 
                    tellus pharetra ex. Dictumst varius pulvinar porta, elit eget sapien lectus mattis.
                </p>
                </div>
                <div>
                <h3>About User</h3>
                <p>
                    Lorem ipsum dolor sit amet amet, lorem, 
                    tellus pharetra ex. Dictumst varius pulvinar porta, elit eget sapien lectus mattis.
                </p>
                </div>
            </aside>
            <section id={styles.storyBlock}>

                    <Card cardStyle={styles.card} descriptId={styles.descript}/>
                    <Card cardStyle={styles.card} descriptId={styles.descript}/>
                    <Card cardStyle={styles.card} descriptId={styles.descript}/>
                    <Card cardStyle={styles.card} descriptId={styles.descript}/>
                    <Card cardStyle={styles.card} descriptId={styles.descript}/>
                    <Card cardStyle={styles.card} descriptId={styles.descript}/>
            </section>
                </section>
            </main>
 
            <Footer/>
        <style jsx>
            {`
             
            `}
        </style>
        </Layout>
    );
};


/* Index.propTypes = {

}; */

