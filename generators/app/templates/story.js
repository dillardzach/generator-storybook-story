/* <%= pkg %> <%= version %> */
import React from 'react'

//import { action } from '@storybook/addon-actions'

import { <%= name %> } from 'ui'
//import QUERY from './graphql/query.graphql'
//import { AplProvider } from 'stories/utils'
//import { Router } from 'stories/utils'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title: '<%= fullname %>',
  component:<%= name %>,
  //componentSubtitle:'Component subtitle',
  subcomponents: {
    //<%= name %>.Item
  }
  parameters: {
    decorators: [ 
      //storyfn => <div className="">{ storyfn() }</div>,
      //storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
      //storyfn => <Router>{ storyfn() }</Router>,
    ]
  }
}

export const Default = () => (
  <<%= name %>></<%= name %>> 
)

export const Variant = () => (
    <<%= name %>></<%= name %>> 
)

