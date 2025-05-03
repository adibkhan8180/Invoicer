import { signOut } from "../login/utils/auth";
import { requireUser } from "../login/utils/hooks";

export default async function DashboardRoute() {
  const session = await requireUser();
  return (
    <div>
      <h1>Dashboard</h1>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
}
