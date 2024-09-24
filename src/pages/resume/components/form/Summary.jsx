import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { db } from "@/firebase/config";
import { useToast } from "@/hooks/use-toast";
import { AIChatSession } from "@/service/AIModal";
import { doc, updateDoc } from "firebase/firestore";
import { Brain, LoaderCircle } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const prompt =
  "Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format with random values";
export const Summary = ({ setAllowNext }) => {
  const { toast } = useToast();
  const { id } = useParams();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [summery, setSummery] = useState();
  const [loading, setLoading] = useState(false);
  const [aiGeneratedSummeryList, setAiGeneratedSummeryList] = useState([]);

  useEffect(() => {
    summery &&
      setResumeInfo({
        ...resumeInfo,
        summery: summery,
      });
  }, [summery]);

  const GenerateSummeryAI = async () => {
    setLoading(true);
    const PROMPT = prompt.replace("{jobTitle}", resumeInfo?.jobTitle);
    console.log(PROMPT);
    const result = await AIChatSession.sendMessage(PROMPT);
    console.log(JSON.parse(result.response.text()));
    setAiGeneratedSummeryList(JSON.parse([result.response.text()]));
    setLoading(false);
  };

  // async function onSave(e) {
  //   e.preventDefault();
  //   setLoading(true);
  //   const data = {
  //     summery: summery,
  //   };
  //   const resumeRef = doc(db, "userResumes", id);
  //   await updateDoc(resumeRef, data)
  //     .then((resp) => {
  //       console.log(resp);
  //       enabledNext(true);
  //       setLoading(false);
  //       toast({
  //         title: "Validation",
  //         description: "Details Updated Successfully",
  //       });
  //     })
  //     .catch((error) => {
  //       console.log("error : ", error);
  //       setLoading(false);
  //     });
  // }
  async function onSave(e) {
    e.preventDefault();
    setLoading(true);
    if (e.target.summery === "") {
      setLoading(false);
    } else {
      setLoading(false);
      setAllowNext(true);
    }
  }
  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Summery</h2>
        <p>Add Summery for your job title</p>

        <form className="mt-7" onSubmit={onSave}>
          <div className="flex justify-between items-end">
            <label>Add Summery</label>
            <Button
              variant="outline"
              type="button"
              size="sm"
              className="border-primary text-primary flex gap-2"
              onClick={() => GenerateSummeryAI()}
            >
              {loading ? (
                <>
                  <LoaderCircle className="animate-spin" />
                </>
              ) : (
                <>
                  <Brain className="h-4 w-4" /> Generate from AI
                </>
              )}
            </Button>
          </div>
          <Textarea
            className="mt-5"
            required
            value={summery}
            defaultValue={summery ? summery : resumeInfo?.summery}
            onChange={(e) => setSummery(e.target.value)}
          />
          <div className="mt-2 flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>

      {aiGeneratedSummeryList && (
        <div className="my-5">
          <h2 className="font-bold text-lg">Suggestions</h2>
          {aiGeneratedSummeryList?.map((item, index) => (
            <div
              key={index}
              onClick={() => setSummery(item?.summary)}
              className="p-5 shadow-lg my-4 rounded-lg cursor-pointer"
            >
              <h2 className="font-bold my-1 text-primary">
                Level: {item?.experience_level}
              </h2>
              <p>{item?.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
