import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const backend = import.meta.env.VITE_BACKEND_URL || "";
      const res = await fetch(`${backend}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      e.target.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">Contact</p>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">Start a conversation</h2>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <input required name="name" placeholder="Name" className="bg-transparent border border-white/15 rounded-sm px-4 py-3 text-sm outline-none focus:border-white/40" />
          <input required type="email" name="email" placeholder="Email" className="bg-transparent border border-white/15 rounded-sm px-4 py-3 text-sm outline-none focus:border-white/40" />
          <textarea required name="message" placeholder="Tell us about your project" rows={5} className="bg-transparent border border-white/15 rounded-sm px-4 py-3 text-sm outline-none focus:border-white/40" />
          <button disabled={status==="loading"} className="uppercase tracking-widest text-sm bg-white text-black px-5 py-3 rounded-sm font-semibold disabled:opacity-60">{status==="loading"?"Sending...":"Send message"}</button>
          {status === "success" && <p className="text-green-400 text-sm">Message sent. We’ll get back shortly.</p>}
          {status === "error" && <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  );
}
