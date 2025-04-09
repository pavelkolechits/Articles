import { Dispatch } from '@reduxjs/toolkit'
import { loginByEmail } from './loginByEmail'
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

    test('loginByEmail', async () => {
        const userData = { email: 'admin', id: 1 }
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }))
        const action = loginByEmail({ email: '123', password: '123' })


        expect(mockedAxios.post).toHaveBeenCalled()
        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData))
    })
    test('loginByEmail error', async () => {

        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const action = loginByEmail({ email: '123', password: '123' })


       
        expect(dispatch).toHaveBeenCalledTimes(2)
    })

})