import { ReactNode } from "react"

type ErrorMessageProps = {
    children: ReactNode
}

export const ErrorMessage = ({children}: ErrorMessageProps) => {
    return (
        <p className="bg-red-200 p-2 text-red-600 font-bold text-sm text-center rounded-sm">
            {children}
        </p>
    )
}
