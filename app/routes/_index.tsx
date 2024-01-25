import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main id="content">
      <h1>notesssss </h1>
      <p>Try our noteeesss</p>
      <p id="cta">
        <Link to="/notes">Try now</Link>
      </p>
    </main>
  );
}
