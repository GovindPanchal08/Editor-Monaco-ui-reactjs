"use client";
import { Box } from "@chakra-ui/react";
import CodeEditor from "@/Component/CodeEditor";

const page = () => {
  return (
    <Box h={"100vh"} bg="#0f0a19" color={"white"}>
      <CodeEditor />
    </Box>
  );
};

export default page;
