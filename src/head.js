import React from 'react';
import Index from './pages/index';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <title>GrowMyBusiness</title>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body {...props.bodyAttributes}>
        <Index />
      </body>
    </html>
  );
}
