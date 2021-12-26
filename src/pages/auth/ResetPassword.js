import { useEffect, useCallback, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import AuthLayout from "../../components/Authentication/AuthLayout";
import ResetPasswordForm from "../../components/Authentication/ResetPasswordForm";
import Loading from "../../components/Global/Loading";
import { VerifyEmailToken } from "../../services/auth";

const ResetPassword = () => {
  let { token } = useParams();
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const HandleTokenValidation = useCallback(async () => {
    setIsLoading(true);
    const results = await VerifyEmailToken(token);
    if (!results.status) {
      setIsLoading(false);
      navigate("/login");
      toast.error("The recover link has expired or has been corrupted.");
      return;
    }
    setIsLoading(false);
  }, [navigate, token]);

  useEffect(() => {
    HandleTokenValidation();
  }, [HandleTokenValidation]);
  return (
    <div style={{ marginTop: "100px" }}>
      {isLoading === true ? (
        <Loading />
      ) : (
        <AuthLayout>
          <ResetPasswordForm token={token} />
        </AuthLayout>
      )}
    </div>
  );
};

export default ResetPassword;
