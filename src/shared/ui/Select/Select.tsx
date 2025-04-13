import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './Select.module.scss'
import { Input } from '../Input/Input';
import { ChangeEvent, memo, useCallback, useMemo, useState } from 'react';
import { Country } from 'entities/Country';

export interface SelectOptions {
    text: string;
    value: string
}

export type TextAlign = 'center' | 'start' | 'end'

interface SelectProps {
    className?: string;
    label?: string;
    textAlign?: TextAlign;
    readonly?: boolean;
    options?: SelectOptions[];
    value?: string;
    onChange?: (value: string) => void
}

export const Select = (props: SelectProps) => {

    const { className, label, textAlign = 'center', readonly, options, value, onChange } = props
    const { t } = useTranslation()

    const optionList = useMemo(() => {
        return options?.map((opt) =>
            <option 
                key={opt.value}
                className={cls.option}
                value={opt.value}
            >
                {opt.text}
            </option>)
    }, [options])

    const onCangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }


    return (
        <div className={classNames(cls.SelectWrap, {}, [className])}>
            {label &&
                <div
                    className={classNames(cls.label, { }, [cls[textAlign]])}
                >
                    {label}
                </div>}
            <select
                value={value}
                onChange={onCangeHandler}
                disabled={readonly}
                className={cls.select}
            >
                {optionList}
            </select>
        </div>
    )
}