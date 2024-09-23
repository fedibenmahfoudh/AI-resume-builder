import { Loader2, PlusSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/config";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export const AddResume = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState();
  const [loading, setLoading] = useState();
  const { user } = useUser();
  const resumes = collection(db, "userResumes");
  async function onCreate() {
    const data = {
      title: resumeTitle,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
    };
    addDoc(resumes, data).then(
      (resp) => {
        console.log(resp);
        if (resp) {
          setLoading(false);
        }
      },
      (error) => {
        console.log(error);
        setLoading(false);
      }
    );
    setOpenDialog(false);
  }

  return (
    <div>
      <div
        onClick={() => setOpenDialog(true)}
        className="p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed"
      >
        <PlusSquare />
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <p>Add Title for your new resume </p>
              <Input
                name="title"
                className="my-2"
                placeholder="Ex . Full Stack resume"
                onChange={(e) => setResumeTitle(e.target.value)}
              />
            </DialogDescription>
            <div className="flex justify-end gap-5">
              <Button
                variant="ghost"
                onClick={() => {
                  setOpenDialog(false);
                }}
              >
                Cancel
              </Button>
              <Button
                variant="default"
                disabled={!resumeTitle || loading}
                onClick={() => onCreate()}
              >
                {loading ? <Loader2 className="animate-spin" /> : "Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
