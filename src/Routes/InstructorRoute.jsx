import { Navigate, useLocation } from "react-router-dom";
import { Grid } from "react-loader-spinner";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstructor, isInstructorLoading] = useAdmin();
  const location = useLocation();

  if (loading || isInstructorLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Grid
          height="80"
          width="80"
          color="#EF4444"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (user && isInstructor) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
