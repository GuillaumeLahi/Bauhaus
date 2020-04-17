import React from 'react';
import { storiesOf } from '@storybook/react';
import ComponentsList from '.';
import { MemoryRouter } from 'react-router-dom';
const stories = storiesOf('ComponentsList', module);

const styleDecorator = storyFn => (
	<div className="col-md-12" style={{ marginTop: '5%' }}>
		<MemoryRouter>{storyFn()}</MemoryRouter>
	</div>
);
stories.addDecorator(styleDecorator);

const components = [
	{
		id: '5e7334002a5c764f68247222',
		label: 'veniam non irure',
		type: 'http://purl.org/linked-data/cube#dimension',
	},
	{
		id: '5e7334005ed839722436a194',
		label: 'elit duis occaecat',
		type: 'http://purl.org/linked-data/cube#dimension',
	},
	{
		id: '5e73340005f2ec3bb1f3c650',
		label: 'consequat dolore enim',
		type: 'http://purl.org/linked-data/cube#attribute',
	},
	{
		id: '5e73340055721b9d0973ff2f',
		label: 'elit amet minim',
		type: 'http://purl.org/linked-data/cube#attribute',
	},
	{
		id: '5e7334003b50ee5e36822866',
		label: 'quis tempor eu',
		type: 'http://purl.org/linked-data/cube#dimension',
	},
	{
		id: '5e733400d8aa9a26c5f52628',
		label: 'aliqua esse non',
		type: 'http://purl.org/linked-data/cube#attribute',
	},
	{
		id: '5e7334009457f744b1476876',
		label: 'reprehenderit proident pariatur',
		type: 'http://purl.org/linked-data/cube#measure',
	},
	{
		id: '5e7334003d12d6a0b6dbd5b7',
		label: 'dolor aute minim',
		type: 'http://purl.org/linked-data/cube#measure',
	},
	{
		id: '5e733400ef4fb3a62c5d6dd1',
		label: 'occaecat duis aliqua',
		type: 'http://purl.org/linked-data/cube#dimension',
	},
	{
		id: '5e7334003a17b4f43903b3ad',
		label: 'esse duis sint',
		type: 'http://purl.org/linked-data/cube#dimension',
	},
	{
		id: '5e7334006a716eeb6276126a',
		label: 'ex Lorem excepteur',
		type: 'http://purl.org/linked-data/cube#attribute',
	},
	{
		id: '5e7334003c98f68f2f5acd74',
		label: 'esse adipisicing proident',
		type: 'http://purl.org/linked-data/cube#measure',
	},
];

stories.add('Default', () => {
	return <ComponentsList items={components} />;
});
