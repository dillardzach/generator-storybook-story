import React from 'react'

import { action } from '@storybook/addon-actions'
import { <%= name %> } from 'ui'

export default {
	title: '<%= fullname %>',
}

export const Default = () => 
	<<%= name %>></<%= name %>> 

export const Variant = () => 
		<<%= name %>></<%= name %>> 

/*Variant.story = {
		name: 'Variant',
}*/

		/*
    onClick={action('clicked')}
		*/
