import { ArticleImageBlock } from "entities/Article/model/types/article";
import { classNames } from "shared/helpers/classNames/classNames";
import cls from './ArticleImageBlockComponent.module.scss'
import { Text } from "shared/ui/Text/Text";

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = ({ className, block }: ArticleImageBlockComponentProps) => {
    return (
        <div
            className={classNames(
                cls.ArticleImageBlockComponent, {}, [className]
            )}
        >
            <img src={block.src} alt={block.title} className={cls.img} />
            {block.title && (
                <Text
                    text={block.title}
                    align='center'
                />
            )}
        </div>
    );
};