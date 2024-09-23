import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { db } from "@/firebase/config";
import { useToast } from "@/hooks/use-toast";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { LoaderCircle } from "lucide-react";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

export const PersonalDetail = () => {
  const { toast } = useToast();
  const { id } = useParams();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState();
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
    console.log(resumeInfo);
  };

  // async function onSave(e) {
  //   e.preventDefault();
  //   setLoading(true);
  //   console.log(formData);
  //   const data = formData;
  //   const resumeRef = doc(db, "userResumes", id);
  //   await updateDoc(resumeRef, data)
  //     .then((resp) => {
  //       console.log(resp);
  //       setLoading(false);
  //       toast({
  //         title: "Validation",
  //         description: "Details Updated Successfully",
  //       });
  //     })
  //     .catch((error) => {
  //       toast({
  //         decription: "You Must change your personal Details",
  //       });
  //       setLoading(false);
  //     });
  // }
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Personal Detail</h2>
      <p>Get Started with the basic information</p>
      <form>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <label className="text-sm">First Name</label>
            <Input
              name="firstName"
              defaultValue={resumeInfo?.firstName}
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <Input
              name="lastName"
              required
              onChange={handleInputChange}
              defaultValue={resumeInfo?.lastName}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <Input
              name="jobTitle"
              required
              defaultValue={resumeInfo?.jobTitle}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Address</label>
            <Input
              name="address"
              required
              defaultValue={resumeInfo?.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <Input
              name="phone"
              required
              defaultValue={resumeInfo?.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <Input
              name="email"
              required
              defaultValue={resumeInfo?.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
