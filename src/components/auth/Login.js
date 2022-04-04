import { Card, CardBody, CardHeader } from "reactstrap"
import "./Login.css";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

const Login = () => {
    const { login } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        login(data.email, data.password);
    }

    return (
        <Card className="login-card mx-auto mt-5">
            <CardHeader>
                <h1>Sign In</h1>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label className="mb-2">Email</label>
                        <input {...register("email", { required: true })} type="email" className="form-control" placeholder="Email" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    
                    <div className="mb-3">
                        <label className="mb-2">Password</label>
                        <input {...register("password", { required: true })} type="password" className="form-control" placeholder="password" />
                        {errors.password && <span className="text-danger">This field is required</span>}
                    </div>
                    
                    <button type="submit" className="btn btn-success">Sign In</button>
                </form>
              
                <div className="text-end">
                    <div>
                        Don't have account
                        <Link to='/'>Sign Up</Link>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default Login