import Image from 'next/image';
import styles from './rightbar.module.css';
import { MdReadMore } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥Checkout my github!</span>
          <h3 className={styles.title}>
            I got lots of projects like this admin dashboard
          </h3>
          <span className={styles.subtitle}>
            I work on cool new stuff all the time!
          </span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={styles.button}>
            <FaGithub />
            <Link href="https://github.com/thiem-dev" target="_blank">
              Link to Github
            </Link>
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🚀 Coming Soon</span>
          <h3 className={styles.title}>
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className={styles.subtitle}>Boost your productivity</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={styles.button}>
            <FaGithub />
            <Link
              href="https://github.com/thiem-dev/admin-dashboard"
              target="_blank"
            >
              Link to this project repo
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
