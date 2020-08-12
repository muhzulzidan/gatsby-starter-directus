import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



const IndexPage = ({data}) => {
    const News = data.allDirectusNews.edges
  return(
  
  <Layout>
    <SEO title="Home" />
    <h1>News</h1>
    <ul className="index-ul">
    {News.map(({ node,  }) => {
      return (
          <li className="index-li" key={node.id}>
            <Link to={`/${node.fields.slug}`}>
              <div className="index-news">
                <h2 className="index-news-head-two">{node.title}</h2>
                <p className="index-news-paragraph"> Ditulis Oleh {node.author.first_name} {node.author.last_name} </p>
                <div className="index-tags">
                 {node.tags.map((tag, id) =>
                 { return(
                    <p key={id}>{tag}</p>
                 )})} 
                </div>
                
              </div>
            </Link>
          </li>
      )
   })}
  </ul>
  </Layout>
)}

export default IndexPage
export const indexQuery = graphql`
    query indexQuery  {
      allDirectusNews {
        edges {
          node {
            id
            title
            tags
             author {
               first_name
               last_name
             }
            fields {
              slug
            }
          }
        }
      }
    }

`