import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './CountrySelect.module.scss'
import { Select, SelectOptions } from 'shared/ui/Select/Select'
import { Country } from '../model/types/country'
import { memo, useCallback } from 'react'


type TextAlign = 'start' | 'center' | 'end'

interface CountrySelectProps {
    className?: string;
    onChange?: (value: Country) => void;
    value?: Country;
    readonly?: boolean
    textAlign?: TextAlign
}

const options: SelectOptions<Country>[] = [
    { value: Country.Armenia, text: Country.Armenia },
    { value: Country.Belarus, text: Country.Belarus },
    { value: Country.Kazakhstan, text: Country.Kazakhstan },
    { value: Country.Russia, text: Country.Russia },
    { value: Country.Ukraine, text: Country.Ukraine }
]

export const CountrySelect = memo((props: CountrySelectProps) => {

    const { className, onChange, value, readonly, textAlign } = props
    const { t } = useTranslation('profile')

    const onChangeCountry = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    return <Select
        textAlign={textAlign}
        readonly={readonly}
        value={value}
        onChange={onChangeCountry}
        label={t('country')}
        options={options} />

})