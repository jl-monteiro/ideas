import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { KeyRound, Mail, OctagonAlert, User } from "lucide-react";
import { authClient } from "../../lib/auth-client";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { data: session } = authClient.useSession();
  
  if (session) {
    navigate("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const rsp = await authClient.signUp.email({ name, email, password });
      if (rsp?.error) {
        if (rsp.error.status === 422) {
          setError("E-mail já cadastrado ou dados inválidos.");
          return;
        }
        setError(rsp.error.message || "Erro ao criar conta");
        return;
      }

      navigate("/");
    } catch (err) {
      setError("Ocorreu um erro inesperado. Tente novamente.");
      console.error("Signup falhou: ", err);
    } finally {
      setLoading(false);
    }
  };

 

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold justify-center py-2">
            Criar conta
          </h2>

          <form onSubmit={handleSubmit} className="fieldset p-4 space-y-2">
            <div>
              <label className="input validator flex items-center gap-2 w-full">
                <User />
                <input
                  type="text"
                  required
                  placeholder="Nome de usuário"
                  pattern="[A-Za-z][A-Za-z0-9\-]*"
                  minLength={3}
                  maxLength={30}
                  title="Use apenas letras e números"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading}
                />
              </label>
              <p className="validator-hint hidden text-sm">
                Entre 3 e 30 caracteres apenas letras e números
              </p>
            </div>

            <div>
              <label className="input validator flex items-center gap-2 w-full">
                <Mail />
                <input
                  type="email"
                  placeholder="email@exemplo.com"
                  required
                  title="Informe um e-mail válido"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </label>
              <p className="validator-hint hidden text-sm">
                Informe um endereço de e-mail válido
              </p>
            </div>

            <div>
              <label className="input validator flex items-center gap-2 w-full">
                <KeyRound />
                <input
                  type="password"
                  required
                  placeholder="Senha"
                  minLength={8}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="A senha deve conter no mínimo 8 caracteres, incluindo letra maiúscula, minúscula e número"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
              </label>
              <p className="validator-hint hidden text-sm">
                Senha deve conter 8 caracteres, maiúsculas, minúsculas e um
                número
              </p>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full"
            >
              {loading ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                "Cadastrar"
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

          <div className="text-center">
            <span className="text-sm">Já possui uma conta? </span>
            <Link
              to="/login"
              className="link link-primary text-sm font-semibold"
            >
              Faça login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
