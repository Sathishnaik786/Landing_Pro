
import { useState } from "react";

const LeadCaptureDemo = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <form
      className="flex flex-col gap-3 bg-muted p-6 rounded-xl border border-border shadow"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 2000);
        setEmail("");
      }}
    >
      <label htmlFor="demo-email" className="font-medium mb-1 text-left">
        Your Email
      </label>
      <input
        id="demo-email"
        className="rounded-md border border-input px-4 py-2 focus:ring-2 focus:ring-blue-300 outline-none text-base"
        placeholder="you@yourcompany.com"
        value={email}
        type="email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition hover:scale-105"
        disabled={sent}
      >
        {sent ? "Submitted!" : "Sign Up for Updates"}
      </button>
    </form>
  );
};
export default LeadCaptureDemo;
