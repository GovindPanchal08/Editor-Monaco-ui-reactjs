"use client";
import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { Box, Button, HStack } from "@chakra-ui/react";
import LanguageSelect from "./LanguageSelect";
import { CODE_SNIPPETS } from "@/app/constant";
import Output from "./Output";
import Webeditor from "./Web/Webeditor";
const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setvalue] = useState("");
  const [language, setlanguage] = useState("javascript");
  const [isweb, setisweb] = useState(false);
  const handleisweb = () => {
    setisweb(!isweb);
  };
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setlanguage(language);
    setvalue(CODE_SNIPPETS[language]);
  };
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Button onClick={handleisweb} m={2} w={120}>
        Web--
      </Button>
      {!isweb ? (
        <HStack id="box" spacing={5}>
          <Box id="editorbox" w="50%">
            <LanguageSelect language={language} onSelect={onSelect} />
            <Editor
              id="editor"
              height="75vh"
              theme="vs-dark"
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              value={value}
              onChange={(value) => setvalue(value)}
              onMount={onMount}
            />
          </Box>
          <Output editorRef={editorRef} language={language} />
        </HStack>
      ) : <Webeditor/>}
    </Box>
  );
};

export default CodeEditor;
