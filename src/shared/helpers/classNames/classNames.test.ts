import { classNames } from "./classNames"


describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass', {}, [])).toBe('someClass')
    })
    test('with only mods', () => {
        expect(classNames('', { mod: true }, [])).toBe(' mod')
    })
    test('with only additional', () => {
        expect(classNames('', {}, ['additional'])).toBe(' additional')
    })
    test('without mods', () => {
        expect(classNames('someClass', {}, ['cls1', 'cls2'])).toBe('someClass cls1 cls2')
    })
    test('without additional', () => {
        expect(classNames('someClass', { mod: true }, [])).toBe('someClass mod')
    })
    test('without first param', () => {
        expect(classNames('', { mod: true }, ['cls'])).toBe(' mod cls')
    })
    test('with all params', () => {
        expect(classNames(
            'someClass',
            {
                ['mod1']: true,
                ['mod2']: false
            },
            ['cls1', 'cls2']
        ))
            .toBe('someClass mod1 cls1 cls2')
    })
    test('with all params and undefine', () => {
        expect(classNames(
            'someClass',
            {
                ['mod1']: true,
                ['mod2']: false,
                mod3: undefined
            },
            ['cls1', 'cls2', undefined]
        ))
            .toBe('someClass mod1 cls1 cls2');
    })
})



