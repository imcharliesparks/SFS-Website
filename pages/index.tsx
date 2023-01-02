import * as React from 'react'
import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { NextAuthStatues } from '../shared/types'
import styles from '../styles/Home.module.css'
import CustomHead from '../components/Layout/Head'

const Home: NextPage = () => {
	const { data: session, status } = useSession()

	return (
		<div className="container mx-auto">
			<CustomHead title="Sparks Full-Stack" />

			<main className="flex flex-col items-center pt-4 pb-24">
				<h1 className={styles.title}>
					Welcome to the Template!{' '}
					{session && status === NextAuthStatues.AUTHENTICATED ? `You're signed in!` : `You're not signed in.`}
				</h1>

				<p className={styles.description}>Here&apos;s what we&apos;ve got so far</p>

				<div className={styles.grid}>
					<Link href="/auth/sign-up" className={styles.card}>
						<div className={`${styles.card} ${styles.cardLink}`}>
							<h2>Sign Up &rarr;</h2>
							<p>Create an account!</p>
						</div>
					</Link>

					<Link href="/auth/sign-in" className={styles.card}>
						<div className={`${styles.card} ${styles.cardLink}`}>
							<h2>Sign In</h2>
							<p>Sign in once you&apos;ve created an account!</p>
						</div>
					</Link>

					<Link href="/app/protected-page-example">
						<div className={`${styles.card} ${styles.cardLink}`}>
							<h2>Protected Page</h2>
							<p>View the protected page and redirect functionality (if not signed in)</p>
						</div>
					</Link>

					<Link href="/app/entity/create-entity" className={styles.card}>
						<div className={`${styles.card} ${styles.cardLink}`}>
							<h2>Entities</h2>
							<p>Create a new data entity with your account!</p>
						</div>
					</Link>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	)
}

export default Home
