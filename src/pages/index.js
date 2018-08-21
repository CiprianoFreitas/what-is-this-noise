import React from 'react'
import { css } from 'emotion'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <main
      className={css`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        margin: 4rem 3rem;
      `}
    >
      <div>
        <h1>What is this noise?</h1>
        <p>
          As a way to challenge myself creatively I will try to make one song
          per month.
        </p>
        <p>
          It can be anything, from a small 10 second loop to a full fledged
          song.
        </p>
      </div>
      <div>
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
