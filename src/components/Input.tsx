interface IInput {
    type: string,
    placeholder: string,
    customClass?: string
    value: string
    onChange: (e: any) => void
}

export const Input = ({type, placeholder, customClass, value, onChange}: IInput) => {
    return (
        <input type={type} placeholder={placeholder} className={`bg-transparent outline-none placeholder:text-slate-600 ${customClass}`} value={value} onChange={onChange}/>
    )
}