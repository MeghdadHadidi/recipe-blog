import Head from "next/head"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "reactstrap"
import Layout from "../components/layout"

import "../static/css/style.css"
import "../static/css/sty.scss"

export default () => (
    <Container>
        <Head>
            <title>My page title</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        </Head>
        <Layout />
    </Container>
)
