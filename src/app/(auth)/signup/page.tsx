"use client"
import { ChangeEvent, FormEvent, useState } from 'react';
import { Input, InputEmail, PasswordInput } from '@/components/input';
import SchoolIcon from '@mui/icons-material/School';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Swal from "sweetalert2";

export default function RegisterPage() {
    const router = useRouter()
    const [data, setData] = useState({
        fullName: '',
        email: '',
        password: '',
        grade: ''
    })

    async function handleButton(e: any) {
        e.preventDefault()
        console.log("register");
        // await axios({
        //     url: baseUrl + `/student/register`,
        //     method: "POST",
        //     data: { fullName: data.fullName, email: data.email, password: data.password, GradeId: data.grade }
        // }).then(() => {
        //     navigate('/')
        //     Swal.fire({
        //         position: 'top-end',
        //         icon: 'success',
        //         title: 'Success add your comment',
        //         showConfirmButton: false,
        //         timer: 1500
        //     })
        // }).catch(err => {
        //     console.log(err)
        // })
    }

    function handleChange(e: ChangeEvent<HTMLSelectElement>) {
        setData({ ...data, grade: e.target.value })
    }

    return (
        <div className='login-container'>
            <div className='border-container'>
                <div className='login-box register'>
                    <h3>KARYAWAN SIGN UP</h3>
                    <form className='input-container' onSubmit={handleButton}>
                        <div className="dual-input">
                            <Input setState={setData} state={data} value={'fullName'} placeHolder={'Full Name'} />
                            <InputEmail setState={setData} state={data} value={'email'} placeHolder={'Email'} />
                        </div>
                        <PasswordInput strength={true} setState={setData} state={data} value={'password'} placeHolder={'Password'} />

                        <button className='basic-button' type='submit'>Sign Up</button>
                        <p className='sign-up'>Already a user ? <b onClick={() => router.push('/login')}>Sign In</b></p>
                    </form>
                </div>
            </div>
        </div>
    )
}