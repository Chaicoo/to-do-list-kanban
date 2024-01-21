import { Bold, Italic, Underline } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ToggleTags({ onTagsChange }) {
  const handleTagChange = (tag) => {
    onTagsChange((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((prevTag) => prevTag !== tag);
      } else {
        return [...prevTags, tag];
      }
    });
  };

  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem
        value="urgente"
        aria-label="Toggle urgent"
        onClick={() => handleTagChange("urgente")}
      >
        Urgente
      </ToggleGroupItem>
      <ToggleGroupItem
        value="refatoracao"
        aria-label="Toggle refatoracao"
        onClick={() => handleTagChange("refatoracao")}
      >
        Refatoração
      </ToggleGroupItem>
      <ToggleGroupItem
        value="feature"
        aria-label="Toggle feature"
        onClick={() => handleTagChange("feature")}
      >
        Feature
      </ToggleGroupItem>
      <ToggleGroupItem
        value="fix"
        aria-label="Toggle fix"
        onClick={() => handleTagChange("fix")}
      >
        Fix
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
