import { Header } from "../../../components";

import PageLayoutStyles from "./PageLayout.module.css"

interface IPageLayoutProps {
    pageTitle: string;
    children: React.ReactNode
}

export const PageLayout = ({ children }: IPageLayoutProps) => {
    return (
        <div className={ PageLayoutStyles.pageLayoutContainer }>
            <div>
                <Header />
            </div>
            
            <div>
                { children }
            </div>
        </div>
    )
}

