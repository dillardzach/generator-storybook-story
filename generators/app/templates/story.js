/* <%= pkg %> <%= version %> */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { <%= name %> } from 'ui'
//import QUERY from './graphql/query.graphql'
//import { AplProvider } from 'stories/utils'
//import { Router } from 'stories/utils'
//import {ALL_COLORS, SIZES } from 'stories/config.js'
//import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title: '<%= fullname %>',
  component:<%= name %>,
  //componentSubtitle:'Component subtitle',
  subcomponents: {
    //Item:<%= name %>.Item
  },
  parameters: {
    decorators: [ 
      //storyfn => <div className="">{ storyfn() }</div>,
      //storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
      //storyfn => <Router>{ storyfn() }</Router>,
    ]
  }
}

/*

const storyParameters = {
 previewTabs: {
    'canvas': {
      hidden: true
    },
  }
}

 */

export const Default = () => (
  <<%= name %>></<%= name %>> 
)

//Default.parameters = storyParameters

export const Variant = () => (
    <<%= name %>></<%= name %>> 
)

//Variant.parameters = storyParameters
