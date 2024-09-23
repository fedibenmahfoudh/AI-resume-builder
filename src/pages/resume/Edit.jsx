import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FormSection } from "./components/FormSection";
import { PreviewSection } from "./components/PreviewSection";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

export const Edit = () => {
  const [resumeInfo, setResumeInfo] = useState();
  const { id } = useParams();
  useEffect(() => {
    const getResumeInfo = async () => {
      const resumeRef = doc(db, "userResumes", id);
      const resume = await getDoc(resumeRef);
      if (resume.exists()) {
        console.log(resume.data());
        setResumeInfo(resume.data());
      } else {
        console.log("no such document");
      }
    };
    getResumeInfo();
  }, []);

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        {/* Form section */}
        <FormSection />
        {/*preview Section  */}
        <PreviewSection />
      </div>
    </ResumeInfoContext.Provider>
  );
};
