import { Editor } from "@monaco-editor/react";
import React, { useEffect, useState } from "react";

const files = {
  "script.js": {
    name: "script.js",
    language: "javascript",
    value: "// Enter your JavaScript code here",
  },
  "style.css": {
    name: "style.css",
    language: "css",
    value: "/* Enter your CSS code here */",
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: "<!-- Enter your HTML code here -->",
  },
};

const Webeditor = () => {
  const [fileName, setFileName] = useState("script.js");
  const [fileContent, setFileContent] = useState(files[fileName].value);
  const [iframeContent, setIframeContent] = useState("");

  const Runcode = () => {
    const newIframeContent = `
    <html>
      <head>
        <style>${files["style.css"].value}</style>
      </head>
      <body>${files["index.html"].value}</body>
      <script>${files["script.js"].value}</script>
    </html>
  `;
    setIframeContent(newIframeContent);
  };
  useEffect(() => {
    Runcode();
  }, [fileName]);

  const handleFileChange = (file) => {
    setFileName(file);
    setFileContent(files[file].value);
  };

  const handleCodeChange = (newCode) => {
    setFileContent(newCode);
    files[fileName].value = newCode; // Update the value in files object
  };

  return (
    <div className="web1">
      <div className="WebEditor">
        <div className="btnweb">
          {Object.keys(files).map((file) => (
            <button
              key={file}
              className="btn1"
              disabled={fileName === file}
              onClick={() => handleFileChange(file)}
            >
              {file}
            </button>
          ))}
        </div>

        <Editor
          id="Ed"
          height="80vh"
          theme="vs-dark"
          value={fileContent}
          language={files[fileName].language}
          onChange={handleCodeChange}
        />
      </div>
      <div id="WebOutput">
        <button onClick={Runcode}>Run</button>
        <iframe id="Iframe" title="Output" srcDoc={iframeContent} />
      </div>
    </div>
  );
};

export default Webeditor;
