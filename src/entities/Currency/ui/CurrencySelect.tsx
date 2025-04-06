import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './CurrencySelect.module.scss'
import { Select, SelectOptions } from 'shared/ui/Select/Select'
import { Currency } from '../model/types/currency'
import { memo, useCallback } from 'react'

interface CurrencySelectProps {
    className?: string;
    onChange?: (value: Currency) => void;
    value?: Currency;
    readonly?: boolean

}

const options: SelectOptions[] = [
    { value: Currency.EUR, text: Currency.EUR },
    { value: Currency.RUB, text: Currency.RUB },
    { value: Currency.USD, text: Currency.USD }
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {

    const { className, onChange, value, readonly } = props
    const { t } = useTranslation()

    const onChangeCurency = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])

    return <Select readonly={readonly} value={value} onChange={onChangeCurency} label='Currency' options={options} />
})