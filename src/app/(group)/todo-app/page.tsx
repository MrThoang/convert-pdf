"use client";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../../components/Button";
import clsx from 'clsx';

function Home() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);
  const [showList, setShowList] = useState<any>([]);
  const [checkList, setCheckList] = useState<any>([])
  const [activeButton, setActiveButton] = useState<number>(1)

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

  useEffect(() => {
    setShowList(jobs)
  },[jobs])

  const handleDelete = (item: any) => {
    const deleteJob = jobs.filter((job: any) => job !== item);
    setJobs(deleteJob);
    setCheckList(deleteJob);
    setShowList(deleteJob);
  };

  const handleShowAll = () => {
    setShowList(jobs)
    setActiveButton(1)
  }
  
  const handleShowActive = () => {
    if(checkList?.length < 1) {
      setShowList(jobs)
    } else {
      let itemActive
      checkList.map((item: any) => {
        itemActive = jobs.filter((value: string) => value !== item)
      })
      setShowList(itemActive);
    }
    setActiveButton(2)
  }

  const handleComplete = () => {
    setShowList(checkList);
    setActiveButton(3)
  }
  const isCheckedItem = useMemo(
    () => (job: string) => checkList?.find((selected: string) => selected === job),
    [checkList]
  )

  const handleSelect = (e: any, item: string) => {
    const { checked } = e.target;
    if(!isCheckedItem(item)) {
      setCheckList([...checkList, item])
    }
    if(!checked) {
      setCheckList(checkList.filter((value: string) => value !== item))
    }
  }
  
  return (
    <div className="max-w-2xl mx-auto bg-white min-h-screen">
      <div className="relative">
        <h1 className="text-center text-primary text-[100px]">todos</h1>
        <input
          className="pl-[60px] p-4 text-2xl text-gray-400 italic w-full focus:outline-none shadow-2xl outline-none rounded-none"
          placeholder="What needs to be done?"
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
          <ul>
            {showList?.map((job: any, index: number) => (
              <li
                className="flex justify-between px-5 p-2 border text-2xl"
                key={index}
              >
                <div className="flex items-center">
                  <input 
                  type="checkbox" 
                  onChange={(e) => handleSelect(e, job)} 
                  checked={isCheckedItem(job)}
                  className="mr-4 w-6 h-6 rounded-full" 
                  value={index} />
                  <p>{job}</p>
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
                            classNames={clsx(`${activeButton === 1 ? "border-border-color" : ''} hover:border-border-color hover:border`)}
                            title="All"
                         />
                         <Button 
                            onClick={() => handleShowActive()}
                            classNames={clsx(`${activeButton === 2 ? "border-border-color" : ''} hover:border-border-color hover:border`)}
                            title="Active"
                         />
                         <Button 
                            onClick={() => handleComplete()}
                            classNames={clsx(`${activeButton === 3 ? "border-border-color" : ''} hover:border-border-color hover:border`)}
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
