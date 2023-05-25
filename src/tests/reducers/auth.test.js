import authReducer from '../../reducers/auth';

test ('Should set uid for login', () => {
    const action = {
        type: "LOGIN",
        uid: "abc123"
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
})

test ('Should remove uid for logout', () => {
    const action = {
        type: "LOGOUT"
    };
    const state = authReducer({ uid : 'erwerwerwreetertr' }, action);
    expect(state).toEqual({});
})