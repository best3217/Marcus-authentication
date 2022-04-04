import useAuth from "../hooks/useAuth";

const Welcome = () => {
    const { logout, user } = useAuth();

    return (
        <>
            <h1 className="text-center">Hi Marcus</h1>
            <div>
                <div className="text-center mb-4">You were logged in with <strong>{user}</strong></div>
            </div>
            <div className="text-center">
                <button onClick={logout} className="btn btn-danger">Sign Out</button>
            </div>
        </>
    )
}

export default Welcome;