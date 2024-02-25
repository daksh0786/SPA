import  MainNavigation  from '../components/MainNavigation.js';
import { Outlet, useNavigation } from 'react-router-dom';

export default function RootLayout() {

    const navigation = useNavigation();
    // this shows thes status of the rendering of the link and will be shown on the page where we are going.
    
    return <>
        <MainNavigation />

        <main>
            {navigation.state==='loading' && <p>loading...</p>}
            <Outlet />
        </main>
    </>
}