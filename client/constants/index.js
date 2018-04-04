export {PRIVILEGES} from './privileges';
export {PLANNING} from './planning';
export {AGENDA} from './agenda';
export {ASSIGNMENTS} from './assignments';
export {TOOLTIPS} from './tooltips';
export {LOCKS} from './locks';
export {WORKSPACE} from './workspace';
export {MODALS} from './modals';
export {UI} from './ui';
export {AUTOSAVE} from './autosave';
export {MAIN} from './main';
export {KEYCODES} from './keycodes';
export {EVENTS_PLANNING} from './eventsplanning';
export {COVERAGES} from './coverages';
export {MULTISELECT} from './multiselect';
export {CONTACTS} from './contacts';

export const LIST_ITEM_1_LINE_HEIGHT = 38;
export const LIST_ITEM_2_LINES_HEIGHT = 56;
export const EVENT_LIST_DAY_HEADER_HEIGHT = 43;
export const PLANNING_LIST_ITEM_MARGIN_HEIGHT = 20;
export {EVENTS} from './events';

export const WS_NOTIFICATION = 'WS_NOTIFICATION';

export const DATE_FORMATS = {
    COMPARE_FORMAT: 'YYYY-M-D',
    DISPLAY_DATE_FORMAT: 'D. MMMM YYYY HH:mm',
    DISPLAY_CDATE_FORMAT: 'D. MMMM HH:mm',
    DISPLAY_DAY_FORMAT: 'dddd, ',
    DISPLAY_TODAY_FORMAT: '[Today], ',
};

export const WORKFLOW_STATE = {
    DRAFT: 'draft',
    INGESTED: 'ingested',
    SCHEDULED: 'scheduled',
    KILLED: 'killed',
    CANCELLED: 'cancelled',
    RESCHEDULED: 'rescheduled',
    POSTPONED: 'postponed',
    SPIKED: 'spiked'
};

export const PUBLISHED_STATE = {
    USABLE: 'usable',
    CANCELLED: 'cancelled',
};

export const GENERIC_ITEM_ACTIONS = {
    DIVIDER: {label: 'Divider'},
    LABEL: {text: 'Label'},
};

export const SPIKED_STATE = {
    SPIKED: WORKFLOW_STATE.SPIKED,
    NOT_SPIKED: WORKFLOW_STATE.DRAFT,
    BOTH: 'both',
};

export const RESET_STORE = 'RESET_STORE';
export const INIT_STORE = 'INIT_STORE';
export const FORM_NAMES = {
    UpdateRecurringEventsForm: 'updateEventConfirmation',
    RescheduleForm: 'rescheduleEvent',
    ConvertEventToRecurringForm: 'convertEventToRecurring',
    ReassignAssignmentForm: 'reassignAssignmentForm',
    EditAssignmentPriorityForm: 'editAssignmentPriorityForm',
    UpdateAssignmentForm: 'updateAssignmentForm',
    PlanningForm: 'planning',
    EventForm: 'event',
};

/*
 * Types of content
 */
export const ITEM_TYPE = {
    EVENT: 'event',
    PLANNING: 'planning',
    ASSIGNMENT: 'assignment',
    TEXT: 'text',
    PICTURE: 'picture',
    VIDEO: 'video',
    AUDIO: 'audio',
    GRAPHIC: 'graphic',
    COMPOSITE: 'composite',
    UNKNOWN: 'unknown'
};

export const TEMP_ID_PREFIX = 'tempId-';

// The delay in ms for use with single and double click detection
export const CLICK_DELAY = 250;

export const USER_ACTIONS = {
    SET_USER_PREFERNCES: 'SET_USER_PREFERNCES'
};