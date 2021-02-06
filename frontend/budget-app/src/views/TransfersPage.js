import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTransfersList, addTransferRecord, deleteTransferRecord } from 'actions/transfers';
import DashboardTemplate from 'templates/DashboardTemplate';
import DashboardInnerTemplate from 'templates/DashboradInnerTemplate';

class TransfersPage extends React.Component {
  componentDidMount() {
    const { getTransfersListAction } = this.props;
    getTransfersListAction();
  }

  render() {
    const { transfersList, addTransferRecordAction, deleteTransferRecordAction } = this.props;

    return (
      <DashboardTemplate name="Transfers">
        <DashboardInnerTemplate
          pageType="transfers"
          data={transfersList}
          addAction={addTransferRecordAction}
          deleteAction={deleteTransferRecordAction}
        />
      </DashboardTemplate>
    );
  }
}

TransfersPage.propTypes = {
  getTransfersListAction: PropTypes.func.isRequired,
  transfersList: PropTypes.arrayOf(PropTypes.object),
  addTransferRecordAction: PropTypes.func.isRequired,
  deleteTransferRecordAction: PropTypes.func.isRequired,
};

TransfersPage.defaultProps = {
  transfersList: [],
};

const mapStateToProps = ({ transfers }) => {
  const { transfersList } = transfers;
  return {
    transfersList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTransfersListAction: () => dispatch(getTransfersList),
    addTransferRecordAction: (date, account, category, value) =>
      dispatch(addTransferRecord(date, account, category, value)),
    deleteTransferRecordAction: (id) => dispatch(deleteTransferRecord(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransfersPage);
