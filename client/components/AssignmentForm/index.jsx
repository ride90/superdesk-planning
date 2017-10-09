import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm, propTypes } from 'redux-form'
import { CoverageDetails, EditAssignment } from '../../components'
import * as selectors from '../../selectors'
import { get } from 'lodash'

export class Component extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            assignment,
            readOnly,
            desks,
            usersMergedCoverageProviders,
            formProfile,
            handleSubmit,
            keywords,
        } = this.props

        return (
            <form onSubmit={handleSubmit} className="AssignmentForm">
                <fieldset>
                    <Field
                        name={'assigned_to'}
                        component={EditAssignment}
                        usersMergedCoverageProviders={usersMergedCoverageProviders}
                        desks={desks}
                        readOnly={readOnly} context={'assignment'} />

                    <label>Coverage Details</label>
                    <CoverageDetails
                        coverage={assignment}
                        formProfile={formProfile}
                        readOnly={true}
                        content_type={get(assignment, 'planning.g2_content_type')}
                        keywords={keywords}
                    />
                </fieldset>
            </form>
        )
    }
}

Component.propTypes = {
    ...propTypes,
    assignment: PropTypes.object,
    readOnly: PropTypes.bool,
    formProfile: PropTypes.object,
    usersMergedCoverageProviders: PropTypes.array.isRequired,
    desks: PropTypes.array.isRequired,
    keywords: PropTypes.array,
    onSubmit: PropTypes.func,
}

const mapStateToProps = (state) => ({
    initialValues: selectors.getCurrentAssignment(state),
    assignment: selectors.getCurrentAssignment(state),
    desks: selectors.getDesks(state),
    readOnly: selectors.getReadOnlyAssignment(state),
    formProfile: selectors.getCoverageFormsProfile(state),
    usersMergedCoverageProviders: selectors.getUsersMergedCoverageProviders(state),
    keywords: selectors.getKeywords(state),
})

const AssignmentReduxForm = reduxForm({
    form: 'assignment',
    enableReinitialize: true, //the form will reinitialize every time the initialValues prop changes
})(Component)

export const AssignmentForm = connect(
    mapStateToProps,
    null,
    null,
    { withRef: true })(AssignmentReduxForm)