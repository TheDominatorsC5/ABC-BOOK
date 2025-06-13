import { useFormStatus } from "react-dom";


export default function SubmitButton({ title, className }) {
    const { pending } = useFormStatus();


    return (
        <button
            type="submit"
            className={className}
            disabled={pending}
        >
            {pending ? "loading..." : title}
        </button>
    );
}