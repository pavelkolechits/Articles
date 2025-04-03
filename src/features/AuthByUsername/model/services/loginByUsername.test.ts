import { Dispatch } from '@reduxjs/toolkit'
import { loginByUsername } from './loginByUsename'
import axios from 'axios'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { userActions } from 'entities/User'


jest.mock('axios')
const mockedAxios = jest.mocked(axios)

describe('loginByUsername', () => {
    let dispatch: Dispatch
    let getState: () => StateSchema

    beforeEach(() => {
        dispatch = jest.fn()
        getState = jest.fn()
    })

    test('loginByUsername', async () => {
        const userData = { username: 'admin', id: "1" }
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }))
        const action = loginByUsername({ username: '123', password: '123' })
        const result = await action(dispatch, getState, undefined)

        expect(mockedAxios.post).toHaveBeenCalled()
        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData))
    })
    test('loginByUsername error', async () => {

        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const action = loginByUsername({ username: '123', password: '123' })
        const result = await action(dispatch, getState, undefined)

       
        expect(dispatch).toHaveBeenCalledTimes(2)
    })

})