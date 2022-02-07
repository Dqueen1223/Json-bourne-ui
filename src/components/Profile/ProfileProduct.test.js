/* eslint-disable import/no-duplicates */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import fetchPurchases from './ProfilePageService';
// import fetchProduct from './ProfileProductService';
import ProfilePage from './Profilepage';

// tests: 1. if fetchPurchases returns anything, purchases tab should be rendered
// 2. if fetchProduct returns something product should be rendered
// 3.(maybe in different file) if fetchProductCount>20 page pagination should be viewable.

// test 1
jest.mock('./ProfilePageService');
let container = null;

describe('ProfilePage', () => {
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
  it('Purchase History tab is only shown when there is purchases associated with signed in user', () => {
    fetchPurchases.mockImplementation((email, setPurchases) => {
      setPurchases(['something']);
    });
    render(
      <Router>
        <ProfilePage />
      </Router>,
      container
    );
    // needs to be changed from this point onwards at least
    const name = screen.getByRole('textbox', {
      name: /name/i
    });
    user.type(name, 'Sports Headband');
  });
});
