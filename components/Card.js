import Image from 'next/image'
import Img from '../assets/icns/image-placeHolder.png'

const styles ={
    card:{
        "width":"20rem",
        "fontFamily":"var(--int)",
        "padding":"1rem",
        "borderRadius":"var(--boxRadius)",
        "margin":"3px"
    }
}
export default function Card(props){
    return(
        <>
            <div id="card" className={props.cardStyle}>
            <header>
        <Image src={props.img} alt="image holder"/>
            </header>
            <section style={styles.section}>
                <div className="content" id={props.titleId}>
                    <strong>Title</strong>
                    <span>{props.storyTitle}</span>
                </div>
                <div className="content" id={props.authorId}>
                     <strong>Author</strong>
                    <span>{props.author}</span>
                </div>
                <div className="content" id={props.descriptId}>
                     <strong>Description</strong>
                    <p>{props.descript}</p>
                </div>
            </section>
            </div>
            <style jsx>
                {`
                .content{
                    margin: 5px 0px
                }
                span{
                    margin-left:1rem
                }
                #card{
                    border:1px solid black;
                    cursor:pointer;
                    transition:box-shadow .3s ease-in-out;
                    font-family:var(--int);
                    padding:1rem;
                    border-radius:var(--boxRadius);
                }
                 #card:hover {
                    box-shadow: var(--shadow);
                    border:none;
                    }
                    header{
                        border-radius:5px 5px 0px 0px;
                    }
                `}
            </style>
        </>
    );
}
Card.defaultProps ={
    img:Img,
    descript:`Lorem ipsum dolor sit amet sollicitudin. Sagittis, leo, 
                    auctor taciti aptent mollis phasellus malesuada pulvinar, 
                    vitae sed. Mauris, nisl fusce at, aptent facilisis et, 
                    pulvinar ad accumsan tellus velit magna at malesuada nibh.`,
    author:"Author name",
    storyTitle:"Story Title"
}