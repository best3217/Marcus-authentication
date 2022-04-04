import { Card, CardBody, CardHeader } from "reactstrap"
import "./Login.css";
import { Link } from "react-router-dom";

const Registrator = () => {
    return (
        <Card className="login-card mx-auto mt-5">
            <CardHeader>
                <h1>Sign Up</h1>
            </CardHeader>
            <CardBody>
                <div className="mb-3">
                    <label className="mb-2">First Name</label>
                    <input type="text" className="form-control" placeholder="First Name" />
                </div>
                <div className="mb-3">
                    <label className="mb-2">Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name" />
                </div>
                <div className="mb-3">
                    <label className="mb-2">Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="mb-3">
                    <label className="mb-2">Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm password" />
                </div>

                <div className="text-end">
                    <Link to="login">Already have account</Link>
                    <button className="btn btn-success">Sign Up</button>
                </div>
            </CardBody>
        </Card>
    )
}

export default Registrator