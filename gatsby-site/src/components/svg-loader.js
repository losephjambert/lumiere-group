import React from 'react';
import SVG from 'react-inlinesvg';

const SVGLoader = ({ source, className }) => (
<SVG
    src={source}
    className ={className}
    onLoad={(src) => {
        src;
    }}
>
</SVG>
)

export default SVGLoader