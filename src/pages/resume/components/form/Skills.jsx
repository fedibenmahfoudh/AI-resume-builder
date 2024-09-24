import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { db } from "@/firebase/config";
import { useToast } from "@/hooks/use-toast";
import { Rating } from "@smastrom/react-rating";
import { doc, updateDoc } from "firebase/firestore";
import { LoaderCircle } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "@smastrom/react-rating/style.css";
import { ThemeColor } from "../ThemeColor";

export const Skills = () => {
  const { toast } = useToast();
  const [skillsList, setSkillsList] = useState([
    {
      name: "",
      rating: 0,
    },
  ]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  useEffect(() => {
    resumeInfo?.skills ? setSkillsList(resumeInfo?.skills) : setSkillsList([]);
  }, []);
  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      skills: skillsList,
    });
    console.log(resumeInfo);
  }, [skillsList]);

  const handleChange = (index, name, value) => {
    const newEntries = skillsList.slice();

    newEntries[index][name] = value;
    setSkillsList(newEntries);
  };

  const AddNewSkills = () => {
    setSkillsList([
      ...skillsList,
      {
        name: "",
        rating: 0,
      },
    ]);
  };
  const RemoveSkills = () => {
    setSkillsList((skillsList) => skillsList.slice(0, -1));
  };

  const onSave = async () => {
    setLoading(true);
    const data = {
      jobTitle: resumeInfo?.title || "",
      firstName: resumeInfo?.firstName || "",
      lastName: resumeInfo?.lastName || "",
      email: resumeInfo?.email || "",
      address: resumeInfo?.address || "",
      phone: resumeInfo?.phone || "",
      themeColor: resumeInfo?.themeColor || "",
      skills: resumeInfo?.skills || "",
      Experience: resumeInfo?.Experience || "",
      education: resumeInfo?.education || "",
      summery: resumeInfo?.summery || "",
    };

    const resumeRef = doc(db, "userResumes", id);
    await updateDoc(resumeRef, data)
      .then((resp) => {
        console.log(resp);
        setLoading(false);
        toast({
          title: "Validation",
          description: "Details Updated Successfully",
        });
      })
      .catch((error) => {
        console.log("error : ", error);
        toast({
          title: "Error",
          description: "There is a problem . Please try again",
        });
      });
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Skills</h2>
      <p>Add Your top professional key skills</p>

      <div>
        {skillsList.map((item, index) => (
          <div
            key={index}
            className="flex justify-between mb-2 border rounded-lg p-3 "
          >
            <div>
              <label className="text-xs">Name</label>
              <Input
                className="w-full"
                defaultValue={item.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
              />
            </div>
            <Rating
              style={{ maxWidth: 120 }}
              value={item.rating}
              onChange={(v) => handleChange(index, "rating", v)}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={AddNewSkills}
            className="text-primary"
          >
            + Add More Skill
          </Button>
          <Button
            variant="outline"
            onClick={RemoveSkills}
            className="text-primary"
          >
            - Remove
          </Button>
        </div>
        <Button disabled={loading} onClick={() => onSave()}>
          {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
        </Button>
      </div>
    </div>
  );
};
