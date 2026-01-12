import React from "react";
import { Plus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";

export default function AddNewButton({ href, toolTipText }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button asChild variant={"outline"} size={"sm"}>
            <a href={href}>
              <Plus className="w-4 h-4" />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{toolTipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
