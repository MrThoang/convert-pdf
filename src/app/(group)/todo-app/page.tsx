"use client";
import { useState } from "react";
import { Button } from "../../components/Button";


function Home() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleAddToDo = () => {
    setJobs((prev: any) => {
      if (job !== "" && prev.includes(job) === false) {
        const newJobs = [...prev, job];
        return newJobs;
      }
      return prev;
    });
    setJob("");
  };

  const handleDelete = (item: any) => {
    const deleteJob = jobs.filter((job: any) => job !== item);

    setJobs(deleteJob);
  };

  const handleShowAll = () => {
    setJobs(jobs)
  }

  return (
    <div className="max-w-2xl mx-auto bg-white min-h-screen">
      <div className="relative">
        <h1 className="text-center text-primary text-[100px]">todos</h1>
        <input
          className="pl-[60px] p-4 text-2xl text-gray-400 italic w-full focus-visible:outline-none shadow-2xl"
          placeholder="What needs to be done?"
          type="text"
          value={job}
          autoFocus
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddToDo();
            }
          }}
          onChange={(e) => setJob(e.target.value)}
        />
        <div className="bg-white shadow-2xl z-10 absolute w-full">
          <ul className="">
            {jobs?.map((job: any, index: number) => (
              <li
                className="flex justify-between px-5 p-2 border text-2xl"
                key={index}
              >
                <div>
                  <input type="radio" className="mr-4 text-3xl" value={index} />
                  {job}
                </div>
                <span
                  className="cursor-pointer"
                  onClick={() => handleDelete(job)}
                >
                  x
                </span>
              </li>
            ))}
          </ul>
          {jobs?.length > 0 && (
            <div 
                className="h-[50px]  relative
                before:shadow-shadowPrimary before:absolute before:h-full
                before:inset-x-0 before:top-0 before:overflow-hidden">
                <span className="p-4 text-lg flex justify-between relative z-10 text-gray-500">
                    <span >
                        <span>{jobs?.length} item left</span>
                    </span>
                    <div className="flex gap-x-2">
                        <Button
                            onClick={() => handleShowAll()}
                            classNames="active:border-border-color hover:border-border-color hover:border"
                            title="All"
                         />
                         <Button 
                            classNames="hover:border-border-color hover:border"
                            title="Active"
                         />
                         <Button 
                            classNames="hover:border-border-color hover:border"
                            title="Complete"
                         />
                    </div>
                    <div></div>
                </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
