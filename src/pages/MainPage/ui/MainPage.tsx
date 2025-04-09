import { useTranslation } from "react-i18next"
import { FileUploader } from "shared/ui/FileUploader/FileUploader"



const MainPage = () => {
    const {t} = useTranslation('main')
    return (
        <div>
            {t('main page')}
            <FileUploader/>
        </div>
    )
}

export default MainPage