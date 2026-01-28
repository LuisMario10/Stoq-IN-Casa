import AppLayoutStyles from './AppLayout.module.css'

export const AppLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <div className={AppLayoutStyles.appLayoutContainer}>
            { children }
        </div>
    );
}