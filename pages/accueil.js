import styles from "./page.module.css"
import Image from 'next/image'
import Drop from "../assets/Vector.svg"
import Sidebar from "./sidebar"

export default function Accueil() {
    return (
        <>
        <Sidebar />
        <div className={styles.accueil}>
            <div className={styles.title_slogan}>
            BIENVENU AU CTD
            </div>
            <div className={styles.countries}>
            <div className={styles.count_itm}>
                Cameroun
                <Image src={Drop} alt="Picture" className={styles.drop_link}/>

                <ul>
                <li className={styles.linkin}>
                    <a href="/regInformations">Littoral</a>
                </li>
                <li className={styles.linkin}>
                    <a href="/regInformations">Centre</a>
                </li>
                <li className={styles.linkin}>
                    <a href="/regInformations">Ouest</a>
                </li>
                <li className={styles.linkin}>
                    <a href="/regInformations">Est</a>
                </li>
                <li className={styles.linkin}>
                    <a href="/regInformations">Sud</a>
                </li>
                <li className={styles.linkin}>
                    <a href="/regInformations">Nord</a>
                </li>
                <li className={styles.linkin}>
                    <a href="/regInformations">Extrême Nord</a>
                </li>
                </ul>
            </div>

            <div className={styles.infor}>
                <span> Name : Cameroun</span>
                <span> Name : Cameroun</span>
                <span> Name : Cameroun</span>
                <span> Name : Cameroun</span>
                <span> Name : Cameroun</span>
                <span> Name : Cameroun</span>
            </div>

            </div>
        </div>
      </>
    )
}