import styles from './CheckBox.module.scss';

const CheckBox = () => {
    return (
        <div className={styles.wrapper}>
            <input type="checkbox"/>
            <input type="checkbox"/>
            <input type="checkbox"/>
            <input type="checkbox"/>
            <input type="checkbox"/>
        </div>
    )
}

export default CheckBox;