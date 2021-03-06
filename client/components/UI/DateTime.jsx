import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {appConfig} from 'appConfig';

import './style.scss';
import {gettext} from '../../utils';
import {TO_BE_CONFIRMED_SHORT_TEXT} from '../../constants';

/**
 * @ngdoc react
 * @name DateTime
 * @description DateTime component to display text formatted date and time
 */
function DateTime({date, withTime, withDate, withYear, padLeft, toBeConfirmed}) {
    const dateFormat = appConfig.view.dateformat;
    const timeFormat = appConfig.view.timeformat;
    const newTimeFormat = toBeConfirmed ? `[${gettext(`Time ${TO_BE_CONFIRMED_SHORT_TEXT}`)}]` : timeFormat;
    let format = withYear ? dateFormat : dateFormat.replace(/([\/\#.-]y+)|(y+[\/\#.-])/gi, '');
    let dateTimeFormat = [
        withDate ? format : null,
        withTime ? newTimeFormat : null,
    ].filter((d) => d).join('\u00a0'); // &nbsp;

    return <time
        className={!padLeft ? 'Datetime' : null}
        title={date.toString()}
    >
        {moment(date).format(dateTimeFormat)}
    </time>;
}

DateTime.propTypes = {
    date: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
    ]).isRequired,
    withTime: PropTypes.bool,
    withYear: PropTypes.bool,
    withDate: PropTypes.bool,
    padLeft: PropTypes.bool,
    toBeConfirmed: PropTypes.bool,
};

DateTime.defaultProps = {
    withTime: true,
    withDate: true,
    withYear: true,
    padLeft: false,
};

export default DateTime;
