import { useAuth } from "@bundly/ic-react";

export default function LoginButton() {
    const { connect } = useAuth();

    return (
        <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={connect}
        >
            Login
        </button>
    );
}