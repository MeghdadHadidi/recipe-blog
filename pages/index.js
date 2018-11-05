import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import Layout from "../components/layout"

import "../static/css/style.css"
import "../static/css/sty.scss"

export default () => (
    <Container>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout />
    </Container>
  )