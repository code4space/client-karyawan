'use client'
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSelector } from 'react-redux'
import { getPokemon } from '@/store/actions/fetchPokemon'
import { useAppDispatch } from "@/store/store"


export default function Page() {
    const pokemon = useSelector((state:any) => {
        return state.PokemonReducer.pokemon
    })
    const dispatch = useAppDispatch()
    const router = useRouter()
    function handleClick() {
        router.push('/')
    }

    useEffect(() => {
        dispatch(getPokemon())
    }, [])
    console.log(pokemon)
    return (
        <h1 onClick={handleClick} style={{ cursor: 'pointer' }}>Hello mother father</h1>
    )
}