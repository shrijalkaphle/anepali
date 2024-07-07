import { useState } from "react"
import { IDropDown } from "@/types/main"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

export const Dropdown = ({ dropdownValue, value, setValue, isFont }: IDropDown) => {

    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    if (!isFont) isFont = false

    const updateSelectedValue = (value: string) => {
        setShowDropdown(false)
        setValue(value)
    }

    return (
        <>
            <DropdownMenu >
                <DropdownMenuTrigger className="outline-none">
                    <div className="flex items-center cursor-pointer gap-x-1">
                        <div className="min-w-12 capitalize text-sm font-medium text-foreground">
                            {value} {isFont && <span className="lowercase">px</span>}
                        </div>
                        <Image src="/assets/down.svg" alt="dropdown" width={12} height={12} />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {dropdownValue.map((_value: string) => <DropdownMenuItem key={_value}  className="capitalize" onClick={() => updateSelectedValue(_value)}>{_value}</DropdownMenuItem>)}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

