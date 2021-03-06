import Head from 'next/head'
// @ts-ignore
import styles from '../styles/Home.module.css'
import { FC } from "react";
import { motion } from "framer-motion";

const Home: FC = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Jonas Weidner</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

            <main className={styles.main}>
                <motion.div
                    initial={{ x: -500 }}
                    animate={{ x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                >
                    <h1 className={styles.title}>
                        Jonas
                    </h1>
                </motion.div>

                <motion.div
                    className={styles.lastName}
                    initial={{ x: 500 }}
                    animate={{ x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                >
                    <h1 className={styles.title}>
                        Weidner
                    </h1>
                </motion.div>

                <div className={styles.photoAndDescription}>
                    <img className={styles.profilePhoto} src="/profile-photo.jpg" alt="Jonas Weidner"/>

                    <div className={styles.descriptionWrapper}>
                        <motion.div
                            className={styles.lastName}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                        >
                            <p className={styles.description}>
                                Developer<br/>Entrepreneur<br/>Tech Enthusiast
                            </p>
                        </motion.div>
                        <div className={styles.socials}>
                            <a href="https://www.github.com/jonas-weidner" target="_blank">
                                <img src="/github.svg" alt="GitHub"/>
                            </a>

                            <a href="https://www.linkedin.com/in/jonasweidner" target="_blank">
                                <img src="/linkedin.svg" alt="LinkedIn"/>
                            </a>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Home;
