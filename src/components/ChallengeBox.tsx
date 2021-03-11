import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
            {hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>
                        Ganhe 400xp
                    </header>

                    <main>
                        <img src="icons/body.svg" alt=""/>
                        <strong>Novo desafio</strong>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, deserunt, praesentium fugit odit vel magnam quaerat error nulla pariatur voluptatum beatae quia exercitationem! Quam delectus sit vitae, vero tempore corporis.
                        </p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                        >
                            Falhei
                        </button>

                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize o ciclo para receber um desafio</strong>
    
                    <p>
                        <img src="icons/level-up.svg" alt="Level up"/>
                        Avance de level complentando desafios.
                    </p>
                </div>
            )}
        </div>
    );
}