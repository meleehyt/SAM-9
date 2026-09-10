import { createFileRoute } from "@tanstack/react-router";
import { CaseApp } from "@/components/case-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <CaseApp />;
}
