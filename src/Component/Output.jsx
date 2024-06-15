"use client";
import { executeCode } from "@/app/api";
import { Box, Text, Button, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

const Output = ({ editorRef, language }) => {
  const toast = useToast();
  const [output, setoutput] = useState(null);
  const [isloading, setisloading] = useState(false);
  const [err, seterr] = useState(false);
  const runcode = async () => {
    const sourcecode = editorRef.current.getValue();

    if (!sourcecode) return;
    try {
      setisloading(true);
      const { run: result } = await executeCode(language, sourcecode);
      setoutput(result.output.split("\n"));
      result.stderr ? seterr(true) : seterr(false);
      console.log(result.output);
    } catch (error) {
      toast({
        title: "An Error",
        description: error.message || "unable to run code",
        status: "error",
      });
    } finally {
      setisloading(false);
    }
  };
  return (
    <Box id="output" w="50%">
      <Box id="boxop" display={"flex"} gap={3} mt={2}>
        <Text textColor="white" mb={2} mt={2} fontSize={"lg"}>
          Output
        </Text>
        <Button
          isLoading={isloading}
          variant="outline"
          colorScheme="green"
          mb={4}
          onClick={runcode}
        >
          Run Code
        </Button>
      </Box>
      <Box
        height="75vh"
        p={2}
        textColor={"white"}
        border="1px solid"
        borderRadius={4}
        color={err ? "red.500" : ""}
        borderColor={err ? "red.500" : "gray.700"}
      >
        {output
          ? output.map((item, i) => <Text textColor={"white"} key={i}>{item}</Text>)
          :<Text textColor={"white"}>Run the Code</Text>}
      </Box>
    </Box>
     
  );
};

export default Output;
