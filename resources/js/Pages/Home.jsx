
import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import Layout from '../Layout'

export default function Home() {
    return (
        <Layout>
            <p>Bienvenue sur la page d'accueil</p>
            <Link href="/demo">Page demo</Link>
        </Layout>
    )
}
