import { keyframes } from 'styled-components'

export const hideMenu = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }

  90% {
    transform: scale(.98);
    opacity: 0;
  }

  100% {
    transform: scale(0) translate(-100vw);
    opacity: 0;
  }
`;

export const showMenu = keyframes`
0% {
  opacity: 0;
}

100% {
  opacity: 1;
}
`;