import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOutgoingsList, addOutgoingRecord } from 'actions/outgoings';
import DashboardTemplate from 'templates/DashboardTemplate';
import DashboardInnerTemplate from 'templates/DashboradInnerTemplate';

class OutgoingsPage extends React.Component {
  componentDidMount() {
    const { getOutgoingsListAction } = this.props;
    getOutgoingsListAction();
  }

  render() {
    const { outgoingsList, addOutgoingRecordAction } = this.props;

    return (
      <DashboardTemplate name="Outgoings">
        <DashboardInnerTemplate
          pageType="outgoings"
          data={outgoingsList}
          addAction={addOutgoingRecordAction}
        />
      </DashboardTemplate>
    );
  }
}

OutgoingsPage.propTypes = {
  getOutgoingsListAction: PropTypes.func.isRequired,
  outgoingsList: PropTypes.arrayOf(PropTypes.object),
  addOutgoingRecordAction: PropTypes.func.isRequired,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutgoingsPage);
