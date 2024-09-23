import { useState } from "react";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PersonalDetail } from "./form/PersonalDetail";
import { Summary } from "./form/Summary";
import { Experience } from "./form/Experience";
import { Education } from "./form/Education";
import { Skills } from "./form/Skills";
import { Link, Navigate, useParams } from "react-router-dom";
import { ThemeColor } from "./ThemeColor";

export const FormSection = () => {
  const [activeForm, setActiveForm] = useState(1);
  const { id } = useParams();
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <Link to={"/dashboard"}>
            <Button>
              <Home />
            </Button>
          </Link>
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
          >
            Next
            <ArrowRight />
          </Button>
        </div>
      </div>
      {/* Personal Detail  */}
      {activeForm == 1 ? (
        <PersonalDetail />
      ) : activeForm == 2 ? (
        <Summary />
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
