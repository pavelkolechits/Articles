import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './CurrencySelect.module.scss'
import { Select, SelectOptions } from 'shared/ui/Select/Select'
import { Currency } from '../model/types/currency'

interface CurrencySelectProps {
    className?: string;

}

const options: SelectOptions[] = [
    { value: Currency.EUR, text: Currency.EUR },
    { value: Currency.RUB, text: Currency.RUB },
    { value: Currency.USD, text: Currency.USD }
]

export const CurrencySelect = (props: CurrencySelectProps) => {

    const { className } = props
    const { t } = useTranslation()

    return <Select label='Currency' options={options} />
}