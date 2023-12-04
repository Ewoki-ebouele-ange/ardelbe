import styles from "../styles/region.module.css"
import Sidebar from "./sidebar"
import Image from 'next/image'
import Drop from "../assets/Vector.svg"
import Drop2 from "../assets/Vector2.svg"

export default function Region() {
    return (
     <>
        <Sidebar />
        <div className={styles.accueil}>
            <div className={styles.onglets}>
                <div className={styles.ong}>ODD</div>
                <div className={styles.ong}>Secteurs</div>
                <div className={styles.ong}>Ministère</div>
                <div className={styles.ong}>Finances</div>
                <div className={styles.ong}>RH</div>
            </div>
            <div className={styles.path}>
                Cameroun <Image src={Drop2} alt="Picture" className={styles.drop_link} width={8}/> Adamaoua
            </div>
            <div className={styles.countries}>
            <div className={styles.count_itm}>
                Adamaoua
                <Image src={Drop} alt="Picture" className={styles.drop_link}/>

                <ul>
                <li className={styles.linkin}>
                    <a href="#">Adamaoua dep 1</a>
                </li>
                <li className={styles.linkin}>
                    <a href="#">Adamaoua dep 2</a>
                </li>
                <li className={styles.linkin}>
                    <a href="#">Adamaoua dep 3</a>
                </li>
                <li className={styles.linkin}>
                    <a href="#">Adamaoua dep 4</a>
                </li>
                <li className={styles.linkin}>
                    <a href="#">Adamaoua dep 5</a>
                </li>
                <li className={styles.linkin}>
                    <a href="#">Adamaoua dep 5</a>
                </li>
                <li className={styles.linkin}>
                    <a href="#">Adamaoua dep 6</a>
                </li>
                </ul>
            </div>
            </div>
            <div className={styles.countries}>
            <div className={styles.count_itm}>
                Littoral
                <Image src={Drop} alt="Picture" className={styles.drop_link}/>

                <ul>
                <li className={styles.linkin}>
                    <a href="#">Littoral dep 1</a>
                </li>
                <li className={styles.linkin}>
                    <a href="#">Littoral dep 2</a>
                </li>
                <li className={styles.linkin}>
                    <a href="#">Littoral dep 3</a>
                </li>
                <li className={styles.linkin}>
                    <a href="#">Littoral dep 4</a>
                </li>
                <li className={styles.linkin}>
                    <a href="#">Littoral dep 5</a>
                </li>
                <li className={styles.linkin}>
                    <a href="#">Adamaoua dep 5</a>
                </li>
                <li className={styles.linkin}>
                    <a href="#">Littoral dep 6</a>
                </li>
                </ul>
            </div>
            </div>


            <div className={styles.informa_reg}>
                Afficher les informations sur l'adamaoua
            </div>

        </div>  
     </>
    )
  }