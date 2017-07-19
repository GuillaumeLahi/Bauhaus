import React from 'react';
import PropTypes from 'prop-types';
import { dictionary } from 'js/utils/dictionary';
import DatePickerRmes from 'js/utils/date-picker-rmes';
import SelectRmes from 'js/utils/select-rmes';
import InputRmes from 'js/components/shared/input-rmes';
import flagFr from 'js/components/shared/flag-fr';
import flagEn from 'js/components/shared/flag-en';
import {
  propTypes as generalPropTypes,
  fields as generalFields,
} from 'js/utils/concepts/general';

//TODO make an utility function (see `notes-edition.js` for another usage)
const handleFieldChange = handleChange =>
  //TODO rewrite fields (required should be handled elsewhere)
  generalFields.reduce((handlers, [fieldName]) => {
    handlers[fieldName] = value => handleChange({ [fieldName]: value });
    return handlers;
  }, {});

function ConceptGeneralEdition({
  general,
  stampsList,
  disseminationStatusList,
  handleChange,
}) {
  const {
    prefLabelFr,
    prefLabelEn,
    altLabelFr,
    altLabelEn,
    disseminationStatus,
    creator,
    contributor,
    additionnalMaterial,
    dateEnd,
  } = general;

  const handlers = handleFieldChange(handleChange);
  return (
    <div>
      <h4 className="centered">
        ( <span className="boldRed">*</span> : {dictionary.requiredFields})
      </h4>
      <div className="row">
        {/* TODO Work on consistency between different Rmes fields markup (for
           instance, `InputRmes` includes the label and the star). */}
        <InputRmes
          colMd={6}
          label={dictionary.concept.label}
          flag={flagFr}
          star
          value={prefLabelFr}
          handleChange={handlers.prefLabelFr}
        />
        <InputRmes
          colMd={6}
          label={dictionary.concept.label}
          flag={flagEn}
          value={prefLabelEn}
          handleChange={handlers.prefLabelEn}
        />
      </div>
      <div className="row">
        <InputRmes
          colMd={6}
          label={dictionary.concept.altLabel}
          flag={flagFr}
          value={altLabelFr}
          handleChange={handlers.altLabelFr}
        />
        <InputRmes
          colMd={6}
          label={dictionary.concept.altLabel}
          flag={flagFr}
          value={altLabelEn}
          handleChange={handlers.altLabelEn}
        />
      </div>
      <div className="form-group">
        <label>
          {dictionary.concept.creator} <span className="boldRed">*</span>
        </label>
        <SelectRmes
          className="form-control"
          placeholder={dictionary.concept.stamps.defaultValue}
          value={creator}
          options={stampsList}
          onChange={handlers.creator}
          searchable={true}
        />
      </div>
      <div className="form-group">
        <label>
          {dictionary.concept.contributor}
        </label>
        <input
          type="text"
          className="form-control"
          defaultValue={contributor}
          disabled
        />
      </div>
      <div className="form-group">
        <label>
          {dictionary.concept.disseminationStatus.title}{' '}
          <span className="boldRed">*</span>
        </label>
        <SelectRmes
          className="form-control"
          placeholder={dictionary.concept.disseminationStatus.defaultValue}
          value={disseminationStatus}
          options={disseminationStatusList}
          onChange={handlers.disseminationStatus}
          searchable={true}
        />
      </div>
      <div className="form-group">
        <label>
          {dictionary.concept.additionnalMaterial}
        </label>
        <div className="input-group">
          <span className="input-group-addon">http://</span>
          {/* TODO previous version worked with `defaultValue` 
                  -> check if everything is ok */}
          <input
            type="text"
            className="form-control"
            value={additionnalMaterial.replace('http://', '')}
            onChange={e => handlers.additionnalMaterial(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group">
        <label>
          {dictionary.concept.valid}
        </label>
        <DatePickerRmes
          value={dateEnd}
          onChange={handlers.dateEnd}
          placement="top"
        />
      </div>
    </div>
  );
}

ConceptGeneralEdition.propTypes = {
  general: generalPropTypes.isRequired,
  handleChange: PropTypes.func.isRequired,
  stampsList: PropTypes.array.isRequired,
  disseminationStatusList: PropTypes.array.isRequired,
};

export default ConceptGeneralEdition;
