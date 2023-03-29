import styles from './styles.module.scss';
import useWindowSize from '@/utils/windowSize';
import MenuButton from '@/menu-button';
import Logo from '../logo';
const NavigationalBar = () => {
  const { width } = useWindowSize();
  return (
    <nav className={styles.container}>
      <div className={styles.LogoContainer}>
        <Logo />
      </div>
      {width < 1024 ? (
        <div className={styles.menuButton}>
          <MenuButton />
        </div>
      ) : (
        <ol>
          <li></li>
        </ol>
      )}
    </nav>
  );
};

export default NavigationalBar;
