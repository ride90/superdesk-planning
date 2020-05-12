
export const waitForPageLoad = {
    planning: () => {
        cy.log('UI.waitForPageLoad');
        // Wait for the xhr request to complete for retrieving list of events & planning
        // Waiting for up to 6 minutes to complete loading xhr requests
        // as this can sometimes take a while on initial load
        cy.server();
        cy.route('GET', '**/api/events_planning_search*').as('getPlanningEventsSearch');
        cy.wait('@getPlanningEventsSearch', {timeout: 360000});

        // Now wait for the plus icon to be present
        cy.get('.icon-plus-large');
    },
    contacts: () => {
        cy.log('UI.waitForPageLoad');
        // Wait for the xhr request to complete for retrieving list of events & planning
        // Waiting for up to 6 minutes to complete loading xhr requests
        // as this can sometimes take a while on initial load
        cy.server();
        cy.route('GET', '**/api/contacts*').as('getContactsSearch');
        cy.wait('@getContactsSearch', {timeout: 360000});

        // Now wait for the plus icon to be present
        cy.get('.icon-plus-large');
    },
};

export {ActionMenu} from './actionMenu';
export {Modal} from './modal';
export {Popup} from './popup';
export {SubNavBar} from './subNavBar';
export {Workqueue} from './workqueue';
