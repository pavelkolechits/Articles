import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './Select.module.scss'
import { Input } from '../Input/Input';
import { ChangeEvent, memo, useCallback, useMemo, useState } from 'react';
import { Country } from 'entities/Country';

export interface SelectOptions<T> {
    text: string;
    value: T
}

export type TextAlign = 'center' | 'start' | 'end'

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    textAlign?: TextAlign;
    readonly?: boolean;
    options?: SelectOptions<T>[];
    value?: T;
    onChange?: (value: T) => void
}

export const Select =  <T extends string>(props: SelectProps<T>) => {

    const { className, label, textAlign = 'center', readonly, options, value , onChange } = props
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
        onChange?.(e.target.value as T)
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