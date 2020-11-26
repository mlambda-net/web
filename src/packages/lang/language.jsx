import React from 'react';
import { LanguageContext } from '@mlambda-net/core/lang/context';

const withLanguage = (Component) => {
  return (props) => (
    <LanguageContext.Consumer>
      {(value) => <Component lang={value == "" ? "en": ""} {...props} />}
    </LanguageContext.Consumer>
  );
};

export default withLanguage;
