import React from 'react'

import { action } from '@storybook/addon-actions'
import { <%= name %> } from 'ui'

export default {
	title: '<%= name %>',
}

export const <%= name %>Default = () => 
	<<%= name %>></<%= name %>> 

export const <%= name %>Variant = () => 
		<<%= name %>></<%= name %>> 

	<%= name %>Variant.story = {
		name: 'Variant',
}

		/*
    onClick={action('clicked')}
		*/
