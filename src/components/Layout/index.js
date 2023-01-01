import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
    return( 
    <div className="App">
        <Sidebar />
        <div className="page">
            <span class="tags html-start">&lt;html&gt;</span>
            <br/>
            <span className='tags top-tags'>&lt;body&gt;</span>
            <Outlet/>
            <span className='tags bottom-tags'>
            &lt;body&gt;
            <br/>
            <span className='bottom-tag-html'>&lt;/html&gt;</span>
            </span>
        </div>
    </div>
    )
}

export default Layout