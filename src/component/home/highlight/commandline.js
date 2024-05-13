"use client";
import { Box, Text, TextField, TextFieldInput } from "@radix-ui/themes";
import React from "react";
import { Icon as IconifyIcon } from "@iconify/react";
const CommandLine = () => {
  return (
    <div className="command-line-inner">
      <Text className="px-21 top-commandline-text">Arogya Care, Bangalore</Text>
      <TextField.Root className="command-search ">
        <TextFieldInput
          placeholder="Type a command or search…"
          className="input-commandline"
        />
      </TextField.Root>
      <Box>
        <Box className="flex-align list-search-item bg-gray selected-item">
          <IconifyIcon icon="icon-park-solid:appointment" color="#3278B2" />
          <Text as="p" className="listfirst-selected">
            Add Appointment
          </Text>
        </Box>
        <Box className="flex-align list-search-item">
          <IconifyIcon icon="gridicons:add" className="commandline-icon" />
          <Text as="p">Add Patient</Text>
        </Box>
        <Box className="flex-align list-search-item">
          <IconifyIcon
            icon="ant-design:signal-filled"
            className="commandline-icon "
          />
          <Text as="p">Cancel Appointment</Text>
        </Box>
        <Box className="flex-align list-search-item">
          <IconifyIcon
            icon="fluent:tag-24-filled"
            className="rotate-icon-tag commandline-icon"
          />
          <Text as="p">Go to charting</Text>
        </Box>
      </Box>
    </div>
  );
};

export default CommandLine;
