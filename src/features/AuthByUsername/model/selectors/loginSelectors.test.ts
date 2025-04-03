import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { getLoginError, getLoginIsLoading, getLoginPassword, getLoginUsername } from './loginSelectors'

describe('loginSelectors', () => {
    const state: Partial<StateSchema> = {
        login: {
            error: 'error',
            username: 'user',
            password: '123',
            isLoading: false
        }
    }
    const emptyState: Partial<StateSchema> = {
        login: undefined
    }

    test('should return error', () => {
        expect(getLoginError(state as StateSchema)).toEqual('error')
    })
    test('should return user', () => {
        expect(getLoginUsername(state as StateSchema)).toEqual('user')
    })
    test('should return password', () => {
        expect(getLoginPassword(state as StateSchema)).toEqual('123')
    })
    test('should return isLoading', () => {
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
    })
    test('get is loading with empty state', () => {
        expect(getLoginIsLoading(emptyState as StateSchema)).toEqual(false)
    })
    test('get error with empty state', () => {
        expect(getLoginError(emptyState as StateSchema)).toEqual(undefined)
    })
    test('get user with empty state', () => {
        expect(getLoginUsername(emptyState as StateSchema)).toEqual('')
    })
    test('get password with empty state', () => {
        expect(getLoginPassword(emptyState as StateSchema)).toEqual('')
    })
})