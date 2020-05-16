import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
      <main className="not__found">
          <div className="container">
            <div className="row h-100">
                <div className="col-sm-12">
                    <h1 >Il n'y a rien ici :)</h1>
                    <Link to='/'>
                        <h2>Revenir à l'accueil</h2>
                    </Link>
                </div>
            </div>
        </div>
      </main>
  </Layout>
)

export default NotFoundPage
