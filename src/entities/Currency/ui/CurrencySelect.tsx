import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './CurrencySelect.module.scss'
import { Select, SelectOptions } from 'shared/ui/Select/Select'
import { Currency } from '../model/types/currency'
import { memo, useCallback } from 'react'

type TextAlign = 'center' | 'start' | 'end'


interface CurrencySelectProps {
    className?: string;
    onChange?: (value: Currency) => void;
    value?: Currency;
    readonly?: boolean;
    textAlign?: TextAlign

}

const options: SelectOptions<Currency>[] = [
    { value: Currency.EUR, text: Currency.EUR },
    { value: Currency.RUB, text: Currency.RUB },
    { value: Currency.USD, text: Currency.USD }
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {

    const { className, onChange, value, readonly, textAlign } = props
    const { t } = useTranslation('profile')

    const onChangeCurency = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])

    return <Select
        textAlign={textAlign}
        readonly={readonly}
        value={value}
        onChange={onChangeCurency}
        label={t('currency')}
        options={options} />
})