const UserForm = props => {
  const { handleSubmit, handleChange, user } = props;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}