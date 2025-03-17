import PageContent from "../components/PageContent.jsx";
import {useRouteError} from "react-router";
import MainNavigation from "../components/MainNavigation.jsx";

export default function ErrorComponent() {
    const error = useRouteError();
    let title='An error occurred';
    let message='something went wrong';
    if(error.status === 500) {
        message=JSON.parse(error.data).message;
    }
    if(error.status === 404) {
        title='Page not found';
        message='The page you are looking for does not exist';
    }

    return (
        <>
        <MainNavigation/>
        <PageContent title={title}>
            <p>{message}</p>
        </PageContent>
        </>
    );
}