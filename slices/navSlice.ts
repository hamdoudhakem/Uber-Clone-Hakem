import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootStateType } from '../store'

export interface NavigationState {
  origin: string,
  destination: string,
  travelTimeInformation: any,
}

const initialState: NavigationState = {
  origin: '',
  destination: '',
  travelTimeInformation: null,
}

export const navigationSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setOrigin, setDestination, setTravelTimeInformation } = navigationSlice.actions;

export default navigationSlice.reducer;

//Selectors
export const selectOrigin = (state: RootStateType) => state.nav.origin;
export const selectDestination = (state: RootStateType) => state.nav.destination;
export const selectTravelTimeInformation = (state: RootStateType) => state.nav.travelTimeInformation;