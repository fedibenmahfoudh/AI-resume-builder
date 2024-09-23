import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { db } from "@/firebase/config";
import { useToast } from "@/hooks/use-toast";

import { doc, updateDoc } from "firebase/firestore";
import { LayoutGrid } from "lucide-react";

import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

export const ThemeColor = () => {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#A133FF",
    "#33FFA1",
    "#FF7133",
    "#71FF33",
    "#7133FF",
    "#FF3371",
    "#33FF71",
    "#3371FF",
    "#A1FF33",
    "#33A1FF",
    "#FF5733",
    "#5733FF",
    "#33FF5A",
    "#5A33FF",
    "#FF335A",
    "#335AFF",
  ];

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [selectedColor, setSelectedColor] = useState();
  const { id } = useParams();
  const { toast } = useToast();
  const onColorSelect = async (color) => {
    setSelectedColor(color);
    setResumeInfo({
      ...resumeInfo,
      themeColor: color,
    });
    const data = {
      themeColor: color,
    };
    const resumeRef = doc(db, "userResumes", id);
    await updateDoc(resumeRef, data)
      .then((resp) => {
        toast({
          title: "Validation",
          description: "Details Updated Successfully",
        });
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "You Must change your personal Details",
        });
      });
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex gap-2 font-bold">
          <LayoutGrid />
          Theme
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <h2 className="mb-2 text-sm font-bold">Select Theme Color</h2>
        <div className="grid grid-cols-5 gap-3">
          {colors.map((item, index) => (
            <div
              key={index}
              className={`h-5 w-5 rounded-full cursor-pointer
             hover:border-black border
             ${selectedColor == item && "border border-black"}
             `}
              onClick={() => onColorSelect(item)}
              style={{
                background: item,
              }}
            ></div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
