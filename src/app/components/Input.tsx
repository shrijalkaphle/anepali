interface IInput {
    type: string,
    placeholder: string,
    customClass?: string
}

export const Input = ({type, placeholder, customClass}: IInput) => {
    return (
        <input type={type} placeholder={placeholder} className={`bg-transparent outline-none placeholder:text-neutral-600 ${customClass}`} />
    )
}