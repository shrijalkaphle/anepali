export interface IFont {
    name: string
    styles: number
    designer: string
    fontClass: string
    path: string
    source: string
}

export interface IFilterComponent {
    enableVoiceInput: () => void
    isListening: boolean
    previewText: string
    originalText: string
    previewTextChange: (e: any) => void
    fontSize: number
    setFontSize: (value: number) => void
    minimumStyles: number
    setMinimumStyles: (value: number) => void
}


export interface IDropDown {
    dropdownValue: string[]
    value: any
    setValue: (value: any) => void
    isFont?: boolean
}