import React from 'react'
import { css } from 'emotion'
import Layout from '../components/layout'

const typography = css`
  color: #FEFF5F;
  background-color: #07301e;
  line-break: 1rem;
  padding: 1.3rem;
`

const IndexPage = () => (
  <Layout>
    <main
      className={css`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        max-width: 960px;
        margin: 2rem auto;
        font-family: 'Open Sans', sans-serif;
        border: 5px solid #FEFF5F;
        @media (max-width: 609px) {
          margin-top: 0;
        }
      `}
    >
      <div className={css`
        padding:2rem;
        background-color: #feff5f;
        background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238d8d8d' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      `}>
        <h1 className={css`
          ${typography}
          font-family: 'Kaushan Script', cursive;
        `}>What is this noise?</h1>
        <p className={typography}>
          As a way to challenge myself creatively I will try to make one song
          per month.
        </p>
        <p className={typography}>
          It can be anything, from a small 10 second loop to a full fledged
          song.
        </p>
      </div>
      <div className={css`
        padding:2rem;
        background-color:#07301e;
      `}>
        <iframe
          title="songs"
          width="100%"
          height="450"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/514831743%3Fsecret_token%3Ds-E4ZJP&color=%2307301f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        />
      </div>
    </main>
  </Layout>
)

export default IndexPage
