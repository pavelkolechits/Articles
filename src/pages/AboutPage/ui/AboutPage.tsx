import { useEffect } from "react"
import { useTranslation } from "react-i18next"


const AboutPage = () => {
    const {t} = useTranslation('about')
    useEffect(() => {
        throw new Error()
    },[])
    return (
        <div>{t('about page')}</div>
    )
}
export default AboutPage