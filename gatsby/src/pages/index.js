import React from "react"
import {graphql, Link} from "gatsby"
// Local
import {GatsbyImage} from 'gatsby-plugin-image'

const styles = {
  courses: {
    marginTop: '5rem',
  },
  course: {
    width: '60%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
  },
  feature: {
    width: '300px',
    heigth: '300px',
  },
  info: {
    backgroundColor: '#EBEBEB',
    padding: '1rem',
    flexGrow: 1,
    '& h1': {
      margin: '.8rem 0 1.6rem 0',
      fontSize: '2.6rem',
    },
    '& dl:last-child': {
      marginBottom: 0,
    },
    '& dd:last-child': {
      marginBottom: 0,
    },
  }
}

const Index = ({
  data: {courses}
}) => (
  console.log(courses.nodes[0].frontmatter.feature.childImageSharp.fluid) ||
  <main css={styles.courses}>
    {courses.nodes.map( course =>
      <div css={styles.course} key={course.frontmatter.slug}>
        <div css={styles.feature}>
          {course.frontmatter.feature && (
            <GatsbyImage image={course.frontmatter.feature.childImageSharp.gatsbyImageData} title={course.frontmatter.title} alt={course.frontmatter.title} />
          )}
        </div>
        <div css={styles.info}>
          <h1>
            <Link to={course.frontmatter.slug}>{course.frontmatter.title}</Link>
          </h1>
          <dl>
            <dt>Teachers</dt>
            <dd>{course.frontmatter.authors.join(', ')}</dd>
            <dt>Course</dt>
            <dd>{course.frontmatter.school} - {course.frontmatter.period}</dd>
          </dl>
        </div>
      </div>
    )}
  </main>
);

export default Index;

export const query = graphql`
  query {
    courses: allAcademyCourse(
      sort: {order: ASC, fields: frontmatter___title}
    ) {
      nodes {
        frontmatter {
          authors
          feature {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          period
          school
          slug
          title
        }
      }
    }
  }
`
