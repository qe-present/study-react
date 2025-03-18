import AuthForm from '../components/AuthForm.jsx';
import {redirect} from "react-router";

function AuthenticationPage() {
    return <AuthForm/>;
}

export default AuthenticationPage;

export async function action({request}) {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode') || 'login';
    if (mode !== 'login' && mode !== 'signup') {
        return JSON.stringify({message: 'Invalid mode'}, {status: 422}
        )
    }
    const data = await request.formData();
    const authData = {
        email: data.get('email'),
        password: data.get('password')
    }

    const response = await fetch('http://localhost:8080/' + mode, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(authData)
    })
    if (response.status === 422 || response.status === 401) {
        return response
    }
    if (!response.ok) {
        throw new Response(JSON.stringify({
            message: 'Failed to authenticate'
        }), {
            status: 500
        })
    }
    const responseData = await response.json();
    localStorage.setItem('token', responseData.token);
    const expiration=new Date()
    expiration.setHours(expiration.getHours() +1)
    localStorage.setItem('expiration',expiration.toISOString())

    return redirect('/');
}