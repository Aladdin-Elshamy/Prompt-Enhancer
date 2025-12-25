import toast from "react-hot-toast"

export const handleToast = (msg:string,status:"success" | "error" ) => {
    if(status === 'success'){
        return toast.success(msg)
    }
    if(status === 'error'){
        return toast.error(msg)
    }
}