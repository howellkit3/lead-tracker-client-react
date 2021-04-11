import React from 'react';
import { connect } from 'react-redux';
import { editLead, fetchLeads, fetchContractors, fetchLenders, fetchAgents } from '../../actions'
import LeadForm from './LeadForm';

class LeadEdit extends React.Component {
    componentWillMount() {
        const {fetchLeads, fetchAgents, fetchContractors, fetchLenders} = this.props;
        fetchLeads();
        fetchAgents();
        fetchContractors();
        fetchLenders();
    }


    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    onSubmit = (formValues) => {
        const {id} = this.props.match.params;
        formValues.id = id;;
        this.props.editLead(id, formValues);
    }
    
    render() {
        return (
            <div className="ui main text container">
                <div className="ui form" >
                    <h4 className="ui dividing header">Edit a Lead</h4>
                    <div className="field" style={{marginTop: '5%'}}>
                    <LeadForm 
                        initialValues={this.props.lead}
                        agents={this.props.agents} 
                        contractors={this.props.contractors} 
                        lenders={this.props.lenders} 
                        onSubmit={this.onSubmit}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        lead: state.leads[ownProps.match.params.id],
        agents : state.agents,
        contractors : state.contractors,
        lenders : state.lenders
    }
}

export default connect(mapStateToProps, { editLead, fetchLeads, fetchAgents, fetchContractors, fetchLenders })(LeadEdit)