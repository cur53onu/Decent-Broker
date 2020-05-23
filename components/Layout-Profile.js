import React from 'react';
import ViewProfileC from './ViewProfileC'
import {Container,Icon} from 'semantic-ui-react';
import Head from 'next/head';
export default (props)=>{
  return(
    <Container>
    <Head>
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
    </Head>
    <center>
    <h1 class="ui header" class="ui grey header">
    <div class="content">
    <Icon name="user secret"/>
      Decent Broker
    <Icon name="user secret"/>
    </div>
    </h1>
    </center>
    <ViewProfileC/>
    {props.children}
    </Container>
  );
};
