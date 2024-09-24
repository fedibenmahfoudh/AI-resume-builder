import { useContext, useState } from "react";
import { ArrowLeft, ArrowRight, Home, Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PersonalDetail } from "./form/PersonalDetail";
import { Summary } from "./form/Summary";
import { Experience } from "./form/Experience";
import { Education } from "./form/Education";
import { Skills } from "./form/Skills";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ThemeColor } from "./ThemeColor";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export const FormSection = () => {
  const [allowNext, setAllowNext] = useState(false);
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState(1);
  const { id } = useParams();
  // const { resumeInfo, setResumeInfo } = useContext();
  const [openAlert, setOpenAlert] = useState(false);
  // const onNext = () => {};
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <Button onClick={() => setOpenAlert(true)}>
            <Home />
          </Button>
          <AlertDialog open={openAlert}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will Not save Your data .
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setOpenAlert(false)}>
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction onClick={() => navigate("/dashboard")}>
                  Leave
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <ThemeColor />
        </div>
        <div className="flex gap-2">
          {activeForm > 1 && (
            <Button size="sm" onClick={() => setActiveForm(activeForm - 1)}>
              <ArrowLeft />
            </Button>
          )}
          <Button
            className="flex gap-2"
            size="sm"
            onClick={() => setActiveForm(activeForm + 1)}
            disabled={!allowNext}
          >
            Next
            <ArrowRight />
          </Button>
        </div>
      </div>
      {/* Personal Detail  */}
      {activeForm == 1 ? (
        <PersonalDetail setAllowNext={(v) => setAllowNext(v)} />
      ) : activeForm == 2 ? (
        <Summary setAllowNext={(v) => setAllowNext(v)} />
      ) : activeForm == 3 ? (
        <Experience />
      ) : activeForm == 4 ? (
        <Education />
      ) : activeForm == 5 ? (
        <Skills />
      ) : activeForm == 6 ? (
        <Navigate to={`/my-resume/${id}/view`} />
      ) : null}

      {/* Experience  */}

      {/* Educational Detail  */}

      {/* Skills  */}
    </div>
  );
};
