import React from 'react';
import PageTitle from 'js/components/shared/page-title';
import { Button } from 'bauhaus-library';
import D from 'js/i18n';

export default () => (
	<div className="container">
		<PageTitle title={D.notFoundTitle} />
		<div className="row">
			<div className="col-md-5" />
			<Button className="col-md-offset-5" label={D.home} action="/" />
		</div>
	</div>
);
