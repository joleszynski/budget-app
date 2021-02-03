import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOutgoingsList, addOutgoingRecord, deleteOutgoingRecord } from 'actions/outgoings';
import DashboardTemplate from 'templates/DashboardTemplate';
import DashboardInnerTemplate from 'templates/DashboradInnerTemplate';

class OutgoingsPage extends React.Component {
  componentDidMount() {
    const { getOutgoingsListAction } = this.props;
    getOutgoingsListAction();
  }

  render() {
    const { outgoingsList, addOutgoingRecordAction, deleteOutgoingRecordAction } = this.props;

    return (
      <DashboardTemplate name="Outgoings">
        <DashboardInnerTemplate
          pageType="outgoings"
          data={outgoingsList}
          addAction={addOutgoingRecordAction}
          deleteAction={deleteOutgoingRecordAction}
        />
      </DashboardTemplate>
    );
  }
}

OutgoingsPage.propTypes = {
  getOutgoingsListAction: PropTypes.func.isRequired,
  outgoingsList: PropTypes.arrayOf(PropTypes.object),
  addOutgoingRecordAction: PropTypes.func.isRequired,
  deleteOutgoingRecordAction: PropTypes.func.isRequired,
};

OutgoingsPage.defaultProps = {
  outgoingsList: [],
};

const mapStateToProps = ({ outgoings }) => {
  const { outgoingsList } = outgoings;
  return {
    outgoingsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOutgoingsListAction: () => dispatch(getOutgoingsList),
    addOutgoingRecordAction: (date, account, category, value) =>
      dispatch(addOutgoingRecord(date, account, category, value)),
    deleteOutgoingRecordAction: (id) => dispatch(deleteOutgoingRecord(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutgoingsPage);
