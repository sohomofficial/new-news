import { ChevronRight } from "lucide-react";

export default function Breadcrumb(props: { main: string; sub: string }) {
  return (
    <div className="flex items-center mb-4 gap-x-2 text-sm">
      <span>{props.main}</span>
      <ChevronRight className="h-4 w-4" />
      <span className="font-bold">{props.sub}</span>
    </div>
  );
}
