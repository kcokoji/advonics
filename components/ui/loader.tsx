import { Loader2 } from "lucide-react";

export default function Loader({ size }: { size: number }) {
  return (
    <div className="flex justify-center items-center">
      <Loader2 className="animate-spin text-primary-foreground" size={size} />
    </div>
  );
}
