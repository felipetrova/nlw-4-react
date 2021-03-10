import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/felipetrova.png" alt="Felipe Trova"/>

            <div>
                <strong>Felipe Trova</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1xp
                </p>
            </div>
        </div>
    );
}