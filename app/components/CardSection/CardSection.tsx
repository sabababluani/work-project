import styles from './CardSection.module.scss';
import Image from "next/image";
import Link from "next/link";


const CardSection = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Image src={'/jason.jpg'} alt={'jason'} width={400} height={200}/>
                <button>See more</button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate debitis deserunt distinctio
                    excepturi exercitationem explicabo ipsa ipsum iure minus molestiae natus numquam perferendis
                    praesentium, quae quaerat quas quo quos voluptatum.</p>
                <Link href={'#'}> Read more <Image src={'/blackarrow.png'} alt={'arrow'} width={16} height={12} /></Link>
            </div>
            <div className={styles.container}>
                <Image src={'/dardevil.jpg'} alt={'jason'} width={400} height={200}/>
                <button>See more</button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate debitis deserunt distinctio
                    excepturi exercitationem explicabo ipsa ipsum iure minus molestiae natus numquam perferendis
                    praesentium, quae quaerat quas quo quos voluptatum.</p>
                <Link href={'#'}> Read more <Image src={'/blackarrow.png'} alt={'arrow'} width={16} height={12} /></Link>
            </div>
            <div className={styles.container}>
                <Image src={'/gosling.jpg'} alt={'jason'} width={400} height={200}/>
                <button>See more</button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate debitis deserunt distinctio
                    excepturi exercitationem explicabo ipsa ipsum iure minus molestiae natus numquam perferendis
                    praesentium, quae quaerat quas quo quos voluptatum.</p>
                <Link href={'#'}> Read more <Image src={'/blackarrow.png'} alt={'arrow'} width={16} height={12} /> </Link>
            </div>
        </div>
    )
}

export default CardSection;