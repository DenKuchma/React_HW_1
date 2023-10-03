import styles from './Header.module.css'
import {getLogoUrl} from '../../utils/mainConst.js'

export const Header = ({navData}) => {
    return(
        <div className={styles.header}>
        <h1 style={{paddingTop : 20}}>Test</h1>
        <div className={styles.navigator_conteiner}>
            <div className={styles.logo}>
                    <img src={getLogoUrl()} alt="#" />
            </div>
            <nav>
                <ul className={styles.list}>
                    {navData.map((item, index) => <li key={index} className={styles.list__item}><a href="#" className={styles.list__item_href}>{item}</a></li>)}
                </ul>
            </nav> 
        </div>
        </div>
    )
}