import { createSlice, configureStore } from '@reduxjs/toolkit'
import dashboardReducer from './reducers/dashboard.reducers'

const initialLoginState = { login: true }
const initialUnitState = { selectedUnitId: null }

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: initialLoginState,
    reducers: {
        login(state) {
            state.login = true;
        },
        logout(state) {
            state.login = false;
        }
    }
})

const unitSlice = createSlice({
    name: 'unitSlice',
    initialState: initialUnitState,
    reducers: {
        openUnit(state, action) {
            state.selectedUnitId = action.payload;
        },
        closeUnit(state) {
            state.selectedUnitId = null;
        }
    }
})

export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        unit: unitSlice.reducer,
        dashboard: dashboardReducer,
    },
})

export const loginActions = loginSlice.actions
export const unitActions = unitSlice.actions