import { collection, getDocs, query, where } from "firebase/firestore";
import { AddResume } from "./components/AddResume";
import { db } from "@/firebase/config";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { ResumeCardItem } from "./components/ResumeCardItem";

export const Dashboard = () => {
  const [resumes, setResumes] = useState([]);
  const [toggleDelete, setToggleDelete] = useState(false);
  const userResumeRef = collection(db, "userResumes");
  const { user } = useUser();
  useEffect(() => {
    async function getResumes() {
      const q = query(
        userResumeRef,
        where("userEmail", "==", user?.primaryEmailAddress?.emailAddress)
      );
      const data = await getDocs(q);
      setResumes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getResumes();
  }, [user?.primaryEmailAddress?.emailAddress, userResumeRef, toggleDelete]);
  return (
    <div className="max-w-screen-xl p-10 md:px-20 lg:px-3">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p className="mb-8">Start Creating AI resume to your next Job Role</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <AddResume />
        {resumes.length > 0
          ? resumes.map((resume, index) => (
              <ResumeCardItem
                resume={resume}
                key={index}
                refreshData={setToggleDelete}
              />
            ))
          : [1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className="h-[280px] rounded-lg bg-slate-200 animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
};
