export default function Login(props) {
  function proceed(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={proceed}>
      User Name
      <br />
      <input type="email" />
      <br />
      Password
      <br />
      <input type="password" />
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
