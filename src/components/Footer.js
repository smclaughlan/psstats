import React from 'react';
import { Text, Anchor, Footer } from "grommet";

function SiteFooter() {

  return (
    <Footer background="brand" pad="medium">
      <Text>Copyright Sean McLaughlan</Text>
      <Anchor href="https://github.com/smclaughlan" label="GitHub" />
      <Anchor href="https://www.linkedin.com/in/sean-mclaughlan-0785031aa/" label="LinkedIn" />
    </Footer>
  )
}

export default SiteFooter;
