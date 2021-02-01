import React from 'react';
import DashboardTemplate from 'templates/DashboardTemplate';
import DashboardInnerTemplate from 'templates/DashboradInnerTemplate';
import axios from 'axios';

class OutgoingsPage extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/outgoings', {
        headers: {
          /* eslint-disable no-undef */
          'auth-token': localStorage.getItem('auth-token'),
        },
      })
      .then((response) => {
        const { outgoings } = response;
        this.setState({ data: outgoings });
        // console.log(data);
      })
      .catch(({ response }) => {
        const { data } = response;
        console.log(data);
      });
  }

  render() {
    const { data } = this.state;

    return (
      <DashboardTemplate name="Outgoings">
        <DashboardInnerTemplate pageType="outgoings" data={data} />
      </DashboardTemplate>
    );
  }
}

export default OutgoingsPage;
