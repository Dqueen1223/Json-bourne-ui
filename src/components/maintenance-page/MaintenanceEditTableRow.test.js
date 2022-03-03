import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import user from '@testing-library/user-event';
import EditRow from './MaintenanceEditTableRow';
import MaintenancePageHelper from './MaintenancePageHelper';
import fetchProducts from './MaintenancePageService';
import ViewRow from './MaintenanceViewTableRow';

jest.mock('./MaintenancePageService');
let container = null;

describe('EditRow', () => {
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  const product = {
    id: 1,
    name: 'name',
    sku: 'eee-add-wwo',
    description: 'light',
    demographic: 'Men',
    releasedate: '2021-08-22'
  };
  const errors = {
    name: ''
  };
    //   const product = () => ({

  //   });
  //   it('On submit is only called when all fields pass validation', () => {
  //     fetchProducts.mockImplementation((product, setApiError) => {
  //       setApiError(true);
  //     });
  //     render(
  //       <Router>
  //         <EditRow />
  //       </Router>,
  //       container
  //     );
  //     const name = screen.getByText('textbox', {
  //       name: /fashionable running visor/i
  //     });
  //     user.type(name, 'Sports Headband');
  //   });
  it('Checks if user can type in an editable field', () => {
    fetchProducts.mockImplementation((setProducts, setApiError) => {
      setProducts();
      setApiError(true);
    });
    render(
      <Router>
        <EditRow
          product={product}
          errors={errors}
        />
      </Router>,
      container
    );
    const name = screen.getByRole('textbox', {
      name: /name/i
    });
    user.type(name, 'hi');
  });
});
//   it('On submit is only called when all fields pass validation', () => {
//     fetchProducts.mockImplementation((setProducts, setApiError) => {
//       setProducts();
//       setApiError(true);
//     });
//     render(
//       <Router>
//         <ViewRow
//           product={product}
//         />
//       </Router>,
//       container
//     );
//     screen.getByText('hello', {
//       name: /name/i
//     });
//     screen.getByRole('button');
//   });
