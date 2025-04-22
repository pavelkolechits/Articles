import React from 'react';
import { classNames } from 'shared/helpers/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>
    inverted?: boolean;
}


export const Icon = (
    props: IconProps,
) => {
    const {
        className, inverted, Svg, ...otherProps
    } = props;
    return (
        <Svg
            {...otherProps}
            className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
    );
};