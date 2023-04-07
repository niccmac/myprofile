import {
  Box,
  AlertDialog,
  useDisclosure,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  Button,
  AlertDialogBody,
  useToast
} from "@chakra-ui/react";

import { useRef, useState } from "react";
import { FaGitSquare, FaLinkedin, FaRegFileAlt } from "react-icons/fa";
import { IoIosCopy } from "react-icons/io";

// TODO alert to notification

import { MdEmail } from "react-icons/md";

export default function Contact() {
  const toast = useToast();
  // Clipboards email
  function copy() {
    var copyText = "nicole.mac0404@gmail.com";
    navigator.clipboard.writeText(copyText);

    toast({
      title: "Copied.",
      description: "Email copied to clipboard.",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "top"
    });
  }

  const contacts = [
    {
      title: "Open my GitHub",
      link: "https://github.com/niccmac",
      icon: <FaGitSquare size="45" color="#b23838" />
    },
    {
      title: "Open my LinkedIn",
      link: "https://www.linkedin.com/in/nicole-maclean/",
      icon: <FaLinkedin size="45" color="#b23838" />
    },
    {
      title: "Open my resume",
      link: "https://www.cakeresume.com/s--JTk4kmJ9lt80lFKgKeCDZg--/nicole-maclean",
      icon: <FaRegFileAlt size="40" color="#b23838" />
    }
  ];
  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        backgroundColor="#FFFFF0"
        padding={4}
      >
        {contacts.map((contact) => {
          return (
            <div title={contact.title}>
              <a href={contact.link} target="blank">
                {contact.icon}
              </a>
            </div>
          );
        })}

        <div title="Copy my email to your clipboard">
          <MdEmail size="45" onClick={copy} color="#b23838" />
        </div>
      </Box>
    </div>
  );
}
