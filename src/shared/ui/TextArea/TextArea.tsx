import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './TextArea.module.scss'
import { ChangeEvent, memo } from 'react';

interface TextAreaProps {
    className?: string;
    max?: boolean;
    value?: string | number;
    onChange?: (value: string) => void;

}

export const TextArea = memo((props: TextAreaProps ) => {

    const { className, value, onChange } = props
    const { t } = useTranslation()

    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={classNames( cls.TextAreaWrap , {}, [className])}>
            <textarea className={cls.textArea} value={value} onChange={onChangeText} />
        </div>
    )
})