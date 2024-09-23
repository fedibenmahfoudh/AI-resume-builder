import { Header } from "@/components";
import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ResumePreview } from "./components/ResumePreview";
import { RWebShare } from "react-web-share";
import { useToast } from "@/hooks/use-toast";

export const View = () => {
  const { toast } = useToast();
  const [resumeInfo, setResumeInfo] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getResumeInfo = async () => {
      const resumeRef = doc(db, "userResumes", id);
      const resume = await getDoc(resumeRef);
      if (resume.exists()) {
        setResumeInfo(resume.data());
      } else {
        throw new Error("Resume Data Not Found");
      }
    };
    getResumeInfo();
  }, []);

  const HandleDownload = () => {
    window.print();
  };

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div id="no-print">
        <div className="my-10 mx-10 md:mx-20 lg:mx-36">
          <h2 className="text-center text-2xl font-medium">
            Congrats! Your Ultimate AI generates Resume is ready !{" "}
          </h2>
          <p className="text-center text-gray-400">
            Now you are ready to download your resume and you can share unique
            resume url with your friends and family{" "}
          </p>
          <div className="flex justify-between px-44 my-10">
            <Button onClick={HandleDownload}>Download</Button>

            <RWebShare
              data={{
                text: "Hello Everyone, This is my resume please open url to see it",
                url: `${import.meta.env.VITE_BASE_URL}/my-resume/${id}/view`,
                title:
                  resumeInfo?.firstName +
                  " " +
                  resumeInfo?.lastName +
                  " resume",
              }}
              onClick={() =>
                toast({
                  title: "Validation",
                  description: "Shared Successfully",
                })
              }
            >
              <Button>Share</Button>
            </RWebShare>
          </div>
        </div>
      </div>
      <div className="my-10 mx-10 md:mx-20 lg:mx-36">
        <div id="print-area">
          <ResumePreview />
        </div>
      </div>
    </ResumeInfoContext.Provider>
  );
};
