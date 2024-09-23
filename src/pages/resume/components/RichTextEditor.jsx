import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useToast } from "@/hooks/use-toast";
import { AIChatSession } from "@/service/AIModal";
import { Brain, LoaderCircle } from "lucide-react";
import { useContext, useState } from "react";
import {
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnStrikeThrough,
  BtnUnderline,
  Editor,
  EditorProvider,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";

const PROMPT =
  "position title: {positionTitle} , Depends on position title give me 5-7 bullet points for my experience in resume (Please do not add experince level and No JSON array) , give me result in HTML tags";
export const RichTextEditor = ({
  onRichTextEditorChange,
  index,
  defaultValue,
}) => {
  const { toast } = useToast();
  const [value, setValue] = useState(defaultValue);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);
  const GenerateSummeryFromAI = async () => {
    try {
      // Check if position title exists
      if (!resumeInfo?.Experience[index]?.title) {
        toast({ title: "Warning", description: "Please add Position Title" });
        return;
      }
      setLoading(true);

      // Replace position title in the prompt
      const prompt = PROMPT.replace(
        "{positionTitle}",
        resumeInfo.Experience[index].title
      );

      // Send the prompt to the AI session
      const result = await AIChatSession.sendMessage(prompt);

      // Check if the result exists
      if (!result || !result.response) {
        throw new Error("No response from AI.");
      }

      // Extract and clean the response
      const responseText = await result.response.text();
      const cleanedText = responseText
        .replace("[", "")
        .replace("]", "")
        .replace("{", "")
        .replace("}", "");

      setValue(cleanedText);
    } catch (error) {
      // Handle the error
      toast({
        title: "Error",
        description: error.message || "Failed to generate summary from AI",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <label className="text-xs">Summery</label>
        <Button
          variant="outline"
          size="sm"
          onClick={GenerateSummeryFromAI}
          disabled={loading}
          className="flex gap-2 border-primary text-primary"
        >
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <>
              <Brain className="h-4 w-4" /> Generate from AI
            </>
          )}
        </Button>
      </div>
      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onRichTextEditorChange(e);
          }}
        >
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
};
