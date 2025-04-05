import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './CountrySelect.module.scss'
import { Select, SelectOptions } from 'shared/ui/Select/Select'
import { Country } from '../model/types/country'

interface CountrySelectProps {
    className?: string
}

const options: SelectOptions[] = [
    { value: Country.Armenia, text: Country.Armenia },
    { value: Country.Belarus, text: Country.Belarus },
    { value: Country.Kazakhstan, text: Country.Kazakhstan },
    { value: Country.Russia, text: Country.Russia },
    { value: Country.Ukraine, text: Country.Ukraine }
]

export const CountrySelect = (props: CountrySelectProps) => {

    const { className } = props
    const { t } = useTranslation()

    return <Select label="Country" options={options} />


}