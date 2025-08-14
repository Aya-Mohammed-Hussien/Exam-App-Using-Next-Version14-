import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Username() {
  return (
    <div>
      <Label htmlFor="username" className="form-label">
        Username
      </Label>
      <Input id="username" className="form-input" placeholder="user123" />
    </div>
  );
}
