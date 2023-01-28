import React from 'react';
import {createRoot} from 'react-dom/client';

const ReactDOM = createRoot(document.getElementById('app'));
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: { props.info }</p>
    </div>
)
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p> This is secret message.</p>}
            <WrappedComponent { ...props }/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAuthentication ? <p> Please login first..</p> : <WrappedComponent { ...props } /> 
            }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info='There are the details.'/>);
ReactDOM.render(<AuthInfo isAuthentication={false} info='There are details.'/>);
