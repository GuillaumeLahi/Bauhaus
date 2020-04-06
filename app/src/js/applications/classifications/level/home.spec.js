import React from 'react';
import { render } from '@testing-library/react';
import Home from './home';
import { MemoryRouter } from 'react-router-dom';

const level = {
	general: { prefLabelLg1: 'Label', classificationId: 'id' },
	members: [{ id: '1', label: 'Member 1' }],
};

const langs = { lg1: 'fr', lg2: 'en' };

describe('classification-level-home', () => {
	it('renders without crashing', () => {
		render(
			<Home
				level={level}
				langs={langs}
				secondLang={true}
				saveSecondLang={() => console.log('save second lang')}
			/>,
			{ wrapper: MemoryRouter }
		);
	});
});