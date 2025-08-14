import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Email() {
  return (
    <div>
      <Label htmlFor="email" className="form-label">
        Email
      </Label>
      <Input id="email" className="form-input" placeholder="user@example.com" />
    </div>
  );
}
