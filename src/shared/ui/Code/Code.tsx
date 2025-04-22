import { ReactNode, useCallback } from 'react';
import { classNames } from 'shared/helpers/classNames/classNames';
import cls from './Code.module.scss';
import { Button } from '../Button/Button';
import CopyIcon from 'shared/assets/icons/copyIcon.svg'


interface CodeProps {
    className?: string;
    text: string;
}

export const Code = ({ className, text }: CodeProps) => {

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                className={cls.copyBtn}
                theme='clear'
            >
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>{text}</code>
        </pre>

    );
};