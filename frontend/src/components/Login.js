import "../components/AboutUsStyles.css";

function Login() {
    async function getAdmin() {
        return axios.get(`http://127.0.0.1:5000/api/admin`
        ).then(response => {
            return response.data
        }).catch(err => {
            toast.error(`Error al intentar recuperar informacion Admin (${err.message})`)
            return []
        })
    }
  return (
    <div className="about-container">
      <h1>Sobre Nosotros</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <h1>a</h1>
      <p>
        Facilitar la reserva de excursiones y habitaciones haya donde vayas.
      </p>
    </div>
  );
}

export default Login;