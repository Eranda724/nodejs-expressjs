export default async function Home() {
  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.json();

  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <p>Message from the backend: {data.message}</p>
    </div>
  );
}