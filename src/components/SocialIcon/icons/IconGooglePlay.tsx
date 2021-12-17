import React from 'react';

import { IconProps } from './index';

const Icon = ({ isColour, ...props }: IconProps) => (
  <svg width="100%" height="100%" viewBox="0 0 512 512" fill="none" {...props}>
    {isColour ? (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.065 7.78C29.309 13.967 26 23.49 26 35.863V475.98c0 12.374 3.309 21.896 9.28 27.867l1.56 1.318L283.45 258.558v-5.541L36.625 6.462l-1.56 1.318z"
          fill="#00D2FF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M365.49 341.083L283.233 258.8v-5.756l82.284-82.284 1.775 1.103 97.32 55.304c27.867 15.709 27.867 41.586 0 57.51l-97.32 55.304c-.027 0-1.802 1.102-1.802 1.102z"
          fill="#FFE000"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M367.266 339.981l-84.032-84.059L35.066 504.09c9.065 9.738 24.316 10.84 41.37 1.318l290.83-165.427z"
          fill="#FF3A44"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M367.266 171.89L76.436 6.677C59.41-3.06 44.131-1.742 35.066 7.995l248.141 247.927 84.059-84.032z"
          fill="#00F076"
        />
      </>
    ) : (
      <path
        fill="currentColor"
        d="M325 234.3L104.3 13l280.8 161.2-60.1 60.1zM46.7 0C33.7 6.8 25 19.2 25 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L46.7 0zm425.2 225.6L413 191.5 347.3 256l65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.3 499l280.8-161.2-60.1-60.1L104.3 499z"
      />
    )}
  </svg>
);
export default Icon;
