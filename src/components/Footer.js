import React from 'react';
import { Text, Anchor, Footer } from "grommet";

function SiteFooter() {

  return (
    <Footer as="footer" background="brand" pad="medium">
      <Text>Copyright Sean McLaughlan</Text>
      <Anchor href="https://github.com/smclaughlan" target="_blank" label="GitHub" />
      <Anchor href="https://www.linkedin.com/in/sean-mclaughlan/" target="_blank" label="LinkedIn" />
    </Footer>
  )
}

export default SiteFooter;
