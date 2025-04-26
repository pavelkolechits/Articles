import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import cls from './ImageUploader.module.scss'
import { fileURLToPath, URL } from 'url';

interface ImageUploaderProps {
    className?: string;
    onLoadFile?: (file: FormData) => void;
    readonly?: boolean
}

export const ImageUploader = (props: ImageUploaderProps) => {

    const { className, onLoadFile, readonly } = props
    const { t } = useTranslation()
    const [file, setFile] = useState<File | null>(null)

    const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0])
        }
    }

    useEffect(() => {

        if (!file) {
            return
        }
        
        const formData = new FormData()
        formData.append('image', file)
        console.log(file)
        onLoadFile?.(formData)

    }, [file, onLoadFile])

    return (
        <div className={classNames(cls.ImageUploader, {}, [className])}>
            {!file && <label >{t('Choose file to upload')}</label>}
            <input disabled={readonly} type="file" onChange={onChangeHandler} />
        </div>
    )
}