import { useTranslation } from "react-i18next"
import { ImageUploader } from "shared/ui/ImageUploader/ImageUploader"


const AboutPage = () => {
    const { t } = useTranslation('about')
    return (
        <div>
            {t('about page')}
            <ImageUploader/>
        </div>
    )
}
export default AboutPage