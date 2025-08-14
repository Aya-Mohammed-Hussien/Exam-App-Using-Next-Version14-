import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FirstName() {
  return (
    <div>
      <Label htmlFor="last-name" className="form-label">
        First name
      </Label>
      <Input id="first-name" className="form-input" placeholder="Ahmed" />
    </div>
  );
}
