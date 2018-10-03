import React from 'react';
import { css } from 'emotion';

export default ({ url, poster }) => (
  <div
    className={css`
    `}
  >
    <video
      className={css`
        width: 100%;
      `}
      controls="controls"
      poster={poster}
      src={url}
      type="video/mp4"
    />
  </div>
);
