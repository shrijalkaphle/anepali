import { useState } from "react"
import { IDropDown } from "@/types/main"

export const FontWeightDropdown = ({dropdownValue, value, setValue} : IDropDown) => {

    const [showDropdown, setShowDropdown] = useState<boolean>(false)

    const updateSelectedValue = (value: string) => {
        setValue(value)
        setShowDropdown(false)
    }

    return (
        <div className="relative">
            <div className="flex items-center cursor-pointer gap-x-1" onClick={() => setShowDropdown(!showDropdown)}>
                <div className="min-w-11 capitalize text-sm font-semibold text-slate-800">
                    {value ? value : "Any"}
                </div>
                <div>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.1309 4.8135C11.1079 4.97234 11.0383 5.1208 10.931 5.24017L6.871 9.74684C6.76413 9.87404 6.63253 9.97838 6.48426 10.0535C6.33253 10.127 6.16626 10.1657 5.99766 10.1668C5.83933 10.1694 5.68246 10.1376 5.53766 10.0735C5.38133 10.0111 5.24033 9.91558 5.12433 9.79351L1.05761 5.24017C0.949808 5.12032 0.878201 4.97238 0.850995 4.8135C0.828761 4.65259 0.851835 4.48868 0.917641 4.34017C0.981528 4.19042 1.08818 4.06286 1.22428 3.97351C1.36029 3.88743 1.51679 3.8391 1.67765 3.8335H10.3443C10.5053 3.83812 10.662 3.88653 10.7976 3.97351C10.9344 4.0639 11.0431 4.19096 11.111 4.34017C11.1649 4.49239 11.1718 4.65727 11.1309 4.8135Z" fill="#A3A3A3" />
                    </svg>

                </div>
            </div>
            <div className={`fixed top-0 left-0 right-0 bottom-0 z-10 ${showDropdown ? " " : "hidden"}`} onClick={() => setShowDropdown(false)}></div>
            <div className={`absolute rounded-b-lg border border-slate-200 bg-white shadow-[0_2px_8px_0_rgba(0, 0, 0, 0.08)] right-[-12px] w-[204px] top-[26px] z-50 ${showDropdown ? " " : "hidden"}`}>
                <div className="px-2.5 py-2 font-medium text-slate-600 text-sm">Minimum no. of weights</div>
                <div className="grid grid-cols-5 gap-1.5 p-2.5">
                    {
                        dropdownValue.map((_value: string) => <div className={`h-8 w-8 hover:bg-slate-50 cursor-pointer border border-slate-200 rounded-lg flex items-center justify-center text-sm ${_value === value ? "bg-slate-50" : ""}`} key={_value} onClick={() => updateSelectedValue(_value)}>{_value}</div>)
                    }
                </div>
            </div>
        </div>
    )
}

