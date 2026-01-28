import PageLayoutStyles from "./PageLayout.module.css"

interface IPageLayoutProps {
    children: React.ReactNode
}

export const PageLayout = ({ children }: IPageLayoutProps) => {
    return (
        <div className={PageLayoutStyles.pageLayoutContainer}>
            { children }
        </div>
    )
}