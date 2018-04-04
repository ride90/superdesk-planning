import {get} from 'lodash';
import {createSelector} from 'reselect';
import {getEnabledAgendas} from '../utils';

export const currentWorkspace = (state) => get(state, 'workspace.currentWorkspace', null);
export const modalType = (state) => get(state, 'modal.modalType');
export const modalProps = (state) => get(state, 'modal.modalProps');

export const agendas = (state) => get(state, 'agenda.agendas', []);
export const enabledAgendas = createSelector(
    [agendas],
    (agendas) => getEnabledAgendas(agendas)
);

export const session = (state) => get(state, 'session');
export const sessionId = (state) => get(state, 'session.sessionId');
export const userPreferences = (state) => get(state, 'session.userPreferences');

export const currentUserId = createSelector(
    [session],
    (session) => get(session, 'identity._id')
);
