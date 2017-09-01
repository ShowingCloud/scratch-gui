import PropTypes from 'prop-types';
import React from 'react';
import {FormattedMessage} from 'react-intl';

import Box from '../box/box.jsx';
import languages from '../../locale.js';
import languageIcon from './language-icon.svg';
import styles from './language-selector.css';

const LanguageSelector = ({
    currentLocale,
    onChange,
    ...props
}) => (
    <Box {...props}>
        <div className={styles.group}>
            <img
                className={styles.languageIcon}
                src={languageIcon}
            />
            <div className={styles.languageSelectLabel}>
                <FormattedMessage
                    defaultMessage="Language"
                    description="Label of Langauge Selector"
                    id="menuBar.languageSelector"
                />
            </div>
            <select
                className={styles.languageSelect}
                value={currentLocale}
                onChange={onChange}
            >
                {Object.keys(languages).map(locale => (
                    <option
                        key={locale}
                        value={locale}
                    >
                        {languages[locale].name}
                    </option>
                ))}
            </select>
        </div>
    </Box>
);


LanguageSelector.propTypes = {
    currentLocale: PropTypes.string,
    onChange: PropTypes.func
};

export default LanguageSelector;
