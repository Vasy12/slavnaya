import React, { Component } from 'react';
import { withRouter }       from 'react-router';
import { getUsers }         from '../../api/admin.js';

class Index extends Component {

  render () {
    return (
      <>
        <h1>Home Page!</h1>
        <button onClick={() => {
          getUsers()
            .then( ({ data }) => {
              console.table( data );
            } );
        }}>load users
        </button>
      </>
    );
  }
}

export default withRouter( Index );