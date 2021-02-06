import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIncomesList, addIncomeRecord, deleteIncomeRecord } from 'actions/incomes';
import DashboardTemplate from 'templates/DashboardTemplate';
import DashboardInnerTemplate from 'templates/DashboradInnerTemplate';

class IncomePage extends React.Component {
  componentDidMount() {
    const { getIncomesListAction } = this.props;
    getIncomesListAction();
  }

  render() {
    const { incomesList, addIncomeRecordAction, deleteIncomeRecordAction } = this.props;

    return (
      <DashboardTemplate name="Income">
        <DashboardInnerTemplate
          pageType="income"
          data={incomesList}
          addAction={addIncomeRecordAction}
          deleteAction={deleteIncomeRecordAction}
        />
      </DashboardTemplate>
    );
  }
}

IncomePage.propTypes = {
  getIncomesListAction: PropTypes.func.isRequired,
  incomesList: PropTypes.arrayOf(PropTypes.object),
  addIncomeRecordAction: PropTypes.func.isRequired,
  deleteIncomeRecordAction: PropTypes.func.isRequired,
};

IncomePage.defaultProps = {
  incomesList: [],
};

const mapStateToProps = ({ incomes }) => {
  const { incomesList } = incomes;
  return {
    incomesList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getIncomesListAction: () => dispatch(getIncomesList),
    addIncomeRecordAction: (date, account, category, value) =>
      dispatch(addIncomeRecord(date, account, category, value)),
    deleteIncomeRecordAction: (id) => dispatch(deleteIncomeRecord(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IncomePage);
