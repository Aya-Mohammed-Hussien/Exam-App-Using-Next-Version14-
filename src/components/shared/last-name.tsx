import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LastName() {
  return (
    <div>
      <Label htmlFor="last-name" className="form-label">
        Last name
      </Label>
      <Input id="last-name" className="form-input" placeholder="Abdullah" />
    </div>
  );
}
