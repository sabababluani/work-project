import styles from './CardSection.module.scss';
import Image from "next/image";
import Link from "next/link";


const CardSection = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Image src={'/jason.jpg'} alt={'jason'} width={400} height={200}/>
                <button>See more</button>
                <p>Jason Statham, born July 26, 1967, is a British actor known for his roles in action films like *The
                    Transporter* series, *Crank* (2006), and *The Expendables*. With a background in martial arts and
                    diving, Statham built a reputation for performing his own stunts, becoming a staple of high-octane
                    thrillers.</p>
                <Link href={'#'}> Read more <Image src={'/blackarrow.png'} alt={'arrow'} width={16} height={12}/></Link>
            </div>
            <div className={styles.container}>
                <Image src={'/dardevil.jpg'} alt={'jason'} width={400} height={200}/>
                <button>See more</button>
                <p>Daredevil, also known as Matt Murdock, is a Marvel Comics superhero created by Stan Lee and Bill
                    Everett in 1964. Blinded in an accident as a child, Matts remaining senses became superhumanly
                    sharp. By day, hes a lawyer; by night, he fights crime as Daredevil in New York’s Hells Kitchen,
                    known for his acrobatics and mastery of martial arts.</p>
                <Link href={'#'}> Read more <Image src={'/blackarrow.png'} alt={'arrow'} width={16} height={12}/></Link>
            </div>
            <div className={styles.container}>
                <Image src={'/gosling.jpg'} alt={'jason'} width={400} height={200}/>
                <button>See more</button>
                <p>Ryan Gosling, born November 12, 1980, is a Canadian actor known for his roles in The Notebook (2004),
                    La La Land (2016), and Drive (2011). Starting on The Mickey Mouse Club, he became a versatile actor
                    and director, praised for his performances in both indie and mainstream films.</p>
                <Link href={'#'}> Read more <Image src={'/blackarrow.png'} alt={'arrow'} width={16} height={12}/>
                </Link>
            </div>
        </div>
    )
}

export default CardSection;