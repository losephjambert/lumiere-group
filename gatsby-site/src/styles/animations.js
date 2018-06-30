import { keyframes } from 'styled-components'

export const hideMenu = keyframes`
  0% {
    transform: translate3d(0,0,0);
    opacity: 1;
  }
  
  99% {
    transform: translate3d(0,0,0);
    opacity: 0;
  }
  
  100% {
    transform: translate3d(-100vw,0,0);
    opacity: 0;
  }
  `;
  
export const showMenu = keyframes`
  0% {
    transform: translate3d(-100vw,0,0);
    opacity: 0;
  }
  
  1% {
    transform: translate3d(0,0,0);
    opacity: 0;
  }

  100% {
    transform: translate3d(0,0,0);
    opacity: 1;
  }
`;