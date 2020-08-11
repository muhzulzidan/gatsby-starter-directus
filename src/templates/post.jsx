import React from 'react'
import { graphql, Link} from "gatsby"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout  from "../components/layout"

import SEO from "../components/seo"


export default function News ({ pageContext, data }) {
    const post = data.directusNews
    const { previous, next } = pageContext
    // const siteTitle = data.site.siteMetadata.title



    // styles 

    const tagList = post.tags.map((tag, id) =>
    <li style={{listStyle:"none", display:"inline", padding:"1em", background:"black", color:"white", marginLeft:"1em"}} key={id}>{tag}</li>
    );
    console.log(tagList)
    return (
        <div key={post.id} style={{background:"white"}}>
            <Layout >
            <div >
                <SEO title={post.title} />
                <h1 className="post-head"> {post.title} </h1>
                <p className="post-written"> di tulis oleh {post.author.first_name} {post.author.last_name}</p>
                <section >
                    <br/>
                        <h4 style={{ float: "right", margin:"0" }}>{tagList}</h4>
                    
                    <br/>
                    <br/>
                    <br/>
                    <div dangerouslySetInnerHTML={{ __html: post.body }}/>
                    <br/>
                    <br/>
                    <br/>

                </section>
            </div>
                <div >
                    <div >
                        {previous && (

                            <Link to={`/${previous.fields.slug}`} rel="prev"  >
                                <div  >
                                    <h3 style={{ margin: 0, fontSize: "1em" }} >
                                        {previous.title}
                                    </h3>
                                </div>
                                <div  >
                                    <FontAwesomeIcon icon="chevron-circle-left"></FontAwesomeIcon>
                                </div>
                            </Link>
                        )}
                    </div>
                    <div >
                        {next && (
                            <Link to={`/${next.fields.slug}`}
                                
                                rel="next">
                                <div  >
                                    <h3> {next.title}</h3>
                                </div>
                                <div  >
                                    <FontAwesomeIcon icon="chevron-circle-right" />
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            
            </Layout>
        </div>
    )
}


export const newsQuery = graphql`
    query ProgramQuery ($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        directusNews(fields: {slug: {eq: $slug}}) {
            id
            title
            tags
            body
            status
            summary
            fields {
                slug
            }
            author {
               first_name
               last_name
             }
        }
    }

` 
