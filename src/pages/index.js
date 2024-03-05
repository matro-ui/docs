import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import s from './index.module.css';
import { Footer, SupportCTA } from '../components/';
import { Button } from 'matro-ui/src/other/Button';
import { IoArrowForwardOutline, IoLogoGithub } from 'react-icons/io5';

function HomepageHeader() {
  return (
    <header className={s.heroBanner}>
      <div className="container">
        <Heading as="h1" className={s.hero__title}>
          <span>Streamlined UI</span> Library for React Apps.
        </Heading>
        <p className={s.hero__subtitle}>
          Matro UI is a simple, modular library that provides all essential components for your React applications.
        </p>
        <div className={s.buttons}>
          <Button
            rightIcon={<IoArrowForwardOutline />}
            hue="250"
            as={<Link to="/docs/intro" />}>Get Started</Button>
          <Button
            leftIcon={<IoLogoGithub />}
            as={<a href="https://github.com/matro-ui/matro-ui/" target='_blank' />}
          >Github</Button>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Matro UI - a simple, modular library that provides all essential components for your React applications.`}
      description="Matro UI is a simple, modular library that provides all essential components for your React applications.">
      <HomepageHeader />
      <main>
        <SupportCTA />
      </main>
      <Footer />
    </Layout>
  );
}
