import { useFormStatus } from "react-dom";


export default function SubmitButton({title}) {
const {pending} = useFormStatus();


    return (
        <button
            type="submit"
            className="border border-white px-6 py-3 text-white rounded-md hover:bg-white hover:text-[#FF1616] bg-transparent transition"
            disabled={pending}
            >{title}
            </button>
    );
}