import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useContext } from "react";
import { PreviewDetail } from "./preview/PreviewDetail";
import { PreviewSummary } from "./preview/PreviewSummary";
import { PreviewExperience } from "./preview/PreviewExperience";
import { PreviewEducation } from "./preview/PreviewEducation";
import { PreviewSkills } from "./preview/PreviewSkills";

export const PreviewSection = () => {
  const { resumeInfo } = useContext(ResumeInfoContext);
  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{
        borderColor: resumeInfo?.themeColor,
      }}
    >
      {/* Personal Detail  */}
      <PreviewDetail resumeInfo={resumeInfo} />
      {/* Summery  */}
      <PreviewSummary resumeInfo={resumeInfo} />
      {/* Professional Experience  */}
      {resumeInfo?.Experience?.length > 0 && (
        <PreviewExperience resumeInfo={resumeInfo} />
      )}
      {/* Educational  */}
      {resumeInfo?.education?.length > 0 && (
        <PreviewEducation resumeInfo={resumeInfo} />
      )}
      {/* Skills  */}
      {resumeInfo?.skills?.length > 0 && (
        <PreviewSkills resumeInfo={resumeInfo} />
      )}
    </div>
  );
};
