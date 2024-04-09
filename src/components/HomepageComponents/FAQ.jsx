import React from "react";
import { Button, Group, Text, Collapse, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const FAQ = () => {
  // const [opened, { toggle }] = useDisclosure(false);
  return (
    <div className="flex items-center justify-center mx-auto md:h-[918px] max-sm:py-12 max-sm:px-5">
      <h1 className="text-2xl md:text-[44px] text-[#4B5563] font-bold">
        Frequently asked questions
      </h1>
     
        <Box maw={400} mx="auto">
          <Group justify="center" mb={5}>
            {/* <Button onClick={toggle}>Toggle content</Button> */}
          </Group>

          <Collapse >
            <Text>{/* ... content */}</Text>
          </Collapse>
     
      </Box>
    </div>
  );
};

export default FAQ;
