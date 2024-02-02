import { Link } from "@remix-run/react";
import homeStyles from "~/styles/home.css";

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

export function links() {
  return [...(homeStyles ? [{ rel: "stylesheet", href: homeStyles }] : [])];
}
