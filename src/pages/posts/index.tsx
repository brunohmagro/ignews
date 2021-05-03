import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>03 de Maio de 2021</time>
                        <strong>Title of Post</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque doloremque quia alias? Aliquam illum, laboriosam quia dolor odio ratione. Ab voluptas sequi cupiditate corporis dolorum, rerum commodi adipisci dolore enim!</p>
                    </a>

                    <a href="#">
                        <time>03 de Maio de 2021</time>
                        <strong>Title of Post</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque doloremque quia alias? Aliquam illum, laboriosam quia dolor odio ratione. Ab voluptas sequi cupiditate corporis dolorum, rerum commodi adipisci dolore enim!</p>
                    </a>

                    <a href="#">
                        <time>03 de Maio de 2021</time>
                        <strong>Title of Post</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque doloremque quia alias? Aliquam illum, laboriosam quia dolor odio ratione. Ab voluptas sequi cupiditate corporis dolorum, rerum commodi adipisci dolore enim!</p>
                    </a>
                </div>
            </main>
        </>
    )
}