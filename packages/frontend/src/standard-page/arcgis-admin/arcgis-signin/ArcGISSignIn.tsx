import styles from './ArcGISSignIn.module.scss';

interface IProps {
  onSignInClicked: () => void;
};

export function ArcGISSignIn({ onSignInClicked }: IProps) {
  return (
    <main className={styles.main}>
      <h2>You are currently not signed in and thus not able to access this page!</h2>
      <button onClick={onSignInClicked} className={styles.signin}>Sign In with ArcGIS</button>
    </main>
  );
}