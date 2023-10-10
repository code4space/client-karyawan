'use client'
import { InputEmail, PasswordInput } from '@/components/input';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function Page() {
    const router = useRouter()
    const [data, setData] = useState({
        email: '',
        password: '',
    })


    function login(e: FormEvent<HTMLFormElement>) {
        console.log("login");
    }
    return (
        <div className='login-container'>
            <div className='border-container'>
                <div className='login-box'>
                    <h3>KARYAWAN SIGN IN</h3>
                    <form className='input-container' onSubmit={login}>

                        <InputEmail setState={setData} state={data} value={'email'} placeHolder={'Email'} />
                        <PasswordInput setState={setData} state={data} value={'password'} placeHolder={'Password'} strength={true} />
                        {/* <p className='sign-up'>Already a user ? <b>Sign In</b></p> */}

                        <button className='basic-button' type='submit'>Sign in</button>
                        <p className='sign-up'>New user ? <b onClick={() => router.push('/signup')}>Sign Up</b></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
