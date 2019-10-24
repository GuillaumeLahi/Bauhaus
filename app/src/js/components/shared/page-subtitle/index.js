import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './page-subtitle.scss';
import { ThemeContext } from 'bauhaus-library';

const PageSubtitle = ({ subTitle, context = 'concepts' }) => {
	const ctx = useContext(ThemeContext) || context;

	return (
		<div className="row">
			<div className="col-md-8 centered col-md-offset-2">
				<h3 className={`page-subtitle-${ctx}`}>{subTitle}</h3>
			</div>
		</div>
	);
};

export default PageSubtitle;

PageSubtitle.proptTypes = {
	subtitle: PropTypes.string.isRequired,
	context: PropTypes.oneOf(['', 'concepts', 'classifications', 'operations']),
};
