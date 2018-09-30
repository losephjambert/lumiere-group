import {injectGlobal} from 'styled-components'
import {Colors} from './styleVariables'

import Regular from '../fonts/Europa-Regular.ttf'
import Bold from '../fonts/Europa-Bold.ttf'
import BoldItalic from '../fonts/Europa-BoldItalic.ttf'
import Light from '../fonts/Europa-Light.ttf'
import LightItalic from '../fonts/Europa-LightItalic.ttf'
import RegularItalic from '../fonts/Europa-RegularItalic.ttf'
import RegularWOFF from '../fonts/Europa-Regular.woff'
import BoldWOFF from '../fonts/Europa-Bold.woff'
import BoldItalicWOFF from '../fonts/Europa-BoldItalic.woff'
import LightWOFF from '../fonts/Europa-Light.woff'
import LightItalicWOFF from '../fonts/Europa-LightItalic.woff'
import RegularItalicWOFF from '../fonts/Europa-RegularItalic.woff'
import RegularWOFF2 from '../fonts/Europa-Regular.woff2'
import BoldWOFF2 from '../fonts/Europa-Bold.woff2'
import BoldItalicWOFF2 from '../fonts/Europa-BoldItalic.woff2'
import LightWOFF2 from '../fonts/Europa-Light.woff2'
import LightItalicWOFF2 from '../fonts/Europa-LightItalic.woff2'
import RegularItalicWOFF2 from '../fonts/Europa-RegularItalic.woff2'



injectGlobal`

  @font-face {
    font-family: 'Europa Light';
    src:  url(${LightWOFF2}) format('woff2'),
          url(${LightWOFF}) format('woff'),
          url(${Light}) format('truetype');
  }
  @font-face {
    font-family: 'Europa Light Italic';
    src:  url(${LightItalicWOFF2}) format('woff2'),
          url(${LightItalicWOFF}) format('woff'),
          url(${LightItalic}) format('truetype');
  }
  @font-face {
    font-family: 'Europa Regular';
    src:  url(${RegularWOFF2}) format('woff2'),
          url(${RegularWOFF}) format('woff'),
          url(${Regular}) format('truetype');
  }
  @font-face {
    font-family: 'Europa Regular Italic';
    src:  url(${RegularItalicWOFF2}) format('woff2'),
          url(${RegularItalicWOFF}) format('woff'),
          url(${RegularItalic}) format('truetype');
  }
  @font-face {
    font-family: 'Europa Bold';
    src:  url(${BoldWOFF2}) format('woff2'),
          url(${BoldWOFF}) format('woff'),
          url(${Bold}) format('truetype');
  }
  @font-face {
    font-family: 'Europa Bold Italic';
    src:  url(${BoldItalicWOFF2}) format('woff2'),
          url(${BoldItalicWOFF}) format('woff'),
          url(${BoldItalic}) format('truetype');
  }
  *::-moz-selection {
    color: ${Colors.white};
    background: ${Colors.black};
  }
  
  *::selection {
    color: ${Colors.white}; 
    background: ${Colors.black};
  }
  
  `