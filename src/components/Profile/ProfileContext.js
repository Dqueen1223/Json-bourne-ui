/* eslint-disable import/no-duplicates */
import React from 'react';
import { useReducer, createContext, useContext } from 'react';

const ProfileContext = createContext();

function profileReducer(state, action) {
  switch (action.type) {
    case 'logout': {
      return {
        ...state,
        user: state.user.filter((user) => user.firstName !== action.user.firstName)
      };
    }
    case 'login': {
      return {
        ...state,
        user: [...state.user, action.user]
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ProfileProvider({ children }) {
  const initialUsers = {
    user: [],
    setUsers: () => { }
  };
  const [state, dispatch] = useReducer(profileReducer, initialUsers);

  const value = { state, dispatch };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
}

function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfileDispatch must be used within a profileProvider');
  }
  return context;
}

export { ProfileProvider, useProfile };
