"use client";
import { useState } from "react";
import Link from "next/link";
import { FileUpload } from "./icon";

export default function Documents() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (e) => {
    const files = e.target.files;
    if (!files) return;

    const acceptedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxSize = 50 * 1024 * 1024; // 50MB in bytes

    const newFiles = Array.from(files)
      .filter((file) => {
        const isAccepted = acceptedTypes.includes(file.type);
        const isSizeValid = file.size <= maxSize;

        if (!isAccepted) {
          alert(`${file.name} is not a supported file type.`);
          return false;
        }

        if (!isSizeValid) {
          alert(`${file.name} is too large. Max file size is 50MB.`);
          return false;
        }

        return true;
      })
      .map((file) => ({
        name: file.name,
        url: URL.createObjectURL(file),
        date: new Date().toLocaleDateString("en-IN"),
      }));

    setUploadedFiles((prev) => [...prev, ...newFiles]);
  };

  return (
    <div className="flex md:flex-row flex-col md:gap-12 gap-6 focus-visible:outline-0">
      <div
        className={`border border-light-gray rounded-lg p-6 md:pb-20 bg-gray-200 text-center h-fit ${
          uploadedFiles.length > 0 ? "w-full" : "md:w-150"
        } `}
      >
        <label className="cursor-pointer block">
          <div className="text-dark-gray mb-2">
            <FileUpload className="md:size-20 size-10 mx-auto" />
            <p className="mt-5 text-base md:text-lg font-semibold">
              <span className="text-green-600">Upload Files</span> or drop files
              here
            </p>
            <p className="md:text-sm text-xs ">
              Only PDF, DOC, DOCX | Max file size 50MB
            </p>
          </div>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileUpload}
            className="hidden"
            multiple
          />
        </label>
      </div>

      {uploadedFiles.length > 0 && (
        <div className=" w-full">
          <h2 className="md:text-2xl text-lg font-bold text-green-400 mb-2">
            Uploaded Files
          </h2>
          <div className="border-t border-light-gray pt-2">
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b border-light-gray"
              >
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-xl">📄</span>
                  <Link
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-green-600 font-semibold hover:underline"
                  >
                    {file.name}
                  </Link>
                </div>
                <span className="text-sm text-green-400">{file.date}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
