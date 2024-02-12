import { createSlice, configureStore } from '@reduxjs/toolkit'
import dashboardReducer from './reducers/dashboard.reducers'
import courseReducer from './reducers/course.reducers'
import assessmentReducers from './reducers/assessment.reducers'

const initialLoginState = { login: true }

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

export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        dashboard: dashboardReducer,
        course: courseReducer,
        assessment: assessmentReducers
    },
})

export const loginActions = loginSlice.actions