import React from 'react';
import { render } from '@testing-library/react';
import SearchConceptsByLabel from './search-concepts-by-label';
import { MemoryRouter } from 'react-router-dom';

describe('concept-edition-creation-search-concepts-by-label', () => {
	it('renders without crashing', () => {
		render(
			<SearchConceptsByLabel
				searchLabel="label"
				hitEls={[<div>Element</div>]}
				handleSearch={() => console.log('save')}
			/>,
			{ wrapper: MemoryRouter }
		);
	});
});
