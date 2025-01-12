import React from 'react';

import { Note } from '@inseefr/wilco';
import { D1, D2 } from 'js/i18n';
import RelationsView from 'js/applications/operations/shared/relations';
import DisplayLinks from 'js/applications/operations/shared/links/';
import SeeAlso from 'js/applications/operations/shared/seeAlso';
import { getSeeAlsoByType } from 'js/applications/operations/shared/links/utils';
import { DateUtils, HTMLUtils, PublicationFemale, withTitle } from 'bauhaus-utilities';
import { PublishersView, CreatorsView } from 'bauhaus-operations';
import D from '../../../../i18n/build-dictionary';

function OperationsSerieVisualization({
	attr,
	langs: { lg1, lg2 },
	langs,
	secondLang,
	frequency = {},
	category = {},
	organisations = [],
}) {
	const seeAlso = getSeeAlsoByType(attr.seeAlso);

	const dataCollectors = (attr.dataCollectors || []).map(
		(d) => organisations.find((orga) => orga.id === d.id) || {}
	);
	const contributors = (attr.contributors || []).map(
		(d) => organisations.find((orga) => orga.id === d.id) || {}
	);
	return (
		<React.Fragment>
			<div className="row">
				<Note
					text={
						<ul>
							<li>
								{D1.createdDateTitle} : {DateUtils.stringToDate(attr.created)}
							</li>
							<li>
								{D1.modifiedDateTitle} : {DateUtils.stringToDate(attr.modified)}
							</li>
							<li>
								{D1.seriesStatus} : <PublicationFemale object={attr} />
							</li>
						</ul>
					}
					title={D1.globalInformationsTitle}
					alone={true}
				/>
			</div>
			<div className="row">
				<Note
					text={attr.altLabelLg1}
					title={D1.altLabel}
					lang={lg1}
					alone={!secondLang}
					allowEmpty={true}
				/>
				{secondLang && (
					<Note
						text={attr.altLabelLg2}
						title={D2.altLabel}
						lang={lg2}
						alone={false}
						allowEmpty={true}
					/>
				)}
			</div>
			<div className="row">
				<Note
					text={HTMLUtils.renderMarkdownElement(attr.abstractLg1)}
					title={D1.summary}
					lang={lg1}
					alone={!secondLang}
					allowEmpty={true}
				/>
				{secondLang && (
					<Note
						text={HTMLUtils.renderMarkdownElement(attr.abstractLg2)}
						title={D2.summary}
						lang={lg2}
						alone={false}
						allowEmpty={true}
					/>
				)}
			</div>

			<div className="row">
				<Note
					text={HTMLUtils.renderMarkdownElement(attr.historyNoteLg1)}
					title={D1.history}
					lang={lg1}
					alone={!secondLang}
					allowEmpty={true}
				/>
				{secondLang && (
					<Note
						text={HTMLUtils.renderMarkdownElement(attr.historyNoteLg2)}
						title={D2.history}
						lang={lg2}
						alone={false}
						allowEmpty={true}
					/>
				)}
			</div>

			<div className="row">
				<Note
					text={category.labelLg1}
					title={D1.operationType}
					lang={lg1}
					alone={!secondLang}
					allowEmpty={true}
				/>
				{secondLang && (
					<Note
						text={category.labelLg2}
						title={D2.operationType}
						lang={lg2}
						alone={false}
						allowEmpty={true}
					/>
				)}
			</div>

			<div className="row">
				<Note
					text={frequency.labelLg1}
					title={D1.dataCollectFrequency}
					lang={lg1}
					alone={!secondLang}
					allowEmpty={true}
				/>
				{secondLang && (
					<Note
						text={frequency.labelLg2}
						title={D2.dataCollectFrequency}
						lang={lg2}
						alone={false}
						allowEmpty={true}
					/>
				)}
			</div>

			<div id="publishers" className="row">
				<PublishersView publishers={attr.publishers} lg1={lg1} />
			</div>

			<DisplayLinks
				links={contributors}
				title={'stakeholders'}
				langs={langs}
				secondLang={false}
				displayLink={false}
				labelLg1="label"
			/>
			<DisplayLinks
				links={dataCollectors}
				title={'dataCollector'}
				langs={langs}
				secondLang={false}
				displayLink={false}
				labelLg1="label"
			/>

			<div id="creators" className="row">
				<CreatorsView creators={attr.creators} lg1={lg1} />
			</div>
			<DisplayLinks
				links={attr.replaces}
				path={'/operations/series/'}
				title={'replaces'}
				langs={langs}
				secondLang={secondLang}
			/>
			<DisplayLinks
				links={attr.isReplacedBy}
				path={'/operations/series/'}
				title={'replacedBy'}
				langs={langs}
				secondLang={secondLang}
			/>
			<DisplayLinks
				links={attr.generate}
				path={'/operations/indicator/'}
				title={'indicators'}
				langs={langs}
				secondLang={secondLang}
			/>

			<SeeAlso links={seeAlso} langs={langs} secondLang={secondLang} />

			<RelationsView
				children={attr.operations}
				childrenTitle={'childrenOperations'}
				childrenPath="operation"
				parent={attr.family}
				parentTitle={'parentFamilly'}
				parentPath="family"
				title={'linksTitle'}
				langs={{ lg1, lg2 }}
				secondLang={secondLang}
			/>
		</React.Fragment>
	);
}

export default withTitle(OperationsSerieVisualization, D.operationsTitle, props => {
	return props.attr?.prefLabelLg1;
});
