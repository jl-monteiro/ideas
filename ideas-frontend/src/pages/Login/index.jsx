import { KeyRound, OctagonAlert, User } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authClient } from "../../lib/auth-client";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { data: session, isPending } = authClient.useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const rsp = await authClient.signIn.email({ email, password });
      if (rsp?.error) {
        setError("Login ou senha inválidos");
        return;
      }

      navigate("/");
    } catch (err) {
      setError("Ocorreu um erro inesperado. Tente novamente.");
      console.error("Login falhou: ", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!isPending && session) {
      navigate("/");
    }
  }, [session, isPending, navigate]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold justify-center py-2">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="fieldset p-4 space-y-2">
            <div>
              <label className="input flex items-center gap-2 w-full">
                <User />
                <input
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
              </label>
            </div>

            <div>
              <label className="input flex items-center gap-2 w-full">
                <KeyRound />
                <input
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                />
              </label>
              <label className="label py-2">
                <a href="#" className="label-text-alt link link-hover">
                  Esqueceu a senha?
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full"
            >
              {loading ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                "Login"
              )}
            </button>
          </form>
          {error && (
            <div className="alert alert-error">
              <OctagonAlert />
              <span>{error}</span>
            </div>
          )}
          <div className="divider">OU</div>

          {/*<button className="btn btn-outline w-full mb-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Login with Google
          </button>*/}
          <div className="text-center">
            <span className="text-sm">Não tem uma conta? </span>
            <Link
              to="/signup"
              className="link link-primary text-sm font-semibold"
            >
              Registre-se aqui
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
