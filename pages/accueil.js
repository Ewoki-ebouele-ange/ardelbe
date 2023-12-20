import styles from "./page.module.css"
import Image from 'next/image'
import Drop from "../assets/Vector.svg"
import Sidebar from "./sidebar"
import { useRouter } from "next/router"
import Link from "next/link"

export default function Accueil() {

    const router = useRouter()

    return (
        <>
            <Sidebar />
            <div className={styles.accueil}>
                <div className={styles.title_slogan}>
                    BIENVENU AU CTD
                </div>
                <div className={styles.countries}>
                    <div className={styles.count_itm}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            Cameroun
                            <Image src={Drop} alt="Picture" className={styles.drop_link} />
                        </div>

                        <ul>
                            <li className={styles.linkin}>
                                <a onClick={() => router.push(`/regInformations?data=${encodeURIComponent("Littoral")}`)}>Littoral</a>
                            </li>
                            <li className={styles.linkin}>
                                <a onClick={() => router.push(`/regInformations?data=${encodeURIComponent("Centre")}`)}>Centre</a>
                            </li>
                            <li className={styles.linkin}>
                                <a onClick={() => router.push(`/regInformations?data=${encodeURIComponent("Ouest")}`)}>Ouest</a>
                            </li>
                            <li className={styles.linkin}>
                                <a onClick={() => router.push(`/regInformations?data=${encodeURIComponent("Est")}`)}>Est</a>
                            </li>
                            <li className={styles.linkin}>
                                <a onClick={() => router.push(`/regInformations?data=${encodeURIComponent("Sud")}`)}>Sud</a>
                            </li>
                            <li className={styles.linkin}>
                                <a onClick={() => router.push(`/regInformations?data=${encodeURIComponent("Nord")}`)}>Nord</a>
                            </li>
                            <li className={styles.linkin}>
                                <a onClick={() => router.push(`/regInformations?data=${encodeURIComponent("Extrême Nord")}`)}>Extrême Nord</a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.informa_reg}>
                        Afficher les informations sur le Cameroun
                    </div>

                </div>
            </div>
        </>
    )
}