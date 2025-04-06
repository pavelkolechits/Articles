import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './Input.module.scss'
import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef } from 'react';


type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly' | 'max'>
type TextAlign = 'center' | 'start' | 'end'

interface InputProps extends HTMLInputProps {
    className?: string;
    max?: boolean;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    type?: React.HTMLInputTypeAttribute,
    readonly?: boolean
    text?: string;
    textAlign?: TextAlign
}



export const Input = memo((props: InputProps) => {

    const { className,
        textAlign = 'center',
        text,
        max,
        value,
        autofocus,
        type = 'text',
        onChange,
        readonly,
        ...otherProps
    } = props
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    

    return (
        <div
            data-testid='input-wrap'
            className={classNames(cls.InputWrap, { [cls.readonly]: readonly, [cls.max]: max }, [])}>

            {text &&
                <div
                    data-testid='text'
                    className={classNames(cls.text, {}, [cls[textAlign]])}
                >
                    {text}
                </div>}

            <input
                data-testid='input'
                value={value}
                className={
                    classNames(
                        cls.input,
                        { [cls.readonly]: readonly, [cls.max]: max },
                        [className]
                    )
                }
                type={type}
                {...otherProps}
                onChange={onChangeHandler}
                readOnly={readonly}
            />
        </div>
    )
})
