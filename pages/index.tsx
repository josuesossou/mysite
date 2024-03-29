import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { Fira_Sans } from '@next/font/google'
import getData from '../src/lib/getData'
import Head from 'next/head'
import Main from '../src/components/portfolio/main'
import NavLinks from '../src/components/portfolio/navlinks'
import Project from '../src/components/portfolio/project'
import Skills from '../src/components/portfolio/skills'
import About from '../src/components/portfolio/about'
import Footer from '../src/components/footer'
import Contact from '../src/components/portfolio/contact'

const fiaraFont = Fira_Sans({ subsets: ['latin'], weight: ["300"]})

const PortfolioPage: NextPage = ({ 
    about,
    projects,
    skills
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div  className={fiaraFont.className}>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/portfolioLogo.png" />
            </Head>


            <Main />
            <About data={about} />
            <Project data={projects} />
            <Skills data={skills}/>
            <Contact />
            <Footer />
            <NavLinks />
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const { about, skills, projects } = getData()

    return {
        props: {
            about,
            skills,
            projects
        }
    }
}

export default PortfolioPage