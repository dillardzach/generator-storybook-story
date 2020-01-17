import React from 'react'

//import { action } from '@storybook/addon-actions'

import { <%= name %> } from 'ui'
//import QUERY from './graphql/query.graphql'
//import TestClient from 'stories/TestClient'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title: '<%= fullname %>',
  component:<%= name %>,
  parameters: {
    decorators: [ 
      //storyfn => <div className="">{ storyfn() }</div>,
      //storyfn => <TestClient endpoint={ endpoint }>{ storyfn() }</TestClient>,
    ]
  }
}

export const Default = () => (
  <<%= name %>></<%= name %>> 
)

export const Variant = () => (
    <<%= name %>></<%= name %>> 
)

