import { ArticleTextBlock } from "entities/Article/model/types/article";
import { classNames } from "shared/helpers/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import cls from './ArticleTextBlockComponent.module.scss'

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = ({ className, block }: ArticleTextBlockComponentProps) => {


    const splitParagraph = block.text.replace('<br/>', '\n')


    return (
        <div
            className={classNames(cls.ArticleTextBlockComponent, {}, [
                className,
            ])}
        >
            {block.title && (
                <Text
                    title={block.title}
                    className={cls.title}
                />
            )}
            <Text
                text={splitParagraph}
                className={cls.paragraph}
            />
        </div>
    );
}