import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Note } from '@inseefr/wilco';
import { useSelector } from 'react-redux';
import { CheckSecondLang, Stores, PageTitleBlock } from 'bauhaus-utilities';
import Components from './components';
import D from 'js/i18n';
import {
	StructureAPI,
	StructureVisualizationControl,
} from 'bauhaus-structures';

const DSD = props => {
	const { dsdId } = useParams();
	const [DSD, setDSD] = useState({});
	const secondLang = useSelector(state =>
		Stores.SecondLang.getSecondLang(state)
	);

	useEffect(() => {
		StructureAPI.getStructure(dsdId).then(res => setDSD(res));
	}, [dsdId]);

	const { labelLg1, labelLg2, descriptionLg1, descriptionLg2 } = DSD;
	return (
		<>
			<PageTitleBlock
				secondLang={secondLang}
				titleLg1={labelLg1}
				titleLg2={labelLg2}
			/>
			<CheckSecondLang />

			<StructureVisualizationControl />
			<div className="row">
				{descriptionLg1 && (
					<Note
						title={D.descriptionTitle}
						text={descriptionLg1}
						alone={!secondLang}
						allowEmpty={true}
					/>
				)}
				{secondLang && (
					<Note
						title={D.descriptionTitle}
						text={descriptionLg2}
						alone={false}
						allowEmpty={true}
					/>
				)}
			</div>
			<Components />
		</>
	);
};

export default DSD;
